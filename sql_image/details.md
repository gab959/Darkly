# Cookie poisoning

df2eb4ba34ed059a1e3e89ff4dfc13445f104a1a52295214def1c4fb1693a5c3

## Description

There is a cookie named I_am_admin, its default value is "false" encrypted in md5.
In order to get the access as admin, you can change the value of the cookie to "true" encrypted in md5.


## How to prevent it ?

To check the roles of a user on a website, a good solution would be to use JSON Web Tokens.
The token is generated and signed by the server after the user's authentication, and sent to the  client. Afterwards the token is sent back to the server with each request needing specific rights, and the server checks if it is valid (it hasn't been manipulated or hasn't expired) before sending a response.