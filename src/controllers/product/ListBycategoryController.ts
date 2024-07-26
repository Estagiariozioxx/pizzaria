import { Request,Response } from "express";
import { ListByCategoryService } from "../../services/products/ListByCategoryService";

class ListBycategoryController{
    async handle(req:Request, res:Response){
        const category_id = req.query.category_id as string;

        const listcategory = new ListByCategoryService();

        const products = await listcategory.execute({
            category_id
        })

        return res.json(products)


    }
}
export {ListBycategoryController}