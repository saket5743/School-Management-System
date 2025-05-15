import { Request, Response } from "express";
import poole from "../connect/db";
import asyncHandler from "../utils/asyncHandler";
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'saketkumar.93864@gmail.com',
    pass: 'tppf ofsm iziv qewe',
  },
  tls: {
    rejectUnauthorized: false,
  },
});


interface RegisterTeacherRequestBody {
  fullname: string;
  email: string;
  classAssigned: number;
  gender: string;
  password: string;
  phone_number: string;
  subject: string;
}

interface LoginTeacherRequestBody {
  email: string;
  password: string;
}

interface ListTeacherRequestBody {
  fullname: string;
  subject: string;
  classAssigned: string;
  email: string;
  gender: string;
}

const registerTeacher = asyncHandler(
  async (req: Request<{}, {}, RegisterTeacherRequestBody>, res: Response) => {
    const {
      fullname,
      email,
      classAssigned,
      gender,
      password,
      phone_number,
      subject,
    } = req.body;

    try {
      const result = await poole.query(
        `INSERT INTO teachers (fullname, email, classAssigned, gender, password, phone_number, subject)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         RETURNING *`,
        [
          fullname,
          email,
          classAssigned,
          gender,
          password,
          phone_number,
          subject,
        ]
      );

    //   if (result.rows.length > 0) {
    //     res.status(201).json({
    //       message: "Registered Successfully.",
    //       teacher: result.rows[0],
    //     });
    //   } else {
    //     res.status(500).json({ message: "Registration failed." });
    //   }
    
    if (result.rows.length > 0) {
      const { fullname, email } = result.rows[0];
      res.status(201).json({
        message: "Registered Successfully.",
        teacher: { fullname, email },
      });
      const mailOptions = {
        from: "saketkumar.93864@gmail.com",
        to: email,
        subject: "Welcome to Our School!",
        text: `Dear ${fullname},\n\nYou have been successfully added as a teacher for ${subject}.\n\nWelcome aboard!\n\nBest Regards,\nSchool Team`,
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error("Error sending email:", err);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      console.log(mailOptions, "mailoptionsssss");
    } else {
      res.status(500).json({ message: "Registration failed." });
    }
    } catch (error) {
      console.error("Error registering teacher:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  }
);


const loginTeacher = asyncHandler(
  async (req: Request<{}, {}, LoginTeacherRequestBody>, res: Response) => {
    const { email, password } = req.body;

    try {
      const result = await poole.query(
        `SELECT * FROM teachers WHERE email = $1`,
        [email.trim().toLowerCase()]
      );

      if (result.rows.length === 0) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      const teacher = result.rows[0];

      if (teacher.password !== password) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      const token = jwt.sign(
        { id: teacher.id, email: teacher.email },
        process.env.JWT_SECRET || "your-secret-key",
        { expiresIn: "1h" }
      );

      const { fullname, email: teacherEmail } = teacher;

      return res.status(200).json({
        message: "Login successful.",
        teacher: {
          fullname,
          email: teacherEmail,
        },
        token,
      });
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }
);

const ListTeacher = asyncHandler(
  async (req: Request<{}, {}, ListTeacherRequestBody>, res: Response) => {
    const { fullname, subject, classAssigned, email, gender } = req.query;

    try {
      const result = await poole.query(
        `SELECT * FROM teachers
       WHERE 
         ($1::text IS NULL OR fullname = $1) AND
         ($2::text IS NULL OR subject = $2) AND
         ($3::integer IS NULL OR classAssigned = $3) AND
         ($4::text IS NULL OR email = $4) AND
         ($5::text IS NULL OR gender = $5)`,
        [fullname, subject, classAssigned, email, gender]
      );
      if (result.rows.length > 0) {
        res.status(200).json({
          message: "Teachers fetched successfully.",
          teachers: result.rows,
        });
      } else {
        res
          .status(404)
          .json({ message: "No teachers found matching the criteria." });
      }
    } catch (error) {
      console.error("Error fetching teachers:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  }
);


export {registerTeacher, loginTeacher, ListTeacher};



