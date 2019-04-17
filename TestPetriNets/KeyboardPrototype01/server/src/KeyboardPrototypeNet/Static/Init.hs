module KeyboardPrototypeNet.Static.Init where
import KeyboardPrototypeNet.Static.Types (Player)
import KeyboardPrototypeNet.Init as Init
import KeyboardPrototypeNet.Update as Update
import KeyboardPrototypeNet.Static.Wrappers
import KeyboardPrototypeNet.Static.Plugins (initPlugins,teardownPlugins)
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
