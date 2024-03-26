import {IWebDocument} from "./interfaces/IWebDocument";
import {IPrintDocument} from "./interfaces/IPrintDocument";

export class DocumentProcessor<T>{

  public process(document: T): void {
    if ((document as IWebDocument).url !== undefined) {
      // Process as a web document
      console.log("Processing as a web document:", (document as unknown as IWebDocument).url);
    } else if ((document as IPrintDocument).pageCount !== undefined) {
      // Process as a print document
      console.log("Processing as a print document with page count:", (document as unknown as IPrintDocument).pageCount);
    } else {
      // Handle other types of documents or unknown types
      console.log("Unknown type of document:", document);
    }
  }
}
