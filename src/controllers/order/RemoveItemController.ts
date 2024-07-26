import { Request, Response } from "express";
import { RemoveItemService } from "../../services/orders/RemoveItemService";

class RemoveItemController{
    async handle(req:Request, res:Response){

        const item_id = req.query.item_id as string;

        const remveItemService = new RemoveItemService();

        const order = await remveItemService.execute({
            item_id
        })
        return res.json(order)

    }
}

export {RemoveItemController}