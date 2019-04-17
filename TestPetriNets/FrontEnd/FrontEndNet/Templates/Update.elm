module FrontEndNet.Update exposing(..)
import FrontEndNet.Static.Types exposing(..)
import FrontEndNet.Static.FromSuperPlace exposing(..)
import FrontEndNet.Static.ExtraTypes exposing(..)
import FrontEndNet.Static.Helpers.Keyboard as Keyboard
import Utils.Utils
import Debug exposing(todo)

updateKeyboardBoardKeyUnpressedKeyboard : FromSuperPlace -> BoardKeyUnpressed -> Keyboard -> (Keyboard Cmd, NoOp)
updateKeyboardBoardKeyUnpressedKeyboard fsp (BoardKeyUnpressed myKeyInt)  keyboard =
    todo "Please implement update function updateKeyboardBoardKeyUnpressedKeyboard for the FrontEndNet net."


updateNoOpKeyboard : FromSuperPlace -> NoOp -> Keyboard -> Keyboard
updateNoOpKeyboard fsp NoOp  keyboard =
    todo "Please implement update function updateNoOpKeyboard for the FrontEndNet net."

updateKeyboardMadeKeyDarkKeyboard : FromSuperPlace -> MadeKeyDark -> Keyboard -> Keyboard
updateKeyboardMadeKeyDarkKeyboard fsp (MadeKeyDark clientKeyStateList myKeyInt)  keyboard =
    todo "Please implement update function updateKeyboardMadeKeyDarkKeyboard for the FrontEndNet net."


updateKeyboardMadeKeyLightKeyboard : FromSuperPlace -> MadeKeyLight -> Keyboard -> Keyboard
updateKeyboardMadeKeyLightKeyboard fsp (MadeKeyLight clientKeyStateList myKeyInt)  keyboard =
    todo "Please implement update function updateKeyboardMadeKeyLightKeyboard for the FrontEndNet net."



