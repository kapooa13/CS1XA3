module MyKeyboardNet.Static.Wrappers exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)
import MyKeyboardNet.Static.Types exposing(..)

import Dict exposing (Dict)
x = 0
unwrapBoardKeyPressed : BoardKeyPressed -> OutgoingTransition
unwrapBoardKeyPressed (BoardKeyPressed myKeyInt)  = (TBoardKeyPressed myKeyInt) 


unwrapMakeDark : MakeDark -> OutgoingTransition
unwrapMakeDark (MakeDark otherColor myKeyInt)  = (TMakeDark otherColor myKeyInt) 


unwrapMakeLight : MakeLight -> OutgoingTransition
unwrapMakeLight (MakeLight otherColor myKeyInt)  = (TMakeLight otherColor myKeyInt) 


unwrapRollRandomNum : RollRandomNum -> OutgoingTransition
unwrapRollRandomNum RollRandomNum  = TRollRandomNum 



unwrapNoOp : NoOp -> InternalTransition
unwrapNoOp NoOp  = TNoOp 


unwrapRandomColorNumber : RandomColorNumber -> InternalTransition
unwrapRandomColorNumber (RandomColorNumber myColor)  = (TRandomColorNumber myColor) 



