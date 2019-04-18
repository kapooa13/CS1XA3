module MyKeyboardNet.Static.Decode exposing(..)
import MyKeyboardNet.Static.Types exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)

import Utils.Utils exposing(..)
decodeIncomingMessage  :  (Result String a, List String) -> (Result String IncomingMessage, List String)
decodeIncomingMessage (_,incomingmessageTxts) = 
    case incomingmessageTxts of
        ("MBoardKeyUnpressed" :: rest) ->
            (Err "",rest) |> 
                \(r3,l4) ->
                        (case l4 of
                            (myKeyIntTxt :: ll4) -> (decodeInt (0) (20) myKeyIntTxt |> Result.andThen Ok,ll4)
                            [] -> (Err "Ran out of string to process while parsing IncomingMessage",[]))
                 |>
                        (\(r4,l5) -> (rMap MBoardKeyUnpressed r4,l5))
        ("MMadeKeyDark" :: rest) ->
            (Err "",rest) |> 
                \(r3,l4) ->
                        (case l4 of
                            (otherColorTxt :: ll4) -> (decodeInt (0) (24) otherColorTxt |> Result.andThen Ok,ll4)
                            [] -> (Err "Ran out of string to process while parsing IncomingMessage",[]))
                 |>
                    \(r4,l5) ->
                            (case l5 of
                                (myKeyIntTxt :: ll5) -> (decodeInt (0) (20) myKeyIntTxt |> Result.andThen Ok,ll5)
                                [] -> (Err "Ran out of string to process while parsing IncomingMessage",[]))
                     |>
                            (\(r5,l6) -> (rMap2 MMadeKeyDark r4 r5,l6))
        ("MMadeKeyLight" :: rest) ->
            (Err "",rest) |> 
                \(r3,l4) ->
                        (case l4 of
                            (otherColorTxt :: ll4) -> (decodeInt (0) (24) otherColorTxt |> Result.andThen Ok,ll4)
                            [] -> (Err "Ran out of string to process while parsing IncomingMessage",[]))
                 |>
                    \(r4,l5) ->
                            (case l5 of
                                (myKeyIntTxt :: ll5) -> (decodeInt (0) (20) myKeyIntTxt |> Result.andThen Ok,ll5)
                                [] -> (Err "Ran out of string to process while parsing IncomingMessage",[]))
                     |>
                            (\(r5,l6) -> (rMap2 MMadeKeyLight r4 r5,l6))
        ("MRandomNumRolled" :: rest) ->
            (Err "",rest) |> 
                    (\(r3,l4) -> (Ok <| MRandomNumRolled ,l4))

        _ -> (Err <| tConcat ["Incorrect input, could not decode value of type IncomingMessage from string \"", tConcat incomingmessageTxts, "\""],[])

--extra types decoders

