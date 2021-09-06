//object format of the turple information
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}
//for a tuple we create a Type alias for the drink to indicate a strict method of how the properties of the drinks are arranged
type Drink = [string, boolean, number] //we can now make use of it in that order for other drinks

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 40];