module FrontEndNet.Static.Wrappers exposing(..)
import FrontEndNet.Static.ExtraTypes exposing(..)
import FrontEndNet.Static.Types exposing(..)

import Dict exposing (Dict)
x = 0
unwrapBoardKeyPressed : BoardKeyPressed -> OutgoingTransition
unwrapBoardKeyPressed (BoardKeyPressed myKeyInt)  = (TBoardKeyPressed myKeyInt) 



unwrapNoOp : NoOp -> InternalTransition
unwrapNoOp NoOp  = TNoOp 


unwrapMakeDark : MakeDark -> InternalTransition
unwrapMakeDark (MakeDark myKeyInt)  = (TMakeDark myKeyInt) 


unwrapMakeLight : MakeLight -> InternalTransition
unwrapMakeLight (MakeLight myKeyInt)  = (TMakeLight myKeyInt) 



