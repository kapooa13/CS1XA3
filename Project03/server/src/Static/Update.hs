module Static.Update where
import MyKeyboardNet.Static.Update as MyKeyboardNet

import Static.Types
import qualified Data.TMap as TM
import Static.ServerTypes
import Utils.Utils
import Data.Maybe (fromJust,mapMaybe,isJust)
import qualified Data.IntMap.Strict as IM'
import qualified Static.Cmd as Cmd
import qualified Plugins.Users.Types as Users

update :: TopLevelData -> Maybe ClientID -> NetTransition -> ServerState -> (ServerState, [(ClientID,NetOutgoingMessage)], Maybe (Cmd.Cmd NetTransition))
update tld mClientID netTrans state =
    case netTrans of
        MyKeyboardNetTrans msg ->
            let
                (newNetState, clientMessages, mCmd) = MyKeyboardNet.update tld mClientID msg (safeFromJust "update case" $ TM.lookup $ serverState state)
                cmd = fmap (\m -> Cmd.map MyKeyboardNetTrans m) mCmd
                cMsgs = map (\(cId,m) -> (cId,MyKeyboardNetOMsg m)) clientMessages
                newServerState = state { serverState = TM.insert newNetState (serverState state) }
            in (newServerState, cMsgs, cmd)


clientConnect :: TopLevelData -> ClientID -> ServerState -> ServerState
clientConnect tld clientID state =
    let
        newNetState = MyKeyboardNet.clientConnect tld clientID (safeFromJust "client connect" $ TM.lookup $ serverState state)
    in
        state { serverState = TM.insert newNetState $ serverState state }

disconnect :: TopLevelData -> ClientID -> NetModel -> ServerState -> IO ServerState
disconnect tld clientID netModel state = do
        newNetState <-
            case netModel of
                MyKeyboardNet {} -> MyKeyboardNet.disconnect tld clientID (safeFromJust "top level disconnect" $ TM.lookup $ serverState state)

        return $ state
           { serverState = TM.insert newNetState $ serverState state
           , clients = IM'.delete clientID $ clients state
           }
