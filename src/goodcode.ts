import {IPerson} from "./document/interfaces/IPerson";
import {Randomizer} from "./randomizer/Randomizer";

c


const arr = new Array<string>;
arr.push("I am good code.");

const persons = new Array<IPerson>();

persons.push(Randomizer.getRandomPerson());
persons.push(Randomizer.getRandomPerson());
persons.push(Randomizer.getRandomPerson());

persons.forEach(person => {
  console.log(`${person.firstName} ${person.lastName}`);
})
