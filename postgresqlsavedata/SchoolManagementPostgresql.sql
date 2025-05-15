select * from teachers;
select * from students;

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    classAssigned INT NOT NULL,
    gender VARCHAR(20) NOT NULL,
    password VARCHAR(50) NOT NULL,
    phone VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

drop table students;

INSERT INTO students (name, email, classAssigned, gender, password, phone)
VALUES ('Arjun Singh', 'arjun@gmail.com', 5, 'Male', 'Arjun@123456', '2587413698');

DELETE FROM teachers WHERE fullname = 'Saket Kumar';
