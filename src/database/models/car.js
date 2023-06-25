import { sequelize } from "sequelize";
import { database } from "../../config/database.js";
import { user } from "./user.js"

export const car = database.define('cliente', {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  carName: { type: sequelize.STRING},
  promotionEndDate: { type: sequelize.DATE},
  description: { type: sequelize.STRING},
  price: { type: sequelize.STRING},
  address: { type: sequelize.STRING},
  mileage: { type: sequelize.INTEGER},
  carPicture: { type: sequelize.BLOB}
}, {
  timestamps: false
});

// Association database relationship user table and car table
car.hasMany(user, { foreignKey: 'userId', sourceKey: 'id' });
user.belongsTo(car, { foreignKey: 'userId', targetKey: 'id' });