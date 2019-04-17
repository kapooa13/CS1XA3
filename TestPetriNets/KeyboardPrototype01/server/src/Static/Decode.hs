{-# LANGUAGE OverloadedStrings #-}
module Static.Decode where
import Static.Types
import qualified Data.Text as T
import Utils.Utils
import Static.Result (Result(..))
import qualified Static.Result as Result
import KeyboardPrototypeNet.Static.Decode


decodeIncomingMessage :: T.Text -> NetModel -> Result T.Text NetTransition
decodeIncomingMessage txt clientNet =
    case clientNet of
        KeyboardPrototypeNet -> Result.map KeyboardPrototypeNetTrans $ fst $ KeyboardPrototypeNet.Static.Decode.decodeTransition (Err "",T.splitOn "\0" txt)
