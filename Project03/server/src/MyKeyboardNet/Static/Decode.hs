{-# LANGUAGE OverloadedStrings #-}
module MyKeyboardNet.Static.Decode where
import MyKeyboardNet.Static.Types

import Utils.Utils
import Static.Result (Result(..))
import qualified Data.Text as T
import qualified Static.Result as Result
decodeTransition  ::  (Result T.Text a, [T.Text]) -> (Result T.Text Transition, [T.Text])
decodeTransition (_,transitionTxts) = 
    case transitionTxts of
        ("TBoardKeyPressed" : rest) ->
            (Err "",rest) |> 
                \(r3,l4) ->
                (\(r4,l5) ->
                        let
                            (myKeyInt,lf5) =
                                case l5 of
                                    (clientKeyColorDictKeyValPairTxt : llf5) ->
                                         (Err "",l5) |>
                                                            \(r9,l10) ->
                                                (case l10 of
                                                    (myKeyIntTxt : ll10) -> (decodeInt (0) (20) myKeyIntTxt |> Result.andThen Ok,ll10)
                                                    [] -> (Err "Ran out of string to process while parsing Transition",[]))

                                    [] -> (Err "Ran out of string to process while parsing Transition",[])
                            (myKeyColor,ls5) =
                                case lf5 of
                                    (clientKeyColorDictKeyValPairTxt : lls5) ->
                                         (Err "",lf5) |>
                                                            \(r9,l10) ->
                                                (case l10 of
                                                    (myKeyColorTxt : ll10) -> (decodeInt (0) (24) myKeyColorTxt |> Result.andThen Ok,ll10)
                                                    [] -> (Err "Ran out of string to process while parsing Transition",[]))

                                    [] -> (Err "Ran out of string to process while parsing Transition",[])
                        in (Result.map2 (\rff5 rss5 -> (rff5,rss5)) myKeyInt myKeyColor,ls5)) |>
                    decodeList l4
                |> decodeDict
                 |>
                    \(r4,l5) ->
                            (case l5 of
                                (myColorTxt : ll5) -> (decodeInt (0) (24) myColorTxt |> Result.andThen Ok,ll5)
                                [] -> (Err "Ran out of string to process while parsing Transition",[]))
                     |>
                        \(r5,l6) ->
                                (case l6 of
                                    (myKeyIntTxt : ll6) -> (decodeInt (0) (20) myKeyIntTxt |> Result.andThen Ok,ll6)
                                    [] -> (Err "Ran out of string to process while parsing Transition",[]))
                         |>
                                (\(r6,l7) -> (Result.map3 TBoardKeyPressed r4 r5 r6,l7))
        ("TMakeDark" : rest) ->
            (Err "",rest) |> 
                \(r3,l4) ->
                        (case l4 of
                            (myKeyIntTxt : ll4) -> (decodeInt (0) (20) myKeyIntTxt |> Result.andThen Ok,ll4)
                            [] -> (Err "Ran out of string to process while parsing Transition",[]))
                 |>
                        (\(r4,l5) -> (Result.map TMakeDark r4,l5))
        ("TMakeLight" : rest) ->
            (Err "",rest) |> 
                \(r3,l4) ->
                        (case l4 of
                            (myKeyIntTxt : ll4) -> (decodeInt (0) (20) myKeyIntTxt |> Result.andThen Ok,ll4)
                            [] -> (Err "Ran out of string to process while parsing Transition",[]))
                 |>
                        (\(r4,l5) -> (Result.map TMakeLight r4,l5))
        ("TRollRandomNum" : rest) ->
            (Err "",rest) |> 
                    (\(r3,l4) -> (Ok <| TRollRandomNum ,l4))

        _ -> (Err <| tConcat ["Incorrect input, could not decode value of type Transition from string \"", tConcat transitionTxts, "\""],[])

-- extra type decoders

