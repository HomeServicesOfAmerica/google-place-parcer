# google-place-parcer

This repository parses the results of the Google places API to separate out the neighborhood, city, county, state, zipcode,
and country of the returned result.

## Supported Input
Currently, this only works (to the extent that it does...) with the results from a search to the following endpoint:
https://maps.googleapis.com/maps/api/place/autocomplete/json?input=INPUT&types=(regions)&key=KEY
