# shared

A package shared between backend and frontend repos


## Installation

```
npm i @recrowd/fe@latest
```

> [!NOTE]
> To install this package you must be authenticated to npm

### Authentication

Create a
[_personal access token_](https://github.com/settings/tokens/new)
with the `read:packages` permission, then follow one of these
methods:

#### 1. via npmrc file

Create or edit a private **`.npmrc`** file along side your
`package.json`, with the following content:

```
//npm.pkg.github.com/:_authToken={personal-access-token}
@recrowd:registry=https://npm.pkg.github.com
```

#### 2. or via npm login

```
$ npm login --scope=@recrowd --auth-type=legacy --registry=https://npm.pkg.github.com
> Username: {username}
> Password: {personal-access-token}
```
