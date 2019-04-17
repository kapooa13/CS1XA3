module KeyboardPrototypeNet.Static.Update where
import KeyboardPrototypeNet.Static.Types
import KeyboardPrototypeNet.Static.Wrappers
import KeyboardPrototypeNet.Static.FromSuperPlace (FromSuperPlace(..))
import KeyboardPrototypeNet.Update as Update
import qualified Static.Cmd as Cmd
import qualified Data.TMap as TM
import Static.ServerTypes
import qualified Data.IntMap.Strict as IM'
import Data.Maybe (fromJust, isJust, mapMaybe)
import Utils.Utils
import Static.Cmd (Cmd)
import Plugins.Users (processLogout, Users)
import Static.Task (evalTask)

-- player processing functions
processBoardKeyPressedPlayer :: ((ClientID, KeyboardPlayer) -> BoardKeyPressedfromKeyboard) -> (ClientID, Player) -> ((ClientID, Player), (ClientID, Maybe ClientMessage))
processBoardKeyPressedPlayer fromKeyboard (cId,player) = case player of
    PKeyboardPlayer  -> let (np, mCm) = (unwrapBoardKeyPressedfromKeyboard $ fromKeyboard (cId,KeyboardPlayer )) in ((cId, np), (cId, mCm))



-- player splitting functions
splitBoardKeyPressedPlayers :: [(ClientID,Player)] -> ([(ClientID,KeyboardPlayer)])
splitBoardKeyPressedPlayers players = foldl (\t@(fromKeyboardlst) pl -> case pl of
    (cId,p@(PKeyboardPlayer )) -> ((cId,KeyboardPlayer ):fromKeyboardlst)

    _ -> t) ([]) players


-- process player connect
clientConnect :: FromSuperPlace -> ClientID -> NetState Player -> NetState Player
clientConnect fsp clientID state =
    let
        (keyboard,keyboardPlayer) = Update.clientConnect fsp clientID (safeFromJust "client connect Net" $ TM.lookup $ placeStates state)
    in
        state { placeStates = TM.insert keyboard $ placeStates state, playerStates = IM'.insert clientID (unwrapKeyboardPlayer keyboardPlayer) (playerStates state) }

-- process player disconnects
disconnect :: FromSuperPlace -> ClientID -> NetState Player -> IO (NetState Player)
disconnect fsp clientID state =
    let
        player = safeFromJust "disconnect" $ IM'.lookup clientID $ players
        places = placeStates state
        players = playerStates state
        newPlaces = case player of
            PKeyboardPlayer  -> (flip TM.insert) places $ clientDisconnectFromKeyboard fsp clientID (safeFromJust "clientDisconnectFrom" $ TM.lookup places) (KeyboardPlayer )

        newPlayers = IM'.delete clientID players
        task = processLogout clientID
    in do
        case (TM.lookup $ pluginStates state :: Maybe Plugins.Users.Users) of
            Just _ -> do
                evalTask (pluginStates state) task -- back door into the users plugin...
                return ()
            Nothing -> return ()
        return $ state { playerStates = newPlayers, placeStates = newPlaces }

update :: TopLevelData -> Maybe ClientID -> Transition -> NetState Player -> (NetState Player,[(ClientID,ClientMessage)],Maybe (Cmd.Cmd Transition))
update tld mClientID trans state =
    let
        places = placeStates state
        players = playerStates state
        (newPlaces, newPlayers, clientMessages, cmd) = 
            case trans of
                (TBoardKeyPressed myKeyInteger) ->
                    let
                        (keyboardPlayerLst) = splitBoardKeyPressedPlayers (IM'.toList players)
                        (keyboard,fromKeyboard) = updateBoardKeyPressed tld (fromJust mClientID) ((BoardKeyPressed myKeyInteger) ) ((safeFromJust "place lookup") $ TM.lookup places) (map snd keyboardPlayerLst)
                        newPlaces = TM.insert keyboard places
                        (newPlayers, clientMessages) = unzip $ map (processBoardKeyPressedPlayer fromKeyboard) (mapSnd unwrapKeyboardPlayer keyboardPlayerLst)
                    in
                        (newPlaces, newPlayers, clientMessages, Nothing)


    in
        (state
           {
                placeStates = newPlaces
           ,    playerStates = insertList newPlayers $ players
           }
        , mapMaybe (\(a,b) -> if isJust b then Just (a,fromJust b) else Nothing) clientMessages
        , cmd)
