# frontend-challenge

First install required dependencies with "npm install". Then, in the root directory run "npm run dev", the app will start at "http://localhost:3001/"

- npm version: 8.13.2
- node version: v16.13.2

# Features

- Website made to look like the ForHims blog
- Fully responsive
- Dark mode option
- Create a new article post by clicking on the "Create a new article post" button and filling out the inputs in the modal that pops up
- The page fetches 30 article posts in the first load and 30 more once the user gets close to scrolling to the last one for infinite scrolling
- Article images are fetched from the article's metadata using open-graph-scrapper, running in the server.js file. It receives the article's url at "/api/scrapper" and returns an object containing the image url. If the article does not provide an image a placeholder is shown by the frontend.
