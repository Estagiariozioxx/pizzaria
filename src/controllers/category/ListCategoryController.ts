import { Request, Response  } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
    async handle(req:Request,res:Response){

        const listaCategoryService = new ListCategoryService();

        const category = await listaCategoryService.execute();

        return res.json(category)

    }
}

export {ListCategoryController}