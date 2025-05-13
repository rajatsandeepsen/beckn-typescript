import createClient from "openapi-fetch";
import type { metaPath, registryPath, transactionPath } from "./type";

export const fetchMeta = createClient<metaPath>().POST
export const fetchRegistry = createClient<registryPath>().POST
export const fetchTransaction = createClient<transactionPath>().POST

export const createClientMeta = createClient<metaPath>
export const createClientRegistry = createClient<registryPath>
export const createClientTransaction = createClient<transactionPath>