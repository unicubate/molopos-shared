# Documenting statuses and categories

From now on we'll use [`@recrowd/shared`](https://github.com/Recrowd/shared) for documenting statuses and types/categories.

### creating a new status

Create an enum with the name of your new status, in [this file](https://github.com/Recrowd/shared/edit/main/src/enum/index.ts)

```ts
export enum MyStatus {
    // This is my optional status description
    Created = 0,
    Pending = 1,
    Success = 2, // optional field description
};
```

Use `PascalCasing` for both the name of the enum and its properties.  
Use only `//` for comments inside your enum.  
Awlays explicit the enum value, with `=`  

### documenting the newly created status

Run `npm run docs` to **automatically** generate the documentation [readme](https://github.com/Recrowd/shared/edit/main/src/enum/README.md) file, it will look like this:

<blockquote>

## My Status
This is my optional status description
<table>
  <tr>
    <td>Created</td>
    <td>0</td>
  </tr>
    <tr>
    <td>Pending</td>
    <td>1</td>
  </tr>
    <tr>
    <td>Success (optional field description)</td>
    <td>2</td>
  </tr>
</table>
</blockquote>

# Removing magic numbers from code

Other than for documentation purposes, this initiative aims to remove magic numbers from code,
making it cosiderably more readable and testable.

Some refactory examples:

<table>
<tr></tr>
<tr>
  <td>
    
  
```ts
const identityDocuments = ["0", "3", "4", "11"];
```

</td><td>

```ts
import { DocumentType } from "@recrowd/shared";

const identityDocuments = [
    DocumentType.IdentityCard,
    DocumentType.PassportEU,
    DocumentType.PassportExtraEU,
    DocumentType.DrivingLicense,
];
```

</td>
</tr>
<tr></tr>
<tr>
  <td>
  
```ts
if (
    status === "CROWDFUNDING"
    || status === "COMING_SOON"
) {
    // ...
}
```

</td><td>

```ts
import { ProjectStatus } from "@recrowd/shared";

if (
    status === ProjectStatus.Crowdfunding
    || status === ProjectStatus.ComingSoon
) {
    // ...
}
```

</td>
</tr>
<tr></tr>
<tr>
  <td>
  
```ts
await client.user.findMany({
    where: {
        wallet: {
            status: "6",
        }
    }
});
```

</td><td>

```ts
import { WalletStatus } from "@recrowd/shared";

await client.user.findMany({
    where: {
        wallet: {
            status: WalletStatus.Valid,
        }
    }
});
```

</td>
</tr>
</table>
