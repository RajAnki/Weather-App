# Weather-App
Weather application which will provide weather forecast. Its using DarkSky weather API.

This project is a single page application that provide weather forecast using DarkSky weather API. User needs to provide Latitude and Longitude of the desired location to get the weather forecast. Also, user can select time to get time specific weather forecast.

It has been developed in Angular 5 framework and Unit Test scripts has been written in Jasmine. It follows Accessibility requirements for Visual Impairment users with Screen Reader and compodoc report can be generated with proper documentation. Code quality has been maintained with needed Comments, Error Handling, Coding standards, Structure and Extensibility.

Follow the following steps to Run the aplication:

    npm install -g @angular/cli
    ng new Weather-App
Replace src folder with the attached src folder

    ng serve

Step to run the Test Scripts:

    ng test

Steps to get Compodoc Report:

    npm install --save-dev @compodoc/compodoc
Add a script task in package.json:

    "scripts": {
      "compodoc": "./node_modules/.bin/compodoc -p src/tsconfig.app.json"
    }
        
    npm run compodoc
