module FrontEndNet.Update exposing(..)
import FrontEndNet.Static.Types exposing(..)
import FrontEndNet.Static.FromSuperPlace exposing(..)
import FrontEndNet.Static.ExtraTypes exposing(..)
import FrontEndNet.Static.Helpers.Keyboard as Keyboard
import Utils.Utils
import Debug exposing(todo)
import Array  -- why do I have to explicitly import something in the core module?? tch tch bad elm.

import FrontEndNet.Sounds exposing(..)

{-
- possible bug:
updateKeyboardBoardKeyUnpressedKeyboard : FromSuperPlace -> BoardKeyUnpressed -> Keyboard -> (Keyboard Cmd, NoOp)
                                                                               should be     (Keyboard, Cmd NoOp)
-}

updateKeyboardBoardKeyUnpressedKeyboard : FromSuperPlace -> BoardKeyUnpressed -> Keyboard -> (Keyboard, Cmd NoOp)
updateKeyboardBoardKeyUnpressedKeyboard fsp (BoardKeyUnpressed myKeyInt)  keyboard =
            case myKeyInt of
                0          -> (keyboard, playSound "./q.mp3")
                1          -> (keyboard, playSound "./w.mp3")
                otherwise  -> (keyboard, Cmd.none)


updateNoOpKeyboard : FromSuperPlace -> NoOp -> Keyboard -> Keyboard
updateNoOpKeyboard fsp NoOp  keyboard = keyboard


updateKeyboardMadeKeyDarkKeyboard : FromSuperPlace -> MadeKeyDark -> Keyboard -> Keyboard
updateKeyboardMadeKeyDarkKeyboard fsp (MadeKeyDark clientKeyStateList myKeyInt)  keyboard =
    let
        myClientList = Array.toList <| Array.set myKeyInt 1 (Array.fromList clientKeyStateList)
    in
       (Keyboard myClientList)


updateKeyboardMadeKeyLightKeyboard : FromSuperPlace -> MadeKeyLight -> Keyboard -> Keyboard
updateKeyboardMadeKeyLightKeyboard fsp (MadeKeyLight clientKeyStateList myKeyInt)  keyboard =
    let
        myClientList = Array.toList <| Array.set myKeyInt 0 (Array.fromList clientKeyStateList)
    in
       (Keyboard myClientList)


