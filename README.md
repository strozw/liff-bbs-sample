# LIFF (LINE Front-end Framework) with Next.js in Amplify Sample

## Project Structure

```
amplify/ .... Infrastructure Code

app/ ... Frontend by Next.js App Router
  _lib/
    adapters/ ... External service's adapter for Next.js App

    components/ ... Generic components with no interest in the business domain

    interactors/ ... Use case function for business domain
      client/ ...
        [slice]/
          hooks ... custom react-query hooks
          queryKeys ... react-query queryKeys.
          queryFns ... react-query queryFns.

      server/
        [slice].ts

    features/ ... Components and other utilities related to the business domain
      [slice]/
        actions.ts ... server actions
        components.tsx
        components/ ... sub components
        schemas.ts ... schema for components & server actions

    server/
      bff/ ... Backend for Frontend API by Hono in Next.js route handler
        app.ts ... server app

    store/
      client/
        api.ts ... store for client side api cache

    utils/
      types.ts ... utilit types
```
