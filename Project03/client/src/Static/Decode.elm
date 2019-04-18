module Static.Decode exposing(..)
import Static.Types exposing(..)
import Utils.Utils exposing(..)
import MyKeyboardNet.Static.Decode


decodeIncomingMessage : String -> NetModel -> Result String NetIncomingMessage
decodeIncomingMessage txt clientNet =
    case clientNet of
        MyKeyboardNet _ -> rMap MyKeyboardNetInMsg <| Tuple.first <| MyKeyboardNet.Static.Decode.decodeIncomingMessage (Err "",String.split "\u{0000}" txt)
