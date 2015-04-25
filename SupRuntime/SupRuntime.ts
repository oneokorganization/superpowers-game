///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../SupEngine/SupEngine.d.ts"/>

import * as SupRuntime from "./src/index";

// NOTE: We're using TypeScript syntax rather than ES6 "export default"
// because it doesn't mesh with browserify (we'd end up with SupEngine.default)
export = SupRuntime;
