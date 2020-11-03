import { orderprods } from "./orderprods";

export class ordersreq {
  id: string;
  shipToAddress: string;
  createdate: string;
  orderItems: orderprods[];
  company: string;
  telephone: string;
  zipcode: string;
  gouvernorat;
  status: string;
  email: string;
  clientid: string;
}
