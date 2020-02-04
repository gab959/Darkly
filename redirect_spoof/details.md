# Redirection Spoof

`b9e775a0291fed784a2d9680fcfad7edd6b8cdf87648da647aaf4bba288bcab3`

---

## Description

In the footer's social networks redirections, you need to replace the website in the url to `site=something else` to unlock the flag

---

## How to prevent it ?

You need to check that every parameter is valid before redirecting the user to the "site". A better solution would be to store the url on the server's side, and to identify the image from the HTML tag's id before doing the redirection. \
For example : the user clicks on Facebook's logo whose id is "fb". When the server reads in the parameters that the div's id is "fb", it will know that it has to redirect to facebook's website without allowing the user to edit the url.