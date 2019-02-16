# CS 1XA3 Project 01

This project involves working with bash scripts and implementing multiple bash functions within a given script, which are called via user prompted input.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites
* A working computer
* Bash 

### Installation
Just clone/download the repository and the script should run without any additional installation required. If for some reason, the script fails to run, please redirect your attention to the Prerequisites.

## Features
As of now, the only feature that has been implemented, along with the menu based user input, is the TODO log function. More features will be coming soon.

### 1. Script Input
Uses the "select" statement to create a menu of functions where the user can choose what function to execute

### 2. TODO log
This function uses grep and recursively searches for "#TODO" in all the files present in CS1XA3 and its directories/sub-directories, and copies all the lines which match the grep pattern to a file called "todo.log" in /CS1XA3

## Usage
Go to the /CS1XA3/Project01 directory where the script is located and run the following code:
    
    ./project_analyze.sh

This will present the user with a menu, wherein which they can select the function they would like to call by entering the corresponding number.

## Authors
* Ankit Kapoor
