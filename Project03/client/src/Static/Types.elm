module Static.Types exposing(..)
import MyKeyboardNet.Static.Types


type alias TopLevelData = ()
-- a type identifying all of the nets in the server
type NetModel  =
      MyKeyboardNet MyKeyboardNet.Static.Types.NetState
-- a union type of all the nets and their incoming transitions
type NetIncomingMessage  =
      MyKeyboardNetInMsg MyKeyboardNet.Static.Types.IncomingMessage
-- a union type of all the nets and their outgoing transitions
type NetTransition  =
      MyKeyboardNetTrans MyKeyboardNet.Static.Types.Transition
