// - Ask the user for their age and how far they are travelling (in km)
//    -- The price per travelled km will be £0.21
//    -- Junior passengers (under 18) get a 20% discount
//    -- Senior passengers (over 65) get a 40% discount
// - Based on the answers, print a message in the console which tells the user how much they will need to pay for the ride.

let km = Number(prompt('How many km do you want to travel')) 
let age =  Number(prompt('How old are you')) 
let kmPrices = 0.21

let junior = 0.2
let senior = 0.4

let fare = km * kmPrices
let juniorFare = fare - (fare * junior) 
let seniorFare= fare - (fare * senior)

if (age < 18) {
    console.log('You need to pay: ' + juniorFare + "£")
} else if (age > 65) {
    console.log('You need to pay: ' + seniorFare + "£")
}else {
    console.log('You need to pay: ' + fare + "£")
}
