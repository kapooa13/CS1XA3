module KeyboardPrototypeNet.Static.Plugins where
import KeyboardPrototypeNet.Static.Types
import Static.ServerTypes
import qualified Data.TMap as TM
import Control.Concurrent.STM (TQueue, atomically, writeTQueue)
import           Control.Monad          (void)
import Data.Maybe (fromJust)
import Control.Concurrent.Thread (forkIO, result)




initPlugins :: IO PluginState
initPlugins = do
    return $ TM.empty
teardownPlugins :: PluginState -> IO ()
teardownPlugins ps = do


    return ()
