{-# LANGUAGE OverloadedStrings #-}
module FrontEndNet.Static.Encode where
import FrontEndNet.Static.Types

import Utils.Utils
import qualified Data.Text as T
import Static.Types
import Data.Map.Strict as Dict
import qualified Static.Result as Result
encodeClientMessage :: ClientMessage -> T.Text
encodeClientMessage clientmessage = 
    case clientmessage of
        MBoardKeyUnpressed myKeyInt -> 
            let
                myKeyIntTxt = encodeInt (0) (3) myKeyInt
            in
                tConcat ["MBoardKeyUnpressed\0", myKeyIntTxt]


-- extra type encoders

