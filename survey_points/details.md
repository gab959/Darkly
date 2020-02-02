# Code Injection

03A944B434D5BAFF05F46C4BEDE5792551A2595574BCAFC9A6E25F67C382CCAA

## Description

You can change the value of the grade in the HTML, in order to send more points for one person for example.

## How to prevent it ?

To prevent malicious users to send more points by editing the vote's value in HTML, you just need to add a server-sided check to make sure that the received value is between 1 and 10.