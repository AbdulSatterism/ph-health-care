import { Request, RequestHandler, Response } from "express";

const createAdmin:RequestHandler = async (req:Request, res:Response, ) => {
    res.status(200).json({
        message: "Admin created successfully",
        data: req.body,
    });
  
}

export const userController = {
    createAdmin,
};