module KeyboardNet.Static.Types exposing(..)
import KeyboardNet.Static.ExtraTypes exposing(..)


-- the types of all places in the net
type Dummy = Dummy
-- place states
type Keyboard  =
      Keyboard



-- union place type
type NetState  =
      SKeyboard Keyboard
-- internal transition types
type InternalTransition  =
      TNoOp
-- outgoing transition types
type OutgoingTransition  =
      TSomeKeyPressed Int
type KeyUnpressed  =
      KeyUnpressed Int
type NoOp  =
      NoOp
type SomeKeyPressed  =
      SomeKeyPressed Int

-- outgoing server message types
type IncomingMessage  =
      MKeyUnpressed Int {-myKeyInteger-}
    | MNoOp

type Transition =
      Internal InternalTransition |
    External OutgoingTransition
