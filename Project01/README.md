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
The following are the features that have been implemented in the script, listed in the chronological order of implementation:

### Script Input
Uses the "select" statement to create a menu of functions where the user can choose what function to execute by entering the corresponding number in the menu presented. The layout of the script input is outlined under 'Usage'.

### TODO log
This function uses grep and recursively searches for "#TODO" in all the files present in CS1XA3 and its directories/sub-directories, and copies all the lines which match the grep pattern to a file called "todo.log" in ~/CS1XA3.

### Delete Temporary Files
Finds and deletes all untracked temporary files in the repo. If there are  no untracked temporary files present, it echo's "There are no untracked temporary files to be deleted"

Its implementation involves searching for all untracked files using 

    git ls-files . --exclude-standard --others

and grep's over the output for "*.tmp", and consequently deletes them.

### Compile Error Log
Finds all the Haskell and Python files in the repo that fail to compile (ie., have syntax errors) and puts them in a file called "compile_fail.log". The log file is appended with "The following (Haskell|Python) file(s) failed to compile", followed by a list of the files that failed to compile.

The Haskell file error log is implemented using ghc and its flags, whereas the Python file error log is implemented using the "py_compile" module.

### File Type Count
For each of the following files listed below, it gives a count of the number of files of that type.

* HTML
* Javascript
* CSS
* Python
* Haskell
* Bash

The function is implemented using find and grep for each file type.

## Custom Feature: Bash tutor

### Introduction
The bash tutor is inspired from the fairly well known vimtutor. Fortunately enough for beginners, the bash tutor is far easier to quit than vim. Just type in 'exit' at any prompt!

### Implementation
Unlike vimtutor which is just a text file, the bash tutor is an interactive script that takes you through the most commonly used commands in bash. Its interactivity stems from the fact that, upon execution, it goes into your home directory and creates a directory called "~/bash_tutor", which is where most of your tutorial is restricted to.

Any changes you make are made on your local machine. However, commands are restricted and cannot be used to maliciously remove or corrupt files, and all changes are reverted upon exiting the script by deleting the "~/bash_tutor" directory.

Even then, the user is able to continue to interact with the local machine from within the process of the script. The user cannot skip through lessons, but can exit at any time. 

### Usage for Bash tutor
Being a tutorial, the bash tutor has built instructions that are easy to understand and follow. If at any point of time, the user is confused as to what to do, they can just press enter to get a hint.

The bash tutor is a separate script within the repo, in the same folder as project\_analyze.sh and can be accessed by the from within the script, using the menu. It is executed as a separate process from project\_analyze.sh, this means that exiting bash tutor won't make you exit the project\_analyze.sh script.

## Usage
Go to the /CS1XA3/Project01 directory where the script is located and run the following code:
    
    ./project_analyze.sh

This will present the user with a menu, wherein which they can select the function they would like to call by entering the corresponding number.

    <<< --------
    <<< You are currently running project_analyze.sh
    <<< --------
    1) TODO_log           3) Compile_error_log  5) Bash_tutor
    2) Delete_temp_files  4) File_count         6) Exit

    >>> Enter the number to call corresponding function:

## License
This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) for details

## Authors
* Ankit Kapoor
