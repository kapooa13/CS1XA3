module MyKeyboardNet.Static.Types.Keyboard exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)


type Msg  =
      BoardKeyPressed Int
    | NoOp
    | MakeDark Int Int
    | MakeLight Int Int
    | RandomColorNumber Int
    | RollRandomNum
