import { OrderByDirection } from './enums/order-by-direction.interface';

export interface IOrderByPayload {
    property: string;
    direction?: OrderByDirection | number;
}