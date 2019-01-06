1.  Prerequisites
Before you begin, make sure your development environment includes Node.js® and an npm package manager.
    - Node.js
    Angular requires Node.js version 8.x or 10.x.
    To check your version, run node -v in a terminal/console window.
    To get Node.js, go to nodejs.org.

    - npm package manager
    Angular, the Angular CLI, and Angular apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have an npm package manager.
    To check that you have the npm client installed, run npm -v in a terminal/console window.

2.  Install the Angular CLI
To install the CLI using npm, open a terminal/console window and enter the following command:
    `npm install -g @angular/cli`

3. Create a workspace for the application
To download the application, run command `git clone https://github.com/mdziedziul/notes-app.git`.
Get to the notes-app folder and run command `npm install`.

4. Run the application
To run the application, run command `npm start` and the application will open in Chrome window.

5. Run e2e test
To run e2e test, go to e2e folder and run command `protractor conf.js`. The test should create a new note and after that, delete it.

# Notes
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server
Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.


