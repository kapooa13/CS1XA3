module MyKeyboardNet.Update exposing(..)
import MyKeyboardNet.Static.Types exposing(..)
import MyKeyboardNet.Static.FromSuperPlace exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)
import MyKeyboardNet.Static.Helpers.Keyboard as Keyboard
import Utils.Utils
import Debug exposing(todo)

--oldclient

import Dict
import MyKeyboardNet.Sounds exposing(..)

updateKeyboardBoardKeyUnpressedKeyboard : FromSuperPlace -> BoardKeyUnpressed -> Keyboard -> (Keyboard Cmd, NoOp)
updateKeyboardBoardKeyUnpressedKeyboard fsp (BoardKeyUnpressed myKeyInt)  keyboard =
            case myKeyInt of
                0          -> (Keyboard, playSound "./notes/q.mp3")
                1          -> (Keyboard, playSound "./notes/w.mp3")
                2          -> (Keyboard, playSound "./notes/e.mp3")
                3          -> (Keyboard, playSound "./notes/r.mp3")
                4          -> (Keyboard, playSound "./notes/t.mp3")
                5          -> (Keyboard, playSound "./notes/y.mp3")
                6          -> (Keyboard, playSound "./notes/u.mp3")
                7          -> (Keyboard, playSound "./notes/i.mp3")
                8          -> (Keyboard, playSound "./notes/o.mp3")
                9          -> (Keyboard, playSound "./notes/p.mp3")
                10         -> (Keyboard, playSound "./notes/a.mp3")
                11         -> (Keyboard, playSound "./notes/s.mp3")
                12         -> (Keyboard, playSound "./notes/qup2.mp3")
                13         -> (Keyboard, playSound "./notes/wup3.mp3")
                14         -> (Keyboard, playSound "./notes/eup4.mp3")
                15         -> (Keyboard, playSound "./notes/tup6.mp3")
                16         -> (Keyboard, playSound "./notes/yup7.mp3")
                17         -> (Keyboard, playSound "./notes/iup9.mp3")
                18         -> (Keyboard, playSound "./notes/oup0.mp3")
                19         -> (Keyboard, playSound "./notes/pup-.mp3")
                otherwise  -> (Keyboard, Cmd.none)


updateNoOpKeyboard : FromSuperPlace -> NoOp -> Keyboard -> Keyboard
updateNoOpKeyboard fsp NoOp  keyboard = keyboard


updateKeyboardMadeKeyDarkKeyboard : FromSuperPlace -> MadeKeyDark -> Keyboard -> Keyboard
updateKeyboardMadeKeyDarkKeyboard fsp (MadeKeyDark myKeyInt)  (Keyboard clientKeyStateDict myColor) =
    let
        myDarkFunc : Maybe Bool -> Maybe Bool
        myDarkFunc someBool =
            case someBool of
                Just False -> Just True
                otherwise  -> someBool
        myDict = Dict.update myKeyInt myDarkFunc clientKeyStateDict
    in
        Keyboard myDict myColor


updateKeyboardMadeKeyLightKeyboard : FromSuperPlace -> MadeKeyLight -> Keyboard -> Keyboard
updateKeyboardMadeKeyLightKeyboard fsp (MadeKeyLight myKeyInt)  (Keyboard clientKeyStateDict myColor) =
    let
        myLightFunc : Maybe Bool -> Maybe Bool
        myLightFunc someBool =
            case someBool of
                Just True  -> Just False
                otherwise  -> someBool
        myDict = Dict.update myKeyInt myLightFunc clientKeyStateDict
    in
        Keyboard myDict myColor
