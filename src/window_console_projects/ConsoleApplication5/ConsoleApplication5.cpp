#include <stdlib.h>
#include <stdio.h>
#include <Windows.h>
#include <Tchar.h>
#include <string>

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
    OutputDebugString(L"Debug: Program started\n");

    // Set up the handles for reading/writing:
    wHnd = GetStdHandle(STD_OUTPUT_HANDLE);
    rHnd = GetStdHandle(STD_INPUT_HANDLE);

    // Change the window title:
    SetConsoleTitle(TEXT("Win32 Console Control Demo"));

    // Set the window and buffer size
    SetConsoleSize(wHnd, 80, 50);

    // This is required to prevent extra line added to screen 
    system("mode con: cols=80 lines=50");

    // Change the window title:
    SetConsoleTitle(TEXT("Win32 Console Control Demo"));
    FreezeWindow();

    // Set up the character buffer:
    CHAR_INFO consoleBuffer[80 * 50];


    // Clear the CHAR_INFO buffer:
    for (int i = 0; i < 80 * 50; ++i) {

        // Fill it with white-backgrounded spaces
        consoleBuffer[i].Char.AsciiChar = ' ';
        consoleBuffer[i].Attributes =
            BACKGROUND_BLUE |
            BACKGROUND_GREEN |
            BACKGROUND_RED |
            BACKGROUND_INTENSITY;
    }

    // Set up the positions:
    COORD charBufSize = { 80,50 };
    COORD characterPos = { 0,0 };
    SMALL_RECT writeArea = { 0,0,79,49 };

    // Copy to display:
    WriteConsoleOutputA(wHnd, consoleBuffer, charBufSize, characterPos, &writeArea);

    // Enable mouse and window input events
    DWORD prevMode;
    GetConsoleMode(rHnd, &prevMode);
    SetConsoleMode(rHnd, ENABLE_WINDOW_INPUT | ENABLE_MOUSE_INPUT | ENABLE_PROCESSED_INPUT);


    // Boolean flag to state whether app is running or not.
    bool appIsRunning = true;

    INPUT_RECORD record;
    DWORD events;
    while (appIsRunning) {
        ReadConsoleInput(rHnd, &record, 1, &events);
        // Check if user entered 'ESC' key to quit the app
        if (record.EventType == KEY_EVENT && record.Event.KeyEvent.bKeyDown) {
            OutputDebugString(L"Debug: Processing keyboard event\n");
            if (record.Event.KeyEvent.wVirtualKeyCode == VK_ESCAPE) {
                appIsRunning = false;
            } else if (record.Event.KeyEvent.uChar.AsciiChar == 'c') {
                OutputDebugString(L"Debug: User pressed 'c'\n");
                // Yes, so clear the buffer to spaces:
                for (int i = 0; i < 80 * 50; ++i) {
                    consoleBuffer[i].Char.AsciiChar = ' ';
                }
                // Redraw our buffer:
                WriteConsoleOutputA(wHnd, consoleBuffer, charBufSize, characterPos, &writeArea);
            }

		} else if (record.EventType == MOUSE_EVENT) {
            OutputDebugString(L"Debug: Processing mouse event\n");
            // Set the index to our buffer of CHAR_INFO
            int offsetPos =
                record.Event.MouseEvent.dwMousePosition.X
                + 80 * record.Event.MouseEvent.dwMousePosition.Y;

            // Is it a left click?
            if (record.Event.MouseEvent.dwButtonState & FROM_LEFT_1ST_BUTTON_PRESSED) {
                OutputDebugString(L"Debug: Left mouse click\n");

                // Yep, so set with character 0xDB (solid block)
                consoleBuffer[offsetPos].Char.AsciiChar = (char)0xDB;

                // Redraw our buffer:
                WriteConsoleOutputA(wHnd, consoleBuffer, charBufSize, characterPos, &writeArea);

                // Is it a right click?
            }
            else if (record.Event.MouseEvent.dwButtonState & RIGHTMOST_BUTTON_PRESSED) {
                OutputDebugString(L"Debug: Right mouse click\n");

                // Yep, so set with character 0xB1 (50% block)
                consoleBuffer[offsetPos].Char.AsciiChar = (char)0xB1;

                // Redraw our buffer:
                WriteConsoleOutputA(wHnd, consoleBuffer, charBufSize, characterPos, &writeArea);

                // Is it a middle click?
            }
            else if (record.Event.MouseEvent.dwButtonState & FROM_LEFT_2ND_BUTTON_PRESSED) {
                OutputDebugString(L"Debug: Left 2nd button?? mouse click\n");

                // Yep, so set with character space.
                consoleBuffer[offsetPos].Char.AsciiChar = ' ';

                // Redraw our buffer:
                WriteConsoleOutputA(wHnd, consoleBuffer, charBufSize, characterPos, &writeArea);
            }
         }
    }

}