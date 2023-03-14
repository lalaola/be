import { Sequelize } from "sequelize";
 const DB_URI = "mysql://ul5sekuctvifjxyx:KEp5nf8ER7LhupxczvIP@blv0cejyvyruhj9fumjz-mysql.services.clever-cloud.com:3306/blv0cejyvyruhj9fumjz"
const db = new Sequelize('bbfjcbbslxvthgpssh8j', 'uhmisxm5koyfyyqq', 'DHk0PjnULRgKo7VRbRvK', {
    host: "bbfjcbbslxvthgpssh8j-mysql.services.clever-cloud.com",
    dialect: "mysql"
});
 
export default db;