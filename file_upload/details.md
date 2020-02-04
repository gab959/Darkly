# File upload vulnerability

`46910d9ce35b385885a9f7e2b336249d622f29b267a1771fbacf52133beddba8`

---

## Description

To get this flag, you have to send a POST request containing a .php file instead of a .jpeg file.
To do so, you need to change the content type of the file (not the content type of the whole request).

You can for example use this curl command :

`curl -F 'uploaded=@image.php;type=image/jpeg' -F 'Upload=Upload' http://10.2.8.36/index.php\?page\=upload`

---

## How to prevent it ?

The biggest concern should be the server-side check. In this case, you just need to parse the file's name and to reject everything that has not a .jpg extension. Relying on the content-type specified in the HTTP is not a good idea because it can be easily spoofed. You should also change the name of the file before saving it in the db and on the server, so that it is harder to access it from the outside.