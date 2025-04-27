import { defineConfig } from "drizzle-kit";
import { BaseEnvironment } from "./configs/BaseEnvironment";

const env = new BaseEnvironment();

export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./schema/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://futur:npg_CrAsWQD7LKm8@ep-cold-king-a48oow2c.us-east-1.aws.neon.tech/neondb?sslmode=require',
  },
});
