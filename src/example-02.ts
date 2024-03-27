import {Randomizer} from "./randomizer/Randomizer";
import {DocumentProcessorV2} from "./document/DocumentProcessorV2";
import {IWebDocument} from "./document/interfaces/IWebDocument";
import {IPrintDocument} from "./document/interfaces/IPrintDocument";
import {IWebConfirmation} from "./document/interfaces/IWebConfirmation";
import {IPrintConfirmation} from "./document/interfaces/IPrintConfirmation";

const webDocument: IWebDocument = Randomizer.getWebDocument();
const printDocument: IPrintDocument = Randomizer.getPrintDocument()

const webProcessor =
  new DocumentProcessorV2<IWebDocument, IWebConfirmation>();

const webResult = webProcessor.process(webDocument);
console.log({webResult})


const printProcessor =
  new DocumentProcessorV2<IPrintDocument, IPrintConfirmation>();
const printResult =  printProcessor.process(printDocument);
console.log({printResult})



