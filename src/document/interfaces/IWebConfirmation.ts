import {IWebDocument} from "./IWebDocument";

export interface IWebConfirmation{
  timeStamp: Date;
  documentId: string;
  title: string;
  url: string;
}
