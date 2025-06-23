import { Request, Response } from "express";
import { adminServices } from './admin.service';

const allAdmins = async (req:Request, res:Response) => {
    try {
        const { search } = req.query;
        const admins = await adminServices.getAllAdmins(search as string);

        res.status(200).json({
        success: true,
        message: "Admins fetched successfully",
        data: admins,
        });

    } catch (error) {
        res.status(500).json({
        success: false,
        message: (error as Error).message,
        error: error,
        });
    }

}


export const adminController = {
    allAdmins,
};