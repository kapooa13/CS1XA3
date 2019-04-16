module KeyboardNet.Static.Init where
import KeyboardNet.Static.Types (Player)
import KeyboardNet.Init as Init
import KeyboardNet.Update as Update
import KeyboardNet.Static.Wrappers
import KeyboardNet.Static.Plugins (initPlugins,teardownPlugins)
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
