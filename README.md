# Node DB 4 Guided Project

Guided project for **Node DB 4** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.
- a rest client like [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] **import** and clone this repository.
- [ ] **CD into the folder** where you cloned **your version**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor uses Knex migrations and seeding to create a multi-table database schema.

Build a system to manage students & cohorts for Lambda school
Manage Students
Manage cohorts
Add students to cohort
- a cohort can have multiple students (many to many relationship)
- a student can join more than one cohort over time

Principles
A.	every table must have a primary key
B.	work on 2 or 3 entities (a noun that translates into a table) at a time [not just 1 but not 20 either]
C.	one to many --> use a foreign key, it goes on the many side
ex: a track can have many cohorts
a cohort belongs to only one track
the cohort should have the foreign key b/c it is the many side of the relationship
D.	Many to many --> use a third table, the 3rd table could have additional info
the 3rd table usually represents a transaction (a student joining a cohort)(something that happens over time)
