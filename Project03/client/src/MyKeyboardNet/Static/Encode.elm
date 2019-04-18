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
        TBoardKeyPressed myKeyInt -> 
            let
                myKeyIntTxt = encodeInt (0) (20) myKeyInt
            in
                tConcat ["TBoardKeyPressed\u{0000}", myKeyIntTxt]
        TMakeDark otherColor myKeyInt -> 
            let
                otherColorTxt = encodeInt (0) (24) otherColor
                myKeyIntTxt = encodeInt (0) (20) myKeyInt
            in
                tConcat ["TMakeDark\u{0000}", otherColorTxt,"\u{0000}",myKeyIntTxt]
        TMakeLight otherColor myKeyInt -> 
            let
                otherColorTxt = encodeInt (0) (24) otherColor
                myKeyIntTxt = encodeInt (0) (20) myKeyInt
            in
                tConcat ["TMakeLight\u{0000}", otherColorTxt,"\u{0000}",myKeyIntTxt]
        TRollRandomNum -> 
                tConcat ["TRollRandomNum"]


--extra types encoders

