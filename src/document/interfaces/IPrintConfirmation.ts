import {IPrintDocument} from "./IPrintDocument";

export interface IPrintConfirmation extends IPrintDocument
{
  timeStamp: Date;
  documentId: string;
  title: string;
}
