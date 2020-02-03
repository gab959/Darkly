# NSA XSS

`928d819fc19405ae09921a2b71227bd9aba106f9d2d37ac412e9e5a750f1506d`

---

## Description

On page `/?page=media&src=nsa`, the `src` parameter is vulnerable to Cross Site Scripting. The server serves the images and displays them without any verifications. You can send anything in the GET parameter as long as it is base64 encoded (like an image would be). Using this technique, the result of this request :

`http://10.2.8.36/?page=media&src=data:text/html;base64,PHNjcmlwdD5hbGVydCgndGVzdCcpPC9zY3JpcHQ+`

unlocks the flag. The base64 encoded string is only a `<script>alert('blabla')</script>`.

---

## How to prevent it ?

Once again, you need to properly sanitize all the data that you receive from the client. In this case, a good solution would also be to set routes for each of the images stored on the server without directly reading the data that is received in the `src` parameter.