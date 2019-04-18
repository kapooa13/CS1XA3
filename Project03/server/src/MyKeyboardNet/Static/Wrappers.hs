module MyKeyboardNet.Static.Wrappers where
import Static.Dict
import Data.Map.Strict as Dict
import MyKeyboardNet.Static.Types

unwrapBoardKeyUnpressed :: BoardKeyUnpressed -> ClientMessage
unwrapBoardKeyUnpressed (BoardKeyUnpressed myKeyInt)  = (MBoardKeyUnpressed myKeyInt) 


unwrapMadeKeyDark :: MadeKeyDark -> ClientMessage
unwrapMadeKeyDark (MadeKeyDark otherColor myKeyInt)  = (MMadeKeyDark otherColor myKeyInt) 


unwrapMadeKeyLight :: MadeKeyLight -> ClientMessage
unwrapMadeKeyLight (MadeKeyLight otherColor myKeyInt)  = (MMadeKeyLight otherColor myKeyInt) 


unwrapRandomNumRolled :: RandomNumRolled -> ClientMessage
unwrapRandomNumRolled RandomNumRolled  = MRandomNumRolled 



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




unwrapRollRandomNumfromKeyboard :: RollRandomNumfromKeyboard -> (Player, Maybe ClientMessage)
unwrapRollRandomNumfromKeyboard trans =
    case trans of
        (RollRandomNum_KeyboardtoKeyboard player msg)  -> (unwrapKeyboardPlayer player, Just $ unwrapRandomNumRolled msg)





unwrapBoardKeyPressed :: BoardKeyPressed -> Transition
unwrapBoardKeyPressed (BoardKeyPressed myKeyInt)  = (TBoardKeyPressed myKeyInt) 


unwrapMakeDark :: MakeDark -> Transition
unwrapMakeDark (MakeDark otherColor myKeyInt)  = (TMakeDark otherColor myKeyInt) 


unwrapMakeLight :: MakeLight -> Transition
unwrapMakeLight (MakeLight otherColor myKeyInt)  = (TMakeLight otherColor myKeyInt) 


unwrapRollRandomNum :: RollRandomNum -> Transition
unwrapRollRandomNum RollRandomNum  = TRollRandomNum 



