# NGSS Case

You can login/register and view user details and statistics using this application. All data is mockup [JSONPLaceholder](https://jsonplaceholder.typicode.com/) used for retriving mockup data to visualize charts and tables.


## Project Stack

1. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.
2. [Highcharts](https://www.highcharts.com/) used for creating charts.
3. [Angular Flex-Layout](https://github.com/angular/flex-layout) used for managing responsivity in the project.
4. PHP used for creating simple backend for login/registration system.

## Project Pages

1. <b>Dashboard Page</b> (used for visualizing mockup data contains table, pie chart and a bar chart).
2. <b>Posts Page</b>  (used for displaying users last 5 posts you can imagine it like twitter tweets).
3. <b>User Page</b>  (used for displaying selected users details).

## How to setup the project

1. Clone this project.
2. Do the <b>npm install</b>
3. Copy the services folder from services folder and insert it inside C:\xampp\htdocs or C:\wamp\www\ (for this u need xampp or wamp to be installed on your system).
4. Pick up the sql file from database and upload inside the mysql db.
5. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. (You can specify the port via adding --port PORT_NUMBER).

## Final Notes
1. If you encounter any problems in database setup or you dont want to spend time you can login to application with username = admin and password could be anything but empty it doesnt matter.
2. Initial api requests made with userid = 1 to setup data when navigating to pages.

