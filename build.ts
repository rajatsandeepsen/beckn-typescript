import dts from "bun-plugin-dts";
import isolatedDecl from "bun-plugin-isolated-decl";

await Bun.build({
    entrypoints: ["./client/index.ts"],
    outdir: "./dist/client",
    splitting: true,
    format: "esm",
    minify: true,
    target: "browser",
    packages: "bundle",
    external: ["openapi-fetch"],
    plugins: [
        dts({
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
            output: {
                // exportReferencedTypes: true,
                noBanner: true,
            },
        }),
        // isolatedDecl({
        //     forceGenerate: true,
        // }),
    ],
});
