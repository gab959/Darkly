# Password recovery

`1D4855F7337C0C14B6F44946872C4EB33853F40B2D54393FBE94F49F1E19BBB0`

---

## Description

You need to change the email address of the webmaster in the form (in the html) to unlock this flag.

---

## How to prevent it ?

I'm not sure what's exactly the vulnerability here. If the goal is to send a password recovery link to the user's email address, the solution is to unhide the email's field so that the user can type in his email address.
Again, you have to remember that you have to sanitize ALL the data you receive from the client on the server.