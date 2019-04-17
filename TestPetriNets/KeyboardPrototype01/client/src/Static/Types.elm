module Static.Types exposing(..)
import KeyboardPrototypeNet.Static.Types


type alias TopLevelData = ()
-- a type identifying all of the nets in the server
type NetModel  =
      KeyboardPrototypeNet KeyboardPrototypeNet.Static.Types.NetState
-- a union type of all the nets and their incoming transitions
type NetIncomingMessage  =
      KeyboardPrototypeNetInMsg KeyboardPrototypeNet.Static.Types.IncomingMessage
-- a union type of all the nets and their outgoing transitions
type NetTransition  =
      KeyboardPrototypeNetTrans KeyboardPrototypeNet.Static.Types.Transition
