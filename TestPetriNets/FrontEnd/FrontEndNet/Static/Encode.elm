module FrontEndNet.Static.Encode exposing(..)
import FrontEndNet.Static.Types exposing(..)
import FrontEndNet.Static.ExtraTypes exposing(..)

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
        TBoardKeyPressed myKeyInt -> 
            let
                myKeyIntTxt = encodeInt (0) (3) myKeyInt
            in
                tConcat ["TBoardKeyPressed\u{0000}", myKeyIntTxt]
        TMakeDark clientKeyStateList myKeyInt -> 
            let
                clientKeyStateListTxt =
                    let
                        encodeclientKeyStateList_ _ (str4,clientKeyStateListList) =
                            case clientKeyStateListList of
                                clientKeyStateInt :: rest ->
                                    let
                                        clientKeyStateIntTxt = encodeInt (0) (1) clientKeyStateInt
                                    in
                                        (tConcat [str4,"\u{0000}",clientKeyStateIntTxt], rest)
                                [] -> (str4,clientKeyStateListList)
                        encodeclientKeyStateList ls =
                            lFoldl encodeclientKeyStateList_ ("",ls) (lRange 0 (lLength clientKeyStateList))
                    in
                        tConcat [encodeInt 0 16777216 <| lLength clientKeyStateList, pFst <| encodeclientKeyStateList clientKeyStateList]
                myKeyIntTxt = encodeInt (0) (3) myKeyInt
            in
                tConcat ["TMakeDark\u{0000}", clientKeyStateListTxt,"\u{0000}",myKeyIntTxt]
        TMakeLight clientKeyStateList myKeyInt -> 
            let
                clientKeyStateListTxt =
                    let
                        encodeclientKeyStateList_ _ (str4,clientKeyStateListList) =
                            case clientKeyStateListList of
                                clientKeyStateInt :: rest ->
                                    let
                                        clientKeyStateIntTxt = encodeInt (0) (1) clientKeyStateInt
                                    in
                                        (tConcat [str4,"\u{0000}",clientKeyStateIntTxt], rest)
                                [] -> (str4,clientKeyStateListList)
                        encodeclientKeyStateList ls =
                            lFoldl encodeclientKeyStateList_ ("",ls) (lRange 0 (lLength clientKeyStateList))
                    in
                        tConcat [encodeInt 0 16777216 <| lLength clientKeyStateList, pFst <| encodeclientKeyStateList clientKeyStateList]
                myKeyIntTxt = encodeInt (0) (3) myKeyInt
            in
                tConcat ["TMakeLight\u{0000}", clientKeyStateListTxt,"\u{0000}",myKeyIntTxt]


--extra types encoders

