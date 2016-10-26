print("Welcome to the graphLookup exercises")
print("====================================")
print(" ")
print("For hints please type:")
print("basic_hint() - Basic hint")
print("detailed_hint() - Advanced hint")
print("answer() - The answer")
var basic_hint = function() {
	print("db.users.aggregate( [ {$graphLookup: { ... }}] ).pretty()")
}

var detailed_hint = function() {
       print("db.users.aggregate( [{$graphLookup: { from: \"<aaa>\",\
         startWith: \"<xxx>\",\
         connectFromField: \"<xxx>\",\
         connectToField: \"<yyy>\",\
         depthField: \"friendsOfFriendsLevel\",\
         maxDepth : <n>,\
         as : \"friendsHierarchy\"\
   }}]).pretty()")
}

var answer = function() {
        print("db.users.aggregate( [{$graphLookup: { from: \"users\",\
         startWith: \"$friends\",\
         connectFromField: \"friends\",\
         connectToField: \"name\",\
         depthField: \"friendsOfFriendsLevel\",\
         maxDepth : 1,\
         as : \"friendsHierarchy\"\
   }}]).pretty()")
}
var initialize = function() {

db.users.drop()

db.users.insert({_id: 0, name: "Tomer",  friends: ["Pavel", "Adam"]})
db.users.insert({   _id: 1,   name: "Pavel",friends: ["Tomer", "Idan", "Eric", "Pavel"]
})
db.users.insert(
 {
    _id: 2,
    name: "Adam",
    friends: ["Pavel", "Tomer"]
})
db.users.insert(
{
    _id: 3,
    name: "Idan",
    friends: ["Pavel", "Eric"]
})
db.users.insert(
{
    _id: 4,
    name: "Eric",
    friends: ["Pavel", "Idan"]
})


}

initialize()

print(" ")
print(" Collections ")
print("==============")
print("users - docs structure : {_id : Int , name : String , Friends: Array }")
print(" ")
print(" The Task: ")
print("=============")
print("For each document in the users collection, we need to find each user's friends and their friends of friends. The operation specifies a maximum number of recursion to 1.")
print("More info : https://docs.mongodb.com/master/release-notes/3.4-reference/#pipe._S_graphLookup")
print(" ")
print("Good luck!") 



