import { config } from "../database/configMsn.js";
import knex from "knex";

export const db = knex(config);


