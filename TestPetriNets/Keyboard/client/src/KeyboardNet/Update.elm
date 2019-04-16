module KeyboardNet.Update exposing(..)
import KeyboardNet.Sound exposing(..)
import KeyboardNet.Static.Types exposing(..)
import KeyboardNet.Static.FromSuperPlace exposing(..)
import KeyboardNet.Static.ExtraTypes exposing(..)
import KeyboardNet.Static.Helpers.Keyboard as Keyboard
import Utils.Utils
import Debug exposing(todo)

-- updateKeyboardKeyUnpressedKeyboard : FromSuperPlace -> KeyUnpressed -> Keyboard -> Keyboard
updateKeyboardKeyUnpressedKeyboard : FromSuperPlace -> KeyUnpressed -> Keyboard -> (Keyboard, Cmd NoOp)
updateKeyboardKeyUnpressedKeyboard fsp (KeyUnpressed myKeyInt) keyboard =
        case myKeyInt of
                0 -> (Keyboard, playSound "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")
                1 -> (Keyboard, playSound "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")
                _ -> (Keyboard, Cmd.none)

    --(Keyboard, Cmd.none)

updateNoOpKeyboard : FromSuperPlace -> NoOp -> Keyboard -> Keyboard
updateNoOpKeyboard fsp _ keyboard = keyboard

