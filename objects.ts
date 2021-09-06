const profile = {
  name: 'alex',
  age: 25,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

//DESTRUCTURING THE OBJECT WITH ANNOTATIONS
const {age, name}: {age: number; name: string} = profile;

const {coords: {lat, lng} }: {coords: {lat: number ; lng:number} } = profile;