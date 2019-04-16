module KeyboardNet.Static.Wrappers exposing(..)
import KeyboardNet.Static.ExtraTypes exposing(..)
import KeyboardNet.Static.Types exposing(..)

import Dict exposing (Dict)
x = 0
unwrapSomeKeyPressed : SomeKeyPressed -> OutgoingTransition
unwrapSomeKeyPressed (SomeKeyPressed myKeyInteger)  = (TSomeKeyPressed myKeyInteger) 



unwrapNoOp : NoOp -> InternalTransition
unwrapNoOp NoOp  = TNoOp 



