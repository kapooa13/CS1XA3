{-# LANGUAGE OverloadedStrings #-}
module KeyboardPrototypeNet.Static.Decode where
import KeyboardPrototypeNet.Static.Types

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
                            (myKeyIntegerTxt : ll4) -> (decodeInt (0) (19) myKeyIntegerTxt |> Result.andThen Ok,ll4)
                            [] -> (Err "Ran out of string to process while parsing Transition",[]))
                 |>
                        (\(r4,l5) -> (Result.map TBoardKeyPressed r4,l5))

        _ -> (Err <| tConcat ["Incorrect input, could not decode value of type Transition from string \"", tConcat transitionTxts, "\""],[])

-- extra type decoders

