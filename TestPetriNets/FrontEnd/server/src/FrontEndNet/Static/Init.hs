module FrontEndNet.Static.Init where
import FrontEndNet.Static.Types (Player)
import FrontEndNet.Init as Init
import FrontEndNet.Update as Update
import FrontEndNet.Static.Wrappers
import FrontEndNet.Static.Plugins (initPlugins,teardownPlugins)
import Static.ServerTypes
import qualified Data.IntMap as IM'
import qualified Data.TMap as TM

init :: IO (NetState Player)
init = do
    ip <- initPlugins
    return $ NetState
        {
          playerStates = IM'.empty
        , placeStates = TM.insert initKeyboard $ TM.empty
        , pluginStates = ip
        }
teardown :: NetState Player -> IO ()
teardown ns = do
    teardownPlugins (pluginStates ns)
