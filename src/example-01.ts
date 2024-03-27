import {Randomizer} from "./randomizer/Randomizer";
import {DocumentProcessorV1} from "./document/DocumentProcessorV1";
import {IWebDocument} from "./document/interfaces/IWebDocument";
import {IPrintDocument} from "./document/interfaces/IPrintDocument";

const webDocument: IWebDocument = Randomizer.getWebDocument();
const printDocument: IPrintDocument = Randomizer.getPrintDocument()

const webProcessor =
  new DocumentProcessorV1<IWebDocument>(webDocument);
webProcessor.process();


const printProcessor =
  new DocumentProcessorV1<IPrintDocument>(printDocument);
printProcessor.process();



