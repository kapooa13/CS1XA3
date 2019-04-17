module FrontEndNet.Static.Wrappers exposing(..)
import FrontEndNet.Static.ExtraTypes exposing(..)
import FrontEndNet.Static.Types exposing(..)

import Dict exposing (Dict)
x = 0
unwrapBoardKeyPressed : BoardKeyPressed -> OutgoingTransition
unwrapBoardKeyPressed (BoardKeyPressed myKeyInt)  = (TBoardKeyPressed myKeyInt) 


unwrapMakeDark : MakeDark -> OutgoingTransition
unwrapMakeDark (MakeDark clientKeyStateList myKeyInt)  = (TMakeDark clientKeyStateList myKeyInt) 


unwrapMakeLight : MakeLight -> OutgoingTransition
unwrapMakeLight (MakeLight clientKeyStateList myKeyInt)  = (TMakeLight clientKeyStateList myKeyInt) 



unwrapNoOp : NoOp -> InternalTransition
unwrapNoOp NoOp  = TNoOp 



