{-# LANGUAGE DeriveDataTypeable #-}
module KeyboardPrototypeNet.Static.Types where
import Data.Typeable (Typeable)
import Data.Data (Data)
import Data.SafeCopy (SafeCopy)


-- place states and place player states
data Keyboard  =
      Keyboard
    deriving(Ord,Eq,Show,Typeable)

data KeyboardPlayer  =
      KeyboardPlayer
    deriving(Ord,Eq,Show,Typeable)



-- outgoing client message types
data DeflatedBoardKey  =
      DeflatedBoardKey Int {-myKeyInteger-}
    deriving(Ord,Eq,Show)
data ClientMessage  =
      MDeflatedBoardKey Int {-myKeyInteger-}
    deriving(Ord,Eq,Show)

-- individual transition types
data BoardKeyPressedfromKeyboard  =
      BoardKeyPressed_KeyboardtoKeyboard KeyboardPlayer DeflatedBoardKey
    deriving(Ord,Eq,Show)


-- main transition types
data Transition  =
      TBoardKeyPressed Int {-myKeyInteger-}
    deriving(Ord,Eq,Show)
data BoardKeyPressed  =
      BoardKeyPressed Int {-myKeyInteger-}
    deriving(Ord,Eq,Show)

-- player state union type
data Player  =
      PKeyboardPlayer
    deriving(Ord,Eq,Show)
-- extra server types


