module MyKeyboardNet.Update exposing(..)
import MyKeyboardNet.Static.Types exposing(..)
import MyKeyboardNet.Static.FromSuperPlace exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)
import MyKeyboardNet.Static.Helpers.Keyboard as Keyboard
import Utils.Utils
import Debug exposing(todo)

updateKeyboardBoardKeyUnpressedKeyboard : FromSuperPlace -> BoardKeyUnpressed -> Keyboard -> (Keyboard Cmd, NoOp)
updateKeyboardBoardKeyUnpressedKeyboard fsp (BoardKeyUnpressed clientKeyColorDict myColor myKeyInt)  keyboard =
    todo "Please implement update function updateKeyboardBoardKeyUnpressedKeyboard for the MyKeyboardNet net."


updateNoOpKeyboard : FromSuperPlace -> NoOp -> Keyboard -> Keyboard
updateNoOpKeyboard fsp NoOp  keyboard =
    todo "Please implement update function updateNoOpKeyboard for the MyKeyboardNet net."

updateKeyboardMadeKeyDarkKeyboard : FromSuperPlace -> MadeKeyDark -> Keyboard -> Keyboard
updateKeyboardMadeKeyDarkKeyboard fsp (MadeKeyDark myKeyInt)  keyboard =
    todo "Please implement update function updateKeyboardMadeKeyDarkKeyboard for the MyKeyboardNet net."


updateKeyboardMadeKeyLightKeyboard : FromSuperPlace -> MadeKeyLight -> Keyboard -> Keyboard
updateKeyboardMadeKeyLightKeyboard fsp (MadeKeyLight myKeyInt)  keyboard =
    todo "Please implement update function updateKeyboardMadeKeyLightKeyboard for the MyKeyboardNet net."


updateRandomColorNumberKeyboard : FromSuperPlace -> RandomColorNumber -> Keyboard -> Keyboard
updateRandomColorNumberKeyboard fsp (RandomColorNumber myColor)  keyboard =
    todo "Please implement update function updateRandomColorNumberKeyboard for the MyKeyboardNet net."

updateKeyboardRandomNumRolledKeyboard : FromSuperPlace -> RandomNumRolled -> Keyboard -> (Keyboard Cmd, RandomColorNumber)
updateKeyboardRandomNumRolledKeyboard fsp RandomNumRolled  keyboard =
    todo "Please implement update function updateKeyboardRandomNumRolledKeyboard for the MyKeyboardNet net."



