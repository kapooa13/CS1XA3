module MyKeyboardNet.Static.Encode exposing(..)
import MyKeyboardNet.Static.Types exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)

import Utils.Utils exposing(..)
import Static.Types
import Dict exposing(..)
encodeTransition : Transition -> Maybe String
encodeTransition trans =
    case trans of
        Internal _ -> Nothing
        External ext -> Just <| encodeOutgoingTransition ext
encodeOutgoingTransition : OutgoingTransition -> String
encodeOutgoingTransition outgoingtransition = 
    case outgoingtransition of
        TBoardKeyPressed clientKeyColorDict myColor myKeyInt -> 
            let
                clientKeyColorDictAsList = Dict.toList clientKeyColorDict
                clientKeyColorDictAsListTxt =
                    let
                        encodeclientKeyColorDictAsList_ _ (str0,clientKeyColorDictAsListList) =
                            case clientKeyColorDictAsListList of
                                keyValuePairs :: rest ->
                                    let
                                        keyValuePairsTxt =
                                            let
                                                (fst6,snd6) = keyValuePairs
                                                fst6Txt = encodeInt (0) (20) fst6
                                                snd6Txt = encodeInt (0) (24) snd6
                                            in
                                                tConcat [fst6Txt,"\u{0000}",snd6Txt]
                                    in
                                        (tConcat [str0,"\u{0000}",keyValuePairsTxt], rest)
                                [] -> (str0,clientKeyColorDictAsListList)
                        encodeclientKeyColorDictAsList ls =
                            lFoldl encodeclientKeyColorDictAsList_ ("",ls) (lRange 0 (lLength clientKeyColorDictAsList))
                    in
                        tConcat [encodeInt 0 16777216 <| lLength clientKeyColorDictAsList, pFst <| encodeclientKeyColorDictAsList clientKeyColorDictAsList]
                myColorTxt = encodeInt (0) (24) myColor
                myKeyIntTxt = encodeInt (0) (20) myKeyInt
            in
                tConcat ["TBoardKeyPressed\u{0000}", clientKeyColorDictAsListTxt,"\u{0000}",myColorTxt,"\u{0000}",myKeyIntTxt]
        TMakeDark myKeyInt -> 
            let
                myKeyIntTxt = encodeInt (0) (20) myKeyInt
            in
                tConcat ["TMakeDark\u{0000}", myKeyIntTxt]
        TMakeLight myKeyInt -> 
            let
                myKeyIntTxt = encodeInt (0) (20) myKeyInt
            in
                tConcat ["TMakeLight\u{0000}", myKeyIntTxt]
        TRollRandomNum clientKeyColorDict myColor myKeyInt -> 
            let
                clientKeyColorDictAsList = Dict.toList clientKeyColorDict
                clientKeyColorDictAsListTxt =
                    let
                        encodeclientKeyColorDictAsList_ _ (str0,clientKeyColorDictAsListList) =
                            case clientKeyColorDictAsListList of
                                keyValuePairs :: rest ->
                                    let
                                        keyValuePairsTxt =
                                            let
                                                (fst6,snd6) = keyValuePairs
                                                fst6Txt = encodeInt (0) (20) fst6
                                                snd6Txt = encodeInt (0) (24) snd6
                                            in
                                                tConcat [fst6Txt,"\u{0000}",snd6Txt]
                                    in
                                        (tConcat [str0,"\u{0000}",keyValuePairsTxt], rest)
                                [] -> (str0,clientKeyColorDictAsListList)
                        encodeclientKeyColorDictAsList ls =
                            lFoldl encodeclientKeyColorDictAsList_ ("",ls) (lRange 0 (lLength clientKeyColorDictAsList))
                    in
                        tConcat [encodeInt 0 16777216 <| lLength clientKeyColorDictAsList, pFst <| encodeclientKeyColorDictAsList clientKeyColorDictAsList]
                myColorTxt = encodeInt (0) (24) myColor
                myKeyIntTxt = encodeInt (0) (20) myKeyInt
            in
                tConcat ["TRollRandomNum\u{0000}", clientKeyColorDictAsListTxt,"\u{0000}",myColorTxt,"\u{0000}",myKeyIntTxt]


--extra types encoders

