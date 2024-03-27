import {IPrintDocument} from "./IPrintDocument";

export interface IPrintConfirmation
{
  timeStamp: Date;
  documentId: string;
  title: string;
  pageCount: number;
}
