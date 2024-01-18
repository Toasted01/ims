# Inventory Management System

Web application to allow the user to create and manage an inventory sheet. Allows the user to see the whole inventory as well as add to it and search it.  
Made to Learn react.

## Installation

- npm i

## Running the application

- open 2 terminals in root folder
- in terminal 1 : 'powershell -ExecutionPolicy Bypass -Command "json-server db.json"'
- in terminal 2 : npm start

## Features

- Ability to add item
- Ability to display item
- Ability to search for item by individual properties
- Saves data to json server
- Fetch request data from json sever on launch

### Bugs/Future changes

- json-server not digitally signed, use 'powershell -ExecutionPolicy Bypass -Command "json-server db.json"'
- when making DELETE fetch call the json-server module conks out so probably dont use that for backend
