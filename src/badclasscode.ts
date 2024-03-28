/**
 * The purpose of this file is to  demonstrate how to
 * create a compile-time error against a class that's
 * declared with a generic that's constrained.
 *
 * The constrained class is DocumentProcessorV1
 */
import {Randomizer} from "./randomizer/Randomizer";
import {DocumentProcessorV1} from "./document/DocumentProcessorV1";
import {IPerson} from "./document/interfaces/IPerson";

const person = Randomizer.getRandomPerson();

const processor =
  new DocumentProcessorV1<IPerson>(person);
processor.process();
