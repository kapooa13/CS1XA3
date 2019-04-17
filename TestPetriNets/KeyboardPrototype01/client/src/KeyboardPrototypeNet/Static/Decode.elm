module KeyboardPrototypeNet.Static.Decode exposing(..)
import KeyboardPrototypeNet.Static.Types exposing(..)
import KeyboardPrototypeNet.Static.ExtraTypes exposing(..)

import Utils.Utils exposing(..)
decodeIncomingMessage  :  (Result String a, List String) -> (Result String IncomingMessage, List String)
decodeIncomingMessage (_,incomingmessageTxts) = 
    case incomingmessageTxts of
        ("MDeflatedBoardKey" :: rest) ->
            (Err "",rest) |> 
                \(r3,l4) ->
                        (case l4 of
                            (myKeyIntegerTxt :: ll4) -> (decodeInt (0) (19) myKeyIntegerTxt |> Result.andThen Ok,ll4)
                            [] -> (Err "Ran out of string to process while parsing IncomingMessage",[]))
                 |>
                        (\(r4,l5) -> (rMap MDeflatedBoardKey r4,l5))

        _ -> (Err <| tConcat ["Incorrect input, could not decode value of type IncomingMessage from string \"", tConcat incomingmessageTxts, "\""],[])

--extra types decoders

