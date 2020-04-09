# Test SSE connection with spring-cloud-gateway

## Components

* Push-service - responsible for sending updates over SSE channel (listens on 8887 for clients and 9001 for push messages)
* Gateway
* Ionic app - connects to push-service over the gateway and receives messages coming over SSE.

## Run push-service

`./gradlew run`

## Run gateway

`./gradlew bootRun`

## Run ionic app

`npm i`

`ionic serve`


## Connection

1. Ionic app connects to gateway (localhost:8080/sse)
2. Gateway routes the request to push-service (localhost:8887/sse)


## Send an update to the connected client

curl -d 'sample-payload' http://localhost:9001/push
