This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## PWA

PWA online works on production mode only. To test it locally, you need to build the app first:

```bash
yarn build && yarn start
```

The iOS devices won't accept the PWA installation if the app is not served over HTTPS.

### Routing

Cannot simply use `IonReactRouter` because it doesn't work with `next-pwa`.
The page routed by `IonReactRouter` won't be cached. But using `next/router` will cause the page to be reloaded thus missing transitions when the user navigates to the page.

I use fallback page to mitigate this issue. The fallback page contains the whole app page.
Offline page will be loaded to Browser's cache after the first request with network. So please request any single page after clean the cache.

See `src/pages/_offline.tsx` for more details.

### Page cache

Clear PWA page cache by clear the CacheStorage of browser.

```js
caches.keys().then(function(names) {
    for (let name of names)
        caches.delete(name);
});
```

## Ionic

DO NOT use `IonPage` on modal page, it will mess up the tab transition. The `ion-page-hidden` class of tab which opened the modal will be wrong.

Ionic nav feature is not going to work on Tabs or Modal page. It will mess `ion-page-hidden` class.
