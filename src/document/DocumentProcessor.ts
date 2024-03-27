import {IWebDocument} from "./interfaces/IWebDocument";
import {IPrintDocument} from "./interfaces/IPrintDocument";
import {IWebConfirmation} from "./interfaces/IWebConfirmation";

export class DocumentProcessor<T>{

  public process(document: T): void {
    if ((document as IWebDocument).url !== undefined) {
      // Process as a web document
      const d = (document as IWebDocument);
      console.log("Processing as a web document:", d.url);
    } else if ((document as IPrintDocument).pageCount !== undefined) {
      // Process as a print document
      const d = (document as IPrintDocument);
      console.log("Processing as a print document with page count:", d.pageCount);
    } else {
      // Handle other types of documents or unknown types
      console.log("Unknown type of document:", document);
    }
  }
}
