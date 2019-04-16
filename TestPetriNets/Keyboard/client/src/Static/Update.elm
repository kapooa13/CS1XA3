module Static.Update exposing(..)
import KeyboardNet.Static.Update as KeyboardNet

import Static.Types exposing(..)
import Utils.Utils exposing (Either(..),mapBoth)
import Maybe

update : TopLevelData -> NetIncomingMessage -> NetModel -> (NetModel, Cmd NetTransition)
update tld netInMsg state =
    case (netInMsg,state) of
            (KeyboardNetInMsg msg, KeyboardNet m) ->
                let
                    (newKeyboardNetState, mcmd) = KeyboardNet.update tld msg m
                    newClientState = KeyboardNet newKeyboardNetState
                in (newClientState, Cmd.map KeyboardNetTrans mcmd)



outgoingToIncoming : NetTransition -> Either NetIncomingMessage NetTransition
outgoingToIncoming trans =
    case trans of
        KeyboardNetTrans tr -> mapBoth KeyboardNetInMsg KeyboardNetTrans <| KeyboardNet.outgoingToIncoming tr


