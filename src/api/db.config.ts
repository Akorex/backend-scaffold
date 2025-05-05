import { DataSource } from "typeorm";
import { DB_TYPE, DATABASE_URL } from "../../env";

export const appDataSource: DataSource = new DataSource({
  type: DB_TYPE as any,
  url: DATABASE_URL,
  synchronize: false,
  logging: false,
  entities: [__dirname + "/../**/*.model.js", __dirname + "/../**/*.model.ts"],
  extra: {
    ssl: true,
  },
});
