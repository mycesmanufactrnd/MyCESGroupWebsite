import { defineConfig } from '@prisma/config'
import 'dotenv/config' // This loads variables from your .env file

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL, // Your connection string with pooler
  },
  schema: './prisma/schema.prisma', // Optional, as this is the default
})