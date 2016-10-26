# TLV MUG HANDS ON NEW FEATURES TASTING MONGDB 3.4

What is it?
------------

These are 2 cool excersizes to learn how to use the new $facet search and $graphLookup.


Requirements 
------------------------------------------

Install your MongoDB 3.4 development edition:
https://www.mongodb.com/download-center#community (see Development Releases)
OR
Via ["m tool"](https://github.com/aheckmann/m).

Run the mongod standalone instance.

Clone this project and cd to `MUG2610` directory.

Instructions
--------------

## Facet
Run the following command via the `mongo shell` and follow the prompt instructions:

`mongo --quiet --shell facet/facet.js` 

Docs: https://docs.mongodb.com/master/release-notes/3.4/#new-aggregation-stages-for-faceted-search

## graphLookup
Run the following command via the `mongo shell` and follow the prompt instructions:

`mongo --quiet --shell graphLookup/graphLookup.js` 

Docs: https://docs.mongodb.com/master/release-notes/3.4-reference/#pipe._S_graphLookup

Disclaimer
----------

This software is not supported by [MongoDB, Inc.](http://www.mongodb.com) under any of their commercial support subscriptions or otherwise. Any usage of MUG2610 is at your own risk.

