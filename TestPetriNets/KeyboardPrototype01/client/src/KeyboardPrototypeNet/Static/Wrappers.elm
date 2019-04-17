module KeyboardPrototypeNet.Static.Wrappers exposing(..)
import KeyboardPrototypeNet.Static.ExtraTypes exposing(..)
import KeyboardPrototypeNet.Static.Types exposing(..)

import Dict exposing (Dict)
x = 0
unwrapBoardKeyPressed : BoardKeyPressed -> OutgoingTransition
unwrapBoardKeyPressed (BoardKeyPressed myKeyInteger)  = (TBoardKeyPressed myKeyInteger) 



unwrapNoOp : NoOp -> InternalTransition
unwrapNoOp NoOp  = TNoOp 



