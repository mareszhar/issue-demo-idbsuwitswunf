# Demo of TypeScript Warnings when using @dorilama/instantdb-vue with Nuxt 4

This demo is a reproduction of [Dorilama's Nuxt sandbox](https://github.com/Dorilama/instantdb-vue/tree/main/sandbox/nuxt) (there are a few minor formatting differences, but the setup is essentially the same).

The repo has two branches: `main` (which uses Nuxt 4 and leads to the warnings) and `nuxt-3` (which uses Nuxt 3 and does not lead to the warnings).

Both branches have the exact same code, only one uses the new Nuxt 4 folder stucture and the other doesn't.

## Warnings in Nuxt 4

![Same setup shows warnings in Nuxt 4](./public/nuxt-4.png)

## No warnings in Nuxt 3

![No warnings in Nuxt 3](./public/nuxt-3.png)

---

## Note

To see the warnings in your IDE, you may need to refresh the generated types by stopping and restarting the dev server, especially after switching branches.

---

## Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

---

## UPDATE: Solution Available

### Solution:

Make sure your `tsconfig.json` includes this setting:

```ts
"compilerOptions": {
    "noUncheckedIndexedAccess": false
}
```

### Partial Solution 2 Notice:

Alternatively, you can also define an explicit schema in the new `instant.schema.ts` file, and include it in your Instant initializer:

```ts
init({
    appId: useRuntimeConfig().public.instantAppId,
    schema,
    // more settings can go here
})
```

This sometimes solves the intellisense warnings in the IDE. But, if you're using [vitesse-nuxt](https://github.com/antfu/vitesse-nuxt) or any of its variants,
the typecheck script `"typecheck": "vue-tsc --noEmit"` will still fail. 

For that reason, it's better to keep the `"noUncheckedIndexedAccess": false` rule in your `tsconfig.json` even if you're using the new `instant.schema.ts` file 
and its `schema` export to type your Instant instance. 

Either way, the new `instant.schema.ts` setup does offer better intellisense, so it's a good idea to use it, specially as you settle on a schema.

Refer to the new [Modeling Data](https://www.instantdb.com/docs/modeling-data) chapter in Instant's docs for more details.
