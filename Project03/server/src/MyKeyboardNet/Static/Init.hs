module MyKeyboardNet.Static.Init where
import MyKeyboardNet.Static.Types (Player)
import MyKeyboardNet.Init as Init
import MyKeyboardNet.Update as Update
import MyKeyboardNet.Static.Wrappers
import MyKeyboardNet.Static.Plugins (initPlugins,teardownPlugins)
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
