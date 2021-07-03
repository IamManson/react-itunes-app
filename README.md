# My React & Express iTunes Search App
This app was created with [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/). Deployed app can be found here: https://km-reactitunesapp.herokuapp.com/

### Table of Contents
---------------------
1. Description
2. Features
3. Technologies
4. Installation
5. Usage
6. Preview
7. Credits

## Description
This app makes use of the [iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/) using Express and React, to search through iTunes Store and Apple Books Store. It makes use of the GET, POST & DELETE methods to allow users to add and remove items to and from a 'Favourites' list.

## Features

* Can search through data
* User can select a type i.e. music, song, tv show and more.
* User can see a Title, Artist Name and Thumbnail of the cover or album art
* User can click on a heart icon to 'favourite' a song and add to a 'Favourites' list
* User can navigate to a favourites list
* User can remove an item from the 'Favourites' list by entering the items unique ID

## Technologies

App is created with: 

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* JavaScript
* HTML5
* CSS


## Installation

### Prerequisites

* Access to a command-line
* Your favorite coding text editor
* Username and password for the Github website (optional)

To run this project, do the following: 

1. [Download](https://git-scm.com/downloads) Git for Windows, Mac OS X or Linux/Unix
2. Install Git

Now open your command prompt or terminal:

1. Creat a new empty directory (mkdir <folder_name>) for the project
2. Change directory (cd) to your newly created directory
3. Configure your local Git installation to use your GitHub credentials by entering the following:
   - git config ––global user.name “github_username”
   - git config ––global user.email “email_address”
4. Go to your repository on GitHub. In the top right above the list of files, open the **Clone or download** drop-down menu. Copy the **URL for cloning over HTTPS.**
5. Switch your command prompt and enter git clone *repository_url*
6. Your working directory should now have a copy of the repository from GitHub. It should contain a directory with the name of the project. Change to the directory: cd <folder_name>
7. Once you are in the project directory, enter *npm install* in your terminal
8. Next, enter *npm install --save react-router-dom* in your terminal to install the React-Router-Dom package
9. Ensure that you are in your project directory and enter *npm start* to run app in the development mode.
10. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

### Pushing Local Files to the Remote Repository

Done some work on this project? Submit your changes to the remote project on Github.

1. Create a new branch: git branch *branch-name*
2. Switch to your newly created branch: git checkout *branch-name*
3. Now confirm the status of your brand and untracked files: git status
4. Add the file that you've worked on to your branch: git add *file-name*
5. Run **git status** again to make sure the text.txt file has been added. Next, commit the changes to the local project: git commit –m “*descriptive message*”
6. Finally, push the changes to the remote GitHub repository: git push 

## Preview

### Home Page
![Screenshot of home page search bar](https://github.com/IamManson/react-itunes-app/blob/main/frontend/src/Components/Images/home_page_search_bar.png)

### An Example Search
![Screenshot of search in results](https://github.com/IamManson/react-itunes-app/blob/main/frontend/src/Components/Images/search_in_results.png)

### Favourites List
![Screenshot of favourites list](https://github.com/IamManson/react-itunes-app/blob/main/frontend/src/Components/Images/favourites_list.png)


## Credits

App created by [Kayla Manson](https://github.com/IamManson) in 2021. 
Find me on [LinkedIn](https://dribbble.com/kayla-manson), [Github](https://github.com/IamManson) and [Dribbble](https://dribbble.com/kayla-manson).
