port module Main exposing (..)

import Browser
import Browser.Navigation exposing (Key(..))
import GraphicSVG exposing (..)
import GraphicSVG.App exposing (..)
import Url
import Random exposing (..)
import Delay
import Array
import Task

import Html
import Html.Events exposing (onClick)

import Bootstrap.Button as Button
import Bootstrap.Utilities.Spacing as Spacing
import Bootstrap.CDN as CDN
import Bootstrap.Grid as Grid

import Json.Encode as E

type Msg = Tick Float GetKeyState
         | MakeRequest Browser.UrlRequest
         | UrlChange Url.Url
         | UserGlow GameColor
         | ModelGlow GameColor
         | InLobby GameColor
         | StopGlow
         | StopUserGlow
         | StopFunGlow
         | ShowingUser
         | EndCheck
         | PlayModelSound GameColor
         | PlayUserSound GameColor
         | PlayFunSound GameColor
         | PlayError         
         | NewInt Int
         | Reinitialise

type GameColor = GameRed 
               | GameYellow 
               | GameGreen 
               | GameBlue
               | GameBlack

type GameState = ShowingColors
               | WaitingInput
               | Fun

-- generate : (a -> msg) -> Generator a -> Cmd msg
gameInt : Cmd Msg
gameInt = generate NewInt (int 0 3)

-- ------------------------------------------------------
stopGlow : Model -> Cmd Msg
stopGlow model =
    Delay.sequenceIf (True) <|
        Delay.withUnit Delay.Millisecond
            [ ( model.delaySpeed, StopGlow )
            ]
-- -----------------------------------------------------------------

stopUserGlow : Model -> Cmd Msg
-- This function is called during userinput to check whether userinput == gamerecord
stopUserGlow model = if model.userRecord == (List.take model.userCounter model.gameRecord) 
                     then Delay.sequenceIf (True) <| Delay.withUnit Delay.Millisecond [ ( model.delaySpeed, StopUserGlow ) ] 
                     else Delay.sequenceIf (True) <| Delay.withUnit Delay.Millisecond [ (0, PlayError), (0, Reinitialise) ]

stopFunGlow : Model -> Cmd Msg
stopFunGlow model =
    Delay.sequenceIf (True) <|
        Delay.withUnit Delay.Millisecond
            [ ( model.delaySpeed, StopFunGlow )
            ]
-- -----------------------------------------------------------------

lightUpBox : Int -> Msg
lightUpBox box = case box of
                    0 -> ModelGlow GameRed
                    1 -> ModelGlow GameYellow
                    2 -> ModelGlow GameGreen
                    3 -> ModelGlow GameBlue
                    otherwise -> ModelGlow GameBlack

getLit : Int -> Cmd Msg
getLit boxnum = Task.succeed boxnum |> Task.perform (lightUpBox)

showThisBox : Int -> Model -> Cmd Msg
-- glows corresponding boxnum at a delay
showThisBox boxnum model = 
    Delay.sequenceIf (True) <|
        Delay.withUnit Delay.Millisecond
            [ ( 600
              , case ( Array.get (boxnum) (Array.fromList (model.gameRecord)) ) of
                       Just x  -> lightUpBox x
                       Nothing -> lightUpBox 8 
              )
            ]
-- --------------------------------------------------------------------

run : msg -> Cmd msg
run m =
    Task.perform (always m) (Task.succeed ())

-- --------------------------------------------------------------------

type alias Model = { userRecord : List Int, gameRecord : List Int, userCounter : Int, modelCounter : Int, showCounter : Int, delaySpeed : Float
                   , colorR : Color, colorY : Color, colorG : Color, colorB : Color, gState : GameState, viewState : Bool } 


init : () -> Url.Url -> Key -> ( Model, Cmd Msg )
init flags url key = 
        let
            model = { userRecord = [], gameRecord = [], userCounter  = 0, modelCounter = 1, showCounter = 0, gState = Fun, delaySpeed = 350
                    , colorR = rgb 214 10 10, colorY = rgb 255 216 0, colorG = rgb 16 186 13, colorB = rgb 0 116 178, viewState = True }
                    --         increase 245            increase   30         increase 200          increase g b 200 220
        in 
            ( model , gameInt )

port play : E.Value -> Cmd msg

