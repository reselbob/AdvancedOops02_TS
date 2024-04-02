import {IWebDocument} from "./document/interfaces/IWebDocument";
import {Randomizer} from "./randomizer/Randomizer";
import {IPrintDocument} from "./document/interfaces/IPrintDocument";
import {DocumentProcessorV2} from "./document/DocumentProcessorV2";

/**
 * The purpose of this file is to demonstrate how to use
 * a class the declares a generic variable at the method level
 */

const webDocument: IWebDocument = Randomizer.getRandomWebDocument();
const printDocument: IPrintDocument = Randomizer.getRandomPrintDocument()

const webProcessor = new DocumentProcessorV2();
webProcessor.process<IWebDocument>(webDocument);

const printProcessor = new DocumentProcessorV2();
printProcessor.process<IPrintDocument>(printDocument);
