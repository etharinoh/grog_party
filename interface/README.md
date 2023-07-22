# GroggyRock - Interface
This is the interface intended to be a way for viewinign interactions with the GroggyRock Application. This would be intended to be played on a TV or large screen in a similar style to Jackbox for the players to watch. 

## Design
* express for "roll event" listener on events sent from the backend
* axios for communication to the backend
* electron for hosting application

## Requirements
* This should have a minimum ammount of functionality implemented into it apart from basic input and validation.
* This should await on roll events sent by the backend and perform indication on which players turn it is to drink / rule changes
* There should be an option on startup (env?) to disable input so that it is (VIEW_ONLY)
* Each add / remove button should bring up a pop up window