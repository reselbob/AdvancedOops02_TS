import {faker} from '@faker-js/faker';
import {v4 as uuidv4} from 'uuid';
import {IPerson} from '../document/interfaces/IPerson';
import {IAddress} from '../document/interfaces/IAddress';
import {IWebDocument} from "../document/interfaces/IWebDocument";
import {IPrintDocument} from "../document/interfaces/IPrintDocument";
import {IDocument} from "../document/interfaces/IDocument";

export class Randomizer {
  public static getRandomPerson(): IPerson {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
      id: uuidv4(),
      firstName,
      lastName,
      email: `${firstName}.${lastName}@${faker.internet.domainName()}`,
      phoneNumber: faker.phone.number(),
      address: this.getRandomAddress(),
    };
  }

  public static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public static getRandomAddress(): IAddress {
    return {
      address1: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      city: faker.location.city(),
      stateProvince: faker.location.state(),
      postalCode: faker.location.zipCode(),
      country: 'USA',
    };
  }

  
  public static getRandomDocument(): IDocument{
    return {
      id: uuidv4(),
      title: faker.lorem.words(4),
      text: faker.lorem.paragraphs(2),
      author: this.getRandomPerson()
    }

  }

  public static getRandomWebDocument(): IWebDocument{
    const document = this.getRandomDocument();
    return {
      ...document,
      url: faker.internet.url({ appendSlash: true })
    }
  }

  public static getRandomPrintDocument(): IPrintDocument{
    const document = this.getRandomDocument();
    return {
      ...document,
      pageCount: faker.number.int({ min: 10, max: 100 })
    }
  }
}
