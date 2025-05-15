import { Request, Response } from "express";
import poole from "../connect/db";
import asyncHandler from "../utils/asyncHandler";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface RegisterStudentRequestBody {
  name: string;
  email: string;
  classAssigned: number;
  gender: string;
  password: string;
  phone: string;
}

interface LoginStudentRequestBody {
  email: string;
  password: string;
}

interface ListStudentRequestBody {
  name: string;
  classAssigned: string;
  email: string;
  gender: string;
}

interface GetStudentParams {
  id: string;
}

const registerStudent = asyncHandler(
  async (req: Request<{}, {}, RegisterStudentRequestBody>, res: Response) => {
    const {
      name,
      email,
      classAssigned,
      gender,
      password,
      phone
    } = req.body;

    try {
      const result = await poole.query(
        `INSERT INTO students (name, email, classAssigned, gender, password, phone)
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING *`,
        [
          name,
          email,
          classAssigned,
          gender,
          password,
          phone
        ]
      );

    if (result.rows.length > 0) {
        const { name, email } = result.rows[0];
        res.status(201).json({
          message: "Student Registered Successfully.",
          student: { name, email },
        });
      } else {
        res.status(500).json({ message: "Student Registration failed." });
      }
    } catch (error) {
      console.error("Error registering student:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  }
);

const loginStudent = asyncHandler(
  async (req: Request<{}, {}, LoginStudentRequestBody>, res: Response) => {
    const { email, password } = req.body;

    try {
      const result = await poole.query(
        `SELECT * FROM students WHERE email = $1`,
        [email.trim().toLowerCase()]
      );

      if (result.rows.length === 0) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      const student = result.rows[0];

      if (student.password !== password) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      const token = jwt.sign(
        { id: student.id, email: student.email },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "1h" }
      );

      const { name, email: studentEmail } = student;

      return res.status(200).json({
        message: "Login successful.",
        student: {
          name,
          email: studentEmail,
        },
        token,
      });
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }
);

const ListStudent = asyncHandler(
  async (req: Request<{}, {}, ListStudentRequestBody>, res: Response) => {
    const { name, classAssigned, email, gender } = req.query;

    try {
      const result = await poole.query(
        `SELECT * FROM students
       WHERE 
         ($1::text IS NULL OR name = $1) AND
         ($2::integer IS NULL OR classAssigned = $2) AND
         ($3::text IS NULL OR email = $3) AND
         ($4::text IS NULL OR gender = $4)`,
        [name, classAssigned, email, gender]
      );
      if (result.rows.length > 0) {
        res.status(200).json({
          message: "Students fetched successfully.",
          students: result.rows,
        });
      } else {
        res
          .status(404)
          .json({ message: "No students found matching the criteria." });
      }
    } catch (error) {
      console.error("Error fetching students:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  }
);

const GetSingleStudent = asyncHandler(async(req: Request<{}, {}, GetStudentParams>, res: Response) => {
    const { id }: any = req.params;

    try {
      const result = await poole.query(
        `SELECT * FROM students WHERE id = $1`,
        [id]
      );

      if (result.rows.length > 0) {
        res.status(200).json({
          message: "Student fetched successfully.",
          student: result.rows[0],
        });
      } else {
        res.status(404).json({ message: "Student not found." });
      }
    } catch (error) {
      console.error("Error fetching student:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  }
);



export {registerStudent, loginStudent, ListStudent, GetSingleStudent};



