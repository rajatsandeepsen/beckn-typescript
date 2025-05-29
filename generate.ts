import openapiTS, { astToString } from "openapi-typescript";

for (const paths of ["meta", "transaction", "registry"]) {
    const url = new URL(
        `./protocol-specifications/api/${paths}/components/index.yaml`,
        import.meta.url,
    );

    const ast = await openapiTS(url, {
        inject: "export default paths;",
        exportType: true,
    });
    const contents = astToString(ast);

    await Bun.file(`./type/${paths}.d.ts`).write(contents);
    await Bun.file(`./dist/type/${paths}.d.ts`).write(contents);
}

const typeIntex = await Bun.file("./type/index.ts").text();
await Bun.file("./dist/type/index.d.ts").write(typeIntex);
