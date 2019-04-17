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
        MMadeKeyDark clientKeyStateList myKeyInt -> 
            let
                clientKeyStateListTxt =
                    let
                        encodeclientKeyStateList_ _ (str4,clientKeyStateListList) =
                            case clientKeyStateListList of
                                clientKeyStateInt : rest ->
                                    let
                                        clientKeyStateIntTxt = encodeInt (0) (1) clientKeyStateInt
                                    in
                                        (tConcat [str4,"\0",clientKeyStateIntTxt], rest)
                                [] -> (str4,clientKeyStateListList)
                        encodeclientKeyStateList ls =
                            lFoldl encodeclientKeyStateList_ ("",ls) (lRange 0 (lLength clientKeyStateList))
                    in
                        tConcat [encodeInt 0 16777216 <| lLength clientKeyStateList, pFst <| encodeclientKeyStateList clientKeyStateList]
                myKeyIntTxt = encodeInt (0) (3) myKeyInt
            in
                tConcat ["MMadeKeyDark\0", clientKeyStateListTxt,"\0",myKeyIntTxt]
        MMadeKeyLight clientKeyStateList myKeyInt -> 
            let
                clientKeyStateListTxt =
                    let
                        encodeclientKeyStateList_ _ (str4,clientKeyStateListList) =
                            case clientKeyStateListList of
                                clientKeyStateInt : rest ->
                                    let
                                        clientKeyStateIntTxt = encodeInt (0) (1) clientKeyStateInt
                                    in
                                        (tConcat [str4,"\0",clientKeyStateIntTxt], rest)
                                [] -> (str4,clientKeyStateListList)
                        encodeclientKeyStateList ls =
                            lFoldl encodeclientKeyStateList_ ("",ls) (lRange 0 (lLength clientKeyStateList))
                    in
                        tConcat [encodeInt 0 16777216 <| lLength clientKeyStateList, pFst <| encodeclientKeyStateList clientKeyStateList]
                myKeyIntTxt = encodeInt (0) (3) myKeyInt
            in
                tConcat ["MMadeKeyLight\0", clientKeyStateListTxt,"\0",myKeyIntTxt]


-- extra type encoders

