module MyKeyboardNet.Static.Types exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)
import Dict exposing (Dict)


-- the types of all places in the net
type Dummy = Dummy
-- place states
type Keyboard  =
      Keyboard (Dict Int {-myKeyInt-} Bool {-keyStateBool-}) {-clientKeyStateDict-} Int {-myColor-} (Dict Int {-myKeyInt-} Int {-myKeyColor-}) {-clientKeyColorDict-} Int {-playerCounter-}



-- union place type
type NetState  =
      SKeyboard Keyboard
-- internal transition types
type InternalTransition  =
      TNoOp
    | TRandomColorNumber Int
-- outgoing transition types
type OutgoingTransition  =
      TBoardKeyPressed (Dict Int Int) Int Int
    | TMakeDark Int
    | TMakeLight Int
    | TRollRandomNum
    | TInfoUpdating (Dict Int Int) Int
type BoardKeyUnpressed  =
      BoardKeyUnpressed (Dict Int Int) Int Int
type NoOp  =
      NoOp
type MadeKeyDark  =
      MadeKeyDark Int
type MadeKeyLight  =
      MadeKeyLight Int
type RandomColorNumber  =
      RandomColorNumber Int
type RandomNumRolled  =
      RandomNumRolled
type InfoUpdated  =
      InfoUpdated (Dict Int Int) Int
type BoardKeyPressed  =
      BoardKeyPressed (Dict Int Int) Int Int
type MakeDark  =
      MakeDark Int
type MakeLight  =
      MakeLight Int
type RollRandomNum  =
      RollRandomNum
type InfoUpdating  =
      InfoUpdating (Dict Int Int) Int

-- outgoing server message types
type IncomingMessage  =
      MBoardKeyUnpressed (Dict Int {-myKeyInt-} Int {-myKeyColor-}) {-clientKeyColorDict-} Int {-myColor-} Int {-myKeyInt-}
    | MNoOp
    | MMadeKeyDark Int {-myKeyInt-}
    | MMadeKeyLight Int {-myKeyInt-}
    | MRandomColorNumber Int {-myColor-}
    | MRandomNumRolled
    | MInfoUpdated (Dict Int {-myKeyInt-} Int {-myKeyColor-}) {-clientKeyColorDict-} Int {-playerCounter-}

type Transition =
      Internal InternalTransition |
    External OutgoingTransition
