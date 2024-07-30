import { Router,Request,Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserCntroller";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListBycategoryController } from "./controllers/product/ListBycategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOdersController } from "./controllers/order/ListOdersController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

import multer  from "multer";

import uploadconfig from './config/multer';

const router =Router();

const upload = multer(uploadconfig.upload("./tmp"));

//--rotas users --//
router.post('/users',new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me',isAuthenticated, new DetailUserController().handle)

//--rotas category --//
router.post('/category',isAuthenticated, new CreateCategoryController().handle)
router.get('/listcategory',isAuthenticated,new ListCategoryController().handle)

//--rotas product --//
router.post('/product',isAuthenticated,upload.single('file'), new CreateProductController().handle)
router.get('/category/product',isAuthenticated, new ListBycategoryController().handle)

//--rotas order --///
router.post('/order',isAuthenticated, new CreateOrderController().handle)
router.delete('/order',isAuthenticated, new RemoveOrderController().handle)

router.post('/order/add',isAuthenticated, new AddItemController().handle)
router.delete('/order/remove',isAuthenticated, new RemoveItemController().handle)

router.put('/order/send',isAuthenticated,new SendOrderController().handle)

router.get('/orders',isAuthenticated,new ListOdersController().handle)
router.get('/orders/detail',isAuthenticated,new DetailOrderController().handle)

router.put('/order/finish',isAuthenticated,new FinishOrderController().handle)


export {router};