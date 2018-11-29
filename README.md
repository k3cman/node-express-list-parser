# SUGGESTED-ITEMS PARSER

Parser that from group of items creates connection in mySQL table, between every posible combination of items from list exept for connecting same elements.

Used for fast data entry of connected items on a clients website

## POSIBLE COMMANDS

> npm run dev
> used for parsing array of items and saving to file.txt

> npm run sql

used for parsing array of items and sending INSERT query for every item in a loop.

You can edit sql entry in autoSql.js. Make sure to configure mySql connection.

## How it works

First insert list of items:

`var data = [23566, 23565, 23564];`

Combine 2 or more arrays :
`var allArrays = [data, data];`

Customize mySql query or output to txt

```
conn.query(
            `INSERT INTO item_suggestions(item_id,suggested_item_id) VALUES(${
              arr[0][i]
            },${restOfCases[c]});`
          );
```

Now run one of commands.

## Important

This script currently works with nodemon, so whenever you change data array and save operation runs, if you want it to work on demand you have to edit it.
