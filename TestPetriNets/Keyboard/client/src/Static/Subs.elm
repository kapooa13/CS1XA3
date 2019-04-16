module Static.Subs exposing(..)
import Static.Types exposing(..)
import KeyboardNet.Static.Subs as KeyboardNet

subscriptions : NetModel -> Sub NetTransition
subscriptions model =
    case model of
        KeyboardNet m -> Sub.map KeyboardNetTrans <| KeyboardNet.subs m

