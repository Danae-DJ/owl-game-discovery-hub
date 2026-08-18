# BYU-Pathway Worldwide Online
## WDD 330 - Web Frontend Development II

### 🦉OWL (Open World Library)
### Game Discovery Hub
Final Project:
by Dánae De la Cruz Jiménez


OWL is a web application designed to help users discover new video games through advanced browsing tools and specific search filters. Users will be able to find games based on characteristics such as genre, platform, popularity, developer, and publisher. They will also be able to watch trailers, explore detailed information about each game, and save their favorite titles to a personal collection.

Additionally, the application will allow users to compare different video games side by side, making it easier to decide which game best matches their interests and preferences.


### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- npm
- Git (if cloning the repository)

You will also need IGDB/Twitch API credentials:

- Twitch Client ID
- Twitch Client Secret

Repository:

https://github.com/Danae-DJ/owl-game-discovery-hub.git

---

### Installation

### 1. Clone the repository

[WDD 330 week05: Danae-DJ owl-game-discovery-hub ](https://github.com/Danae-DJ/owl-game-discovery-hub.git) 

Then enter the project directory:
cd owl-game-discovery-hub

### 2. Install dependencies
`npm install` This installs the dependencies defined in package.json.
    The project uses packages including:
        Express
        dotenv
        cors
        Vite
        ESLint
        Prettier
        Jest

### 3. Configure environment variables
The application uses the IGDB API through Twitch authentication.

Create a file named .env in the root of the project:

TWITCH_CLIENT_ID=your_client_id
TWITCH_CLIENT_SECRET=your_client_secret

Replace the values with your own Twitch/IGDB credentials.

Do not commit the .env file to GitHub.

The .env file is included in .gitignore to prevent API credentials
from being uploaded to the repository.

### 4. Running the Application Locally
The application uses two servers during development:

Express: backend/API server
Vite: frontend development server

Both need to be running during normal development.

#### Terminal 1 — Start the Express server
RUN `npm start` This starts the Node.js/Express server. The backend runs on: http://localhost:3000
The Express server is responsible for the application's API routes and
communication with IGDB.

#### Terminal 2 — Start the Vite development server
Open a second terminal in the same project directory and RUN: `npm run dev`. Vite starts the frontend development server. The exact URL and port are displayed in the terminal when Vite starts. Open the URL provided by Vite in your browser.

#### Quick Start

After installing the dependencies and creating the .env file:

Terminal 1
npm start
Terminal 2
npm run dev

Keep both terminals running while developing and testing the application.

### Application Features

OWL currently includes:

Home page
Featured games
Game search
Search by title
Genre filtering
Platform filtering
Sorting by name
Sorting by rating
Game details
Add games to My Collection
Prevent duplicate games in My Collection
Remove games from My Collection
My Collection persistence using LocalStorage
Add games to Comparison
Prevent duplicate games in Comparison
Remove games from Comparison
Clear Comparison
IGDB API integration
Responsive interface interactions

---
### Production Build

To create a production build, run:

npm run build

Vite generates the production files inside:

dist/

The production build includes the application's HTML, JavaScript, CSS,
and public assets.

The Express server is configured to serve the generated dist directory.

To test the production version locally:

npm run build
npm start

Then open:

http://localhost:3000

---

### Development Commands

#### Start the application
npm start

Starts the Express server.

#### Start Vite development mode
npm run dev

Starts the Vite development server with development features such as
automatic rebuilding during development.

#### Build the application
npm run build

Creates the production files in the dist directory.

#### Run ESLint
npm run lint

Runs ESLint against the project's JavaScript files to identify
potential errors and code-quality issues.

#### Run Prettier
npm run format

Runs Prettier to automatically format the project's HTML, JSON,
JavaScript, TypeScript, and CSS files.

#### Run tests
npm test

Runs the project's Jest test suite.

#### View installed packages
npm list --depth=0

Displays the main packages installed directly in the project without
showing the complete dependency tree.

--- 
### API

The project uses the IGDB API to retrieve video game information.

The frontend communicates with the Express backend through local API routes.

Examples include:

/api/games

and:

/api/games/:id

The backend handles the communication with IGDB so that the Twitch/IGDB
credentials remain on the server side rather than being exposed directly
to the frontend.

---
### LocalStorage

OWL uses the browser's LocalStorage to preserve user selections.

The application stores collection data using:

owl-collection

and comparison data using:

owl-comparison

This allows the user's collection and comparison selections to remain
available when navigating between pages or refreshing the browser.


--- 
### Project Structure

The project is organized approximately as follows:
owl-game-discovery-hub/
│
├── public/
│   └── images/
│
├── server/
│   ├── routes/
│   │   └── api.js
│   │
│   ├── services/
│   │   └── igdbService.js
│   │
│   └── server.js
│
├── src/
│   ├── css/
│   │   └── style.css
│   │
│   ├── game/
│   │   └── index.html
│   │
│   ├── collection/
│   │   └── index.html
│   │
│   ├── comparison/
│   │   └── index.html
│   │
│   ├── js/
│   │   ├── partials/
│   │   └── services/
│   │
│   └── index.html
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md


---
### Git Workflow

The project was developed using Git branches and sprint-based development.

Feature work was organized into separate sprint branches before being
merged into the main branch.

A typical workflow is:

git status
git add .
git commit -m "Describe the changes"
git push

After completing a sprint, the feature branch can be merged into the
main branch through the project's GitHub workflow.

---
### Troubleshooting
#### The frontend cannot retrieve games

Make sure both servers are running:

npm start

and in another terminal:

npm run dev

Also verify that the .env file contains valid:

TWITCH_CLIENT_ID=...
TWITCH_CLIENT_SECRET=...

credentials.

#### The application displays API errors

Check the Express terminal first.

The backend should be running on:

http://localhost:3000

Then check the browser developer console for frontend errors.

#### The application cannot find images

Make sure the required images are located inside:

public/images/

After changing public assets, rebuild the application:

npm run build

#### The application works with Vite but not with Express

Make sure the production files have been generated:

npm run build

Then start Express:

npm start

The Express server is configured to serve the contents of the dist
directory.

--- 

### Deployment

The production application can be deployed as a Node.js web service.

The production build command is:

npm install && npm run build

The start command is:

npm start

The deployment environment must provide the following environment variables:

TWITCH_CLIENT_ID
TWITCH_CLIENT_SECRET

The .env file should not be uploaded to the deployment repository.

---
## Project Status

OWL Game Discovery Hub was developed incrementally through multiple
development sprints.

The application currently supports game discovery, filtering, game
details, personal collection management, and game comparison using
real data from the IGDB API.

Then open the Vite development URL and verify that the application displays
the appropriate error state when API data cannot be retrieved.

_BYU-Pathway Worldwide improves lives through access to spiritually based, online affordable higher education. Its mission is to develop disciples of Jesus Christ who are leaders in their homes, the Church, and their communities._



