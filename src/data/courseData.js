export const courseData = {
  title: "SQL & Databases",
  subtitle: "Master data management and querying",
  chapters: [
    {
      id: 1,
      title: "Database Fundamentals",
      description: "Understanding databases and data storage",
      lessons: [
        {
          id: "1-1",
          title: "What is a Database?",
          duration: "10 min",
          content: `
## Welcome to the World of Data! 📊

Every application you use stores data somewhere. Let's understand how!

### What is a Database?

A **database** is an organized collection of data that can be easily accessed, managed, and updated.

\`\`\`
Real-world examples:
📱 Your contacts app → Contact database
🛒 Amazon → Products, orders, users
📺 Netflix → Shows, users, watch history
🏦 Your bank → Accounts, transactions
\`\`\`

### Why Not Just Use Files?

| Feature | Files | Database |
|---------|-------|----------|
| **Search** | Slow (scan entire file) | Fast (indexed) |
| **Concurrency** | Conflicts | Handled |
| **Relationships** | Manual | Built-in |
| **Integrity** | None | Constraints |
| **Backup** | Manual | Automated |

### Types of Databases

| Type | Best For | Examples |
|------|----------|----------|
| **Relational (SQL)** | Structured data, relationships | PostgreSQL, MySQL |
| **Document (NoSQL)** | Flexible schemas | MongoDB, CouchDB |
| **Key-Value** | Caching, sessions | Redis, DynamoDB |
| **Graph** | Relationships | Neo4j |
| **Time-Series** | Metrics, logs | InfluxDB, TimescaleDB |

### Relational Databases

Data is organized in **tables** (like spreadsheets):

\`\`\`
Users Table:
┌────┬──────────┬─────────────────┬─────┐
│ id │ name     │ email           │ age │
├────┼──────────┼─────────────────┼─────┤
│ 1  │ Alice    │ alice@email.com │ 28  │
│ 2  │ Bob      │ bob@email.com   │ 34  │
│ 3  │ Charlie  │ charlie@mail.io │ 22  │
└────┴──────────┴─────────────────┴─────┘
\`\`\`

### Key Terms

| Term | Meaning |
|------|---------|
| **Table** | Collection of related data (like a spreadsheet) |
| **Row** | Single record (one user, one order) |
| **Column** | Attribute/field (name, email, age) |
| **Primary Key** | Unique identifier for each row |
| **Foreign Key** | Link to another table |
| **Schema** | Structure/blueprint of database |

### SQL — The Language of Databases

**SQL** (Structured Query Language) is how we talk to relational databases:

\`\`\`sql
-- Get all users
SELECT * FROM users;

-- Get users named Alice
SELECT * FROM users WHERE name = 'Alice';

-- Create a new user
INSERT INTO users (name, email, age) VALUES ('Dave', 'dave@email.com', 30);
\`\`\`

<tip>
💡 SQL is used by almost all relational databases. Learn it once, use it everywhere!
</tip>

### CRUD Operations

Every database application does these four things:

\`\`\`
C - Create  → INSERT
R - Read    → SELECT
U - Update  → UPDATE
D - Delete  → DELETE
\`\`\`

### Popular Database Systems

| Database | Type | Best For |
|----------|------|----------|
| **PostgreSQL** | Relational | Full-featured, complex queries |
| **MySQL** | Relational | Web apps, widely used |
| **SQLite** | Relational | Embedded, mobile apps |
| **MongoDB** | Document | Flexible data, rapid development |
| **Redis** | Key-Value | Caching, real-time data |

<warning>
⚠️ Choosing the right database is crucial! Consider: data structure, relationships, scale, and query patterns.
</warning>

### Practice Exercises

1. **Name 3 applications** you use daily and describe what data they store in a database.
2. **Choose the database type**: For each scenario, pick the best database type (relational, document, key-value): (a) an e-commerce store, (b) a session cache, (c) a content management system.
3. **Design a table**: Sketch a table for storing movie information. What columns would you include? What would be the primary key?
4. **SQL basics**: Write the SQL to get all users named "Alice" from a users table, then write the SQL to add a new user named "Bob".

Let's start learning SQL! 🚀
          `
        },
        {
          id: "1-2",
          title: "Setting Up Your Database",
          duration: "8 min",
          content: `
## Getting Started with PostgreSQL 🐘

Let's set up a real database to practice with!

### Installing PostgreSQL

**Mac (Homebrew):**
\`\`\`bash
brew install postgresql@15
brew services start postgresql@15
\`\`\`

**Ubuntu/Debian:**
\`\`\`bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
\`\`\`

**Windows:**
Download from postgresql.org and run the installer.

### Connecting to PostgreSQL

\`\`\`bash
# Connect as default user
psql postgres

# Or with specific user/database
psql -U username -d database_name
\`\`\`

### Basic psql Commands

\`\`\`sql
-- List databases
\\l

-- Connect to a database
\\c database_name

-- List tables
\\dt

-- Describe a table
\\d table_name

-- Quit
\\q

-- Help
\\?
\`\`\`

### Creating a Database

\`\`\`sql
-- Create a new database
CREATE DATABASE myapp;

-- Connect to it
\\c myapp

-- Drop a database (careful!)
DROP DATABASE myapp;
\`\`\`

### Creating Tables

\`\`\`sql
-- Create a users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- View the table structure
\\d users
\`\`\`

### Common Data Types

| Type | Description | Example |
|------|-------------|---------|
| \`INTEGER\` | Whole numbers | 42 |
| \`SERIAL\` | Auto-incrementing integer | 1, 2, 3... |
| \`VARCHAR(n)\` | Variable-length string | 'Hello' |
| \`TEXT\` | Unlimited string | Long text... |
| \`BOOLEAN\` | True/False | TRUE |
| \`DATE\` | Date | '2024-01-15' |
| \`TIMESTAMP\` | Date and time | '2024-01-15 10:30:00' |
| \`DECIMAL(p,s)\` | Precise numbers | 99.99 |
| \`JSON\` | JSON data | '{"key": "value"}' |

### Constraints

\`\`\`sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,           -- Auto ID, must be unique
    name VARCHAR(100) NOT NULL,       -- Cannot be empty
    email VARCHAR(255) UNIQUE,        -- Must be unique
    price DECIMAL(10,2) CHECK (price > 0),  -- Must be positive
    category_id INTEGER REFERENCES categories(id)  -- Foreign key
);
\`\`\`

| Constraint | Purpose |
|------------|---------|
| \`PRIMARY KEY\` | Unique identifier |
| \`NOT NULL\` | Cannot be empty |
| \`UNIQUE\` | No duplicates |
| \`CHECK\` | Custom validation |
| \`REFERENCES\` | Foreign key |
| \`DEFAULT\` | Default value |

<tip>
💡 Always use PRIMARY KEY on every table! It's essential for identifying and relating records.
</tip>

### Practice Database

Let's create a sample database:

\`\`\`sql
-- Create database
CREATE DATABASE shop;
\\c shop

-- Create tables
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category_id INTEGER REFERENCES categories(id),
    in_stock BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO categories (name) VALUES 
    ('Electronics'),
    ('Books'),
    ('Clothing');

INSERT INTO products (name, price, category_id) VALUES
    ('Laptop', 999.99, 1),
    ('Headphones', 79.99, 1),
    ('SQL Guide', 29.99, 2),
    ('T-Shirt', 19.99, 3);
\`\`\`

<warning>
⚠️ In production, never use default PostgreSQL passwords! Always configure secure authentication.
</warning>

### Practice Exercises

1. **Set up PostgreSQL** on your machine and create a database called \`practice\`.
2. **Create the shop database** from this lesson — create the categories and products tables and insert the sample data.
3. **Explore data types**: Create a table called \`students\` with columns for id (SERIAL), name (VARCHAR), gpa (DECIMAL), enrolled (BOOLEAN), and birthday (DATE).
4. **Test constraints**: Try inserting a duplicate email into a UNIQUE column. Try inserting NULL into a NOT NULL column. Observe the error messages.

You're ready to start querying! 🎉
          `
        }
      ]
    },
    {
      id: 2,
      title: "SELECT Fundamentals",
      description: "Retrieving data from databases",
      lessons: [
        {
          id: "2-1",
          title: "Basic SELECT Queries",
          duration: "12 min",
          content: `
## Reading Data with SELECT 📖

SELECT is the most used SQL command. Let's master it!

### The SELECT Statement

\`\`\`sql
SELECT column1, column2 FROM table_name;
\`\`\`

### Select All Columns

\`\`\`sql
-- Get everything from users table
SELECT * FROM users;

-- Result:
-- id | name    | email             | age
-- ---|---------|-------------------|----
-- 1  | Alice   | alice@email.com   | 28
-- 2  | Bob     | bob@email.com     | 34
-- 3  | Charlie | charlie@mail.io   | 22
\`\`\`

### Select Specific Columns

\`\`\`sql
-- Only get names and emails
SELECT name, email FROM users;

-- Result:
-- name    | email
-- --------|------------------
-- Alice   | alice@email.com
-- Bob     | bob@email.com
-- Charlie | charlie@mail.io
\`\`\`

<tip>
💡 Avoid SELECT * in production! It's slower and returns data you might not need. Be specific.
</tip>

### Column Aliases

\`\`\`sql
-- Rename columns in output
SELECT 
    name AS user_name,
    email AS contact_email
FROM users;

-- Result:
-- user_name | contact_email
-- ----------|------------------
-- Alice     | alice@email.com
\`\`\`

### WHERE Clause — Filtering Results

\`\`\`sql
-- Get users older than 25
SELECT * FROM users WHERE age > 25;

-- Get user with specific email
SELECT * FROM users WHERE email = 'alice@email.com';

-- Get users with age between 20 and 30
SELECT * FROM users WHERE age BETWEEN 20 AND 30;
\`\`\`

### Comparison Operators

| Operator | Meaning |
|----------|---------|
| \`=\` | Equal |
| \`<>\` or \`!=\` | Not equal |
| \`<\` | Less than |
| \`>\` | Greater than |
| \`<=\` | Less than or equal |
| \`>=\` | Greater than or equal |
| \`BETWEEN\` | Range (inclusive) |
| \`IN\` | Match any in list |
| \`LIKE\` | Pattern matching |
| \`IS NULL\` | Check for NULL |

### Multiple Conditions

\`\`\`sql
-- AND: Both conditions must be true
SELECT * FROM users 
WHERE age > 25 AND name = 'Bob';

-- OR: Either condition can be true
SELECT * FROM users 
WHERE age < 25 OR age > 30;

-- Combining with parentheses
SELECT * FROM products 
WHERE (category_id = 1 OR category_id = 2) 
  AND price < 100;
\`\`\`

### IN Operator

\`\`\`sql
-- Match any value in list
SELECT * FROM users 
WHERE name IN ('Alice', 'Bob', 'Charlie');

-- Equivalent to:
SELECT * FROM users 
WHERE name = 'Alice' 
   OR name = 'Bob' 
   OR name = 'Charlie';
\`\`\`

### LIKE — Pattern Matching

\`\`\`sql
-- % matches any characters
SELECT * FROM users WHERE name LIKE 'A%';     -- Starts with A
SELECT * FROM users WHERE email LIKE '%@gmail.com';  -- Gmail users
SELECT * FROM users WHERE name LIKE '%li%';   -- Contains 'li'

-- _ matches single character
SELECT * FROM products WHERE name LIKE 'T-____';  -- T-Shirt, T-Pants
\`\`\`

### NULL Values

\`\`\`sql
-- Find rows with NULL
SELECT * FROM users WHERE phone IS NULL;

-- Find rows without NULL
SELECT * FROM users WHERE phone IS NOT NULL;
\`\`\`

<warning>
⚠️ NULL is not equal to anything, not even itself! Use IS NULL, not = NULL.
</warning>

### DISTINCT — Remove Duplicates

\`\`\`sql
-- Get unique categories
SELECT DISTINCT category_id FROM products;

-- Count unique values
SELECT COUNT(DISTINCT category_id) FROM products;
\`\`\`

### Practice Exercises

1. **Basic queries**: From the shop database, select all products with price > $50. Then select only the name and price columns.
2. **Pattern matching**: Find all products whose name starts with "L". Then find all products whose name contains "phone".
3. **Multiple conditions**: Find products that are in category 1 AND have a price between $20 and $100.
4. **NULL handling**: Add a product with no category_id. Write queries to find products WITH and WITHOUT a category.

SELECT is your window into the data! 👁️
          `
        },
        {
          id: "2-2",
          title: "Sorting and Limiting Results",
          duration: "10 min",
          content: `
## Organizing Your Results 📋

Learn to sort, limit, and paginate data!

### ORDER BY — Sorting Results

\`\`\`sql
-- Sort by name (A-Z, ascending is default)
SELECT * FROM users ORDER BY name;

-- Sort by age (descending, highest first)
SELECT * FROM users ORDER BY age DESC;

-- Multiple columns
SELECT * FROM products 
ORDER BY category_id ASC, price DESC;
\`\`\`

### Sorting Direction

| Keyword | Meaning | Example |
|---------|---------|---------|
| \`ASC\` | Ascending (default) | A→Z, 1→100 |
| \`DESC\` | Descending | Z→A, 100→1 |

\`\`\`sql
-- Newest users first
SELECT * FROM users ORDER BY created_at DESC;

-- Cheapest products first
SELECT * FROM products ORDER BY price ASC;
\`\`\`

### LIMIT — Restrict Number of Rows

\`\`\`sql
-- Get only 5 users
SELECT * FROM users LIMIT 5;

-- Get top 10 most expensive products
SELECT * FROM products 
ORDER BY price DESC 
LIMIT 10;
\`\`\`

### OFFSET — Skip Rows (Pagination)

\`\`\`sql
-- Skip first 10, get next 10 (page 2)
SELECT * FROM products 
ORDER BY id 
LIMIT 10 OFFSET 10;

-- Page 3 (rows 21-30)
SELECT * FROM products 
ORDER BY id 
LIMIT 10 OFFSET 20;
\`\`\`

\`\`\`
Pagination Formula:
OFFSET = (page_number - 1) * page_size
LIMIT = page_size

Page 1: LIMIT 10 OFFSET 0
Page 2: LIMIT 10 OFFSET 10
Page 3: LIMIT 10 OFFSET 20
\`\`\`

<tip>
💡 Always use ORDER BY with LIMIT/OFFSET! Without ordering, the results are unpredictable.
</tip>

### Practical Examples

\`\`\`sql
-- Top 5 oldest users
SELECT name, age FROM users 
ORDER BY age DESC 
LIMIT 5;

-- Recently created products (last week)
SELECT * FROM products 
WHERE created_at > CURRENT_DATE - INTERVAL '7 days'
ORDER BY created_at DESC;

-- Search with pagination
SELECT * FROM products 
WHERE name LIKE '%laptop%' 
ORDER BY price ASC 
LIMIT 20 OFFSET 0;
\`\`\`

### NULL Sorting

\`\`\`sql
-- NULLs first
SELECT * FROM users ORDER BY phone NULLS FIRST;

-- NULLs last (default for ASC)
SELECT * FROM users ORDER BY phone NULLS LAST;
\`\`\`

### Combining Everything

\`\`\`sql
-- Full query example
SELECT 
    id,
    name,
    price,
    category_id
FROM products
WHERE 
    price < 100 
    AND in_stock = true
ORDER BY 
    category_id ASC,
    price DESC
LIMIT 20
OFFSET 0;
\`\`\`

### Query Execution Order

SQL doesn't execute in written order:

\`\`\`
Written:  SELECT → FROM → WHERE → ORDER BY → LIMIT
Executed: FROM → WHERE → SELECT → ORDER BY → LIMIT

1. FROM     - Get the table
2. WHERE    - Filter rows
3. SELECT   - Pick columns
4. ORDER BY - Sort results
5. LIMIT    - Restrict count
\`\`\`

<warning>
⚠️ For large datasets, OFFSET becomes slow because the database still has to scan all skipped rows. Consider cursor-based pagination for better performance!
</warning>

### Performance Tip

\`\`\`sql
-- Instead of OFFSET for pagination, use WHERE on indexed column:
-- Page 1
SELECT * FROM products WHERE id > 0 ORDER BY id LIMIT 10;

-- Page 2 (using last ID from page 1)
SELECT * FROM products WHERE id > 10 ORDER BY id LIMIT 10;
\`\`\`

### Practice Exercises

1. **Sort products** by price (cheapest first), then by name alphabetically for products with the same price.
2. **Pagination**: Write queries for page 1, page 2, and page 3 (10 items per page) of products sorted by price.
3. **Top N queries**: Find the 3 most expensive products. Then find the 5 cheapest in-stock products.
4. **Combine everything**: Write a query that finds in-stock products priced between $10 and $500, sorted by price descending, limited to 10 results.

Your queries are now organized! 🎯
          `
        }
      ]
    },
    {
      id: 3,
      title: "Aggregate Functions",
      description: "Calculating summaries and statistics",
      lessons: [
        {
          id: "3-1",
          title: "COUNT, SUM, AVG, MIN, MAX",
          duration: "12 min",
          content: `
## Crunching Numbers 🔢

Aggregate functions summarize data across multiple rows!

### The Big Five

| Function | Purpose | Example |
|----------|---------|---------|
| \`COUNT()\` | Count rows | Total users |
| \`SUM()\` | Add values | Total revenue |
| \`AVG()\` | Average | Average price |
| \`MIN()\` | Minimum value | Cheapest product |
| \`MAX()\` | Maximum value | Highest score |

### COUNT — Counting Rows

\`\`\`sql
-- Count all rows
SELECT COUNT(*) FROM users;
-- Result: 100

-- Count non-NULL values
SELECT COUNT(email) FROM users;

-- Count distinct values
SELECT COUNT(DISTINCT category_id) FROM products;
-- Result: 5 (unique categories)
\`\`\`

### SUM — Adding Values

\`\`\`sql
-- Total of all prices
SELECT SUM(price) FROM products;
-- Result: 5432.50

-- Total revenue (quantity × price)
SELECT SUM(quantity * price) AS total_revenue 
FROM order_items;
\`\`\`

### AVG — Calculating Averages

\`\`\`sql
-- Average product price
SELECT AVG(price) FROM products;
-- Result: 49.95

-- Average with rounding
SELECT ROUND(AVG(price), 2) AS avg_price 
FROM products;
-- Result: 49.95
\`\`\`

### MIN and MAX

\`\`\`sql
-- Cheapest and most expensive
SELECT 
    MIN(price) AS cheapest,
    MAX(price) AS most_expensive
FROM products;
-- Result: 9.99 | 999.99

-- First and last signup
SELECT 
    MIN(created_at) AS first_user,
    MAX(created_at) AS newest_user
FROM users;
\`\`\`

### Combining Aggregates

\`\`\`sql
SELECT 
    COUNT(*) AS total_products,
    SUM(price) AS total_value,
    AVG(price) AS average_price,
    MIN(price) AS min_price,
    MAX(price) AS max_price
FROM products
WHERE in_stock = true;
\`\`\`

### Aggregates with WHERE

\`\`\`sql
-- Count electronics only
SELECT COUNT(*) FROM products 
WHERE category_id = 1;

-- Average price of in-stock items
SELECT AVG(price) FROM products 
WHERE in_stock = true;

-- Total revenue this month
SELECT SUM(amount) FROM orders 
WHERE created_at >= DATE_TRUNC('month', CURRENT_DATE);
\`\`\`

<tip>
💡 Aggregates ignore NULL values (except COUNT(*)). This is usually what you want!
</tip>

### NULL Handling

\`\`\`sql
-- COUNT(*) counts all rows
SELECT COUNT(*) FROM users;  -- 100

-- COUNT(column) skips NULLs
SELECT COUNT(phone) FROM users;  -- 75 (25 have no phone)

-- AVG ignores NULLs
SELECT AVG(rating) FROM reviews;  -- Only averages non-NULL ratings
\`\`\`

### Conditional Counting

\`\`\`sql
-- Count by condition using FILTER
SELECT 
    COUNT(*) FILTER (WHERE status = 'completed') AS completed,
    COUNT(*) FILTER (WHERE status = 'pending') AS pending,
    COUNT(*) FILTER (WHERE status = 'cancelled') AS cancelled
FROM orders;

-- Or using CASE
SELECT 
    SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) AS completed,
    SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) AS pending
FROM orders;
\`\`\`

<warning>
⚠️ You can't mix aggregate and non-aggregate columns without GROUP BY! This will error: SELECT name, COUNT(*) FROM users;
</warning>

### Practical Examples

\`\`\`sql
-- Dashboard statistics
SELECT 
    COUNT(*) AS total_orders,
    SUM(amount) AS total_revenue,
    AVG(amount) AS avg_order_value,
    COUNT(DISTINCT customer_id) AS unique_customers
FROM orders
WHERE created_at >= CURRENT_DATE - INTERVAL '30 days';

-- Product inventory summary
SELECT 
    COUNT(*) AS total_products,
    COUNT(*) FILTER (WHERE in_stock) AS in_stock,
    COUNT(*) FILTER (WHERE NOT in_stock) AS out_of_stock,
    SUM(price * quantity) AS inventory_value
FROM products;
\`\`\`

### Practice Exercises

1. **Basic aggregates**: Find the total number of products, average price, cheapest price, and most expensive price.
2. **Filtered aggregates**: Count how many products are in stock. Calculate the average price of products in category 1.
3. **Conditional counting**: Use CASE/FILTER to count products in each price range: under $20, $20-$100, over $100.
4. **Build a dashboard query**: Write a single query that shows total products, total inventory value (sum of all prices), average price, and count of in-stock items.

Aggregates turn rows into insights! 📊
          `
        },
        {
          id: "3-2",
          title: "GROUP BY and HAVING",
          duration: "12 min",
          content: `
## Grouping Data 📦

GROUP BY lets you aggregate within categories!

### GROUP BY Basics

\`\`\`sql
-- Count products per category
SELECT 
    category_id,
    COUNT(*) AS product_count
FROM products
GROUP BY category_id;

-- Result:
-- category_id | product_count
-- ------------|---------------
-- 1           | 25
-- 2           | 42
-- 3           | 18
\`\`\`

### How GROUP BY Works

\`\`\`
Before GROUP BY:
┌────┬──────────┬──────────────┐
│ id │ category │    price     │
├────┼──────────┼──────────────┤
│ 1  │ Books    │    29.99     │
│ 2  │ Books    │    19.99     │
│ 3  │ Tech     │   199.99     │
│ 4  │ Tech     │    49.99     │
│ 5  │ Books    │    39.99     │
└────┴──────────┴──────────────┘

After GROUP BY category:
┌──────────┬───────┬─────────────┐
│ category │ count │  avg_price  │
├──────────┼───────┼─────────────┤
│ Books    │   3   │    29.99    │
│ Tech     │   2   │   124.99    │
└──────────┴───────┴─────────────┘
\`\`\`

### Multiple Aggregates per Group

\`\`\`sql
SELECT 
    category_id,
    COUNT(*) AS count,
    SUM(price) AS total,
    AVG(price) AS average,
    MIN(price) AS cheapest,
    MAX(price) AS most_expensive
FROM products
GROUP BY category_id;
\`\`\`

### GROUP BY Multiple Columns

\`\`\`sql
-- Sales by year and month
SELECT 
    EXTRACT(YEAR FROM order_date) AS year,
    EXTRACT(MONTH FROM order_date) AS month,
    COUNT(*) AS order_count,
    SUM(amount) AS revenue
FROM orders
GROUP BY 
    EXTRACT(YEAR FROM order_date),
    EXTRACT(MONTH FROM order_date)
ORDER BY year, month;
\`\`\`

### HAVING — Filter Groups

WHERE filters rows BEFORE grouping.
HAVING filters groups AFTER grouping.

\`\`\`sql
-- Categories with more than 10 products
SELECT 
    category_id,
    COUNT(*) AS count
FROM products
GROUP BY category_id
HAVING COUNT(*) > 10;

-- Customers who spent over $1000
SELECT 
    customer_id,
    SUM(amount) AS total_spent
FROM orders
GROUP BY customer_id
HAVING SUM(amount) > 1000
ORDER BY total_spent DESC;
\`\`\`

### WHERE vs HAVING

\`\`\`sql
-- WHERE: filter rows before grouping
SELECT category_id, AVG(price)
FROM products
WHERE in_stock = true  -- Filter individual products
GROUP BY category_id;

-- HAVING: filter groups after aggregating
SELECT category_id, AVG(price)
FROM products
GROUP BY category_id
HAVING AVG(price) > 50;  -- Filter category averages

-- Combined
SELECT category_id, COUNT(*), AVG(price)
FROM products
WHERE in_stock = true           -- Only in-stock products
GROUP BY category_id
HAVING COUNT(*) > 5             -- Only categories with 5+ products
ORDER BY AVG(price) DESC;
\`\`\`

<tip>
💡 Remember: WHERE is for rows, HAVING is for groups. You can use both in the same query!
</tip>

### Common GROUP BY Patterns

\`\`\`sql
-- Most active users
SELECT 
    user_id,
    COUNT(*) AS post_count
FROM posts
GROUP BY user_id
ORDER BY post_count DESC
LIMIT 10;

-- Daily signups
SELECT 
    DATE(created_at) AS date,
    COUNT(*) AS signups
FROM users
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- Revenue by product
SELECT 
    p.name,
    SUM(oi.quantity) AS units_sold,
    SUM(oi.quantity * oi.price) AS revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
GROUP BY p.id, p.name
ORDER BY revenue DESC;
\`\`\`

<warning>
⚠️ Every non-aggregated column in SELECT must be in GROUP BY! This is a common error for beginners.
</warning>

### The Rule

\`\`\`sql
-- ❌ Error: name is not in GROUP BY
SELECT category_id, name, COUNT(*)
FROM products
GROUP BY category_id;

-- ✅ Correct: include name in GROUP BY
SELECT category_id, name, COUNT(*)
FROM products
GROUP BY category_id, name;

-- ✅ Or: only aggregate values
SELECT category_id, COUNT(*), MAX(name)
FROM products
GROUP BY category_id;
\`\`\`

### Practice Exercises

1. **Group by category**: Count products per category and show the average price for each category.
2. **Use HAVING**: Find categories with more than 1 product. Then find categories where the average price is over $50.
3. **Combined query**: Find categories with at least 2 in-stock products, showing the category_id, product count, and total value, sorted by total value descending.
4. **Daily analysis**: If you have timestamped data, group orders by date and show daily count and revenue. (Create sample data if needed.)

GROUP BY unlocks powerful analytics! 📈
          `
        }
      ]
    },
    {
      id: 4,
      title: "JOIN Operations",
      description: "Combining data from multiple tables",
      lessons: [
        {
          id: "4-1",
          title: "Understanding JOINs",
          duration: "15 min",
          content: `
## Connecting Tables 🔗

JOINs combine data from multiple tables!

### Why JOINs?

Real databases split data across tables:

\`\`\`
orders table:             users table:
┌────┬─────────┬────────┐ ┌────┬─────────┐
│ id │ user_id │ amount │ │ id │  name   │
├────┼─────────┼────────┤ ├────┼─────────┤
│ 1  │    1    │  99.99 │ │ 1  │  Alice  │
│ 2  │    2    │  49.99 │ │ 2  │   Bob   │
│ 3  │    1    │  29.99 │ │ 3  │ Charlie │
└────┴─────────┴────────┘ └────┴─────────┘

JOIN result:
┌────┬─────────┬────────┬─────────┐
│ id │ user_id │ amount │  name   │
├────┼─────────┼────────┼─────────┤
│ 1  │    1    │  99.99 │  Alice  │
│ 2  │    2    │  49.99 │   Bob   │
│ 3  │    1    │  29.99 │  Alice  │
└────┴─────────┴────────┴─────────┘
\`\`\`

### INNER JOIN

Returns only matching rows from both tables:

\`\`\`sql
SELECT 
    orders.id,
    orders.amount,
    users.name
FROM orders
INNER JOIN users ON orders.user_id = users.id;
\`\`\`

### Using Aliases

\`\`\`sql
-- Table aliases make queries cleaner
SELECT 
    o.id AS order_id,
    o.amount,
    u.name AS customer_name
FROM orders o
INNER JOIN users u ON o.user_id = u.id;
\`\`\`

### Types of JOINs

\`\`\`
INNER JOIN:  Only matching rows
LEFT JOIN:   All left + matching right
RIGHT JOIN:  All right + matching left
FULL JOIN:   All rows from both tables
\`\`\`

\`\`\`
Table A    Table B       INNER JOIN    LEFT JOIN     RIGHT JOIN    FULL JOIN
┌───┐      ┌───┐         ┌───┐         ┌───┐         ┌───┐         ┌───┐
│ 1 │      │ 2 │         │ 2 │         │ 1 │         │ 2 │         │ 1 │
│ 2 │      │ 3 │         │ 3 │         │ 2 │         │ 3 │         │ 2 │
│ 3 │      │ 4 │         └───┘         │ 3 │         │ 4 │         │ 3 │
└───┘      └───┘                       └───┘         └───┘         │ 4 │
                                                                   └───┘
\`\`\`

### LEFT JOIN

Returns all rows from left table, matching rows from right:

\`\`\`sql
-- Get all users, even those without orders
SELECT 
    u.id,
    u.name,
    o.id AS order_id,
    o.amount
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

-- Result:
-- id | name    | order_id | amount
-- ---|---------|----------|-------
-- 1  | Alice   | 1        | 99.99
-- 1  | Alice   | 3        | 29.99
-- 2  | Bob     | 2        | 49.99
-- 3  | Charlie | NULL     | NULL  ← No orders!
\`\`\`

### RIGHT JOIN

Returns all rows from right table:

\`\`\`sql
-- Get all orders, even those with deleted users
SELECT 
    u.name,
    o.id AS order_id,
    o.amount
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;
\`\`\`

<tip>
💡 LEFT JOIN is much more common than RIGHT JOIN. You can always swap table order and use LEFT JOIN instead!
</tip>

### Finding Non-Matches

\`\`\`sql
-- Users who have never ordered
SELECT u.id, u.name
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;

-- Products never sold
SELECT p.id, p.name
FROM products p
LEFT JOIN order_items oi ON p.id = oi.product_id
WHERE oi.id IS NULL;
\`\`\`

### Multiple JOINs

\`\`\`sql
-- Orders with user and product details
SELECT 
    o.id AS order_id,
    u.name AS customer,
    p.name AS product,
    oi.quantity,
    oi.price
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE o.created_at >= CURRENT_DATE - INTERVAL '7 days';
\`\`\`

<warning>
⚠️ JOINs can be expensive on large tables! Always join on indexed columns (usually primary/foreign keys).
</warning>

### Self JOIN

Joining a table to itself:

\`\`\`sql
-- Find employees and their managers
SELECT 
    e.name AS employee,
    m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
\`\`\`

### Practice Exercises

1. **INNER JOIN**: Join products with categories to show each product's name alongside its category name.
2. **LEFT JOIN**: Find all categories, including those with no products. Show the category name and product count (use 0 for empty categories).
3. **Find non-matches**: Use a LEFT JOIN to find categories that have zero products.
4. **Multiple JOINs**: If you create an orders and order_items table, write a query that shows order details with customer names and product names.

JOINs are essential for relational data! 🔗
          `
        },
        {
          id: "4-2",
          title: "Advanced JOIN Techniques",
          duration: "12 min",
          content: `
## Mastering JOINs 🎯

Let's explore advanced joining techniques!

### JOIN with Aggregates

\`\`\`sql
-- Total spending per customer
SELECT 
    u.id,
    u.name,
    COUNT(o.id) AS order_count,
    COALESCE(SUM(o.amount), 0) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
ORDER BY total_spent DESC;
\`\`\`

### COALESCE — Handle NULLs

\`\`\`sql
-- Replace NULL with default value
SELECT 
    u.name,
    COALESCE(SUM(o.amount), 0) AS total  -- 0 if NULL
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;
\`\`\`

### Joining on Multiple Conditions

\`\`\`sql
-- Join on multiple columns
SELECT *
FROM order_items oi
JOIN products p 
    ON oi.product_id = p.id 
    AND oi.warehouse_id = p.warehouse_id;

-- Join with date conditions
SELECT *
FROM subscriptions s
JOIN plans p ON s.plan_id = p.id
WHERE s.start_date <= CURRENT_DATE 
  AND (s.end_date IS NULL OR s.end_date > CURRENT_DATE);
\`\`\`

### Subqueries in JOINs

\`\`\`sql
-- Join with calculated data
SELECT 
    u.name,
    stats.order_count,
    stats.total_spent
FROM users u
JOIN (
    SELECT 
        user_id,
        COUNT(*) AS order_count,
        SUM(amount) AS total_spent
    FROM orders
    GROUP BY user_id
) stats ON u.id = stats.user_id;
\`\`\`

### CROSS JOIN

Every row with every row (Cartesian product):

\`\`\`sql
-- All combinations of sizes and colors
SELECT 
    s.size,
    c.color
FROM sizes s
CROSS JOIN colors c;

-- Result for 3 sizes × 4 colors = 12 rows
\`\`\`

<warning>
⚠️ CROSS JOIN can explode! 1000 rows × 1000 rows = 1,000,000 rows. Use carefully!
</warning>

### NATURAL JOIN

Automatically joins on matching column names:

\`\`\`sql
-- Joins on columns with same name
SELECT * FROM orders NATURAL JOIN users;

-- ⚠️ Risky! Better to be explicit:
SELECT * FROM orders o
JOIN users u ON o.user_id = u.id;
\`\`\`

### Practical Example: E-commerce Report

\`\`\`sql
-- Monthly sales report by category
SELECT 
    c.name AS category,
    DATE_TRUNC('month', o.created_at) AS month,
    COUNT(DISTINCT o.id) AS orders,
    SUM(oi.quantity) AS units_sold,
    SUM(oi.quantity * oi.price) AS revenue
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
JOIN categories c ON p.category_id = c.id
WHERE o.created_at >= '2024-01-01'
GROUP BY c.name, DATE_TRUNC('month', o.created_at)
ORDER BY month DESC, revenue DESC;
\`\`\`

### USING Clause

Shorthand when column names match:

\`\`\`sql
-- When join column has same name
SELECT * FROM orders
JOIN users USING (user_id);  -- Instead of ON orders.user_id = users.user_id
\`\`\`

### Performance Tips

\`\`\`sql
-- 1. Join on indexed columns
CREATE INDEX idx_orders_user_id ON orders(user_id);

-- 2. Filter early with WHERE
SELECT * FROM orders o
JOIN users u ON o.user_id = u.id
WHERE o.created_at >= '2024-01-01'  -- Reduces rows before join

-- 3. Select only needed columns
SELECT o.id, u.name  -- Not SELECT *

-- 4. Use EXPLAIN to analyze
EXPLAIN ANALYZE
SELECT * FROM orders o
JOIN users u ON o.user_id = u.id;
\`\`\`

<tip>
💡 When a query is slow, check if your JOIN columns have indexes! This is the #1 optimization.
</tip>

### Common JOIN Patterns

\`\`\`sql
-- Latest order per user
SELECT u.*, o.*
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN (
    SELECT user_id, MAX(created_at) AS max_date
    FROM orders
    GROUP BY user_id
) latest ON o.user_id = latest.user_id 
        AND o.created_at = latest.max_date;

-- Count with zero handling
SELECT 
    c.name,
    COUNT(p.id) AS product_count
FROM categories c
LEFT JOIN products p ON c.id = p.category_id
GROUP BY c.id, c.name;
\`\`\`

### Practice Exercises

1. **JOIN with aggregates**: Write a query showing each category name with its total product count and average price.
2. **Self JOIN**: Create an employees table with a manager_id column. Write a self JOIN to show each employee with their manager's name.
3. **CROSS JOIN**: Create sizes (S, M, L) and colors (Red, Blue, Green) tables. Use CROSS JOIN to generate all combinations for a product catalog.
4. **Performance**: Use EXPLAIN ANALYZE on a JOIN query. Add an index on the join column and run EXPLAIN again — compare the results.

You're now a JOIN master! 🏆
          `
        }
      ]
    },
    {
      id: 5,
      title: "Data Modification",
      description: "INSERT, UPDATE, and DELETE operations",
      lessons: [
        {
          id: "5-1",
          title: "INSERT — Adding Data",
          duration: "10 min",
          content: `
## Creating New Records ✨

INSERT adds new rows to your tables!

### Basic INSERT

\`\`\`sql
-- Insert single row
INSERT INTO users (name, email, age) 
VALUES ('David', 'david@email.com', 25);

-- Insert with all columns (order matters!)
INSERT INTO users 
VALUES (DEFAULT, 'Eve', 'eve@email.com', 30, CURRENT_TIMESTAMP);
\`\`\`

### Insert Multiple Rows

\`\`\`sql
INSERT INTO products (name, price, category_id) VALUES
    ('Keyboard', 79.99, 1),
    ('Mouse', 29.99, 1),
    ('Monitor', 299.99, 1),
    ('USB Cable', 9.99, 1);
\`\`\`

### RETURNING Clause

Get back the inserted data:

\`\`\`sql
-- Get the new ID
INSERT INTO users (name, email) 
VALUES ('Frank', 'frank@email.com')
RETURNING id;
-- Result: 42

-- Get all inserted data
INSERT INTO users (name, email) 
VALUES ('Grace', 'grace@email.com')
RETURNING *;
\`\`\`

<tip>
💡 RETURNING is incredibly useful for getting auto-generated IDs after insert!
</tip>

### INSERT from SELECT

Copy data from another table:

\`\`\`sql
-- Backup old orders
INSERT INTO orders_archive (id, user_id, amount, created_at)
SELECT id, user_id, amount, created_at
FROM orders
WHERE created_at < '2023-01-01';

-- Create summary table
INSERT INTO monthly_stats (month, total_orders, revenue)
SELECT 
    DATE_TRUNC('month', created_at),
    COUNT(*),
    SUM(amount)
FROM orders
GROUP BY DATE_TRUNC('month', created_at);
\`\`\`

### Handling Duplicates

\`\`\`sql
-- Insert or ignore (PostgreSQL)
INSERT INTO users (email, name) 
VALUES ('existing@email.com', 'User')
ON CONFLICT (email) DO NOTHING;

-- Insert or update (upsert)
INSERT INTO users (email, name, last_login) 
VALUES ('user@email.com', 'User', NOW())
ON CONFLICT (email) 
DO UPDATE SET 
    name = EXCLUDED.name,
    last_login = EXCLUDED.last_login;
\`\`\`

### Default Values

\`\`\`sql
-- Using DEFAULT keyword
INSERT INTO products (name, price, in_stock) 
VALUES ('New Product', 19.99, DEFAULT);

-- Columns with defaults can be omitted
INSERT INTO products (name, price) 
VALUES ('Product', 29.99);
-- in_stock uses default (true), created_at uses default (NOW())
\`\`\`

<warning>
⚠️ Always validate data before inserting! Use application-level validation and database constraints.
</warning>

### Common INSERT Patterns

\`\`\`sql
-- Insert with subquery for foreign key
INSERT INTO orders (user_id, amount)
SELECT id, 99.99
FROM users
WHERE email = 'alice@email.com';

-- Bulk insert from application
INSERT INTO logs (level, message, created_at) VALUES
    ('INFO', 'User logged in', NOW()),
    ('DEBUG', 'Cache hit', NOW()),
    ('ERROR', 'Connection failed', NOW());
\`\`\`

### INSERT Performance

\`\`\`sql
-- Slow: many individual inserts
INSERT INTO table VALUES (1, 'a');
INSERT INTO table VALUES (2, 'b');
INSERT INTO table VALUES (3, 'c');

-- Fast: batch insert
INSERT INTO table VALUES 
    (1, 'a'),
    (2, 'b'),
    (3, 'c');

-- Even faster: COPY command (PostgreSQL)
COPY users (name, email) FROM '/path/to/data.csv' WITH CSV;
\`\`\`

### Practice Exercises

1. **Insert single row**: Add a new product to your products table using INSERT with RETURNING to get the new ID.
2. **Insert multiple**: Insert 5 new products in a single INSERT statement.
3. **Insert from SELECT**: Create an \`expensive_products\` table and populate it with all products priced over $100 using INSERT ... SELECT.
4. **Handle duplicates**: Try inserting a product with a duplicate unique constraint. Then use ON CONFLICT DO NOTHING and ON CONFLICT DO UPDATE.

INSERT is how data enters your database! 📥
          `
        },
        {
          id: "5-2",
          title: "UPDATE and DELETE",
          duration: "12 min",
          content: `
## Modifying and Removing Data ✏️

UPDATE changes existing data. DELETE removes it.

### Basic UPDATE

\`\`\`sql
-- Update single column
UPDATE users 
SET age = 26 
WHERE id = 1;

-- Update multiple columns
UPDATE users 
SET 
    name = 'Alice Smith',
    email = 'alice.smith@email.com',
    updated_at = NOW()
WHERE id = 1;
\`\`\`

<warning>
⚠️ NEVER forget the WHERE clause! Without it, UPDATE affects ALL rows!
</warning>

\`\`\`sql
-- ❌ DANGER: Updates every user!
UPDATE users SET status = 'inactive';

-- ✅ Safe: Updates only matching rows
UPDATE users SET status = 'inactive' WHERE last_login < '2023-01-01';
\`\`\`

### UPDATE with Calculations

\`\`\`sql
-- Increase all prices by 10%
UPDATE products 
SET price = price * 1.10 
WHERE category_id = 1;

-- Increment a counter
UPDATE posts 
SET view_count = view_count + 1 
WHERE id = 42;
\`\`\`

### UPDATE with RETURNING

\`\`\`sql
-- See what was updated
UPDATE products 
SET price = price * 0.9 
WHERE in_stock = false
RETURNING id, name, price;
\`\`\`

### UPDATE with Subquery

\`\`\`sql
-- Update based on another table
UPDATE products 
SET price = (
    SELECT AVG(price) 
    FROM products 
    WHERE category_id = products.category_id
)
WHERE price IS NULL;

-- Update from JOIN
UPDATE orders o
SET status = 'premium'
FROM users u
WHERE o.user_id = u.id AND u.tier = 'gold';
\`\`\`

### Basic DELETE

\`\`\`sql
-- Delete specific rows
DELETE FROM users WHERE id = 5;

-- Delete with conditions
DELETE FROM orders 
WHERE status = 'cancelled' 
  AND created_at < '2023-01-01';
\`\`\`

<warning>
⚠️ DELETE is permanent! There's no undo. Always WHERE clause!
</warning>

### DELETE with RETURNING

\`\`\`sql
-- See what was deleted
DELETE FROM sessions 
WHERE expires_at < NOW()
RETURNING id, user_id;
\`\`\`

### DELETE with Subquery

\`\`\`sql
-- Delete orders from inactive users
DELETE FROM orders
WHERE user_id IN (
    SELECT id FROM users WHERE status = 'deleted'
);

-- Delete orphaned records
DELETE FROM order_items
WHERE order_id NOT IN (SELECT id FROM orders);
\`\`\`

### TRUNCATE — Delete All Rows

\`\`\`sql
-- Fast delete all rows (resets auto-increment)
TRUNCATE TABLE logs;

-- Truncate with cascade
TRUNCATE TABLE orders CASCADE;
\`\`\`

| Command | Speed | Rollback | Triggers | Reset ID |
|---------|-------|----------|----------|----------|
| DELETE | Slow | Yes | Yes | No |
| TRUNCATE | Fast | Limited | No | Yes |

### Safe Update/Delete Practices

\`\`\`sql
-- 1. Test with SELECT first
SELECT * FROM users WHERE last_login < '2023-01-01';
-- Then:
DELETE FROM users WHERE last_login < '2023-01-01';

-- 2. Use transactions
BEGIN;
DELETE FROM orders WHERE status = 'test';
-- Check results...
ROLLBACK;  -- or COMMIT;

-- 3. Add LIMIT for safety
DELETE FROM logs 
WHERE created_at < '2023-01-01' 
LIMIT 1000;  -- Delete in batches
\`\`\`

### Soft Delete Pattern

\`\`\`sql
-- Instead of DELETE, mark as deleted
ALTER TABLE users ADD COLUMN deleted_at TIMESTAMP;

-- "Delete" a user
UPDATE users SET deleted_at = NOW() WHERE id = 5;

-- Query active users only
SELECT * FROM users WHERE deleted_at IS NULL;
\`\`\`

<tip>
💡 Soft deletes preserve data and allow recovery. Consider this pattern for important data!
</tip>

### Practice Exercises

1. **Safe UPDATE**: First SELECT the rows you want to update, then write the UPDATE statement. Increase all electronics prices by 10%.
2. **Transaction safety**: Use BEGIN, UPDATE, check the results with SELECT, then ROLLBACK. Practice the same with COMMIT.
3. **DELETE with caution**: Delete products that are not in stock. Use RETURNING to see what was deleted.
4. **Soft delete**: Add a \`deleted_at\` column to your products table. Instead of deleting, update this column. Write a view that only shows non-deleted products.

Modify your data with confidence! 💪
          `
        }
      ]
    },
    {
      id: 6,
      title: "Database Design",
      description: "Creating well-structured databases",
      lessons: [
        {
          id: "6-1",
          title: "Normalization",
          duration: "12 min",
          content: `
## Organizing Your Data 🗂️

Normalization eliminates redundancy and improves data integrity!

### Why Normalize?

\`\`\`
❌ Unnormalized (data repeated):
┌─────────┬────────────┬─────────────┬──────────────┐
│ order_id│ customer   │ customer_email│ product     │
├─────────┼────────────┼─────────────┼──────────────┤
│ 1       │ Alice      │ alice@mail  │ Laptop       │
│ 2       │ Alice      │ alice@mail  │ Mouse        │ ← Alice repeated!
│ 3       │ Bob        │ bob@mail    │ Keyboard     │
└─────────┴────────────┴─────────────┴──────────────┘

Problem: Update Alice's email = update multiple rows!

✅ Normalized (separate tables):
customers:              orders:
┌────┬───────┬──────────┐   ┌────┬─────────────┬─────────┐
│ id │ name  │ email    │   │ id │ customer_id │ product │
├────┼───────┼──────────┤   ├────┼─────────────┼─────────┤
│ 1  │ Alice │ alice@   │   │ 1  │ 1           │ Laptop  │
│ 2  │ Bob   │ bob@     │   │ 2  │ 1           │ Mouse   │
└────┴───────┴──────────┘   │ 3  │ 2           │ Keyboard│
                            └────┴─────────────┴─────────┘
\`\`\`

### Normal Forms

| Form | Rule | Purpose |
|------|------|---------|
| **1NF** | No repeating groups | Single values per cell |
| **2NF** | No partial dependencies | Every column relates to full key |
| **3NF** | No transitive dependencies | Columns only depend on key |

### First Normal Form (1NF)

Each cell has one value, no arrays:

\`\`\`sql
-- ❌ Violates 1NF (multiple values in one cell)
┌────┬──────────────────┐
│ id │ phone_numbers    │
├────┼──────────────────┤
│ 1  │ 555-1234, 555-5678│
└────┴──────────────────┘

-- ✅ 1NF compliant (separate rows)
┌────┬─────────┬──────────┐
│ id │ user_id │ phone    │
├────┼─────────┼──────────┤
│ 1  │ 1       │ 555-1234 │
│ 2  │ 1       │ 555-5678 │
└────┴─────────┴──────────┘
\`\`\`

### Second Normal Form (2NF)

Every non-key column depends on the entire primary key:

\`\`\`sql
-- ❌ Violates 2NF (product_name depends only on product_id)
orders: (order_id, product_id) → product_name, quantity
                   ↓
         product_name doesn't need order_id!

-- ✅ 2NF compliant (separate tables)
products: product_id → product_name
order_items: order_id, product_id → quantity
\`\`\`

### Third Normal Form (3NF)

No transitive dependencies:

\`\`\`sql
-- ❌ Violates 3NF
employees: id → name, department_id, department_name
           department_name depends on department_id, not id!

-- ✅ 3NF compliant
employees: id → name, department_id
departments: department_id → department_name
\`\`\`

### Practical Example

\`\`\`sql
-- Unnormalized order table
CREATE TABLE orders_bad (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100),
    customer_email VARCHAR(100),
    customer_phone VARCHAR(20),
    product_1_name VARCHAR(100),
    product_1_price DECIMAL,
    product_1_qty INTEGER,
    product_2_name VARCHAR(100),  -- Repeating groups!
    product_2_price DECIMAL,
    product_2_qty INTEGER
);

-- Normalized design
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20)
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER,
    price DECIMAL(10,2)  -- Price at time of order
);
\`\`\`

<tip>
💡 Aim for 3NF in most cases. It's the sweet spot between normalization and usability.
</tip>

### When to Denormalize

Sometimes you add redundancy for performance:

\`\`\`sql
-- Denormalized for speed (cached totals)
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER,
    item_count INTEGER,      -- Denormalized!
    total_amount DECIMAL     -- Denormalized!
);
\`\`\`

<warning>
⚠️ Denormalization trades disk space for speed, but you must keep redundant data in sync!
</warning>

### Practice Exercises

1. **Identify violations**: Look at the unnormalized order table from this lesson. List all 1NF, 2NF, and 3NF violations.
2. **Normalize a table**: Given a flat table with customer_name, customer_email, product_name, product_price, and order_date — design a normalized schema with separate tables.
3. **Create the normalized design**: Implement the customers, products, orders, and order_items tables from this lesson in PostgreSQL. Insert sample data.
4. **When to denormalize**: For an e-commerce dashboard that shows order count and total revenue per customer — would you normalize or denormalize? Explain your reasoning.

Good design = good performance! 📐
          `
        },
        {
          id: "6-2",
          title: "Indexes & Performance",
          duration: "12 min",
          content: `
## Making Queries Fast ⚡

Indexes are the key to database performance!

### What is an Index?

Like a book index — find content without reading every page:

\`\`\`
Without index: Scan 1,000,000 rows (slow!)
With index: Jump directly to matching rows (fast!)

Book analogy:
- Table = book content
- Index = index at back of book
- Query = "find chapter on SQL"
\`\`\`

### Creating Indexes

\`\`\`sql
-- Create index on single column
CREATE INDEX idx_users_email ON users(email);

-- Create index on multiple columns
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- Unique index (enforces uniqueness)
CREATE UNIQUE INDEX idx_users_email ON users(email);

-- Partial index (only certain rows)
CREATE INDEX idx_orders_pending ON orders(created_at)
WHERE status = 'pending';
\`\`\`

### When to Create Indexes

| Create Index When | Example |
|-------------------|---------|
| Column in WHERE | \`WHERE email = ?\` |
| Column in JOIN | \`ON orders.user_id = users.id\` |
| Column in ORDER BY | \`ORDER BY created_at\` |
| Column in GROUP BY | \`GROUP BY category_id\` |
| Unique constraint needed | email must be unique |

### Check Query Performance

\`\`\`sql
-- EXPLAIN shows the query plan
EXPLAIN SELECT * FROM users WHERE email = 'alice@email.com';

-- EXPLAIN ANALYZE actually runs the query
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'alice@email.com';

-- Look for:
-- "Seq Scan" = full table scan (usually slow)
-- "Index Scan" = using index (fast!)
\`\`\`

### Index Types

| Type | Best For | Example |
|------|----------|---------|
| **B-tree** | Equality, ranges | = < > BETWEEN |
| **Hash** | Equality only | = |
| **GIN** | Arrays, full-text | @> LIKE |
| **GiST** | Geometric, text | Spatial data |

\`\`\`sql
-- B-tree (default)
CREATE INDEX idx_users_email ON users(email);

-- GIN for array search
CREATE INDEX idx_posts_tags ON posts USING GIN(tags);

-- Full-text search
CREATE INDEX idx_articles_content ON articles 
USING GIN(to_tsvector('english', content));
\`\`\`

### Composite Indexes

\`\`\`sql
-- Order matters!
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- This index helps with:
WHERE user_id = 1                         ✅
WHERE user_id = 1 AND created_at > '...'  ✅
WHERE created_at > '...'                  ❌ (user_id not used)

-- Rule: leftmost columns can be used independently
\`\`\`

### Index Maintenance

\`\`\`sql
-- View index size
SELECT 
    indexname,
    pg_size_pretty(pg_relation_size(indexname::regclass)) AS size
FROM pg_indexes
WHERE tablename = 'orders';

-- Find unused indexes
SELECT 
    indexrelname,
    idx_scan
FROM pg_stat_user_indexes
WHERE idx_scan = 0;

-- Drop unused index
DROP INDEX idx_unused;

-- Rebuild index (if bloated)
REINDEX INDEX idx_users_email;
\`\`\`

<warning>
⚠️ Indexes slow down INSERT/UPDATE/DELETE! Don't over-index. Every write updates all relevant indexes.
</warning>

### Performance Best Practices

\`\`\`sql
-- 1. Avoid SELECT *
SELECT id, name FROM users;  -- Not SELECT *

-- 2. Use LIMIT
SELECT * FROM logs ORDER BY created_at DESC LIMIT 100;

-- 3. Avoid LIKE with leading wildcard
WHERE name LIKE 'john%'    ✅ Uses index
WHERE name LIKE '%john'    ❌ Can't use index

-- 4. Avoid functions on indexed columns
WHERE LOWER(email) = '...'        ❌
WHERE email = LOWER('...')        ✅

-- 5. Use EXISTS instead of IN for large subqueries
WHERE EXISTS (SELECT 1 FROM orders WHERE user_id = users.id)
\`\`\`

<tip>
💡 The general rule: index columns you search/filter/join on, but not too many. Monitor slow queries and add indexes as needed.
</tip>

### Practice Exercises

1. **Create an index**: Add an index on the email column of your users table. Use EXPLAIN ANALYZE to compare query performance before and after.
2. **Composite index**: Create a composite index on (category_id, price). Test which queries benefit from it and which don't.
3. **Find slow queries**: Write a query without an index on a filtered column. Use EXPLAIN ANALYZE to see the "Seq Scan". Add an index and see it change to "Index Scan".
4. **Index audit**: List all indexes on your tables using \`\\di\` in psql. Identify any unused indexes you could drop.

Fast queries make happy users! 🚀
          `
        }
      ]
    },
    {
      id: 7,
      title: "Advanced SQL",
      description: "Window functions, CTEs, and more",
      lessons: [
        {
          id: "7-1",
          title: "Window Functions",
          duration: "15 min",
          content: `
## Analytics Power Tools 📊

Window functions perform calculations across rows!

### What are Window Functions?

Regular aggregates collapse rows. Window functions keep them:

\`\`\`sql
-- Regular aggregate: one result row
SELECT AVG(salary) FROM employees;
-- Result: 55000

-- Window function: every row with its calculation
SELECT 
    name, 
    salary,
    AVG(salary) OVER() AS avg_salary
FROM employees;
-- Result:
-- Alice  | 50000 | 55000
-- Bob    | 60000 | 55000
-- Carol  | 55000 | 55000
\`\`\`

### OVER Clause

\`\`\`sql
-- OVER() = entire table as window
SELECT name, salary, AVG(salary) OVER() FROM employees;

-- PARTITION BY = separate windows per group
SELECT 
    name, 
    department,
    salary,
    AVG(salary) OVER(PARTITION BY department) AS dept_avg
FROM employees;
\`\`\`

### Common Window Functions

| Function | Purpose | Example |
|----------|---------|---------|
| \`ROW_NUMBER()\` | Sequential number | 1, 2, 3... |
| \`RANK()\` | Rank with gaps | 1, 2, 2, 4... |
| \`DENSE_RANK()\` | Rank without gaps | 1, 2, 2, 3... |
| \`LAG()\` | Previous row value | Compare to yesterday |
| \`LEAD()\` | Next row value | Compare to tomorrow |
| \`FIRST_VALUE()\` | First in window | Top performer |
| \`LAST_VALUE()\` | Last in window | Bottom performer |
| \`SUM() OVER\` | Running total | Cumulative sum |

### ROW_NUMBER, RANK, DENSE_RANK

\`\`\`sql
SELECT 
    name,
    score,
    ROW_NUMBER() OVER(ORDER BY score DESC) AS row_num,
    RANK() OVER(ORDER BY score DESC) AS rank,
    DENSE_RANK() OVER(ORDER BY score DESC) AS dense_rank
FROM players;

-- Result:
-- name  | score | row_num | rank | dense_rank
-- Alice |  100  |    1    |  1   |     1
-- Bob   |  100  |    2    |  1   |     1
-- Carol |   90  |    3    |  3   |     2
-- Dave  |   85  |    4    |  4   |     3
\`\`\`

### Running Totals

\`\`\`sql
SELECT 
    date,
    amount,
    SUM(amount) OVER(ORDER BY date) AS running_total
FROM transactions;

-- Result:
-- date       | amount | running_total
-- 2024-01-01 | 100    | 100
-- 2024-01-02 | 50     | 150
-- 2024-01-03 | 75     | 225
\`\`\`

### LAG and LEAD

\`\`\`sql
-- Compare to previous/next value
SELECT 
    date,
    revenue,
    LAG(revenue) OVER(ORDER BY date) AS prev_day,
    revenue - LAG(revenue) OVER(ORDER BY date) AS change
FROM daily_sales;

-- Result:
-- date       | revenue | prev_day | change
-- 2024-01-01 | 1000    | NULL     | NULL
-- 2024-01-02 | 1200    | 1000     | 200
-- 2024-01-03 | 1100    | 1200     | -100
\`\`\`

### Window Frame

\`\`\`sql
-- 3-day moving average
SELECT 
    date,
    amount,
    AVG(amount) OVER(
        ORDER BY date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_avg_3day
FROM sales;
\`\`\`

### Practical Examples

\`\`\`sql
-- Top 3 products per category
WITH ranked AS (
    SELECT 
        category_id,
        name,
        price,
        ROW_NUMBER() OVER(
            PARTITION BY category_id 
            ORDER BY price DESC
        ) AS rank
    FROM products
)
SELECT * FROM ranked WHERE rank <= 3;

-- Percentage of total
SELECT 
    category,
    revenue,
    revenue * 100.0 / SUM(revenue) OVER() AS pct_of_total
FROM category_sales;

-- Month-over-month growth
SELECT 
    month,
    revenue,
    LAG(revenue) OVER(ORDER BY month) AS prev_month,
    (revenue - LAG(revenue) OVER(ORDER BY month)) / 
        LAG(revenue) OVER(ORDER BY month) * 100 AS growth_pct
FROM monthly_sales;
\`\`\`

<tip>
💡 Window functions are game-changers for analytics! They solve problems that would otherwise require complex subqueries or multiple passes.
</tip>

Window functions = analytics superpowers! 🦸
          `
        },
        {
          id: "7-2",
          title: "CTEs and Subqueries",
          duration: "12 min",
          content: `
## Writing Clean, Complex Queries 🧩

CTEs make complex queries readable and reusable!

### What is a CTE?

**Common Table Expression** — a named temporary result set:

\`\`\`sql
-- CTE syntax
WITH cte_name AS (
    SELECT ...
)
SELECT * FROM cte_name;
\`\`\`

### CTE vs Subquery

\`\`\`sql
-- Subquery (harder to read)
SELECT *
FROM (
    SELECT user_id, SUM(amount) AS total
    FROM orders
    GROUP BY user_id
) AS user_totals
WHERE total > 1000;

-- CTE (cleaner!)
WITH user_totals AS (
    SELECT user_id, SUM(amount) AS total
    FROM orders
    GROUP BY user_id
)
SELECT * FROM user_totals WHERE total > 1000;
\`\`\`

### Multiple CTEs

\`\`\`sql
WITH 
active_users AS (
    SELECT id, name 
    FROM users 
    WHERE last_login > CURRENT_DATE - INTERVAL '30 days'
),
user_orders AS (
    SELECT user_id, COUNT(*) AS order_count
    FROM orders
    GROUP BY user_id
)
SELECT 
    au.name,
    COALESCE(uo.order_count, 0) AS orders
FROM active_users au
LEFT JOIN user_orders uo ON au.id = uo.user_id;
\`\`\`

### CTEs Reference Each Other

\`\`\`sql
WITH 
raw_data AS (
    SELECT * FROM sales WHERE year = 2024
),
monthly AS (
    SELECT 
        DATE_TRUNC('month', date) AS month,
        SUM(amount) AS total
    FROM raw_data
    GROUP BY DATE_TRUNC('month', date)
),
with_growth AS (
    SELECT 
        month,
        total,
        LAG(total) OVER(ORDER BY month) AS prev_month,
        total - LAG(total) OVER(ORDER BY month) AS growth
    FROM monthly
)
SELECT * FROM with_growth;
\`\`\`

### Recursive CTEs

For hierarchical data (trees, graphs):

\`\`\`sql
-- Employee hierarchy
WITH RECURSIVE org_chart AS (
    -- Base case: top-level employees
    SELECT id, name, manager_id, 1 AS level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive case: employees with managers
    SELECT e.id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart ORDER BY level, name;
\`\`\`

### Subquery Types

\`\`\`sql
-- Scalar subquery (returns single value)
SELECT 
    name,
    salary,
    (SELECT AVG(salary) FROM employees) AS company_avg
FROM employees;

-- Row subquery (returns single row)
SELECT * FROM products
WHERE (category_id, price) = (
    SELECT category_id, MAX(price)
    FROM products
    GROUP BY category_id
    LIMIT 1
);

-- Table subquery (returns multiple rows)
SELECT * FROM users
WHERE id IN (SELECT user_id FROM orders WHERE amount > 100);
\`\`\`

### EXISTS vs IN

\`\`\`sql
-- IN: check if value is in list
SELECT * FROM users
WHERE id IN (SELECT user_id FROM orders);

-- EXISTS: check if subquery returns rows (often faster)
SELECT * FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);

-- NOT EXISTS: find non-matching
SELECT * FROM users u
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);
\`\`\`

<tip>
💡 EXISTS is often faster than IN for large subqueries because it stops at the first match.
</tip>

### Practical Examples

\`\`\`sql
-- Find customers who ordered every product
WITH product_count AS (
    SELECT COUNT(*) AS total FROM products
),
customer_products AS (
    SELECT 
        o.customer_id,
        COUNT(DISTINCT oi.product_id) AS products_ordered
    FROM orders o
    JOIN order_items oi ON o.id = oi.order_id
    GROUP BY o.customer_id
)
SELECT cp.customer_id
FROM customer_products cp, product_count pc
WHERE cp.products_ordered = pc.total;

-- Year-over-year comparison
WITH yearly AS (
    SELECT 
        EXTRACT(YEAR FROM date) AS year,
        SUM(amount) AS total
    FROM sales
    GROUP BY EXTRACT(YEAR FROM date)
)
SELECT 
    curr.year,
    curr.total AS current_year,
    prev.total AS previous_year,
    (curr.total - prev.total) / prev.total * 100 AS growth_pct
FROM yearly curr
LEFT JOIN yearly prev ON curr.year = prev.year + 1;
\`\`\`

<warning>
⚠️ Deeply nested subqueries can be hard to debug. When you have more than 2 levels, consider using CTEs instead!
</warning>

CTEs make complex queries manageable! 📝
          `
        }
      ]
    },
    {
      id: 8,
      title: "NoSQL & MongoDB",
      description: "Document databases basics",
      lessons: [
        {
          id: "8-1",
          title: "Introduction to MongoDB",
          duration: "12 min",
          content: `
## Beyond SQL: Document Databases 📄

MongoDB stores data as flexible JSON-like documents!

### SQL vs MongoDB

| SQL | MongoDB |
|-----|---------|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |
| Primary Key | _id |
| JOIN | Embedded / \$lookup |

### Document Structure

\`\`\`javascript
// MongoDB document (JSON)
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "Alice",
  "email": "alice@email.com",
  "age": 28,
  "address": {
    "street": "123 Main St",
    "city": "Boston",
    "zip": "02101"
  },
  "tags": ["developer", "reader"],
  "created_at": ISODate("2024-01-15T10:30:00Z")
}
\`\`\`

### Why MongoDB?

| Use Case | MongoDB Strength |
|----------|-----------------|
| Rapid prototyping | Flexible schema |
| Varied data | Different fields per doc |
| Hierarchical data | Nested documents |
| Scaling | Built for horizontal scale |
| Read-heavy | Fast queries |

### Installing MongoDB

\`\`\`bash
# Mac
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# Connect
mongosh
\`\`\`

### Basic Commands

\`\`\`javascript
// Show databases
show dbs

// Use/create database
use myapp

// Show collections
show collections

// Create collection
db.createCollection("users")
\`\`\`

### CRUD Operations

\`\`\`javascript
// Create (Insert)
db.users.insertOne({
  name: "Alice",
  email: "alice@email.com",
  age: 28
})

db.users.insertMany([
  { name: "Bob", email: "bob@email.com", age: 34 },
  { name: "Carol", email: "carol@email.com", age: 22 }
])

// Read (Find)
db.users.find()                          // All
db.users.findOne({ email: "alice@email.com" })  // One
db.users.find({ age: { $gt: 25 } })      // Filter

// Update
db.users.updateOne(
  { email: "alice@email.com" },
  { $set: { age: 29 } }
)

// Delete
db.users.deleteOne({ email: "bob@email.com" })
\`\`\`

### Query Operators

\`\`\`javascript
// Comparison
$eq   // Equal
$ne   // Not equal
$gt   // Greater than
$gte  // Greater than or equal
$lt   // Less than
$lte  // Less than or equal
$in   // In array
$nin  // Not in array

// Examples
db.users.find({ age: { $gte: 18, $lte: 65 } })
db.users.find({ status: { $in: ["active", "pending"] } })
db.products.find({ price: { $lt: 100 } })
\`\`\`

### Logical Operators

\`\`\`javascript
// AND (implicit)
db.users.find({ age: { $gt: 25 }, status: "active" })

// Explicit $and
db.users.find({
  $and: [
    { age: { $gt: 25 } },
    { status: "active" }
  ]
})

// OR
db.users.find({
  $or: [
    { age: { $lt: 18 } },
    { age: { $gt: 65 } }
  ]
})
\`\`\`

<tip>
💡 MongoDB is schema-less — different documents in the same collection can have different fields. This flexibility is powerful but requires discipline!
</tip>

### When to Use MongoDB

✅ Good fit:
- Content management, catalogs
- Real-time analytics
- Mobile/IoT data
- Rapid iteration

❌ Not ideal:
- Complex transactions
- Heavy JOINs needed
- Strict data integrity

<warning>
⚠️ MongoDB sacrifices some ACID guarantees for performance. For banking or critical transactions, consider SQL databases!
</warning>

Documents give you flexibility! 🌊
          `
        },
        {
          id: "8-2",
          title: "MongoDB Queries & Aggregation",
          duration: "12 min",
          content: `
## Advanced MongoDB 🔬

Let's explore querying and aggregation!

### Projection (Select Fields)

\`\`\`javascript
// Only return name and email
db.users.find({}, { name: 1, email: 1 })

// Exclude fields
db.users.find({}, { password: 0, internal_notes: 0 })
\`\`\`

### Sorting and Limiting

\`\`\`javascript
// Sort ascending (1) or descending (-1)
db.products.find().sort({ price: 1 })
db.users.find().sort({ created_at: -1 })

// Limit and skip (pagination)
db.products.find().sort({ price: 1 }).limit(10)
db.products.find().skip(10).limit(10)  // Page 2
\`\`\`

### Array Queries

\`\`\`javascript
// Match element in array
db.products.find({ tags: "electronics" })

// Match all elements
db.products.find({ tags: { $all: ["electronics", "sale"] } })

// Array size
db.products.find({ tags: { $size: 3 } })

// Query nested array objects
db.orders.find({ "items.product_id": "abc123" })
\`\`\`

### Aggregation Pipeline

Like SQL GROUP BY on steroids:

\`\`\`javascript
db.orders.aggregate([
  // Stage 1: Match (WHERE)
  { $match: { status: "completed" } },
  
  // Stage 2: Group (GROUP BY)
  { $group: {
      _id: "$customer_id",
      total_orders: { $sum: 1 },
      total_spent: { $sum: "$amount" },
      avg_order: { $avg: "$amount" }
  }},
  
  // Stage 3: Sort
  { $sort: { total_spent: -1 } },
  
  // Stage 4: Limit
  { $limit: 10 }
])
\`\`\`

### Common Aggregation Stages

| Stage | Purpose | SQL Equivalent |
|-------|---------|----------------|
| \`$match\` | Filter documents | WHERE |
| \`$group\` | Group and aggregate | GROUP BY |
| \`$sort\` | Order results | ORDER BY |
| \`$limit\` | Limit results | LIMIT |
| \`$skip\` | Skip results | OFFSET |
| \`$project\` | Shape output | SELECT |
| \`$lookup\` | Join collections | JOIN |
| \`$unwind\` | Flatten arrays | - |

### Lookup (JOIN)

\`\`\`javascript
db.orders.aggregate([
  {
    $lookup: {
      from: "users",           // Collection to join
      localField: "user_id",   // Field in orders
      foreignField: "_id",     // Field in users
      as: "user"               // Output array name
    }
  },
  { $unwind: "$user" }  // Flatten the array
])
\`\`\`

### Practical Aggregation Example

\`\`\`javascript
// Monthly sales report
db.orders.aggregate([
  { $match: {
      created_at: {
        $gte: ISODate("2024-01-01"),
        $lt: ISODate("2025-01-01")
      }
  }},
  { $group: {
      _id: { $dateToString: { format: "%Y-%m", date: "$created_at" } },
      order_count: { $sum: 1 },
      revenue: { $sum: "$amount" },
      avg_order_value: { $avg: "$amount" }
  }},
  { $sort: { _id: 1 } },
  { $project: {
      month: "$_id",
      order_count: 1,
      revenue: { $round: ["$revenue", 2] },
      avg_order_value: { $round: ["$avg_order_value", 2] }
  }}
])
\`\`\`

### Indexes in MongoDB

\`\`\`javascript
// Create index
db.users.createIndex({ email: 1 })

// Compound index
db.orders.createIndex({ user_id: 1, created_at: -1 })

// Unique index
db.users.createIndex({ email: 1 }, { unique: true })

// Text index (full-text search)
db.articles.createIndex({ title: "text", content: "text" })

// View indexes
db.users.getIndexes()

// Explain query
db.users.find({ email: "test@email.com" }).explain("executionStats")
\`\`\`

<tip>
💡 Always index fields you filter or sort on frequently. MongoDB's performance depends heavily on proper indexing!
</tip>

### MongoDB vs PostgreSQL Summary

| Feature | PostgreSQL | MongoDB |
|---------|------------|---------|
| Schema | Fixed | Flexible |
| Transactions | Full ACID | Limited |
| Relationships | Native JOINs | Embedded/Reference |
| Query Language | SQL | MQL/Aggregation |
| Scaling | Vertical | Horizontal |
| Best For | Complex queries | Document data |

---

## Congratulations! 🎉

You've completed the SQL & Databases course! You now understand:

- Database fundamentals and SQL
- SELECT queries with filters, sorts, and limits
- Aggregate functions and GROUP BY
- JOIN operations for related tables
- INSERT, UPDATE, DELETE operations
- Database design and normalization
- Indexes and performance optimization
- Window functions and CTEs
- MongoDB document database basics

Keep practicing and building real projects! 🚀
          `
        }
      ]
    }
  ]
};

export default courseData;
