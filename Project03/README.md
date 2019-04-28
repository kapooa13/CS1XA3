# CS1XA3 Project 03

The "Piano RT" project, which stands for Piano Real Time, allows you to play a piano in real time with people all over the world.

## Getting Started

Piano RT is hosted on the [mac1xa3 server](https://mac1xa3.ca/u/kapooa13/project3/) and can be accessed as such.

### Prerequisites
* A working computer
* An active internet connection
* A web browser with Javascript enabled

## Features

### Real Time Audio

One of its most unique features, Piano RT lets you play songs with anyone in real time. Note: Users in remote locations may suffer from latency issues.

### Petri App Land (PAL) framework

The client side Elm code, as well as the server side Haskell code for this project was generated using the PAL framework. See credits for more information.

### GraphicSVG Library

A significant portion of the view was made using the GraphicSVG Library for Elm.

### Audio/Randomness

Uses the random module and implements audio from within the PAL framework. This is done using ports in Elm and consequently creating a JavaScript audio object everytime a sound is played.

### Key Decoding

Pattern matches over 60 keys. Due to the large number of keys to be pattern matched, a part of the pattern matching code was generated using proprietary Python scripts.

### Colour and PlayerCounter

The colour of the title is the colour the current user is represented by on the keyboard.By default it is 'hotPink', but can be changed by clicking the Randomise Colours button. There is also a PlayerCounter that keeps track of the number of players currently in the Keyboard Place. 

This feature was implemented as a sanity check for the author, as he was spooked when he witnessed the piano starting to play without him touching his keyboard. He later realised that it was not a bug (nor the ghost of Beethoven), but another player playing.

## Usage

To start the server and consequently the project:

* cd into `~/CS1XA3/Project03/server/`
* Open a tmux session (optional)

and run the following code:

`stack exec server-exe 10027`

This starts the server on the port 10027. The project should now be up and running. You may close the tmux session and let it run in the background.

To play the Piano, you will see the keyboard keys corresponding to the piano keys on the screen. The black keys can be pressed by pressing shift along with the white key below it.

## Future Plans

There are a number of ways this could be improved. Some of which are listed below. 

* Implementation of rooms
* Recording audio
* Adding more instruments
* Integrating Avatars to play instruments

The implementation of these features was not feasible due to the paucity of time. The author will continue to work on this project.

## Credits

### Audio files

Credits to [AutoPiano](https://github.com/WarpPrism/AutoPiano) for providing the piano audio files, as well as inspiring the keyboard input.

### Petri App Land (PAL) framework

This project was built using the [PetriAppLand] (https://github.com/CSchank/petri-app-land) framework.

### GraphicSVG Library

This project extensively utilised the [GraphicSVG](https://github.com/MacCASOutreach/graphicsvg/tree/6.1.0) library.

## Author

* Ankit Kapoor

