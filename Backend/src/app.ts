import express, { Application } from 'express';
import pg from 'pg';
import poole from '../src/connect/db';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app:Application = express();

dotenv.config()


app.use(express.json());
app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({extended:true, limit:'16kb'}));
app.use(express.static("public"));
// app.use(cookieParser());
app.use(bodyParser.json());


app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// const pool = new pg.Pool({
//     user:'postgres',
//     host:'localhost',
//     database:'schoolmanagement',
//     password:'root',
//     port:5432
// })

const pool = new Pool({
    connectionString:'postgresql://postgreSQL:root@localhost:5432/schoolmanagement'
})

poole.connect((err) => {
  if (err) {
    console.log("There is an error");
  } else {
    console.log("Connected to the database");
  }
});

import teacherRouter from "./router/teacher.routes";
import studentRouter from "./router/student.routes";

app.use("/api/v1/teacher", teacherRouter);
app.use("/api/v1/student", studentRouter);

const start = async () => {
  app.listen(3151, () => {
    console.log(`Server is running on 3151`);
  });
};

start();

