console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.

const fruits = ["apple", "banana", "cherry"];
const vegetables = ["carrot", "spinach", "broccoli"];



// 2. Loop through the list and print: "One of my favorite foods is ______."

for (let fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}




// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.

const favoriteFoods = ["Ramen", "Sushi", "Tacos", "Pizza", "Pho"];

for (let i = 0; i < favoriteFoods.length; i++) {
  console.log(`My #${i + 1} favorite food is ${favoriteFoods[i]}`);
}





// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."

  function printFoodRecommendation(foodName) {
  console.log(`Have you ever tried ${foodName}?`);
  console.log(`I always recommend ${foodName} to friends.`);
  console.log(`Trust me — ${foodName} is delicious.`);
}





// 4b. Call the function at least 3 times

printFoodRecommendation("Ramen");
printFoodRecommendation("Sushi");
printFoodRecommendation("Pho");




// Here's a list of 50 friends' favorite foods:

const friendsFavoriteFoods = [
  "Pizza", "Sushi", "Ramen", "Tacos", "Burgers", "Pho", "Steak", "Pasta", "Curry", "Fried Chicken",
  "Salad", "Ice Cream", "Donuts", "Bagels", "Sandwiches", "BBQ Ribs", "Lobster", "Crab", "Shrimp", "Falafel",
  "Gyros", "Burritos", "Nachos", "Hot Dogs", "Mac and Cheese", "Lasagna", "Chili", "Gumbo", "Jambalaya", "Dim Sum",
  "Spring Rolls", "Pad Thai", "Kebabs", "Meatballs", "Grilled Cheese", "Clam Chowder", "Oysters", "Ceviche", "Enchiladas", "Tamales",
  "Pancakes", "Waffles", "French Toast", "Croissants", "Muffins", "Cupcakes", "Chocolate Cake", "Apple Pie", "Cheesecake", "Brownies"
];


// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Pasta" would be.

const foodsWithA = friendsFavoriteFoods.filter(food => food.toLowerCase().includes("a"));
console.log("Foods with 'a':", foodsWithA);


// 6. Store the result in an array called foodsWithA. Print out the array.

// Task 6: Store foods with "a" in the name and print the array
const foodsWithA = friendsFavoriteFoods.filter(food => food.toLowerCase().includes("a"));
console.log("foodsWithA:", foodsWithA);



// 7. Create a new array longFoodNames for foods with names longer than 6 characters.

const longFoodNames = friendsFavoriteFoods.filter(food => food.length > 6);



// 8. Create another array shortFoodNames for foods 6 characters or shorter.

const shortFoodNames = friendsFavoriteFoods.filter(food => food.length <= 6);



// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."

console.log("Long food names:", longFoodNames);
console.log("Short food names:", shortFoodNames);

if (longFoodNames.length > shortFoodNames.length) {
  console.log("There are more long-named foods.");
} else if (longFoodNames.length < shortFoodNames.length) {
  console.log("There are more short-named foods.");
} else {
  console.log("Equal number of long and short-named foods.");
}


// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."

let longestFood = "";
friendsFavoriteFoods.forEach(food => {
  if (food.length > longestFood.length) {
    longestFood = food;
  }
});
console.log(`The longest food name in the list is ${longestFood} with ${longestFood.length} characters.`);