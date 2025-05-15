import express from 'express';
import { registerStudent, loginStudent, ListStudent, GetSingleStudent } from '../controller/student.controller';
const router = express.Router();

router.route('/registerstudent').post(registerStudent);
router.route('/loginstudent').post(loginStudent);
router.route('/liststudent').get(ListStudent);
router.route('/:id').get(GetSingleStudent);

export default router;