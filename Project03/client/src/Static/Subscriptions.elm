module Static.Subs exposing(..)
import Static.Types exposing(..)
import MyKeyboardNet.Static.Subs as MyKeyboardNet

subscriptions : NetModel -> Sub NetTransition
subscriptions model =
    case model of
        MyKeyboardNet m -> Sub.map MyKeyboardNetTrans <| MyKeyboardNet.subs m

