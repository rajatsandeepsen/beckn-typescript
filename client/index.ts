import createClient from "openapi-fetch";

type metaPath = typeof import("../type/meta");
type registryPath = typeof import("../type/registry");
type transactionPath = typeof import("../type/transaction");

/**
 * Fetch metadata from the API.
 *
 * @example
 * const { data, error } = await fetchMeta("/some-endpoint", {
 *   baseUrl: "https://myapi.dev/v1/",
 *   body: {
 *     context: {
 *       // context fields
 *     },
 *     message: {
 *       // message fields
 *     },
 *   },
 * });
 */
export const fetchMeta = createClient<metaPath>().POST;
/**
 * Fetch registry data from the API.
 *
 * @example
 * const { data, error } = await fetchRegistry("/some-endpoint", {
 *   baseUrl: "https://myapi.dev/v1/",
 *   body: {
 *     context: {
 *       // context fields
 *     },
 *     message: {
 *       // message fields
 *     },
 *   },
 * });
 */
export const fetchRegistry = createClient<registryPath>().POST;
/**
 * Fetch transaction data from the API.
 *
 * @example
 * const { data, error } = await fetchTransaction("/search", {
 *   baseUrl: "https://myapi.dev/v1/",
 *   body: {
 *     context: {
 *       // context fields
 *     },
 *     message: {
 *       // message fields
 *     },
 *   },
 * });
 */
export const fetchTransaction = createClient<transactionPath>().POST;

/**
 * Create a client for fetching metadata.
 *
 * @example
 * const clientMeta = createClientMeta({ baseUrl: "https://myapi.dev/v1/" });
 * const { data, error } = await clientMeta.POST("/some-endpoint", {
 *   body: {
 *     context: {
 *       // context fields
 *     },
 *     message: {
 *       // message fields
 *     },
 *   },
 * });
 */
export const createClientMeta = createClient<metaPath>;
/**
 * Create a client for fetching registry data.
 *
 * @example
 * const clientRegistry = createClientRegistry({ baseUrl: "https://myapi.dev/v1/" });
 * const { data, error } = await clientRegistry.POST("/some-endpoint", {
 *   body: {
 *     context: {
 *       // context fields
 *     },
 *     message: {
 *       // message fields
 *     },
 *   },
 * });
 */
export const createClientRegistry = createClient<registryPath>;
/**
 * Create a client for fetching transaction data.
 *
 * @example
 * const clientTransaction = createClientTransaction({ baseUrl: "https://myapi.dev/v1/" });
 * const { data, error } = await clientTransaction.POST("/search", {
 *   body: {
 *     context: {
 *       // context fields
 *     },
 *     message: {
 *       // message fields
 *     },
 *   },
 * });
 */
export const createClientTransaction = createClient<transactionPath>;
