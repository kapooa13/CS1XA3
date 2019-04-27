module MyKeyboardNet.Static.Types.Keyboard exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)
import Dict exposing (Dict)
import Dict exposing (Dict)


type Msg  =
      BoardKeyPressed (Dict Int Int) Int Int
    | NoOp
    | MakeDark Int
    | MakeLight Int
    | RandomColorNumber Int
    | RollRandomNum
    | InfoUpdating (Dict Int Int) Int
