import {Randomizer} from "./randomizer/Randomizer";
import {DocumentProcessorV3} from "./document/DocumentProcessorV3";
import {IWebDocument} from "./document/interfaces/IWebDocument";
import {IPrintDocument} from "./document/interfaces/IPrintDocument";
import {IWebConfirmation} from "./document/interfaces/IWebConfirmation";
import {IPrintConfirmation} from "./document/interfaces/IPrintConfirmation";
/**
 * The purpose of this file is to demonstrate how to
 * program a class that takes two generic types.
 *
 * One type T represents an implementation of the interface
 * for the document to process.
 *
 * The other type V represents the interface that specifies
 * the implementation of the confirmation object returned
 * be the process() method of the DocumentProcessorV2 class.
 */

const webDocument: IWebDocument = Randomizer.getRandomWebDocument();
const printDocument: IPrintDocument = Randomizer.getRandomPrintDocument()

const webProcessor =
  new DocumentProcessorV3<IWebDocument, IWebConfirmation>();

const webResult = webProcessor.process(webDocument);
console.log({webResult})


const printProcessor =
  new DocumentProcessorV3<IPrintDocument, IPrintConfirmation>();
const printResult =  printProcessor.process(printDocument);
console.log({printResult})



