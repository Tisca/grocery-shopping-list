var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];

console.log(groceries.length);
// 18

var deleteDuplicates = function(list) {
  var cleanList = [];
  for(var item of groceries) {
    if(!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }
  return cleanList;
};

var newGroceries = deleteDuplicates(groceries);

console.log(newGroceries.length);
// 15

newGroceries.forEach(function(item, index) {
  console.log(`#${index + 1} ${item}`);
});

/* 
#1 milk
#2 coffee
#3 oranges
#4 yogourt
#5 bread
#6 juice
#7 lettuce
#8 flour
#9 apples
#10 cat food
#11 ice cream
#12 potatoes
#13 bananas
#14 olive oil
#15 mustard
*/