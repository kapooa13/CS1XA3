{-# LANGUAGE OverloadedStrings #-}
module FrontEndNet.Static.Decode where
import FrontEndNet.Static.Types

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
                        (case l4 of
                            (myKeyIntTxt : ll4) -> (decodeInt (0) (3) myKeyIntTxt |> Result.andThen Ok,ll4)
                            [] -> (Err "Ran out of string to process while parsing Transition",[]))
                 |>
                        (\(r4,l5) -> (Result.map TBoardKeyPressed r4,l5))
        ("TMakeDark" : rest) ->
            (Err "",rest) |> 
                \(r3,l4) ->
                (\(r4,l5) ->
                            (case l5 of
                                (clientKeyStateIntTxt : ll5) -> (decodeInt (0) (1) clientKeyStateIntTxt |> Result.andThen Ok,ll5)
                                [] -> (Err "Ran out of string to process while parsing Transition",[]))) |>
                    decodeList l4
                 |>
                    \(r4,l5) ->
                            (case l5 of
                                (myKeyIntTxt : ll5) -> (decodeInt (0) (3) myKeyIntTxt |> Result.andThen Ok,ll5)
                                [] -> (Err "Ran out of string to process while parsing Transition",[]))
                     |>
                            (\(r5,l6) -> (Result.map2 TMakeDark r4 r5,l6))
        ("TMakeLight" : rest) ->
            (Err "",rest) |> 
                \(r3,l4) ->
                (\(r4,l5) ->
                            (case l5 of
                                (clientKeyStateIntTxt : ll5) -> (decodeInt (0) (1) clientKeyStateIntTxt |> Result.andThen Ok,ll5)
                                [] -> (Err "Ran out of string to process while parsing Transition",[]))) |>
                    decodeList l4
                 |>
                    \(r4,l5) ->
                            (case l5 of
                                (myKeyIntTxt : ll5) -> (decodeInt (0) (3) myKeyIntTxt |> Result.andThen Ok,ll5)
                                [] -> (Err "Ran out of string to process while parsing Transition",[]))
                     |>
                            (\(r5,l6) -> (Result.map2 TMakeLight r4 r5,l6))

        _ -> (Err <| tConcat ["Incorrect input, could not decode value of type Transition from string \"", tConcat transitionTxts, "\""],[])

-- extra type decoders

