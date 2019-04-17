module KeyboardPrototypeNet.Static.Wrappers where
import Static.Dict
import Data.Map.Strict as Dict
import KeyboardPrototypeNet.Static.Types

unwrapDeflatedBoardKey :: DeflatedBoardKey -> ClientMessage
unwrapDeflatedBoardKey (DeflatedBoardKey myKeyInteger)  = (MDeflatedBoardKey myKeyInteger) 



unwrapKeyboardPlayer :: KeyboardPlayer -> Player
unwrapKeyboardPlayer KeyboardPlayer  = PKeyboardPlayer 



unwrapBoardKeyPressedfromKeyboard :: BoardKeyPressedfromKeyboard -> (Player, Maybe ClientMessage)
unwrapBoardKeyPressedfromKeyboard trans =
    case trans of
        (BoardKeyPressed_KeyboardtoKeyboard player msg)  -> (unwrapKeyboardPlayer player, Just $ unwrapDeflatedBoardKey msg)





unwrapBoardKeyPressed :: BoardKeyPressed -> Transition
unwrapBoardKeyPressed (BoardKeyPressed myKeyInteger)  = (TBoardKeyPressed myKeyInteger) 



