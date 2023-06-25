import { Sequelize } from 'sequelize';

// Configure the PostgreSQL connection pool
export const sequelize = new Sequelize('codegig', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432, // default PostgreSQL port

    pool: {
        max: 5, // max: maximum number of connection in pool
        min: 0, // min: minimum number of connection in pool
        acquire: 30000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
        idle: 10000 // idle: maximum time, in milliseconds, that a connection can be idle before being released
    },
});