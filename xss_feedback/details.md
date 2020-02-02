# Cross Site Scripting

0fbb54bbf7d099713ca4be297e1bc7da0173d8b3c21c1811b916a3a86652724e

## Description

Simple XSS vulnerability. You just need to add a half html tag to unlock the flag.\
E.g. : `<script>alert`\
The server also reacts to "alert" without even adding any html tag.

## How to prevent it ?

To protect your website against this kind of vulnerabilities, you have to sanitize properly all the data you receive and you process on the server before performing any action (adding it in the DB, sending it back to the client...). All the languages provide built-in methods or packages to do this.