// 1. Show me how to calculate the average price of all items.


// To get a sum of all prices, we first need all prices
// This `map` will give us an array of all prices
var allPrices = items.map( function (item) {
  return item.price;
});

// Now that I have all the prices, we can `reduce` them down to
// a single value, which is the sum of all prices
var priceSum = allPrices.reduce(function (prev, curr) {
  return prev + curr;
});

// Once we have the sum, we can divide by the number (length) of
// items we have
var avg = priceSum / items.length;

// Let's now round that to 2 decimals
var final = avg.toFixed(2);

// Finally, lets build our answer string
var answer1 = "The average price is $" + final;

// Find my "answer" area in the DOM
var answer1Area = document.querySelector('#answer1');

// Put our answer on the page
answer1Area.innerHTML = answer1;

// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD

// Since I already have the var that gives me the price of all the items, I just have to filter the items that fit the questions criteria.

var $14_18 = allPrices.filter (function (fit) {
  return fit <= 18 && fit >= 14;
});

// Now that I have filtered, I must return the items with their item description to know which items they are.
