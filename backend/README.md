# grog_party backend
This is an express backend which will perform functionality and database communication with the redis storage.

## Requirements
We should be able to:
* Have entrypoints for
    * rules
    * dice
    * players
* The drink queue should be timed in this location then send an event to the interface
* THe timer length should be variable (majority wins voting?)
* All data should be validated so that eroneous / malicious data cannot be wrote
* TLS? (https)