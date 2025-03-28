import { defineConfig } from "drizzle-kit";
import { BaseEnvironment } from "./configs/BaseEnvironment";

const env = new BaseEnvironment();

export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./schema/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url:'postgresql://Futuredstudy_owner:npg_zhndGil8xot7@ep-aged-bar-a1uhhoig.ap-southeast-1.aws.neon.tech/Futuredstudy?sslmode=require',
  },
});
