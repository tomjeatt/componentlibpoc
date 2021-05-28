declare namespace _default {
    const input: string;
    const output: {
        file: any;
        format: string;
    }[];
    const plugins: (import("rollup-plugin-peer-deps-external/node_modules/rollup").Plugin | import("rollup").Plugin)[];
    const external: string[];
}
export default _default;
