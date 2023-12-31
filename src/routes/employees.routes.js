import { Router } from "express";
import { getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployee, deleteEmployee, updateEmployee} from "../controllers/employees.controller.js";

const router = Router()

router.get('/employees',getEmployees)
router.get('/employees/:id',getEmployee)
router.post('/employees',createEmployees)
router.put('/employees',updateEmployees)
router.patch('/employees/:id',updateEmployee)
router.delete('/employees',deleteEmployees)
router.delete('/employees/:id',deleteEmployee)

export default router