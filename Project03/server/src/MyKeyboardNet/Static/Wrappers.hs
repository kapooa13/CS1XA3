module MyKeyboardNet.Static.Wrappers where
import Static.Dict
import Data.Map.Strict as Dict
import MyKeyboardNet.Static.Types

unwrapBoardKeyUnpressed :: BoardKeyUnpressed -> ClientMessage
unwrapBoardKeyUnpressed (BoardKeyUnpressed clientKeyColorDict myColor myKeyInt)  = (MBoardKeyUnpressed clientKeyColorDict myColor myKeyInt) 


unwrapMadeKeyDark :: MadeKeyDark -> ClientMessage
unwrapMadeKeyDark (MadeKeyDark myKeyInt)  = (MMadeKeyDark myKeyInt) 


unwrapMadeKeyLight :: MadeKeyLight -> ClientMessage
unwrapMadeKeyLight (MadeKeyLight myKeyInt)  = (MMadeKeyLight myKeyInt) 


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
unwrapBoardKeyPressed (BoardKeyPressed clientKeyColorDict myColor myKeyInt)  = (TBoardKeyPressed clientKeyColorDict myColor myKeyInt) 


unwrapMakeDark :: MakeDark -> Transition
unwrapMakeDark (MakeDark myKeyInt)  = (TMakeDark myKeyInt) 


unwrapMakeLight :: MakeLight -> Transition
unwrapMakeLight (MakeLight myKeyInt)  = (TMakeLight myKeyInt) 


unwrapRollRandomNum :: RollRandomNum -> Transition
unwrapRollRandomNum (RollRandomNum clientKeyColorDict myColor myKeyInt)  = (TRollRandomNum clientKeyColorDict myColor myKeyInt) 



