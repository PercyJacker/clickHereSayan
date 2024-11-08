import  Express  from "express";
import { completeTask, completed, create, deleteTask, getAll, getOne, update, updateData } from "../controller/controller.js";


const route =Express()
route.post("/create",create);
route.get("/getall",getAll);
route.delete("/delete/:id",deleteTask);
// route.put("/update/:id",update);
route.patch("/completed/:id",completeTask);
route.get("/completed",completed)
route.patch("/update/:id",updateData)
route.get("/getone/:id",getOne)






export default route;