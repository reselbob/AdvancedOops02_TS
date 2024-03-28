import {IWebDocument} from "./interfaces/IWebDocument";
import {IPrintDocument} from "./interfaces/IPrintDocument";

/**
 * The purpose of this class is to demonstrate how declare
 * generic type. The generic type is T which represents
 * the interface of the document to process.
 *
 * The type T is constrained to only allows implementations of the
 * IWebDocument or IPrintDocument interface.
 */
export class DocumentProcessorV1<T extends IWebDocument | IPrintDocument>{
  // The document to process
  document: T
  // Set the document to process as a constructor parameter
  constructor(document: T) {
    this.document = document
  }

  /**
   * The method processes the document defined by type T.
   *
   * If T is an implementation of the IWebDocument interface then
   * the IWebDocument.url property is called.
   *
   * If T is an implementation of the IPrintDocument then the
   * IPrintDocument.pageCount property is called.
   */
  public process(): void {
    if ('url' in this.document) {
      // Process as a web document
      const d = this.document as IWebDocument;
      console.log("Processing as a web document:", d.url);
    } else if ('pageCount' in this.document) {
      // Process as a print document
      const d = this.document as IPrintDocument;
      console.log("Processing as a print document with page count:", d.pageCount);
    }
  }
};
