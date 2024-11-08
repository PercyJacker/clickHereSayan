import todo from "../models/toDo.model.js";


export const create  = async(req, res)=>{
    //todo body mein new task
    //error
    //save
    //error
    try {
        //new jab data update hoga model ka
        const task = new todo(req.body)

        if(!task){
            res.status(500).json({msg:"task not found"})
        }
        const saveTask = await task.save();
        res.status(200).json(saveTask)

    } catch (error) {
        res.status(404).json(error)
    }
}

export const getAll = async(req, res)=>{
    //todo se task find 
    //error
    //json mein task show
    //error

    try {
        const task = await todo.find({completed:false});
        
    if(!task){
        res.status(500).json({msg:"there are no tasks"})
    }
    res.status(200).json({task})
        
    } catch (error) {
        res.status(404).json(error)
    }
}


export const deleteTask = async(req, res)=>{
    //id nikalo task se
    //use id to find the task from todo
    //error
    //todo se delete mardo
    //error

    try {
        const id =req.params.id;
        const taskExist=await todo.findById(id);

        if(!taskExist){
            res.status(500).json({msg:"no such tasks"})
        }
        await todo.findOneAndDelete()
        res.status(200).json({msg:"message deleted"})


    } catch (error) {
        (error)=>console.log(error);
    }
}


export const update = async(req, res)=>{
    //get id from param
    //findbyid in model
    //error
    //findbyid and update using id, body, new:true
    //
    try {
        const id = req.params.id;
        const taskExist = await todo.findById(id);
        if(!taskExist){
            res.status(400).json({msg:"task not found"})
        }
        const updatedData = await todo.findByIdAndUpdate(id, req.body, {new:true})
        res.status(200).json(updatedData)
    } catch (error) {
        (error)=console.log(error);
    }
}


export const completeTask =async(req, res)=>{
    //get the id
    //find by id and update compelte feild and save it
    //error
    try {
        const id = await req.params.id
        const taskExist = await todo.findByIdAndUpdate(
            id,
            {completed:true},
            {new :true});
        if(!taskExist){
            res.status(400).json({msg:"task not found"})
        }
       
        res.json(taskExist);
    } catch (error) {
        (error)=console.log(error);
    }

}


export const completed = async (req, res)=>{
    try {
        const completedTasks = await todo.find({ completed: true });
        res.json(completedTasks);
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}


export const updateData = async(req, res)=>{
    //get id
    //find by id and update 
    //err
    //json print
    //err
    try {
        const id = req.params.id
        console.log(id);
        const taskExist = await todo.findByIdAndUpdate(
            id,
            {task:req.body.task}, 
            {new:true})
        if (!taskExist){
            res.status(400).json({msg:"task not found"})
        }
        // const saveData = await save.todo()
        res.json(taskExist)
    } catch (error) {
        res.status(500).json((err)=>console.log(err))
    }
}


export const getOne = async(req, res)=>{
    try {
        const id = req.params.id;
        const taskExist = await todo.findById(id);
        if(!taskExist){
            res.status(500).json({msg:"user not exist"})
        }
        res.json(taskExist)
    } catch (error) {
        res.json(500).json({error:error})

    }
}