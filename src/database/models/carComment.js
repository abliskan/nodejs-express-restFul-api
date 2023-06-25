import { sequelize } from "sequelize";
import { database } from "../../config/database.js";
import { user } from "./user.js";
import { car } from "./car.js";

export const carComment = database.define('cliente', {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true }
}, {
  timestamps: false
});

// Association database relationship carComment, user table and car table
carComment.hasOne(car, { foreignKey: 'carId', sourceKey: 'id' });
car.hasMany(user, { foreignKey: 'userId', sourceKey: 'id' });
user.belongsTo(carComment, { foreignKey: 'userId', targetKey: 'id' });
car.belongsTo(carComment, { foreignKey: 'carId', targetKey: 'id' });