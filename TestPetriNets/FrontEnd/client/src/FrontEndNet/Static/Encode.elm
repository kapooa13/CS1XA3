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


--extra types encoders

