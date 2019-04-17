module Static.Types exposing(..)
import FrontEndNet.Static.Types


type alias TopLevelData = ()
-- a type identifying all of the nets in the server
type NetModel  =
      FrontEndNet FrontEndNet.Static.Types.NetState
-- a union type of all the nets and their incoming transitions
type NetIncomingMessage  =
      FrontEndNetInMsg FrontEndNet.Static.Types.IncomingMessage
-- a union type of all the nets and their outgoing transitions
type NetTransition  =
      FrontEndNetTrans FrontEndNet.Static.Types.Transition
