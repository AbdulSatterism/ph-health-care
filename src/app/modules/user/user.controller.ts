import { Request, RequestHandler, Response } from "express";
import { userServices } from "./user.service";

const createAdmin:RequestHandler = async (req:Request, res:Response, ) => {

   try {
    const { data, password } = req.body;
    const result = await userServices.createAdmin({ data, password });
    res.status(200).json({
      success: true,
      message: "Admin created successfully",
      data: result,
    });
    } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error)?.name,
      error: error,
    }); 
    

}
}

export const userController = {
    createAdmin,
};