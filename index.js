import express from "express";
import db from "./config/database.js";
import productRoute from "./route/productRoute.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 1000

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/products', productRoute);
 
app.listen(PORT, () => console.log(`BAru ya listening on port ${PORT}`))
