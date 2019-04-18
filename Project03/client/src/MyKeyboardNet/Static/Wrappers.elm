module MyKeyboardNet.Static.Wrappers exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)
import MyKeyboardNet.Static.Types exposing(..)

import Dict exposing (Dict)
x = 0
unwrapBoardKeyPressed : BoardKeyPressed -> OutgoingTransition
unwrapBoardKeyPressed (BoardKeyPressed clientKeyColorDict myColor myKeyInt)  = (TBoardKeyPressed clientKeyColorDict myColor myKeyInt) 


unwrapMakeDark : MakeDark -> OutgoingTransition
unwrapMakeDark (MakeDark myKeyInt)  = (TMakeDark myKeyInt) 


unwrapMakeLight : MakeLight -> OutgoingTransition
unwrapMakeLight (MakeLight myKeyInt)  = (TMakeLight myKeyInt) 


unwrapRollRandomNum : RollRandomNum -> OutgoingTransition
unwrapRollRandomNum (RollRandomNum clientKeyColorDict myColor myKeyInt)  = (TRollRandomNum clientKeyColorDict myColor myKeyInt) 



unwrapNoOp : NoOp -> InternalTransition
unwrapNoOp NoOp  = TNoOp 


unwrapRandomColorNumber : RandomColorNumber -> InternalTransition
unwrapRandomColorNumber (RandomColorNumber myColor)  = (TRandomColorNumber myColor) 



