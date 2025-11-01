#include <stdlib.h>
#include <stdio.h>
#include <Windows.h>
#include <Tchar.h>

HANDLE wHnd;		// Handle to write to the console.
HANDLE rHnd;		// Handle to read from the console.

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

    // This is required to prevent extra line added to screen 
    system("mode con: cols=80 lines=50");

    // Change the window title:
    SetConsoleTitle(TEXT("Win32 Console Control Demo"));
    FreezeWindow();

    // Set up the character buffer:
    CHAR_INFO consoleBuffer[80 * 50];

    // Set up the positions:
    COORD charBufSize = { 80,50 };

    COORD characterPos = { 0,0 };
    SMALL_RECT writeArea = { 0,0,79,49 };

    // Write the characters:
    WriteConsoleOutputA(wHnd, consoleBuffer, charBufSize, characterPos, &writeArea);

    // How many events have happened?
    DWORD numEvents = 0;

    // How many events have we read from the console?
    DWORD numEventsRead = 0;

    // Boolean flag to state whether app is running or not.
    bool appIsRunning = true;

    // If we set appIsRunning to false, the program will end!
    while (appIsRunning) {

        // Find out how many console events have happened:
        GetNumberOfConsoleInputEvents(rHnd, &numEvents);

        // If it's not zero (something happened...)
        if (numEvents != 0) {

            // Create a buffer of that size to store the events
            INPUT_RECORD* eventBuffer = new INPUT_RECORD[numEvents];

            // Read the console events into that buffer, and save how
            // many events have been read into numEventsRead.
            ReadConsoleInput(rHnd, eventBuffer, numEvents, &numEventsRead);

            // Now, cycle through all the events that have happened:
            for (DWORD i = 0; i < numEventsRead; ++i) {

                // Check the event type: was it a key?
                if (eventBuffer[i].EventType == KEY_EVENT) {

                    // Yes! Was the key code the escape key?
                    if (eventBuffer[i].Event.KeyEvent.wVirtualKeyCode == VK_ESCAPE) {

                        // Yes, it was, so set the appIsRunning to false.
                        appIsRunning = false;
                    }
                }
            }

            // Clean up our event buffer:
            delete[] eventBuffer;
        }
    }

}