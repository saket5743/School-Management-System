import express from 'express';
import {registerTeacher, loginTeacher,ListTeacher} from '../controller/teacher.controller';
const router = express.Router();


router.route("/registerteacher").post(registerTeacher);
router.route("/loginteacher").post(loginTeacher);
router.route("/listteachers").get(ListTeacher)

export default router;

