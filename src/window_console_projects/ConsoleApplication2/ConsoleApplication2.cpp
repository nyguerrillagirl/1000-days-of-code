#include <stdlib.h>
#include <stdio.h>
#include <Windows.h>
#include <Tchar.h>

HANDLE wHnd;    // Handle to write to the console.
HANDLE rHnd;    // Handle to read from the console.

int _tmain(int argc, _TCHAR* argv[]) {
    // Force it to be 80x50 characters:
    system("mode con: cols=80 lines=50");

    // Set up the handles for reading/writing:
    wHnd = GetStdHandle(STD_OUTPUT_HANDLE);
    rHnd = GetStdHandle(STD_INPUT_HANDLE);

    // Change the window title:
    SetConsoleTitle(TEXT("Win32 Console Control Demo"));

    // Set up the required window size:
    SMALL_RECT windowSize = { 0, 0, 79, 49 };

    // Change the console window size:
    SetConsoleWindowInfo(wHnd, TRUE, &windowSize);


    // Create a COORD to hold the buffer size:
    COORD bufferSize = { 80, 50 };

    // Change the internal buffer size:
    SetConsoleScreenBufferSize(wHnd, bufferSize);

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