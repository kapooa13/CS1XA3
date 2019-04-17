module KeyboardPrototypeNet.Update exposing(..)
import KeyboardPrototypeNet.Static.Types exposing(..)
import KeyboardPrototypeNet.Static.FromSuperPlace exposing(..)
import KeyboardPrototypeNet.Static.ExtraTypes exposing(..)
import KeyboardPrototypeNet.Static.Helpers.Keyboard as Keyboard
import Utils.Utils
import Debug exposing(todo)

updateNoOpKeyboard : FromSuperPlace -> NoOp -> Keyboard -> Keyboard
updateNoOpKeyboard fsp NoOp  keyboard =
    todo "Please implement update function updateNoOpKeyboard for the KeyboardPrototypeNet net."

updateKeyboardDeflatedBoardKeyKeyboard : FromSuperPlace -> DeflatedBoardKey -> Keyboard -> (Keyboard Cmd, NoOp)
updateKeyboardDeflatedBoardKeyKeyboard fsp (DeflatedBoardKey myKeyInteger)  keyboard =
    todo "Please implement update function updateKeyboardDeflatedBoardKeyKeyboard for the KeyboardPrototypeNet net."



