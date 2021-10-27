USE company_db;

-- insert data into department table
INSERT INTO department (id, department)
VALUES ('Engineering', 'Software', 'Hardware', 'Development');

-- insert data into roles table
INSERT INTO roles (id, title, salary, department_id)
VALUES
('Engineer', 125,000, 1),
('Front-end', 85,000, 2),
('Back-end', 110,000, 3),
('Tester', 75,000, 4),

-- insert data into the employee table
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
('Tim', 'Smith', 1, NULL),
('Gina', 'Erwin', 2, 1),
('Angela', 'Crowley', 3, 3),
('Robert', 'Carroll', 4, 2),
('Tom', 'Collins', 5, NULL),
('Samantha','Darrin', 6, 2),
('Katherine','Young', 7, 1);
