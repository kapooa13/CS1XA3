module FrontEndNet.Update exposing(..)
import FrontEndNet.Static.Types exposing(..)
import FrontEndNet.Static.FromSuperPlace exposing(..)
import FrontEndNet.Static.ExtraTypes exposing(..)
import FrontEndNet.Static.Helpers.Keyboard as Keyboard
import Utils.Utils
import Debug exposing(todo)
import Dict

import FrontEndNet.Sounds exposing(..)

updateKeyboardBoardKeyUnpressedKeyboard : FromSuperPlace -> BoardKeyUnpressed -> Keyboard -> (Keyboard, Cmd NoOp)
updateKeyboardBoardKeyUnpressedKeyboard fsp (BoardKeyUnpressed myKeyInt)  keyboard =
            case myKeyInt of
                0          -> (keyboard, playSound "./q.mp3")
                1          -> (keyboard, playSound "./w.mp3")
                2          -> (keyboard, playSound "./e.mp3")
                otherwise  -> (keyboard, Cmd.none)


updateNoOpKeyboard : FromSuperPlace -> NoOp -> Keyboard -> Keyboard
updateNoOpKeyboard fsp NoOp  keyboard = keyboard


updateMakeDarkKeyboard : FromSuperPlace -> MakeDark -> Keyboard -> Keyboard
updateMakeDarkKeyboard fsp (MakeDark myKeyInt)  (Keyboard clientKeyStateDict) =
    let
        myDarkFunc : Maybe Bool -> Maybe Bool
        myDarkFunc someBool =
            case someBool of
                Just False -> Just True
                otherwise  -> someBool
        myDict = Dict.update myKeyInt myDarkFunc clientKeyStateDict
    in
        Keyboard myDict

updateMakeLightKeyboard : FromSuperPlace -> MakeLight -> Keyboard -> Keyboard
updateMakeLightKeyboard fsp (MakeLight myKeyInt)  (Keyboard clientKeyStateDict) =
    let
        myLightFunc : Maybe Bool -> Maybe Bool
        myLightFunc someBool =
            case someBool of
                Just True -> Just False
                otherwise  -> someBool
        myDict = Dict.update myKeyInt myLightFunc clientKeyStateDict
    in
        Keyboard myDict
