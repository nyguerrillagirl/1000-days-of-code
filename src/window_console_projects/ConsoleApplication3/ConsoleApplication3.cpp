// ConsoleApplication3.cpp : 
//

#include <windows.h>
#include <iostream>

int main() {
    // Get handle to the console window
    HWND consoleWindow = GetConsoleWindow();
    if (!consoleWindow) {
        std::cerr << "Failed to get console window handle.\n";
        return 1;
    }

    // Set console title (optional)
    SetConsoleTitle(L"My Custom ConHost Window");

    // Set screen buffer size (must be >= window size)
    HANDLE hOut = GetStdHandle(STD_OUTPUT_HANDLE);
    COORD bufferSize = { 100, 40 }; // width, height
    SetConsoleScreenBufferSize(hOut, bufferSize);

    // Set window size (must be <= buffer size)
    SMALL_RECT windowSize = { 0, 0, 79, 24 }; // left, top, right, bottom
    SetConsoleWindowInfo(hOut, TRUE, &windowSize);

    // Optional: disable resizing and maximize button
    LONG style = GetWindowLong(consoleWindow, GWL_STYLE);
    style &= ~(WS_SIZEBOX | WS_MAXIMIZEBOX);
    SetWindowLong(consoleWindow, GWL_STYLE, style);
    SetWindowPos(consoleWindow, nullptr, 0, 0, 0, 0,
        SWP_NOMOVE | SWP_NOSIZE | SWP_NOZORDER | SWP_FRAMECHANGED);

    std::cout << "Console window configured. Press Enter to exit...\n";
    std::cin.get();
    return 0;
}