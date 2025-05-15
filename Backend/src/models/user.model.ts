import bcyrpt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Pool } from 'pg';
import dotenv from 'dotenv';

const pool = new Pool({
    connectionString:'postgresql://postgreSQL:root@localhost:5432/schoolmanagement'
})

interface User{
    id:number,
    fullname:string,
    email:string,
    class_room:number,
    gender:string,
    password:string,
    phone_number:string,
    subject:string
}


export class teacherService{
    static async createUser(fullname:string, email:string,class_room:number, gender:string, plainPassword:string, phone_number:string,
        subject:string):Promise<User>{
       const salt = await bcyrpt.genSalt(10);
       const hashedPassword = await bcyrpt.hash(plainPassword, salt);

       const result = await pool.query(
        `INSERT INTO teachers(fullname, email, class_room, gender, plainPassword, phone_number, subject)
        VALUES($1, $2, $3, $4, $5, $6, $7)
        RETURNING id, fullname, email, class_room, gender, password, phone_number, subject`,
        [fullname, email, class_room, gender, hashedPassword, phone_number, subject]
       );

       return result.rows[0];

    //    static async generateJWT(user: User): Promise<string> {
    //     if (!process.env.JWT_SECRET || !process.env.JWT_LIFETIME) {
    //       throw new Error("Missing JWT config in .env");
    //     }
    
    //     return jwt.sign(
    //       { userId: user.id, name: user.name },
    //       process.env.JWT_SECRET,
    //       { expiresIn: process.env.JWT_LIFETIME }
    //     );
    //   }
    
    //   static async comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    //     return bcrypt.compare(plainPassword, hashedPassword);
    //   }
    
    //   // Optional: login function
    //   static async login(email: string, password: string): Promise<User | null> {
    //     const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
    //     const user = result.rows[0];
    //     if (!user) return null;
    
    //     const isMatch = await this.comparePassword(password, user.password);
    //     return isMatch ? user : null;    
    }
}

