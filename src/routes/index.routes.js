import { Router } from "express";
import { getEmployees, createEmployees, updateEmployees, updateEmployee, deleteEmployees, getEmployee, deleteEmployee } from "../controllers/employees.controller.js";
import {ping} from "../controllers/index.controller.js"
const router = Router()

router.get('/ping',ping)


export default router