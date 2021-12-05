# Ecommerce app for backend course

This project is an ecommerce app developed for the Coderhouse backend course.

It consists of a Rest API with all CRUD methods and works for a variety of databases, alternating between MongoDB, MariaDB, SQlite3 and Firebase.

## Running the server
To run the server, use the following command:

```
npm run start
```

To run it in development mode, use:

```
npm run dev
```

This project is configured to run in dev mode. The main difference is that in dev mode, it checks for table and database existence before inserting elements and it creates the database or the table if necessary.

You can avoid this check by changing the .env file NODE_ENV variable to "prod" instead of "dev".

## Changing the database
The project accepts four different kinds of databases.

You can alternate between them by changing the .env variable DB_TYPE. It accepts four different values:

```
mongo (default)
sqlite3
mariadb
firebase
```

This will alternate services and models accordingly.

## Exceptions
Please keep in mind that for Firebase to work correctly you will have to add your own serviceAccountKey.json file in config.

## Postman
The project includes a Postman collection you can use for testing in this [URL](https://www.postman.com/bold-water-283003/workspace/coderhouse-backend/collection/11209225-dd10ef88-2264-4199-b69b-0b7d56315aef).

It includes all possible operations for products and cart.

You can also alternate between admin and user roles. Simply go to the "Headers" tab in any of the Postman requests and change admin to true or false accordingly.