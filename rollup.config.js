import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

// this override is needed because Module format cjs does not support top-level await
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("./package.json");

const globals = {
  ...packageJson.devDependencies,
};

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.module,
      format: "esm", // ES Modules
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ["**/*.stories.*"],
      },
    }),
  ],
  external: Object.keys(globals),
};
