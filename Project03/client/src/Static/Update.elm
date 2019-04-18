module Static.Update exposing(..)
import MyKeyboardNet.Static.Update as MyKeyboardNet

import Static.Types exposing(..)
import Utils.Utils exposing (Either(..),mapBoth)
import Maybe

update : TopLevelData -> NetIncomingMessage -> NetModel -> (NetModel, Cmd NetTransition)
update tld netInMsg state =
    case (netInMsg,state) of
            (MyKeyboardNetInMsg msg, MyKeyboardNet m) ->
                let
                    (newMyKeyboardNetState, mcmd) = MyKeyboardNet.update tld msg m
                    newClientState = MyKeyboardNet newMyKeyboardNetState
                in (newClientState, Cmd.map MyKeyboardNetTrans mcmd)



outgoingToIncoming : NetTransition -> Either NetIncomingMessage NetTransition
outgoingToIncoming trans =
    case trans of
        MyKeyboardNetTrans tr -> mapBoth MyKeyboardNetInMsg MyKeyboardNetTrans <| MyKeyboardNet.outgoingToIncoming tr


