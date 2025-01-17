# ICT Skills 2 Assignment - Single Page app.

Name: Joseph Kelly

## Overview.

This repo contains a React app allows users to make posts about POIs (places of interest). This repository contains the React front end only. The back end is an API developed using the Hapi framework and hosted on Heroku. A core subset of the API's features are implemented here.
Upon first launching the app,users must register an account. Once an account has been created, users can log in and view a list of POI's.
Users can create a new POI, and delete existing POI's. Users can only delete POI's that they have created. The backend verifies that the JWT user id is the same as the id of the author of the location.
Users can select any existing POI and then upload and delete photos for that location. Users can only delete photos that they uploaded themselves.

. . . . . List of user features . . . .

- Register new account
- Authenticate with back end and Login
- Create and delete locations
- Upload and delete images
- Automated e2e tests for all the above

## Setup.

- in the terminal type npm start and wait a minute for the scripts to load
- go to localhost:3000 to view the app
- To view stories, open teh terminal and type npx start-storybook -p 9001 -c .storybook
- go to http://localhost:9001/?path=/story/poi-app-header--default to view stories
- To view the cypress tests, type npx cypress open

## Data Model Design.

![][model]

> > Diagram of app structure

Upon authentication, the jwt for the API is set in local storage and the user is redirected to the Locations page. ComponentDidMount makes a request for all locations from an API and these are displayed on the page. This request should return an array of Locations. This array is passed as props to the location list component. The location list component then maps each location to a location item component. The resulting map of locations is rendered on the location page. The location page also sends a deletelocation handler as props through location list to the location item component.  
  
  
If a user clicks the view photos tab, they will be re-directed to the photos page. This page takes in the location name from the location object that the link was clicked it. This is passed as params and used to make a request to the API for all photos for that location. The returned array of photo objects is then passed as params to the photo list component and each of those photo objects in the array is mapped to a photo item component and rendered in the photo page. The photo page also sends a deletePhoto handler as props through photo list to photo item.
If a user clicks the logout tab, they are redirected to the logout page and their jwt is cleared from local storage.

![][user]  

> > Shows a user json object  

![][location]  

> > Shows a location json object. Coordinates were intended to use for mapping purposes if time permitted.  

![][photo]  

> > Shows a photo json object  

## UI Design.

The UI design is mostly centered on the Navbar. Using the Navbar, the user can move between the welcome page, login page and locations page. The photos page is paramterized so dependent on which location's photos the user desires to see, thus is inaccessable from the router. The user must click on a link for one of the location cards to view the photos page. The design is quite minimal in terms of colours, icons etc. The focus was on making something clear, clean and easy to navigate.

![][main]  

> > Shows a card for each location returned from the API on login. New locations can be added and existing locations can be deleted by their author.  

![][detail]  
> > Shows a list of photos that users have posted for a location and a form for uploading new photos.  

## Routing.

- /locations (private)- displays all of the locations that users have posted
- /photos/:locationname (private) - paramterized route that displays all of the photos that users have posted for a given location
- /login (public) - displays a form that allows users to authenticate their login credentials
- /register (public) - displays a form that allows users to create a new account
- /logout (public) - a screen that dispalys when a user selects the logout tab
- / (public) a screen that diplays a welcome message

## Storybook.

![][stories]

Each of the components was added as a story to storybook

## Backend.

The backend is a Node - Hapi framework API. It supports CRUD for user accounts, adding locations, photo uploads, writing comments, leaving ratings.
This React app supports CRD for Locations and Photos.

## Authentication (if relevant).

All routes except signup and login are protected by JWT basic auth. User emails and passwords are hashed and saleted.

## Independent learning.

- Integration of a real JWT secured API.
- Implementation of a photo upload feature.
- Cypress e2e test for automated photo/file upload.
- Bootstrap styling, created from scratch, none resused from the labs.

[model]: ./model.png
[main]: ./main.png
[detail]: ./detail.png
[stories]: ./stories.png
[user]: ./user.png
[location]: ./location.png
[photo]: ./photo.png
