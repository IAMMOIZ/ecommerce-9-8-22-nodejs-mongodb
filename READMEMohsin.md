//user related apis

add user with nested address calling api post api
add another address like permanent or shiping or current put api
update user active status
update user subscription type
update user password forget password api
change payment method
change mobile number
activestatus
update profile apis
update profile apis
update profile apis
find user by its phone number in the array

/payment
add payment method
list of payment method
get details of payment method
delete payement method
update payment method
disable payment method


/address

signin by moiz
logout by moiz
validate user



country {countryName string, status [enm ( active , block , temprary block)],countrycode number , createdate date , updatedate date , \-updatedby :{userid} -\}
opration of apis {  addcountry(post , body) , getallcountrypaginationsearch(post , body) , getcountrydetailsbyid(params me countryid ), deletecountrybyid(params me countryid ) ,  updatecountrybyid(params me countryid , body me update data of country ,patch ) , diactivatecountry()}

//model
//controller
//router
//register router in index.js

state   { stateName , coountryId{ joins on country collection }  , createdate , 
updatedate , updatedby :{userid} } opration of apis {   }


city { stateName , coountryId{ joins on country collection }  , createdate , updatedate , updatedby :{userid} }


show the data structure with the populate

saller customer admin 

get count of all the cat , sub , branch 
product { add , remove , list , updateone , pagination }
category { add , remove , list , updateone , pagination}--
subcategory { add , remove , list , updateone , pagination }--
brand { add , remove , list , updateone , pagination }--
cart for save for later
orders
order tracking 
profile pictures , product pictures 
payment method --

//next product , cart , order , invoice , trackingorder

//csrf , cors , auth , passport