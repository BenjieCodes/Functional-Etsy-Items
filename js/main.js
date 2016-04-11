// 1. Show me how to calculate the average price of all items.


// To get a sum of all prices, we first need all prices
// This `map` will give us an array of all prices
var allPrices = items.map( function (item){
  return item.price;
});

// Now that I have all the prices, we can `reduce` them down to
// a single value, which is the sum of all prices
var priceSum = allPrices.reduce(function (prev, curr){
  return prev + curr;
});

// Once we have the sum, we can divide by the number (length) of
// items we have
var avg = priceSum / items.length;

// Let's now round that to 2 decimals
var final1 = avg.toFixed(2);

// Finally, lets build our answer string
var answer1 = "The average price is $" + final1;

// Find my "answer" area in the DOM
var answer1Area = document.querySelector('#answer1');

// Put our answer on the page
answer1Area.innerHTML = answer1;

// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD

// I must first make an array to get the items that are in between those prices
var $14_18 = items.filter (function (item){
  return item.price < 18 && item.price > 14;
});

// Now have the var $14_18 that displays on the page using the DOM
var answer2Area = document.querySelector("#answer2");

// Create a loop that will make a paragraph "for each" item
$14_18.forEach(function (item) {
// Make a paragraph tag for the answers
var para = document.createElement("p");
// Make a variable to put text and answer in.
// By using innerHTML, the content "item.title" will be displayed on to the document.
para.innerHTML = item.title; + "";
// Make a command that will add the element p and the title item each time it goes through the id #answer2.
answer2Area.appendChild(para);
});


// 3. Which item has a "GBP" currency code? Display it's name and price.

// Made a variable that will filter all items that have currency code "GBP".
var gbp = items.filter (function (item){
  return item.currency_code === "GBP";
});

// After filtering the items, I now made a var that will display the title and answer of the filtered items.
var answer3 = gbp.map(function (gbpcurrency){
  return gbpcurrency.title + " costs £" + gbpcurrency.price;
});

// This variable displays the item on HTML using the DOM.
var answer3Area = document.querySelector('#answer3');
answer3Area.innerHTML = answer3

// 4. Display a list of all items who are made of wood.

// // Made a variable to show what the materials are made out of for all items
// var material = items.map (function (item){
//   return item.materials;
// });
//
// // Made a command that will show which items are made of the wood
// var wood = material.map (function(madeOf){
//   return madeOf.indexOf ("wood")
// });
//
// //STUCK HERE
//
// var answer4 = wood.map (function (answer){
//   if (wood >= 0) {
//     items.title.push;
//   }
// });
//ABOVE WAS THE OLD CODE THAT I USED BUT FAILED TO ANSWER THE QUESTION

// Filter out the items that are made of wood
var wood = items.filter (function (item) {
  return item.materials.indexOf("wood") >= 0;
});

// Display the filtered items onto the page by listing with createElement and adding content with a forEach and appendChild.
// Create a variable so that the DOM can be used on the ID #answer4.
var answer4Area = document.querySelector("#answer4")
// Make a loop so that for each item on the array wood, there will be a paragraph tag and content inside.
wood.forEach (function (item){
  // Make a paragraph tag
  var para = document.createElement("p");
  // The innerHTML will display the answer by adding the items title and also a string that states it's made of wood.
  para.innerHTML = item.title + " is made of wood";
  answer4Area.appendChild(para);
});



// 5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

// Made a variable that found the length of the object "materials" to filter items that were 8 or more.
var eight = items.filter(function (item){
  return item.materials.length >= 8;
});

// Made a varibale that will show the items filtered with 8 or more materials.
var answer5 = eight.map(function (item){
  return item.title;
});

// This variable displays the item on HTML using the DOM.
var answer5Area = document.querySelector('#answer5');
answer5Area.innerHTML = answer5;



// 6. How many items were made by their sellers?

// Found the number of items that were my by sellers.
var sellers = items.filter (function (item){
  if (item.who_made === "i_did")
  return item;
});

// This variable displays the item on HTML using the DOM.
var answer6Area = document.querySelector('#answer6');
var answer6 = ""+ sellers.length+ " items were made by their sellers";
answer6Area.innerHTML = answer6;





// //Homework Review
//
// //Number 4
//
// // 1. Filter down to items made of wood
// // var woodyItems = items.filter (function (item) {
// //   return item.materials === "wood"
// //doesnt work because materials is an array
//
// var woodyItems = items.filter (function (item){
//   return item.materials.indexOf ("wood") >= 0
// });
//
//
// // 2. Get those on my page, and append "is made of wood"
//
// var answer4Area = document.querySelector("#answer4");
//
// woodyItems.forEach( function (item) {
//   var pTag = document.createElement("p");
//   pTag.innerHTML = item.title + "is made of wood";
//   answer4Area.appendChild(pTag);
// });
