#include <stdlib.h>
#include <stdio.h>
#include <Windows.h>
#include <Tchar.h>

HANDLE wHnd;    // Handle to write to the console.
HANDLE rHnd;    // Handle to read from the console.

void FreezeWindow() {
    // Disable the window's ability to be resized:
    HWND consoleWindow = GetConsoleWindow(); // Get handle to the console window
    // Remove the sizing border and maximize button
    LONG style = GetWindowLong(consoleWindow, GWL_STYLE);
    style &= ~(WS_SIZEBOX | WS_MAXIMIZEBOX);
    SetWindowLong(consoleWindow, GWL_STYLE, style);

    // Apply the changes
    SetWindowPos(consoleWindow, nullptr, 0, 0, 0, 0,
        SWP_NOMOVE | SWP_NOSIZE | SWP_NOZORDER | SWP_FRAMECHANGED);
}
void SetConsoleSize(HANDLE hConsole, int width, int height) {
    // Create a COORD to hold the buffer size:
    COORD bufferSize = { (SHORT)width, (SHORT)height };
	SetConsoleScreenBufferSize(hConsole, bufferSize);
 
    // Set up the required window size:
    SMALL_RECT windowSize = { 0, 0, (SHORT)(width - 1), (SHORT)(height - 1) };

    // Change the console window size:
    SetConsoleWindowInfo(hConsole, TRUE, &windowSize);

}

int _tmain(int argc, _TCHAR* argv[]) {
    // Set up the handles for reading/writing:
    wHnd = GetStdHandle(STD_OUTPUT_HANDLE);
    rHnd = GetStdHandle(STD_INPUT_HANDLE);

    // Set the window and buffer size
    SetConsoleSize(wHnd, 80, 50);
    system("mode con: cols=80 lines=50");

    // Change the window title:
    SetConsoleTitle(TEXT("Win32 Console Control Demo"));
    FreezeWindow(); 
    // Set up the character buffer:
    CHAR_INFO consoleBuffer[80 * 50];

    // We'll fill the console buffer with random data:
    for (int y = 0; y < 50; ++y) {
        for (int x = 0; x < 80; ++x) {

            // An ANSI character is in the range 0-255,
            // so use % to keep it in this range.
            consoleBuffer[x + 80 * y].Char.AsciiChar = rand() % 256;

            // The colour is also in the range 0-255,
            // as it is a pair of 4-bit colours.
            consoleBuffer[x + 80 * y].Attributes = rand() % 256;
        }
    }

    // Set up the positions:
    COORD charBufSize = { 80,50 };
    COORD characterPos = { 0,0 };
    SMALL_RECT writeArea = { 0,0,79,49 };

    // Write the characters:
    WriteConsoleOutputA(wHnd, consoleBuffer, charBufSize, characterPos, &writeArea);	
    getchar(); // pauses the screen so we can see the result
	return 0;
}