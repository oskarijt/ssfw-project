# "Reviewer"

A school project for understanding server-side scripting, web application frameworks and web application security

This is a simple application meant for posting reviews and reading them. The application features authentication.

I was mostly focused on folder/code structure and security rather than developing smooth frontend and features. 

This application is built with Vue.js on the client, Express on the backend and MongoDB for our database and we will deploy to Jelastic.

## Structure

##### Folders

- api/
    - auth/
    - controllers/
    - models/
    - routes/
- dist/
- doc/
- frontend/

##### Functionality and structure

- server.js starts the whole application. In app.js we initialize middleware and provide the frontend from dist/ folder. 

- frontend/ contains all files used to develop the frontend. When building frontend to production it creates dist/ which app.js is providing as a frontend. 

- app.js
Uses api/ folder for all other backend functionalities. The structure inside api/ is following the 'mvc' structure without the 'v'.

- api/auth/
Contains passport stuff and something to recognize the user when he/she is accessing routes in api/routes/ (to protect certain routes).

- api/controllers/
Is a level which acts like a brain for the entire system. It has all the functionalities that the user is trying to use via api/routes/

- api/models/
Defines where the application's data objets are stored. It doesn't know anything about routes or controllers.

- api/routes/
Contains the endpoints which the user is accessing via the frontend of the application.

- doc/ 
Contains the [API documentation](https://users.metropolia.fi/~oskarijt/doc/) of this project. 


## Author

* **Oskari Tamminen**
