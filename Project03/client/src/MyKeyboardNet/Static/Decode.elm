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
                (\(r4,l5) ->
                        let
                            (myKeyInt,lf5) =
                                case l5 of
                                    (clientKeyColorDictKeyValPairTxt :: llf5) ->
                                         (Err "",l5) |>
                                                            \(r9,l10) ->
                                                (case l10 of
                                                    (myKeyIntTxt :: ll10) -> (decodeInt (0) (62) myKeyIntTxt |> Result.andThen Ok,ll10)
                                                    [] -> (Err "Ran out of string to process while parsing IncomingMessage",[]))

                                    [] -> (Err "Ran out of string to process while parsing IncomingMessage",[])
                            (myKeyColor,ls5) =
                                case lf5 of
                                    (clientKeyColorDictKeyValPairTxt :: lls5) ->
                                         (Err "",lf5) |>
                                                            \(r9,l10) ->
                                                (case l10 of
                                                    (myKeyColorTxt :: ll10) -> (decodeInt (0) (24) myKeyColorTxt |> Result.andThen Ok,ll10)
                                                    [] -> (Err "Ran out of string to process while parsing IncomingMessage",[]))

                                    [] -> (Err "Ran out of string to process while parsing IncomingMessage",[])
                        in (Result.map2 (\rff5 rss5 -> (rff5,rss5)) myKeyInt myKeyColor,ls5)) |>
                    decodeList l4
                |> decodeDict
                 |>
                    \(r4,l5) ->
                            (case l5 of
                                (myColorTxt :: ll5) -> (decodeInt (0) (24) myColorTxt |> Result.andThen Ok,ll5)
                                [] -> (Err "Ran out of string to process while parsing IncomingMessage",[]))
                     |>
                        \(r5,l6) ->
                                (case l6 of
                                    (myKeyIntTxt :: ll6) -> (decodeInt (0) (62) myKeyIntTxt |> Result.andThen Ok,ll6)
                                    [] -> (Err "Ran out of string to process while parsing IncomingMessage",[]))
                         |>
                                (\(r6,l7) -> (rMap3 MBoardKeyUnpressed r4 r5 r6,l7))
        ("MMadeKeyDark" :: rest) ->
            (Err "",rest) |> 
                \(r3,l4) ->
                        (case l4 of
                            (myKeyIntTxt :: ll4) -> (decodeInt (0) (62) myKeyIntTxt |> Result.andThen Ok,ll4)
                            [] -> (Err "Ran out of string to process while parsing IncomingMessage",[]))
                 |>
                        (\(r4,l5) -> (rMap MMadeKeyDark r4,l5))
        ("MMadeKeyLight" :: rest) ->
            (Err "",rest) |> 
                \(r3,l4) ->
                        (case l4 of
                            (myKeyIntTxt :: ll4) -> (decodeInt (0) (62) myKeyIntTxt |> Result.andThen Ok,ll4)
                            [] -> (Err "Ran out of string to process while parsing IncomingMessage",[]))
                 |>
                        (\(r4,l5) -> (rMap MMadeKeyLight r4,l5))
        ("MRandomNumRolled" :: rest) ->
            (Err "",rest) |> 
                    (\(r3,l4) -> (Ok <| MRandomNumRolled ,l4))
        ("MInfoUpdated" :: rest) ->
            (Err "",rest) |> 
                \(r3,l4) ->
                (\(r4,l5) ->
                        let
                            (myKeyInt,lf5) =
                                case l5 of
                                    (clientKeyColorDictKeyValPairTxt :: llf5) ->
                                         (Err "",l5) |>
                                                            \(r9,l10) ->
                                                (case l10 of
                                                    (myKeyIntTxt :: ll10) -> (decodeInt (0) (62) myKeyIntTxt |> Result.andThen Ok,ll10)
                                                    [] -> (Err "Ran out of string to process while parsing IncomingMessage",[]))

                                    [] -> (Err "Ran out of string to process while parsing IncomingMessage",[])
                            (myKeyColor,ls5) =
                                case lf5 of
                                    (clientKeyColorDictKeyValPairTxt :: lls5) ->
                                         (Err "",lf5) |>
                                                            \(r9,l10) ->
                                                (case l10 of
                                                    (myKeyColorTxt :: ll10) -> (decodeInt (0) (24) myKeyColorTxt |> Result.andThen Ok,ll10)
                                                    [] -> (Err "Ran out of string to process while parsing IncomingMessage",[]))

                                    [] -> (Err "Ran out of string to process while parsing IncomingMessage",[])
                        in (Result.map2 (\rff5 rss5 -> (rff5,rss5)) myKeyInt myKeyColor,ls5)) |>
                    decodeList l4
                |> decodeDict
                 |>
                    \(r4,l5) ->
                            (case l5 of
                                (playerCounterTxt :: ll5) -> (decodeInt (0) (100) playerCounterTxt |> Result.andThen Ok,ll5)
                                [] -> (Err "Ran out of string to process while parsing IncomingMessage",[]))
                     |>
                            (\(r5,l6) -> (rMap2 MInfoUpdated r4 r5,l6))

        _ -> (Err <| tConcat ["Incorrect input, could not decode value of type IncomingMessage from string \"", tConcat incomingmessageTxts, "\""],[])

--extra types decoders

