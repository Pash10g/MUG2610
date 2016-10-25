
print("Welcome to the Facet search exercises")
print("====================================")
print(" ")
print("For hints please type:")
print("basic_hint() - Basic hint")
print("detailed_hint() - Advanced hint")
print("answer() - The answer")
var basic_hint = function() {
   print("db.products.aggregate( [\
   {\
      $facet: { \"categorizedByTags\": [ ... ],\
      \"categorizedByPrice\": [ ... ],\
      \"categorizedByPrice(Auto)\": [ ... ]\}}]).pretty()")
}

var detailed_hint = function() {
 print("db.products.aggregate( [\
   {\
      $facet: { \"categorizedByTags\": [  { $unwind: \"<xxx>\" },  { $sortByCount: \"<xxx>\" } ],\
      \"categorizedByPrice\": [ { $match: { <yyy> : {$exists: 1 } } },  { $bucket: { groupBy: \"<yyy>\", boundaries: [ ... ] } }],\
      \"categorizedByPrice(Auto)\": [ { $bucketAuto: { groupBy: \"<yyy>\" , buckets: n} } ]}}]).pretty()")
}

var answer = function() {
 print("db.products.aggregate( [\
   {\
      $facet: { \"categorizedByTags\": [  { $unwind: \"$tags\" },  { $sortByCount: \"$tags\" } ],\
      \"categorizedByPrice\": [ { $match: { price : {$exists: 1 } } },  { $bucket: { groupBy: \"$price\", boundaries: [ 0, 10, 50, 100, 1000 ] } }],\
      \"categorizedByPrice(Auto)\": [ { $bucketAuto: { groupBy: \"$price\" , buckets: 3} } ]}}]).pretty()")
}

var initialize = function() {
db.products.drop()
db.products.insert({_id : 1, title: "Ipod", price: 9 , description : "Apple music player", tags: ["music", "player", "apple"]})
db.products.insert({_id : 2, title: "Mac", price: 100 , description : "Apple music player", tags: [ "computer", "apple"]})
db.products.insert({_id : 3, title: "Headphones shuk", price: 49 , description : "Apple music player", tags: [ "headphones", "music"]})
db.products.insert({_id : 4, title: "Pen", description : "Apple music player", tags: [ "writing", "office"]})
}


initialize()

print(" ")
print(" Collections ")
print("==============")
print("products - docs structure : { _id : Int, title: String, price: int (optional) , description : String, tags: Array }")
print(" ")
print(" The Task: ")
print("=============")
print(" Preform a facet search showing results of products by tag and by price. Optionally run an additional automatic 3 buckets by price.")
print("More info https://docs.mongodb.com/master/release-notes/3.4/#new-aggregation-stages-for-faceted-search")
print(" ")
print("Good luck!") 