playSoundFromColor : GameColor -> Cmd msg
playSoundFromColor color = case color of
                                GameRed     -> play (E.string <| "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")
                                GameYellow  -> play (E.string <| "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")
                                GameGreen   -> play (E.string <| "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")
                                GameBlue    -> play (E.string <| "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
                                GameBlack   -> play (E.string <| "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")

playError : Cmd msg
playError = play (E.string <| "error.mp3")

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model = case msg of
                     Tick time keystate    -> ( model, Cmd.none )

                     MakeRequest req       -> ( model, Cmd.none )
                     UrlChange url         -> ( model, Cmd.none )

                     Reinitialise           -> let
                                                some = { userRecord = [], gameRecord = [], userCounter  = 0, modelCounter = 1, showCounter = 0, gState = Fun, delaySpeed = 350
                                                        , colorR = rgb 214 10 10, colorY = rgb 255 216 0, colorG = rgb 16 186 13, colorB = rgb 0 116 178, viewState = True }
                                                        --         increase 245            increase   30         increase 200          increase g b 200 220
                                               in 
                                                  ( some , Cmd.batch [gameInt, run <| ShowingUser] )

                     UserGlow color        -> if model.gState == WaitingInput then
                                                if model.userCounter < model.modelCounter then
                                                    case color of
                                                        GameRed     -> ( { model | colorR = rgb 245 10 10
                                                                        , userCounter = model.userCounter + 1
                                                                        , userRecord = model.userRecord ++ [0] }
                                                                        , run <| PlayUserSound GameRed)

                                                        GameYellow  -> ( { model | colorY = rgb 255 239 109
                                                                        , userCounter = model.userCounter + 1
                                                                        , userRecord = model.userRecord ++ [1] }
                                                                        , run <| PlayUserSound GameYellow)

                                                        GameGreen   -> ( { model | colorG = rgb 16 230 13
                                                                        , userCounter = model.userCounter + 1
                                                                        , userRecord = model.userRecord ++ [2] }
                                                                        , run <| PlayUserSound GameGreen)

                                                        GameBlue    -> ( { model | colorB = rgb 0 160 220
                                                                        , userCounter = model.userCounter + 1
                                                                        , userRecord = model.userRecord ++ [3] }
                                                                        , run <| PlayUserSound GameBlue)

                                                        otherwise -> ( { model | colorR = white, colorY = white
                                                                                , colorG = white, colorB = white}, Cmd.none)
                                                    else ( model, Cmd.none)
                                              else (model, Cmd.none)

                     ModelGlow color       -> if model.gState == ShowingColors then
                                                case color of
                                                    GameRed     -> ( { model | colorR = rgb 245 10 10, showCounter = model.showCounter + 1}
                                                                    , run <| PlayModelSound GameRed)

                                                    GameYellow  -> ( { model | colorY = rgb 255 239 109, showCounter = model.showCounter + 1}
                                                                    , run <| PlayModelSound GameYellow)

                                                    GameGreen   -> ( { model | colorG = rgb 16 230 13, showCounter = model.showCounter + 1}
                                                                    , run <| PlayModelSound GameGreen)

                                                    GameBlue    -> ( { model | colorB = rgb 0 160 220, showCounter = model.showCounter + 1}
                                                                    , run <| PlayModelSound GameBlue)

                                                    otherwise -> ( { model | colorR = black, colorY = black
                                                                            , colorG = black, colorB = black}, Cmd.none)
                                              else ( model, Cmd.none)
                    
                     InLobby color         -> if model.gState == Fun then
                                                     case color of
                                                            GameRed     -> ( { model | colorR = rgb 245 10 10}
                                                                            , run <| PlayFunSound GameRed)

                                                            GameYellow  -> ( { model | colorY = rgb 255 239 109}
                                                                            , run <| PlayFunSound GameYellow)

                                                            GameGreen   -> ( { model | colorG = rgb 16 230 13}
                                                                            , run <| PlayFunSound GameGreen)

                                                            GameBlue    -> ( { model | colorB = rgb 0 160 220}
                                                                            , run <| PlayFunSound GameBlue)

                                                            otherwise -> ( { model | colorR = black, colorY = black
                                                                                   , colorG = black, colorB = black}, Cmd.none)
                                             else ( { model | colorR = black, colorY = black
                                                            , colorG = black, colorB = black}, Cmd.none)                                                  


                     StopGlow              -> ( { model |  colorR = rgb 214 10 10, colorY = rgb 255 216 0
                                                         , colorG = rgb 16 186 13, colorB = rgb 0 116 178 }, run ShowingUser)

                     StopUserGlow          -> if model.userCounter == model.modelCounter 
                                              then ( { model |  colorR = rgb 214 10 10, colorY = rgb 255 216 0
                                                         , colorG = rgb 16 186 13, colorB = rgb 0 116 178 }, run EndCheck)
                                              else ( { model |  colorR = rgb 214 10 10, colorY = rgb 255 216 0
                                                         , colorG = rgb 16 186 13, colorB = rgb 0 116 178 }, Cmd.none)

                     StopFunGlow           -> ( { model |  colorR = rgb 214 10 10, colorY = rgb 255 216 0
                                                         , colorG = rgb 16 186 13, colorB = rgb 0 116 178 }, Cmd.none )

                     ShowingUser           -> if model.showCounter < model.modelCounter
                                              then ( { model | gState = ShowingColors } , showThisBox model.showCounter model)
                                              else ( { model | gState = WaitingInput, showCounter = 0 }, Cmd.none)
                                               -- because of the line above right here ^, showCounter should be equal to 0 at
                                               -- EndCheck and therefore should not require reassignment  
                     EndCheck              -> let
                                                speed = if model.delaySpeed <= 80 then 80 else (model.delaySpeed - 60)
                                              in
                                                ( { model | modelCounter = model.modelCounter + 1, gState = ShowingColors
                                                        , userRecord = [], userCounter = 0, delaySpeed = speed}
                                                        , Cmd.batch [run ShowingUser, gameInt])

                     PlayModelSound color  -> ( model, Cmd.batch [ stopGlow model, playSoundFromColor color] )

                     PlayUserSound color   -> ( model, Cmd.batch [ stopUserGlow model, playSoundFromColor color] )

                     PlayFunSound color    -> ( model, Cmd.batch [ stopFunGlow model, playSoundFromColor color] )

                     PlayError             -> ( model, playError)

                     NewInt a              -> ( { model | gameRecord = List.append model.gameRecord [a]}, Cmd.none)


bootstrapButton : Model -> Html.Html Msg
bootstrapButton model =
    Grid.container []
        [ CDN.stylesheet -- creates an inline style node with the Bootstrap CSS
        , Grid.row []
            [ Grid.col []
                [ Button.button [ Button.large, Button.outlineDark, Button.attrs [ Spacing.ml1 ] ] [ Html.text "Start" ]]
            ]

        ]

view : Model -> { title : String, body : Collage Msg }
view model = let 
                title = "Simon: A memorization game"
                body = collage 800 800 shapes
                shapes = [ myGame |> move (0, -10)
                          , customFont ("Helvetica") (text ("Infinite Simon in Elm")) 
                                 |> size 42 |> filled black |> move (-195, 290)
                         ]
                
                myGame = group [
                          myRBox |> notifyTap (if model.gState == Fun then (InLobby GameRed) else (UserGlow GameRed))
                        , myYBox |> notifyTap (if model.gState == Fun then (InLobby GameYellow) else (UserGlow GameYellow))
                        , myGBox |> notifyTap (if model.gState == Fun then (InLobby GameGreen) else (UserGlow GameGreen))
                        , myBBox |> notifyTap (if model.gState == Fun then (InLobby GameBlue) else (UserGlow GameBlue))
                        , customFont ("Arial") (text ("Score: " ++ (Debug.toString <| model.modelCounter - 1))) 
                                    |> size 28 |> filled black |> move (100, 230)
                        -- , text (Debug.toString model.gameRecord) |> size 28 |> filled black |> move (-330, -310)
                        -- , text (Debug.toString model.userRecord) |> size 28 |> filled black |> move (-330, -320)
                        -- , text (Debug.toString model.gState)     |> size 28 |> filled black |> move (-24, 290)
                        -- , text ("showCounter " ++ Debug.toString model.showCounter) |> size 28 |> filled black |> move (-330, 320)
                        -- , text ("userCounter " ++ Debug.toString model.userCounter) |> size 28 |> filled black |> move (-330, 290)
                        -- , text ("modelCounter " ++ Debug.toString model.modelCounter) |> size 28 |> filled black |> move (-330, 260)
                        , html 140 55 (bootstrapButton model) |> move (-65,-230) |> notifyTap (ShowingUser)
                        ]
                
                myRBox = square 200 |> filled model.colorR |> move (-100,100)
                myYBox = square 200 |> filled model.colorY |> move (100,100)
                myGBox = square 200 |> filled model.colorG |> move (-100,-100)
                myBBox = square 200 |> filled model.colorB |> move (100,-100)
                
            in { title = title , body = body }

subscriptions : Model -> Sub Msg
subscriptions model = Sub.none

main : AppWithTick () Model Msg
main = appWithTick Tick
       { init = init
       , update = update
       , view = view
       , subscriptions = subscriptions
       , onUrlRequest = MakeRequest
       , onUrlChange = UrlChange
       }
{--
- JS for audio using ports:
var play = 1.0;
function PerformCalc(){
	if (play <= 1.5){
		play += 0.0558;
	}
}
app.ports.play.subscribe(function (soundUrl) {
          var x = document.getElementById("sound");
          //console.log(soundUrl)
          x.src = soundUrl;
					PerformCalc();
					console.log("Should have decrease playback speed")
					x.playbackRate = play;
          x.play();
      })
</script>
<audio id="sound" src=""></audio>
--}
