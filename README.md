# node-env-type

Easy detection of NodeJS environment type from `NODE_ENV` variable.

This library is 100% compatible with the standard `development`/`test`/`production` approach,
with a friendlier interface, while also supporting a more verbose syntax, to allow for
a flexible environment configuration.

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

if(env.isProd) {
 // this is a PROD environment
}
```

## Environment Flags

Table below explains available flags and when they are set.

| Flag     |      Environment           |  Condition |
|:--------:|:--------------------------:|:-----------|
| `isDev`  | Development                | `NODE_ENV` includes `dev` (case-insensitive) |
| `isUAT`  | User Acceptance Testing    | `NODE_ENV` includes `uat` (case-insensitive) |
| `isSIT`  | System Integration Testing | `NODE_ENV` includes `sit` (case-insensitive) |
| `isCI`   | Continuous Integration     | `NODE_ENV` includes `ci` (case-insensitive)  |
| `isTest` | General Testing            | `NODE_ENV` includes any of: `test`, `tst`, `uat`, `sit`, `ci` (case-insensitive)|
| `isProd` | Production                 | `NODE_ENV` includes `prod` (case-insensitive), or not set at all. |

Flags are tested in the order as shown in the table, to use only the first one found, in case there's a conflict.

#### Special Cases

* `isTest` - set not only when `NODE_ENV` includes `test` or `tst`, but also when `isUAT`, `isSIT` or `isCI`
  is set, because all those environments are essentially for testing.
* `isProd` - set not only when `NODE_ENV` includes `prod`, but also when `NODE_ENV` is not set at all,
  i.e. when environment is not configured, we should assume it to be production.
* When `NODE_ENV` is set to something we cannot recognize at all, each flag is set to `false`.    

## API

The only API available other than the environment flags is function `refresh`, in case you want
to refresh flags from the environment without restarting the process.

```ts
import {env} from 'node-env-type';

if(env.refresh()) {
    // successfully recognized the environment;
    // each flag updated from NODE_ENV
} else {
    // failed to recognize the environment;
    // each flag is set to false
} 
```

And if, for some reasons, you decide to read configuration from a different place, rather than
the standard `NODE_ENV`, you can pass such optional string to the function:

```ts
const otherVar = 'dev1.pc'; // just some other value

if(env.refresh(otherVar)) {
    // successfully recognized the environment;
    // each flag updated from otherVar
} else {
    // failed to recognize the environment;
    // each flag is set to false
} 
```
