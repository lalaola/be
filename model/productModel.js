import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define('job', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    title: {
        type: DataTypes.STRING
    },
    company: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    company_url: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull:false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull:false
    }
}, {
    freezeTableName: true
});
export default Product;
