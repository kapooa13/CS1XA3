module Static.Subs exposing(..)
import Static.Types exposing(..)
import KeyboardPrototypeNet.Static.Subs as KeyboardPrototypeNet

subscriptions : NetModel -> Sub NetTransition
subscriptions model =
    case model of
        KeyboardPrototypeNet m -> Sub.map KeyboardPrototypeNetTrans <| KeyboardPrototypeNet.subs m

