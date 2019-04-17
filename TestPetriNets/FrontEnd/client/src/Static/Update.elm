module Static.Update exposing(..)
import FrontEndNet.Static.Update as FrontEndNet

import Static.Types exposing(..)
import Utils.Utils exposing (Either(..),mapBoth)
import Maybe

update : TopLevelData -> NetIncomingMessage -> NetModel -> (NetModel, Cmd NetTransition)
update tld netInMsg state =
    case (netInMsg,state) of
            (FrontEndNetInMsg msg, FrontEndNet m) ->
                let
                    (newFrontEndNetState, mcmd) = FrontEndNet.update tld msg m
                    newClientState = FrontEndNet newFrontEndNetState
                in (newClientState, Cmd.map FrontEndNetTrans mcmd)



outgoingToIncoming : NetTransition -> Either NetIncomingMessage NetTransition
outgoingToIncoming trans =
    case trans of
        FrontEndNetTrans tr -> mapBoth FrontEndNetInMsg FrontEndNetTrans <| FrontEndNet.outgoingToIncoming tr


