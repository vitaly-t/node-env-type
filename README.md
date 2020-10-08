# node-env-type

Consistent and reliable approach to detecting NodeJS environment type,
based on the value of `NODE_ENV` variable.

## Installing

```
$ npm i node-env-type
```

## Usage

* In TypeScript:

```ts
import {env} from 'node-env-type';

if(env.isDev) {
 // this is a DEV environment
}
```

* In JavaScript:

```ts
const {env} = require('node-env-type');

if(env.isDev) {
 // this is a DEV environment
}
```

## Environment Flags

Table below explains available flags and when they are set.

| Flag   |      Environment           |  Condition |
|:------:|:--------------------------:|:-----------|
| isDev  | Development                | `NODE-ENV` contains `dev` (can-insensitive) |
| isUAT  | User Acceptance Testing    | `NODE-ENV` contains `uat` (can-insensitive) |
| isSIT  | System Integration Testing | `NODE-ENV` contains `sit` (can-insensitive) |
| isCI   | Continuous Integration     | `NODE-ENV` contains `ci` (can-insensitive)  |
| isTest | General Testing            | `NODE-ENV` contains any of: `test`, `tst`, `uat`, `sit`, `ci` (can-insensitive)|
| isProd | Production                 | `NODE-ENV` contains `prod` (can-insensitive), or not set at all. |

The only special cases from the above are:

* `isTest`, which is set not only when `NODE_ENV` contains `test` or `tst`, but also when `isUAT`, `isSIT` or `isCI`
  is set, because all those environments are for testing.
* `isProd`, which is set not only when `NODE_ENV` contains `prod`, but also when `NODE_ENV` is not set at all,
  i.e. when environment is not configured, we should assume it to be production.  

# API

The only API available other than the environment flags is function `refresh`, in case you want
to refresh flags from the environment without restarting the process.

```ts
const {env} = require('node-env-type');

env.refresh(); // refresh status of all flags from the environment
```
