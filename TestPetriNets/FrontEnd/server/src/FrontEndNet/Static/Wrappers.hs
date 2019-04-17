module FrontEndNet.Static.Wrappers where
import Static.Dict
import Data.Map.Strict as Dict
import FrontEndNet.Static.Types

unwrapBoardKeyUnpressed :: BoardKeyUnpressed -> ClientMessage
unwrapBoardKeyUnpressed (BoardKeyUnpressed myKeyInt)  = (MBoardKeyUnpressed myKeyInt) 



unwrapKeyboardPlayer :: KeyboardPlayer -> Player
unwrapKeyboardPlayer KeyboardPlayer  = PKeyboardPlayer 



unwrapBoardKeyPressedfromKeyboard :: BoardKeyPressedfromKeyboard -> (Player, Maybe ClientMessage)
unwrapBoardKeyPressedfromKeyboard trans =
    case trans of
        (BoardKeyPressed_KeyboardtoKeyboard player msg)  -> (unwrapKeyboardPlayer player, Just $ unwrapBoardKeyUnpressed msg)





unwrapBoardKeyPressed :: BoardKeyPressed -> Transition
unwrapBoardKeyPressed (BoardKeyPressed myKeyInt)  = (TBoardKeyPressed myKeyInt) 



