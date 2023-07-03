# shared

Data shared between backend and frontend repos

## authentication

You will need an access token with the **`read:packages`** permission.  
You can **create a new personal access** token [**here**](https://github.com/settings/tokens).

#### 1) via npmrc file

create or edit a private **`.npmrc`** file along side your `package.json`, with the following content:
```
//npm.pkg.github.com/:_authToken={personal-access-token}
@recrowd:registry=https://npm.pkg.github.com
```

#### 2) via npm login

```
$ npm login --scope=@recrowd --auth-type=legacy --registry=https://npm.pkg.github.com

> Username: {your-username}
> Password: {personal-access-token}
```

## installation

```
$ npm i @recrowd/shared@1.0.0
```
