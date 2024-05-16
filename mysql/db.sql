
-- Create a database
CREATE DATABASE myDB;
--creates a database 
    --not case sensitive
    --must always have a semicolon at the end
--There is always a database called sys
    --built in
USE myDB;
    --selects the database you want to use
DROP DATABASE myDB
    --permanently deletes database

ALTER DATABASE myDB READ ONLY = 1;
    --Makes the database readonly
    --could not be deleted or altered in any way
ALTER DATABASE myDB READ ONLY = 0;
    --Makes the database not readonly
    --we could now do anything we want with the databse

-- TABLE consist of rows and columns
CREATE TABLE employees(
	employee_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    hourly_pay DECIMAL(5, 2),
    hire_date DATE
);
    -- Each column is separated by a comma
    -- INT indicates integer
    -- VARCHAR(50) - text with the maximum of 50 characters
    -- DECIMAL(5, 2) max legnth of number is 5 until 2 decimals place
    -- DATE

SELECT * FROM employees;
    -- Select all from employees

RENAME TABLE employees TO workers;

DROP TABLE employees;
    -- Deletes an employee table

ALTER TABLE employees ADD phone_number VARCHAR(15);
    -- adds a column called phone_number with maximum of 15 characters

ALTER TABLE employees RENAME COLUMN phone_number to Email;
    -- renames the column phone number to email

ALTER TABLE employees MODIFY COLUMN email VARCHAR(100);
    -- changes the maximum characters of email to 100

ALTER TABLE employees MODIFY email VARCHAR(100) AFTER last_name;
    -- moves the placement of email to be after last_name

ALTER TABLE employees DROP COLUMN email;
    -- drops the email column