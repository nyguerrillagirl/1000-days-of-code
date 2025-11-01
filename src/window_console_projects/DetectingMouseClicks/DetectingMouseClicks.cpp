#include <windows.h>
#include <iostream>

int main() {
    HANDLE hInput = GetStdHandle(STD_INPUT_HANDLE);
    DWORD mode;
    GetConsoleMode(hInput, &mode);
    SetConsoleMode(hInput, mode | ENABLE_MOUSE_INPUT | ENABLE_EXTENDED_FLAGS);

    INPUT_RECORD record;
    DWORD events;
    while (true) {
        ReadConsoleInput(hInput, &record, 1, &events);
        if (record.EventType == MOUSE_EVENT) {
            OutputDebugString(L"Mouse event detected\n");
        }
    }
}
