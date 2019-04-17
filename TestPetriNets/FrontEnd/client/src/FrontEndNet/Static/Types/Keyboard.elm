module FrontEndNet.Static.Types.Keyboard exposing(..)
import FrontEndNet.Static.ExtraTypes exposing(..)


type Msg  =
      BoardKeyPressed Int
    | NoOp
    | MakeDark Int
    | MakeLight Int
