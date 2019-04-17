module Static.Subs exposing(..)
import Static.Types exposing(..)
import FrontEndNet.Static.Subs as FrontEndNet

subscriptions : NetModel -> Sub NetTransition
subscriptions model =
    case model of
        FrontEndNet m -> Sub.map FrontEndNetTrans <| FrontEndNet.subs m

