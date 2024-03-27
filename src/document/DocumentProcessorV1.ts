import {IWebDocument} from "./interfaces/IWebDocument";
import {IPrintDocument} from "./interfaces/IPrintDocument";

export class DocumentProcessorV1<T extends IWebDocument | IPrintDocument>{
  document: T
  constructor(document: T) {
    this.document = document
  }

  public process(): void {
    if ('url' in this.document) {
      // Process as a web document
      const d = this.document as IWebDocument;
      console.log("Processing as a web document:", d.url);
    } else if ('pageCount' in this.document) {
      // Process as a print document
      const d = this.document as IPrintDocument;
      console.log("Processing as a print document with page count:", d.pageCount);
    } else {
      throw new Error('Unsupported type for DocumentProcessor');
    }
  }
}
