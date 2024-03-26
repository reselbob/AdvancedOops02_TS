import {IWebDocument} from "./IWebDocument";

export interface IWebConfirmation extends IWebDocument{
  timeStamp: Date;
  documentId: string;
  title: string;
}
