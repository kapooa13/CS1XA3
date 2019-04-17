module Static.Update exposing(..)
import KeyboardPrototypeNet.Static.Update as KeyboardPrototypeNet

import Static.Types exposing(..)
import Utils.Utils exposing (Either(..),mapBoth)
import Maybe

update : TopLevelData -> NetIncomingMessage -> NetModel -> (NetModel, Cmd NetTransition)
update tld netInMsg state =
    case (netInMsg,state) of
            (KeyboardPrototypeNetInMsg msg, KeyboardPrototypeNet m) ->
                let
                    (newKeyboardPrototypeNetState, mcmd) = KeyboardPrototypeNet.update tld msg m
                    newClientState = KeyboardPrototypeNet newKeyboardPrototypeNetState
                in (newClientState, Cmd.map KeyboardPrototypeNetTrans mcmd)



outgoingToIncoming : NetTransition -> Either NetIncomingMessage NetTransition
outgoingToIncoming trans =
    case trans of
        KeyboardPrototypeNetTrans tr -> mapBoth KeyboardPrototypeNetInMsg KeyboardPrototypeNetTrans <| KeyboardPrototypeNet.outgoingToIncoming tr


