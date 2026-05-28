# 1000-days-of-code
![1000-days-of-code Journey](images/1000_days_of_code.png)

|Date       |Description|
|-----------|-------------------------------------------------------------------------------|
|Date       |   Description                                                                 |
|05/27/2026 | Today I decided to break up the projects in this repo out into their own repo |
|           | The steps I will follow:                                                      |
|           | 1. Pick a folder to extract, e.g. python_projects                             |
|           | 2. Create a split branch with full history                                    |
|           | git subtree split --prefix=src/python_projects -b python_split                    |
|           | 3. Create a new Github repo, name it python-project or python-learning        |
|           |       to tie it to the original folder I will attach 1000doc_<new_repo_name>  |
|           | 4. Push the split branch to the new repo                                      |
|           | git push https://github.com/yourname/python-projects.git python_split:main    |
|           | 5. Remove the folder from the main repo                                       |
|           | git rm -r python_projects                                                     |
|           | git commit -m "Remove python_projects after extracting to its own repo"       |
|           | git push                                                                      |
|           | 6. Add a link in your README (this)                                           |
|           |      See details in log1000.md                                                |
|03/28/2026  Today I decided to cleanup my daily TODO list (see log1000.md)                 |
|10/31/2025 | My progress has slowed down on Coursera courses, due to concentration on Datacamp|
|           | and other projects.  My goal is to complete FE course by the end of the year  |
|           | then resume Cybersecurity specialization and take on Machine Learning         |
|7/24/2025  |I decided to start a new repo to start the next 700 days of code.              |
|           |This holds material on courses I am taking (will now include notes) + projects |
|           |I will try to create PDF files for all the Microsoft Word document I create. The|
|           |Word documents have the advantage of being able to display animated gifs!      | 
|	        |My goal will be to start and complete all coursera courses and datacamp        |

# GOAL #1: Complete all current Coursera courses
- Meta Frontend Developer 
    - this is going very slowly
- Google Cybersecurity
    - I dropped this specialization
- "Developing Front-End Apps with React" - Completed (insert dancing buffalo bones here)

  <img src="./images/dancing_buffalo_bones.gif" alt="dancing bones" width="25%" height="25%">

# GOAL #2: Learning Data Science
- Datacamp courses, taking all courses in the Associate Data Scientist in Python
    - still working on this
- I am on the Associate Python Developer Track. I have two courses remaining.

# Goal #3: Book Club
- Tech Reading
    - Mostly book club reading [Engineering Book Club](https://community.engineeringbookclub.com/feed)
- Non-tech Reading

Under /src
- /brainycode_website
    - have not really started, collecting images to consider
- coursera
    - meta_front_end_developer
        - course_principles_of_ux_ui_design
    - developing_frontend_apps_with_react
- docs
    - 2D_GAME_ENGINE_USING_CPP
    - CRVG PROJECT
    - figma
    - images
    - OTHER
        - CREATING_COPY_SCRIPT_NOTES.docx
            - notes I took in creating a script to copy any changed files
              from one location to this git area. This is primarily for
              large files.
        - SettingWindowsConsoleSize.pdf
            - my adventure trying to get the window terminal to correctly size
        - Tiled Map Editor.docx
            - In progress - note on the tiled map editor program
- figma_marathon
- html_css_javascript_projects
    - my progress on the snake game 
    - [How to Build a Snake Game using Phaser.js](https://www.freecodecamp.org/news/how-to-build-a-snake-game-using-phaserjs/)
- intellij_projects
    - projects built with IntelliJ tool
- python_projects
    - datacamp work
    - other projects
- react_projects
- udemy_projects
- windows_console_projects (using Visual Studio 2022s)

- See the document log1000.md for day-to-day progress on tasks and issue.
