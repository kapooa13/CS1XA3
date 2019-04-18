module Static.Plugins where
import MyKeyboardNet.Static.Types as MyKeyboardNet

import Static.ServerTypes
import Static.Types
import Data.Maybe (fromJust)
import Control.Concurrent.STM (TQueue, atomically, writeTQueue)
import Data.TMap as TM (TMap,lookup)
import Utils.Utils as Utils
import qualified Static.Cmd as Cmd

processCmd :: TQueue CentralMessage -> Maybe (Cmd.Cmd NetTransition) -> NetTransition -> ServerState -> IO ()
processCmd centralMessageQueue mCmd nTrans state =
    case mCmd of
        Just cmd ->
            case nTrans of
                MyKeyboardNetTrans {} ->
                      Cmd.process cmd centralMessageQueue (safeFromJust "plugins" $ TM.lookup $ serverState state :: NetState MyKeyboardNet.Player)


        Nothing -> return ()
