module KeyboardNet.Static.Wrappers where
import Static.Dict
import Data.Map.Strict as Dict
import KeyboardNet.Static.Types

unwrapKeyUnpressed :: KeyUnpressed -> ClientMessage
unwrapKeyUnpressed (KeyUnpressed myKeyInteger)  = (MKeyUnpressed myKeyInteger) 



unwrapKeyboardPlayer :: KeyboardPlayer -> Player
unwrapKeyboardPlayer KeyboardPlayer  = PKeyboardPlayer 



unwrapSomeKeyPressedfromKeyboard :: SomeKeyPressedfromKeyboard -> (Player, Maybe ClientMessage)
unwrapSomeKeyPressedfromKeyboard trans =
    case trans of
        (SomeKeyPressed_KeyboardtoKeyboard player msg)  -> (unwrapKeyboardPlayer player, Just $ unwrapKeyUnpressed msg)





unwrapSomeKeyPressed :: SomeKeyPressed -> Transition
unwrapSomeKeyPressed (SomeKeyPressed myKeyInteger)  = (TSomeKeyPressed myKeyInteger) 



