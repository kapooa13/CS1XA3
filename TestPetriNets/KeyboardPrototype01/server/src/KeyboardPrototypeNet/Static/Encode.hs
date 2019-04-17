{-# LANGUAGE OverloadedStrings #-}
module KeyboardPrototypeNet.Static.Encode where
import KeyboardPrototypeNet.Static.Types

import Utils.Utils
import qualified Data.Text as T
import Static.Types
import Data.Map.Strict as Dict
import qualified Static.Result as Result
encodeClientMessage :: ClientMessage -> T.Text
encodeClientMessage clientmessage = 
    case clientmessage of
        MDeflatedBoardKey myKeyInteger -> 
            let
                myKeyIntegerTxt = encodeInt (0) (20) myKeyInteger
            in
                tConcat ["MDeflatedBoardKey\0", myKeyIntegerTxt]


-- extra type encoders

