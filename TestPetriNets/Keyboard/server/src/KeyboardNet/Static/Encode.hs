{-# LANGUAGE OverloadedStrings #-}
module KeyboardNet.Static.Encode where
import KeyboardNet.Static.Types

import Utils.Utils
import qualified Data.Text as T
import Static.Types
import Data.Map.Strict as Dict
import qualified Static.Result as Result
encodeClientMessage :: ClientMessage -> T.Text
encodeClientMessage clientmessage = 
    case clientmessage of
        MKeyUnpressed myKeyInteger -> 
            let
                myKeyIntegerTxt = encodeInt (0) (10) myKeyInteger
            in
                tConcat ["MKeyUnpressed\0", myKeyIntegerTxt]


-- extra type encoders

