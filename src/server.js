import { main } from "./application/main.js";
import { logger } from "./application/logger.js";
import { sequelize } from './config/database.js';

// Test PostgreSQL DB connection
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

// Run express application
main.listen(300, () => {
    logger.info("Server start!");
});