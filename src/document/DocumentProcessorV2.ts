import {IWebDocument} from "./interfaces/IWebDocument";
import {IPrintDocument} from "./interfaces/IPrintDocument";
import {IWebConfirmation} from "./interfaces/IWebConfirmation";
import {IPrintConfirmation} from "./interfaces/IPrintConfirmation";

/**
 * The purpose of this class is to demonstrate how
 * to declare a generic at the method level.
 */
export class DocumentProcessorV2 {
  public process<T extends IWebDocument | IPrintDocument>(document: T): void {
    if ('url' in document) {
      // Process as a web document
      const d = (document as IWebDocument);
      console.log("Processing as a web document:", d.url);
    } else if (('pageCount' in document)) {
      // Process as a print document
      const d = (document as IPrintDocument);
      console.log("Processing as a print document with page count:", d.pageCount);
    } else {
      throw new Error('Unsupported type for DocumentProcessor:')
    }
  }
}
