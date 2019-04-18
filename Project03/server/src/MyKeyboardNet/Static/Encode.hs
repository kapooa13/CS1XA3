{-# LANGUAGE OverloadedStrings #-}
module MyKeyboardNet.Static.Encode where
import MyKeyboardNet.Static.Types

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
                myKeyIntTxt = encodeInt (0) (20) myKeyInt
            in
                tConcat ["MBoardKeyUnpressed\0", myKeyIntTxt]
        MMadeKeyDark myKeyInt -> 
            let
                myKeyIntTxt = encodeInt (0) (20) myKeyInt
            in
                tConcat ["MMadeKeyDark\0", myKeyIntTxt]
        MMadeKeyLight myKeyInt -> 
            let
                myKeyIntTxt = encodeInt (0) (20) myKeyInt
            in
                tConcat ["MMadeKeyLight\0", myKeyIntTxt]
        MRandomNumRolled -> 
                tConcat ["MRandomNumRolled"]


-- extra type encoders

