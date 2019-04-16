module KeyboardNet.Static.Encode exposing(..)
import KeyboardNet.Static.Types exposing(..)
import KeyboardNet.Static.ExtraTypes exposing(..)

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
        TSomeKeyPressed myKeyInteger -> 
            let
                myKeyIntegerTxt = encodeInt (0) (10) myKeyInteger
            in
                tConcat ["TSomeKeyPressed\u{0000}", myKeyIntegerTxt]


--extra types encoders

