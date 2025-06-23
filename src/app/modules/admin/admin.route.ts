import { Router } from "express";
import { adminController } from "./admin.controller";

const router = Router();



router.get("/all-admin", adminController.allAdmins);




export const adminRoutes = router;