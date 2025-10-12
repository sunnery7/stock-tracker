import { connectToDatabase } from "../app/database/mongoose";

async function dbTest() {
    try {
        await connectToDatabase();
        console.log("Database connection successful");
        process.exit(0);
    } catch (error) {
        console.error("Database connection failed", error);
        console.error(error);
        process.exit(1);
    }
}

dbTest();