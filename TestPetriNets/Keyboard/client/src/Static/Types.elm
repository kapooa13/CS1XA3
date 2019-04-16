module Static.Types exposing(..)
import KeyboardNet.Static.Types


type alias TopLevelData = ()
-- a type identifying all of the nets in the server
type NetModel  =
      KeyboardNet KeyboardNet.Static.Types.NetState
-- a union type of all the nets and their incoming transitions
type NetIncomingMessage  =
      KeyboardNetInMsg KeyboardNet.Static.Types.IncomingMessage
-- a union type of all the nets and their outgoing transitions
type NetTransition  =
      KeyboardNetTrans KeyboardNet.Static.Types.Transition
