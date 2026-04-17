import type { Locale } from "../types";
import en from "./en";
import zh from "./zh";

export const catalogs: Record<Locale, typeof zh> = { zh, en };
