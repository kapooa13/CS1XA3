module Config exposing(..)

-- sets the server URL of the WebSocket server.
-- for servers secured with SSL, use wss://.
-- "ws://localhost:8080" is the default server address
-- for running the server locally.
-- "wss://mac1xa3.ca/e/kapooa13/"
serverUrl : String
serverUrl = "ws://localhost:8080"

