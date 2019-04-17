module KeyboardPrototypeNet.Static.Encode exposing(..)
import KeyboardPrototypeNet.Static.Types exposing(..)
import KeyboardPrototypeNet.Static.ExtraTypes exposing(..)

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
        TBoardKeyPressed myKeyInteger -> 
            let
                myKeyIntegerTxt = encodeInt (0) (19) myKeyInteger
            in
                tConcat ["TBoardKeyPressed\u{0000}", myKeyIntegerTxt]


--extra types encoders

