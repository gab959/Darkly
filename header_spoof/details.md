# Header spoofing

`f2a29020ef3132e01dd61df97fd33ec8d7fcd1388cc9601e7db691d17d4d6188`

---

## Description

"You must cumming from : "https://www.nsa.gov/" to go to the next step" \
"Let's use this browser : "ft_bornToSec". It will help you a lot."

These are two comments from the Albatros' page. To get the flag, you need to send an HTTP request with
NSA's home page as Referer and ft_bornToSec as User-Agent.

http://10.2.8.36/?page=e43ad1fdc54babe674da7c7b8f0127bde61de3fbe01def7d00f151c2fcca6d1c

---

## How to prevent it ?

Again, you cannot trust the data sent by the client. A malicious use of the HTTP request can be done by modifying any field of the header than will be parsed by the server. Admitting that the server uses the Referer or the User-Agent for some reason, if the input is not properly checked there is an opened door to Cross Site Scripting. To prevent this from happening, you just need to check that the header's fields are properly sanitized on the server. To sanitize the inputs, you can for example use built-in methods from the language you are using or external modules, or you can also use your specific regexes.