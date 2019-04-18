{-# LANGUAGE DeriveDataTypeable #-}
module MyKeyboardNet.Static.Types where
import Data.Typeable (Typeable)
import Data.Data (Data)
import Data.SafeCopy (SafeCopy)
import Static.Dict (Dict)


-- place states and place player states
data Keyboard  =
      Keyboard (Dict Int {-myKeyInt-} Int {-myColor-}) {-serverKeyColorDict-}
    deriving(Ord,Eq,Show,Typeable)

data KeyboardPlayer  =
      KeyboardPlayer
    deriving(Ord,Eq,Show,Typeable)



-- outgoing client message types
data BoardKeyUnpressed  =
      BoardKeyUnpressed (Dict Int {-myKeyInt-} Int {-myColor-}) {-clientKeyColorDict-} Int {-myColor-} Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data MadeKeyDark  =
      MadeKeyDark Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data MadeKeyLight  =
      MadeKeyLight Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data RandomNumRolled  =
      RandomNumRolled
    deriving(Ord,Eq,Show)
data ClientMessage  =
      MBoardKeyUnpressed (Dict Int {-myKeyInt-} Int {-myColor-}) {-clientKeyColorDict-} Int {-myColor-} Int {-myKeyInt-}
    | MMadeKeyDark Int {-myKeyInt-}
    | MMadeKeyLight Int {-myKeyInt-}
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
      TBoardKeyPressed (Dict Int {-myKeyInt-} Int {-myColor-}) {-clientKeyColorDict-} Int {-myColor-} Int {-myKeyInt-}
    | TMakeDark Int {-myKeyInt-}
    | TMakeLight Int {-myKeyInt-}
    | TRollRandomNum (Dict Int {-myKeyInt-} Int {-myColor-}) {-clientKeyColorDict-} Int {-myColor-} Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data BoardKeyPressed  =
      BoardKeyPressed (Dict Int {-myKeyInt-} Int {-myColor-}) {-clientKeyColorDict-} Int {-myColor-} Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data MakeDark  =
      MakeDark Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data MakeLight  =
      MakeLight Int {-myKeyInt-}
    deriving(Ord,Eq,Show)
data RollRandomNum  =
      RollRandomNum (Dict Int {-myKeyInt-} Int {-myColor-}) {-clientKeyColorDict-} Int {-myColor-} Int {-myKeyInt-}
    deriving(Ord,Eq,Show)

-- player state union type
data Player  =
      PKeyboardPlayer
    deriving(Ord,Eq,Show)
-- extra server types


