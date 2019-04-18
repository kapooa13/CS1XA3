{-# LANGUAGE DeriveDataTypeable #-}
module MyKeyboardNet.Static.Types where
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
data BoardKeyUnpressed  =
      BoardKeyUnpressed Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data MadeKeyDark  =
      MadeKeyDark Int {-otherColor-} Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data MadeKeyLight  =
      MadeKeyLight Int {-otherColor-} Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data RandomNumRolled  =
      RandomNumRolled
    deriving(Ord,Eq,Show)
data ClientMessage  =
      MBoardKeyUnpressed Int {-myKeyInt-}
    | MMadeKeyDark Int {-otherColor-} Int {-myKeyInt-}
    | MMadeKeyLight Int {-otherColor-} Int {-myKeyInt-}
    | MRandomNumRolled
    deriving(Ord,Eq,Show)

-- individual transition types
data BoardKeyPressedfromKeyboard  =
      BoardKeyPressed_KeyboardtoKeyboard KeyboardPlayer BoardKeyUnpressed
    deriving(Ord,Eq,Show)

data MakeDarkfromKeyboard  =
      MakeDark_KeyboardtoKeyboard KeyboardPlayer MadeKeyDark
    deriving(Ord,Eq,Show)

data MakeLightfromKeyboard  =
      MakeLight_KeyboardtoKeyboard KeyboardPlayer MadeKeyLight
    deriving(Ord,Eq,Show)

data RollRandomNumfromKeyboard  =
      RollRandomNum_KeyboardtoKeyboard KeyboardPlayer RandomNumRolled
    deriving(Ord,Eq,Show)


-- main transition types
data Transition  =
      TBoardKeyPressed Int {-myKeyInt-}
    | TMakeDark Int {-otherColor-} Int {-myKeyInt-}
    | TMakeLight Int {-otherColor-} Int {-myKeyInt-}
    | TRollRandomNum
    deriving(Ord,Eq,Show)
data BoardKeyPressed  =
      BoardKeyPressed Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data MakeDark  =
      MakeDark Int {-otherColor-} Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data MakeLight  =
      MakeLight Int {-otherColor-} Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data RollRandomNum  =
      RollRandomNum
    deriving(Ord,Eq,Show)

-- player state union type
data Player  =
      PKeyboardPlayer
    deriving(Ord,Eq,Show)
-- extra server types


