# This is My Team

## User Story
AS A manager</br>
I WANT to generate a webpage that displays my team's basic info</br>
SO THAT I have quick access to their emails and GitHub profiles</br>
## Project Requirements
GIVEN a command-line application that accepts user input</br>
WHEN I am prompted for my team members and their information</br>
THEN an HTML file is generated that displays a nicely formatted team roster based on user input</br>
WHEN I click on an email address in the HTML</br>
THEN my default email program opens and populates the TO field of the email with the address</br>
WHEN I click on the GitHub username</br>
THEN that GitHub profile opens in a new tab</br>
WHEN I start the application</br>
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number</br>
WHEN I enter the team manager’s name, employee ID, email address, and office number</br>
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team</br>
WHEN I select the engineer option</br>
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu</br>
WHEN I select the intern option</br>
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu</br>
WHEN I decide to finish building my team</br>
THEN I exit the application, and the HTML is generated</br>

## Description
This is an application built primarily in node.js that allows you to quickly generate an HTML webpage passed on command line inputs.

## Languages Used
* Node.js
* Inquirer
* Jest
* HTML
* JavaScript

## Examples

### This is a short gif of the completed application functionality
![GIF of functionality](./public/vid/Austin%20Henry%20Team%20Profile%20Generator.gif)

[Full Video](https://drive.google.com/file/d/1PpiVYWcHlErSqzFKKSxIBbTbJwe2uoU-/view)

![Image of HTML Output](./public/img/profile-example.png)


## How-To
### Installation of Application

1. Clone repo
2. Open code on machine
3. Open integrated terminal
4. Type, 'npm install' in terminal

### Run Tests
* To run tests using jest simply type 'npm run test'

### Run Application

1. node app.js
2. Answer questions
3. Go enjoy your day, you earned it!