print("Welcome to the graphLookup excersize")
print("====================================")
print(" ")
print("For hints please tyoe:")
print("hint_basic() - Basic hint")
print("hint_advanced() - Advanced hint")
print("answer() - The answer")
var hint_basic = function() {
	print("db.travelers.aggregate( [ {$graphLookup: { ... }}] ).pretty()")
}

var hint_advanced = function() {
       print("db.users.aggregate( [{$graphLookup: { from: \"<aaa>\",\
         startWith: \"<xxx>\",\
         connectFromField: \"<xxx>\",\
         connectToField: \"<yyy>\",\
         depthField: \"friendsOfFriendsLevel\",\
         maxDepth : <n>,\
         as : \"friendsHierarchy\"\
   }},{$project : {\"name\" :1 , \"Freinds\" :{ \"name\" : \"$friendsHierarchy.name\", \"friendsOfFriendsLevel\" : \"$friendsHierarchy.friendsOfFriendsLevel\"}}}]).pretty()")
}

var answer = function() {
        print("db.users.aggregate( [{$graphLookup: { from: \"users\",\
         startWith: \"$approved_requests\",\
         connectFromField: \"approved_requests\",\
         connectToField: \"_id\",\
         depthField: \"friendsOfFriendsLevel\",\
         maxDepth : 2,\
         as : \"friendsHierarchy\"\
   }},{$project : {\"name\" :1 , \"Freinds\" :{ \"name\" : \"$friendsHierarchy.name\", \"friendsOfFriendsLevel\" : \"$friendsHierarchy.friendsOfFriendsLevel\"}}}]).pretty()")
}
var initialize = function() {

db.users.drop()
db.users.insert({ "_id" : 1, "name" : "Alice", "image" : "profile1.png"  , "pending_requests" : [2], "approved_requests" : [ 3, 4] })
db.users.insert({ "_id" : 2, "name" : "Bob",  "image" : "profile2.png"  ,  "pending_requests" : [], "approved_requests" : [ 3, 4] })
db.users.insert({ "_id" : 3, "name" : "Charlie", "image" : "profile3.png" , "pending_requests" : [4] , "approved_requests" : [2,1] })
db.users.insert({ "_id" : 4, "name" : "David", "image" : "profile4.png" , "pending_requests" : [] , "approved_requests" : [1,2] })
}

initialize()

print(" ")
print(" Collections ")
print("==============")
print("users - docs structure : {_id : Int , name : String , image : String , pending_requests : Array, approved_requests: Array }")
print(" ")
print(" The Task: ")
print("=============")
print("For each document in the uses collection, we need to find their friends (approved_requests) and their friends of friends . Make sure that the friends of pending requestes are not shown. The operation specifies a maximum number of recursion to 2.")
print("More info : https://docs.mongodb.com/master/release-notes/3.4-reference/#pipe._S_graphLookup")
print(" ")
print("Good luck!") 



