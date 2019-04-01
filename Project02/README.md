# CS 1XA3 Project 02

The Infinite Simon Game in Elm, is a memorization game created using Elm.

## Getting Started

The simple web app, ie., "Infinite Simon Game in Elm" is hosted on the [mac1xa3 server](https://www.mac1xa3.ca/u/kapooa13/simpleapp.html), as well as the [mills-mcmaster server](ugweb.cas.mcmaster.ca/~kapooa13/simpleapp.html) and can be accessed as such.

### Prerequisites
* A working computer
* An internet connection
* A web browser (with JavaScript enabled)

## Features

The game possesses a number of notable features that are listed below:

### Infinite Duration (almost)

The game initially starts off with zero elements in the game record and only begins to append random integers (that are representative of their corresponding boxes) to it when the user correctly completes the current pattern. Consequently, the game is, in theory, infinite.

### Audio

Another notable feature of this game is that it utilises ports to play audio in Elm. Note that this isn't technically done in Elm rather, a port is created in Elm through which an encoded JSON object (here, the url for the audio file as a string) is sent. The JavaScript for the compiled Elm file is modified in order to play said audio file.

### BootStrap

In order to create a more visually appealing game, the page utilises a bootstrap library in Elm and uses the Html function in GraphicSVG to render it. It is worth noting that this is still buggy and renders incorrectly. In the future, the page would be made to render an Html view with a GraphicSVG widget on top of it in order to improve compatibility with other browsers.

### Randomness

This game utilises the Random library in elm in order to generate random numbers when required. It may be worth noting that these are pseudo-random numbers, but they are sufficiently random to fulfill the scope of this project.

### Delay

In order to mimic the "pressing" of a button, a delay library was used, which after 350 ms, changed the color of the button back to its original color, giving the illusion of a button being pressed.

### Custom Data types

The game utilises a number of custom data types such as GameState and GameColor which considerably improve the readability of the code, while highlighting the functional approach taken in creating this game.

## Usage

A fun addition to this game allows you to play with the tiles to create music. This serves no purpose other than to amuse the user and the game will not start until the "Start" button is clicked.

Upon clicking the "Start" button, the game will show the user a pattern once and the user is then asked to mimic that pattern. The length of the pattern keeps increasing, forcing the user to memorize the pattern or fail.

When the user eventually fails, the game resets their score to 0 and reinitialises with a new random pattern. Once started, there is no end to this game. The only way to win is to not play. This never ending Kafkaesque scenario accurately depicts the mood of the creator of this game as he is writing this README. Have fun.

## Credits

### Audio

The audio implemented in this game was done by looking at multiple game implementations in Elm and trying to understand the JS behind it. Special credit to [arecvlohe](https://github.com/arecvlohe) for their Simon Game in Elm, as well Chris Schankula for helping with the JavaScript behind the audio functionality in this project.

### Elm libraries

This game made frequent use of the following Elm libraries listed below:

* [GraphicSVG - MacCASOutreach](https://package.elm-lang.org/packages/MacCASOutreach/graphicsvg/6.1.0/GraphicSVG-App)
* [Random](https://package.elm-lang.org/packages/elm-lang/core/latest/Random)
* [Delay - andrewMacmurray](https://package.elm-lang.org/packages/andrewMacmurray/elm-delay/latest/)
* [BootStrap](https://package.elm-lang.org/packages/rundis/elm-bootstrap/latest/)
* [Json.Encode](https://package.elm-lang.org/packages/elm-lang/core/5.1.1/Json-Encode)


## Authors
* Ankit Kapoor
