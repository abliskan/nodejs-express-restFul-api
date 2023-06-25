
# Nodejs Express RestFul Api

This project was created learn how to create a CRUD RESTful API in a Node.js environment that runs on an Express server and uses a PostgreSQL database. This project takes a case study to build backend for a car auction system. 

#### What you need to run this code
1. Node (18.12.0)
2. NPM (8.19.42)
3. PostgreSQL (13)
4. Sequelize ORM

### How to install and use
1. Make sure you install pg admin and postgresql in your local or other environment

2. Clone the respository locally

```bash
git clone https://github.com/jarrodmalkovic/auction-website.git
```

3. Edit package.json

4. Create and run PostgreSQL DB Schema on pgadmin

5. Run node app locally on your computer
```sh
$ node src/server.js
```

## 💻 Technologies

### Back-end
- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [Express.js](https://expressjs.com/) - Node.js framework, makes process of building APIs easier & faster
- [PostgreSQL](https://www.postgresql.org) -  An open-source relational database management system
- [Sequelize](https://sequelize.org/) - A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server
- [Jest](https://jestjs.io/) - A JavaScript testing framework

## List of All Endpoints
- "/" (GET) landing page
- "/user" (GET) user index page
- "/car" (GET) car index page
- "/user/:id" (GET) user show page
- "/car/:id" (GET) car show page
- "/car/:id/carComment" (GET) carComment show page
