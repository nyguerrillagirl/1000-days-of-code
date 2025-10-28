// ConsoleApplication1.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <stdlib.h>
#include <Windows.h>
#include <Tchar.h>

HANDLE wHnd;	// Handle to write to the console
HANDLE rHnd;	// Handle to read from the console

int _tmain(int argc, _TCHAR* argv[]) {

	// Set up the handles for reading/writing
	wHnd = GetStdHandle(STD_OUTPUT_HANDLE);
	rHnd = GetStdHandle(STD_INPUT_HANDLE);
	// Change the window title
	SetConsoleTitle(TEXT("Win32 Console Control Demo"));

	// Set up the required window size
	SMALL_RECT windowSize = { 0, 0, 79, 49 };

	// Change the console window size
	SetConsoleWindowInfo(wHnd, TRUE, &windowSize);

	// Create a COORD to hold the buffer size
	COORD bufferSize = { 80, 50 };

	// Change the internal buffer size:
	SetConsoleScreenBufferSize(wHnd, bufferSize);

	system("pause");
}