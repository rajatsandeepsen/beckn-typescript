export type ExcludeOnKeys<OB extends Record<string, any>> = {
    [K in keyof OB as K extends `on_${string}` ? never : K]: OB[K];
};

export type IncludeOnKeys<OB extends Record<string, any>> = {
    [K in keyof OB as K extends `on_${string}` ? K : never]: OB[K];
};

export type ExcludeGetKeys<OB extends Record<string, any>> = {
    [K in keyof OB as K extends `get_${string}` ? never : K]: OB[K];
};

export type IncludeGetKeys<OB extends Record<string, any>> = {
    [K in keyof OB as K extends `get_${string}` ? K : never]: OB[K];
};

export type ExamplePaths = {
    [K in string | number | symbol]: {
        post: {
            requestBody?: {
                content: {
                    "application/json": any;
                };
            };
            responses: {
                default: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": any;
                    };
                };
            };
        };
    };
};

export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

export type ExtractBody<B extends ExamplePaths[string]["post"]["requestBody"]> =
    B extends { content: { "application/json": any } }
        ? B["content"]["application/json"]
        : never;

export type ExtractResponse<
    B extends ExamplePaths[string]["post"]["responses"]["default"],
> = B extends { content: { "application/json": any } }
    ? B["content"]["application/json"]
    : never;

export type ExtractPathWithoutSlash<T extends string | number | symbol> =
    T extends `/${infer Rest}` ? Rest : T;
