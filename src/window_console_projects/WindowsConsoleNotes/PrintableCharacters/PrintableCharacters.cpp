// PrintableChars Project
#include <windows.h>
#include <iostream>
using namespace std;
const int START_CHARACTER = 32;
const int LAST_CHARACTER = 255;
const int X_TAB_SPACES = 6;


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


int main()
{
	HANDLE wHnd;
	HANDLE rHnd;
	int i;
	int x = 0;
	int y = 0;
	COORD position;
	system("COLOR F0");
	SetConsoleTitle(L"Displaying Printable Characters");

	// Set up the handles for reading/writing:
	wHnd = GetStdHandle(STD_OUTPUT_HANDLE);
	rHnd = GetStdHandle(STD_INPUT_HANDLE);

	// Set the window and buffer size
	SetConsoleSize(wHnd, 80, 25);

	// This is required to prevent extra line added to screen 
	system("mode con: cols=80 lines=25");

	// Change the window title:
	SetConsoleTitle(TEXT("Win32 Console Control Demo"));
	FreezeWindow();




	for (i = START_CHARACTER; i <= LAST_CHARACTER; i++)		// line 14
	{
		position.X = x;
		position.Y = y;
		SetConsoleCursorPosition(wHnd, position);
		cout.width(3);
		char ch = static_cast<char>(i);
		cout << i << " " << ch << flush;
		++y;
		// check if it is time to wrap up 
		if (y > 20) {
			y = 0;
			x += X_TAB_SPACES;
		}
	} // end for
	position.X = 0;
	position.Y = 22;
	SetConsoleCursorPosition(wHnd, position);
	getchar(); // pauses the screen so we can see the result
	return 0;
}
