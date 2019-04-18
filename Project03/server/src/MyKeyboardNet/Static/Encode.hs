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
        MBoardKeyUnpressed clientKeyColorDict myColor myKeyInt -> 
            let
                clientKeyColorDictAsList = Dict.toList clientKeyColorDict
                clientKeyColorDictAsListTxt =
                    let
                        encodeclientKeyColorDictAsList_ _ (str0,clientKeyColorDictAsListList) =
                            case clientKeyColorDictAsListList of
                                keyValuePairs : rest ->
                                    let
                                        keyValuePairsTxt =
                                            let
                                                (fst6,snd6) = keyValuePairs
                                                fst6Txt = encodeInt (0) (20) fst6
                                                snd6Txt = encodeInt (0) (24) snd6
                                            in
                                                tConcat [fst6Txt,"\0",snd6Txt]
                                    in
                                        (tConcat [str0,"\0",keyValuePairsTxt], rest)
                                [] -> (str0,clientKeyColorDictAsListList)
                        encodeclientKeyColorDictAsList ls =
                            lFoldl encodeclientKeyColorDictAsList_ ("",ls) (lRange 0 (lLength clientKeyColorDictAsList))
                    in
                        tConcat [encodeInt 0 16777216 <| lLength clientKeyColorDictAsList, pFst <| encodeclientKeyColorDictAsList clientKeyColorDictAsList]
                myColorTxt = encodeInt (0) (24) myColor
                myKeyIntTxt = encodeInt (0) (20) myKeyInt
            in
                tConcat ["MBoardKeyUnpressed\0", clientKeyColorDictAsListTxt,"\0",myColorTxt,"\0",myKeyIntTxt]
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

