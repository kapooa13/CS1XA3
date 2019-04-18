module MyKeyboardNet.Static.Types exposing(..)
import MyKeyboardNet.Static.ExtraTypes exposing(..)
import Dict exposing (Dict)


-- the types of all places in the net
type Dummy = Dummy
-- place states
type Keyboard  =
      Keyboard (Dict Int {-myKeyInt-} Bool {-keyStateBool-}) {-clientKeyStateDict-} Int {-myColor-}



-- union place type
type NetState  =
      SKeyboard Keyboard
-- internal transition types
type InternalTransition  =
      TNoOp
    | TRandomColorNumber Int
-- outgoing transition types
type OutgoingTransition  =
      TBoardKeyPressed Int
    | TMakeDark Int
    | TMakeLight Int
    | TRollRandomNum
type BoardKeyUnpressed  =
      BoardKeyUnpressed Int
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
type BoardKeyPressed  =
      BoardKeyPressed Int
type MakeDark  =
      MakeDark Int
type MakeLight  =
      MakeLight Int
type RollRandomNum  =
      RollRandomNum

-- outgoing server message types
type IncomingMessage  =
      MBoardKeyUnpressed Int {-myKeyInt-}
    | MNoOp
    | MMadeKeyDark Int {-myKeyInt-}
    | MMadeKeyLight Int {-myKeyInt-}
    | MRandomColorNumber Int {-myColor-}
    | MRandomNumRolled

type Transition =
      Internal InternalTransition |
    External OutgoingTransition
