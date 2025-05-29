import dts from "bun-plugin-dts";

await Bun.build({
    entrypoints: ["./client/index.ts"],
    outdir: "./dist/client",
    splitting: true,
    format: "esm",
    minify: false,
    target: "browser",
    packages: "bundle",
    external: ["openapi-fetch"],
    plugins: [
        dts({
            libraries: {
                allowedTypesLibraries: ["../type"],
            },
            output: {
                // exportReferencedTypes: true,
                noBanner: true,
            },
        }),
    ],
});

await Bun.build({
    entrypoints: [
        "./server/hono.ts",
        "./server/express.ts",
        "./server/next.ts",
    ],
    outdir: "./dist/server",
    packages: "external",
    splitting: true,
    format: "esm",
    target: "node",
    minify: false,
    external: ["hono", "express", "next", "openapi-fetch"],
    plugins: [
        dts({
            compilationOptions: {
                preferredConfigPath: "./tsconfig.json",
            },
            libraries: {
                allowedTypesLibraries: ["../type"],
            },
            output: {
                exportReferencedTypes: true,
                noBanner: true,
            },
        }),
    ],
});
