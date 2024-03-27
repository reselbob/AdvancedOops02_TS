import {Randomizer} from "./randomizer/Randomizer";
import {DocumentProcessorV1} from "./document/DocumentProcessorV1";
import {IPerson} from "./document/interfaces/IPerson";

const person = Randomizer.getRandomPerson();

const processor =
  new DocumentProcessorV1<IPerson>(person);
processor.process();
