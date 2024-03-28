import {IWebDocument} from "./interfaces/IWebDocument";
import {IPrintDocument} from "./interfaces/IPrintDocument";
import {IWebConfirmation} from "./interfaces/IWebConfirmation";
import {IPrintConfirmation} from "./interfaces/IPrintConfirmation";

/**
 * The purpose of this class is to demonstrate how to create
 * a class implements two generic types T and V.
 *
 * Type T defines the generic that represents to the interface
 * of the document to pass a parameter in the process() method.
 *
 * Type V represents the confirmation type that is returned when
 * executing the process() method.
 *
 * Both T and V are constrained generic types
 */
export class DocumentProcessorV2<T extends IWebDocument | IPrintDocument,
                    V extends IWebConfirmation | IPrintConfirmation> {
  public process(document: T): V | undefined {
    if ('url' in document) {
      // Process as a web document
      const d = (document as IWebDocument);
      console.log("Processing as a web document:", d.url);
      // create the confirmation
      const confirm: IWebConfirmation = {
        timeStamp: new Date(),
        documentId: d.id,
        title: d.title,
        url: d.url
      }
      return confirm as V;
    } else if (('pageCount' in document)) {
      // Process as a print document
      const d = (document as IPrintDocument);
      console.log("Processing as a print document with page count:", d.pageCount);
      // create the confirmation
      const confirm: IPrintConfirmation = {
        timeStamp: new Date(),
        documentId: d.id,
        title: d.title,
        pageCount: d.pageCount
      }
      return confirm as V;
    } else {
      throw new Error('Unsupported type for DocumentProcessor:')
    }
  }
}
