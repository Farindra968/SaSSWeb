import { Sequelize } from "sequelize";

/// Supabase Postgress DB connection [ORM]
const sequelize = new Sequelize(
  "postgresql://postgres.bamqqfdwtmgwtbeooivc:DbFullStack!@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"
);

sequelize.authenticate().then(()=>{
    console.log("DB Connected successfully")
}).catch((error)=>{
    console.log(`DB not connect sucessfully ${error}`)
})