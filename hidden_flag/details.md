# Hidden Flag

`99dde1d35d1fdd283924d84e6d9f1d820`

---

## Description

In order to find this flag you have to search through all the urls of the `/.hidden` route.
`hidden.js` will loop through all the directories and append the content of each README, along with the file's url.\
`hidden.txt` now contains all the information we need.\
`parse.js` will finish the work and filter the irrelevant lines to print only the flag

---

## How to prevent it ?

If you need to hide some information on your server, you should not store it in your website's directory, even if it is hidden in a 4-level arborescence of directories.