import { ThreeDModel } from './3DModel';
import { ThreeDPrinter } from './3DPrinter';

export interface Transaction {
  id: String;
  date: Date;
  amount: Number;
  threeDModel: ThreeDModel;
  threeDPrinter: ThreeDPrinter;
  charityId: String;
  charityShare: Number;
}
