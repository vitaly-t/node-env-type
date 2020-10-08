# node-env-type
Verifies NodeJS environment

# install

```
r$ npm i node-env-type
```

* In JavaScript

```js
const {env} = require('node-env-type');

if(env.isDev) {

}
```

# Environment Flags

| Flag   |      Environment           |  Condition |
|--------|:--------------------------:|-----------:|
| isDev  | Development                | `NODE-ENV` contains `dev` (can-insensitive) |
| isUAT  | User Acceptance Testing    | `NODE-ENV` contains `uat` (can-insensitive) |
| isSIT  | System Integration Testing | `NODE-ENV` contains `sit` (can-insensitive) |
| isCI   | Continuous Integration     | `NODE-ENV` contains `ci` (can-insensitive)  |
| isTest | General Testing            | `NODE-ENV` contains any of the following (can-insensitive): `test`, `tst`, `uat`, `sit`, `ci`|
| isProd | Production                 | `NODE-ENV` contains `prod` (can-insensitive), or `NODE-ENV` is not set at all |
