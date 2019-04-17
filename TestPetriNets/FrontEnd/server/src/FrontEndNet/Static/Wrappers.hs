module FrontEndNet.Static.Wrappers where
import Static.Dict
import Data.Map.Strict as Dict
import FrontEndNet.Static.Types

unwrapBoardKeyUnpressed :: BoardKeyUnpressed -> ClientMessage
unwrapBoardKeyUnpressed (BoardKeyUnpressed myKeyInt)  = (MBoardKeyUnpressed myKeyInt) 


unwrapMadeKeyDark :: MadeKeyDark -> ClientMessage
unwrapMadeKeyDark (MadeKeyDark clientKeyStateList myKeyInt)  = (MMadeKeyDark clientKeyStateList myKeyInt) 


unwrapMadeKeyLight :: MadeKeyLight -> ClientMessage
unwrapMadeKeyLight (MadeKeyLight clientKeyStateList myKeyInt)  = (MMadeKeyLight clientKeyStateList myKeyInt) 



unwrapKeyboardPlayer :: KeyboardPlayer -> Player
unwrapKeyboardPlayer KeyboardPlayer  = PKeyboardPlayer 



unwrapBoardKeyPressedfromKeyboard :: BoardKeyPressedfromKeyboard -> (Player, Maybe ClientMessage)
unwrapBoardKeyPressedfromKeyboard trans =
    case trans of
        (BoardKeyPressed_KeyboardtoKeyboard player msg)  -> (unwrapKeyboardPlayer player, Just $ unwrapBoardKeyUnpressed msg)




unwrapMakeDarkfromKeyboard :: MakeDarkfromKeyboard -> (Player, Maybe ClientMessage)
unwrapMakeDarkfromKeyboard trans =
    case trans of
        (MakeDark_KeyboardtoKeyboard player msg)  -> (unwrapKeyboardPlayer player, Just $ unwrapMadeKeyDark msg)




unwrapMakeLightfromKeyboard :: MakeLightfromKeyboard -> (Player, Maybe ClientMessage)
unwrapMakeLightfromKeyboard trans =
    case trans of
        (MakeLight_KeyboardtoKeyboard player msg)  -> (unwrapKeyboardPlayer player, Just $ unwrapMadeKeyLight msg)





unwrapBoardKeyPressed :: BoardKeyPressed -> Transition
unwrapBoardKeyPressed (BoardKeyPressed myKeyInt)  = (TBoardKeyPressed myKeyInt) 


unwrapMakeDark :: MakeDark -> Transition
unwrapMakeDark (MakeDark clientKeyStateList myKeyInt)  = (TMakeDark clientKeyStateList myKeyInt) 


unwrapMakeLight :: MakeLight -> Transition
unwrapMakeLight (MakeLight clientKeyStateList myKeyInt)  = (TMakeLight clientKeyStateList myKeyInt) 



