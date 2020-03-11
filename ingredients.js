const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:


let p=0;
while (p<8) {
  console.log(ingredients[p]);
  p++
};


for (let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
};

for (let l = ingredients.length - 1; l>-1; l--){
  console.log(ingredients[l])
}