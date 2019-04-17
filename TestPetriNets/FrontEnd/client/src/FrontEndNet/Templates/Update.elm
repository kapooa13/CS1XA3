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

updateMakeDarkKeyboard : FromSuperPlace -> MakeDark -> Keyboard -> Keyboard
updateMakeDarkKeyboard fsp (MakeDark myKeyInt)  keyboard =
    todo "Please implement update function updateMakeDarkKeyboard for the FrontEndNet net."

updateMakeLightKeyboard : FromSuperPlace -> MakeLight -> Keyboard -> Keyboard
updateMakeLightKeyboard fsp (MakeLight myKeyInt)  keyboard =
    todo "Please implement update function updateMakeLightKeyboard for the FrontEndNet net."


