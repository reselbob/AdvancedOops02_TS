import {Randomizer} from "./randomizer/Randomizer";
import {DocumentProcessor} from "./document/DocumentProcessor";
import {IWebDocument} from "./document/interfaces/IWebDocument";
import {IPrintDocument} from "./document/interfaces/IPrintDocument";

const webDocument: IWebDocument = Randomizer.getWebDocument();
const printDocument: IPrintDocument = Randomizer.getPrintDocument()

const webProcessor = new DocumentProcessor<IWebDocument>();

webProcessor.process(webDocument);


const printProcessor = new DocumentProcessor<IPrintDocument>();
printProcessor.process(printDocument);



