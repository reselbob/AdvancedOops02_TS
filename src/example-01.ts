import {Randomizer} from "./randomizer/Randomizer";
import {DocumentProcessorV1} from "./document/DocumentProcessorV1";
import {IWebDocument} from "./document/interfaces/IWebDocument";
import {IPrintDocument} from "./document/interfaces/IPrintDocument";

/**
 * The purpose of this file is demonstrate how to
 * program a custom class the uses generics. The custom
 * class is DocumentProcessorV1<T extends IWebDocument | IPrintDocument>
 */

const webDocument: IWebDocument = Randomizer.getRandomWebDocument();
const printDocument: IPrintDocument = Randomizer.getRandomPrintDocument()

const webProcessor =
  new DocumentProcessorV1<IWebDocument>(webDocument);
webProcessor.process();


const printProcessor =
  new DocumentProcessorV1<IPrintDocument>(printDocument);
printProcessor.process();



