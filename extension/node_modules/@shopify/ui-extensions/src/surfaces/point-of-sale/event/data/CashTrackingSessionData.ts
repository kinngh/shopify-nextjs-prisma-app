import {BaseData} from './BaseData';

export interface CashTrackingSessionStartData extends BaseData {
  cashTrackingSessionStart: {
    id: number;
    openingTime: string;
  };
}

export interface CashTrackingSessionCompleteData extends BaseData {
  cashTrackingSessionComplete: {
    id: number;
    openingTime: string;
    closingTime: string;
  };
}
