import { Pool } from "pg";

const poole = new Pool({
  user: "postgres",
  host: "localhost",
  database: "schoolmanagement",
  password: "root",
  port: 5432,
});

// pool.connect((err) => {
//   if (err) {
//     console.log("There is an error");
//   } else {
//     console.log("Connected to the database");
//   }
// });

export default poole;