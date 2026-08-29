# Garbage Code & Bad Variables

## PHP has no strict types

- When you declare a variable you don't have to declare what that variable type is.
- In many other programming languages you have to declare whether a variable is an int, or a string, char, float, bool etc...
- In PHP you simply declare a variable's name and set it to whatever it needs to be.

## The issue

- PHP doesn't know what a variable is supposed to be.
- It knows the variable name and the value assigned to it, but not what it's supposed to represent. e.g. word, string, number, etc... so therefore, you will not get errors if you do something odd.
- So if you have data about variables being logged into a database, this might not be the best scenario.
- You want to avoid being able to let's say add a string and a number together because that would just come out as rubbish, and that can easily corrupt a database.
