module KeyboardNet.Update exposing(..)
import KeyboardNet.Static.Types exposing(..)
import KeyboardNet.Static.FromSuperPlace exposing(..)
import KeyboardNet.Static.ExtraTypes exposing(..)
import KeyboardNet.Static.Helpers.Keyboard as Keyboard
import Utils.Utils
import Debug exposing(todo)

updateKeyboardKeyUnpressedKeyboard : FromSuperPlace -> KeyUnpressed -> Keyboard -> (Keyboard Cmd, NoOp)
updateKeyboardKeyUnpressedKeyboard fsp (KeyUnpressed myKeyInteger)  keyboard =
    todo "Please implement update function updateKeyboardKeyUnpressedKeyboard for the KeyboardNet net."


updateNoOpKeyboard : FromSuperPlace -> NoOp -> Keyboard -> Keyboard
updateNoOpKeyboard fsp NoOp  keyboard =
    todo "Please implement update function updateNoOpKeyboard for the KeyboardNet net."


