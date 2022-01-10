import { AnyObject } from './typescript';
import { IOrderByPayload } from './order-by-payload.interface';

export interface IClientFilter {
    offset?: number;
    limit?: number;
    filter?: AnyObject;
    search?: string;
    orderBy?: IOrderByPayload;
}