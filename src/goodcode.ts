/**
 * The purpose of this file is to demonstrate how
 * to create an array of IPerson implementations
 * and then traverse the array.
 *
 * The Randomizer is a custom static class that's
 * intended to generate implementations of a variety
 * of interfaces with random yet appropriate data.
 */
import {IPerson} from "./document/interfaces/IPerson";
import {Randomizer} from "./randomizer/Randomizer";

const arr = new Array<string>;
arr.push("I am good code.");

const persons = new Array<IPerson>();

persons.push(Randomizer.getRandomPerson());
persons.push(Randomizer.getRandomPerson());
persons.push(Randomizer.getRandomPerson());

persons.forEach(person => {
  console.log(`${person.firstName} ${person.lastName}`);
})
