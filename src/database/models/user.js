import { sequelize } from "sequelize";
import { database } from "../../config/database.js";

export const user = database.define('cliente', {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: sequelize.STRING},
  phone: { type: sequelize.STRING},
  password: { type: sequelize.STRING}
}, {
  timestamps: false
});