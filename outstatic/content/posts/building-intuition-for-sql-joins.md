---
author:
  name: 'Jacob Murphy'
  picture: ''
coverImage: '/images/puzzle-abstract-I5NT.png'
title: 'Building Intuition for SQL Joins'
status: 'published'
slug: 'building-intuition-for-sql-joins'
description: 'Instead of throwing Venn diagrams or a formal language of sets at students to teach Joins, we should use simple, familiar code.'
publishedAt: '2024-01-16T19:11:58.000Z'
---

Some of the saddest, most brilliantly horrible lines of code I've ever witnessed have been SQL queries using subqueries where joins (in concert with CTEs) would have easily done the job.

I think part of the problem is that joins are taught in too abstract a method: your professor will either throw some formal language at you that leaves you confused about how it translates to SQL, or they will throw a few Venn diagrams at you that require you to already understand what's going on in joins to interpret them correctly.

I think joins should be taught to developers in a language they already understand: code. It doesn't need to be accurate database code, it just needs to give developers an intuition for what will happen for each join type.

Let's explore what this might look like.

## What's in a query?

Every query is simply a specification for gathering data.

If you were in charge of gathering some data, the first question you ought to ask is "Where should I look?".

This is the entire purpose of the SQL FROM clause. It's a specification of where the right data might be found.

Usually, this is quite simple:

```sql
FROM users
```

In this case, we're just looking at one place. Namely, the users table.

However, what if the data is split across related tables? This is where joins come in.

## Conceptual Anatomy of A Join

Tables are essentially 2-dimensional arrays like a grid or excel spreadsheet. The purpose of a SQL Join is to bring these two arrays together.

After a join, you want to have one grid with the columns of both of the initial tables.

If we were writing code to pull together data in multiple 2D arrays, it might look something like this:

```python
table_one = [ [1], [2], [3] ]
table_two = [ [4], [5], [6] ]

result = []

for t1_row in table_one:
   for t2_row in table_two:
      result.append( t1_row + t2_row )

# result == [ [1,4], [1,5], [1,6], [2,4], [2,5], [2,6], [3,4], [3,5], [3,6] ]
```

As you can see, it returns every possible combination of rows from the two tables together. Since we started with 3 rows in each table, we end up with a total of 9 rows in the result. In SQL, this brute is known as a CROSS JOIN.

Normally, we wouldn't want every combination of rows. Maybe we should limit it based on a condition.

```python
table_one = [ [1], [2], [3] ]
table_two = [ [4], [5], [6] ]

result = []

for t1_row in table_one:
   for t2_row in table_two:
      # only join and return those results where 
      # table_two's value is twice table_ones's
      if t1_row[0] * 2 == t2_row[0]:
         result.append( t1_row + t2_row )

# result == [[2, 4], [3, 6]]
```

Now this will give us only those results that matched the condition. In SQL, this result is achieved with an INNER JOIN.

```sql
SELECT 
   *
FROM 
   table_one t1
   INNER JOIN table_two t2 ON t1.column_0 * 2 = t2.column_0
```

What if we always wanted to keep items in the first table, but associate the items from the second based on the criteria?

```python
table_one = [[1], [2], [3]]
table_two = [[4], [5], [6]]

result = []

for t1_row in table_one:
    included = False
    for t2_row in table_two:
        if t1_row[0] * 2 == t2_row[0]:
            result.append(t1_row + t2_row)
            included = True
    if not included:
        result.append(t1_row)


# result == [[1], [2, 4], [3, 6]]
```

This is known as a LEFT OUTER JOIN (usually just referred to as LEFT JOIN).

```sql
SELECT
   *
FROM table_one t1
   LEFT JOIN table_two t2 ON t1.column_0 * 2 = t2.column_0
```

A RIGHT JOIN is so similar it is seldom used - it simply prefers to keep results from the *other* table. 

Queries are usually constructed from the perspective of a "base" table from which you want to bring in related data. For example, say you have a user table and you want to join an address table. If you're listing users on the page, you'd just LEFT JOIN address. If you want to list addresses, instead, you'd probably choose to start with the address table and LEFT JOIN user, rather than start with user and RIGHT JOIN address.

A FULL OUTER join gives you the best of both worlds. FULL OUTER joins still bring together all the rows matching the condition but rows from *both* tables that did not have any matches.

## Learn Joins.

Lacking an understanding of joins leads people to create subqueries that emulate what a join would have done. This is much harder to read, more error-prone, and simply slow.

Naturally, the actual implementation of joins on a SQL server is way more complicated than any of the above toy code would indicate. However, using such toy code to build a basic intuition can go a long way in helping you use joins more effectively in your queries.

Two parting tips: memorize the execution order of a SELECT statement (and know what each of those steps is useful for), and use CTEs to make tidy queries.