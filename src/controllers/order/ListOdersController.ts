import { Request,Response } from "express";
import { ListOrderService } from "../../services/orders/ListOrderService";

class ListOdersController{
    async handle(req:Request, res:Response){

        const listOrderService = new ListOrderService ();

        const orders = await listOrderService.execute();

        return res.json(orders)

    }
}

export {ListOdersController}