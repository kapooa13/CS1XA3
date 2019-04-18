module MyKeyboardNet.Update exposing(..)
import MyKeyboardNet.Static.Types exposing(..)
import MyKeyboardNet.Static.FromSuperPlace exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)
import MyKeyboardNet.Static.Helpers.Keyboard as Keyboard
import Utils.Utils
import Debug exposing(todo)

import Dict
import Random
import MyKeyboardNet.Sounds exposing(..)

updateKeyboardBoardKeyUnpressedKeyboard : FromSuperPlace -> BoardKeyUnpressed -> Keyboard -> (Keyboard,Cmd NoOp)
updateKeyboardBoardKeyUnpressedKeyboard fsp (BoardKeyUnpressed myKeyInt)  keyboard =
        case myKeyInt of
                0          -> (keyboard, playSound "./notes/q.mp3")
                1          -> (keyboard, playSound "./notes/w.mp3")
                2          -> (keyboard, playSound "./notes/e.mp3")
                3          -> (keyboard, playSound "./notes/r.mp3")
                4          -> (keyboard, playSound "./notes/t.mp3")
                5          -> (keyboard, playSound "./notes/y.mp3")
                6          -> (keyboard, playSound "./notes/u.mp3")
                7          -> (keyboard, playSound "./notes/i.mp3")
                8          -> (keyboard, playSound "./notes/o.mp3")
                9          -> (keyboard, playSound "./notes/p.mp3")
                10         -> (keyboard, playSound "./notes/a.mp3")
                11         -> (keyboard, playSound "./notes/s.mp3")
                12         -> (keyboard, playSound "./notes/qup2.mp3")
                13         -> (keyboard, playSound "./notes/wup3.mp3")
                14         -> (keyboard, playSound "./notes/eup4.mp3")
                15         -> (keyboard, playSound "./notes/tup6.mp3")
                16         -> (keyboard, playSound "./notes/yup7.mp3")
                17         -> (keyboard, playSound "./notes/iup9.mp3")
                18         -> (keyboard, playSound "./notes/oup0.mp3")
                19         -> (keyboard, playSound "./notes/pup-.mp3")
                otherwise  -> (keyboard, Cmd.none)

updateNoOpKeyboard : FromSuperPlace -> NoOp -> Keyboard -> Keyboard
updateNoOpKeyboard fsp NoOp  keyboard = keyboard

updateKeyboardMadeKeyDarkKeyboard : FromSuperPlace -> MadeKeyDark -> Keyboard -> Keyboard
updateKeyboardMadeKeyDarkKeyboard fsp (MadeKeyDark otherClientColor myKeyInt)  (Keyboard clientKeyStateDict myColor otherColor) =
    let
        myDarkFunc : Maybe Bool -> Maybe Bool
        myDarkFunc someBool =
            case someBool of
                Just False -> Just True
                otherwise  -> someBool
        myDict = Dict.update myKeyInt myDarkFunc clientKeyStateDict
    in
        Keyboard myDict myColor otherClientColor

updateKeyboardMadeKeyLightKeyboard : FromSuperPlace -> MadeKeyLight -> Keyboard -> Keyboard
updateKeyboardMadeKeyLightKeyboard fsp (MadeKeyLight otherClientColor myKeyInt)  (Keyboard clientKeyStateDict myColor otherColor) =
    let
        myLightFunc : Maybe Bool -> Maybe Bool
        myLightFunc someBool =
            case someBool of
                Just True  -> Just False
                otherwise  -> someBool
        myDict = Dict.update myKeyInt myLightFunc clientKeyStateDict
    in
        Keyboard myDict myColor otherClientColor


updateRandomColorNumberKeyboard : FromSuperPlace -> RandomColorNumber -> Keyboard -> Keyboard
updateRandomColorNumberKeyboard fsp (RandomColorNumber myColor)  (Keyboard clientKeyStateDict someCol otherColor) = 
        Keyboard clientKeyStateDict myColor otherColor

updateKeyboardRandomNumRolledKeyboard : FromSuperPlace -> RandomNumRolled -> Keyboard -> (Keyboard, Cmd RandomColorNumber)
updateKeyboardRandomNumRolledKeyboard fsp RandomNumRolled  keyboard = (keyboard, Random.generate RandomColorNumber (Random.int 0 24))



