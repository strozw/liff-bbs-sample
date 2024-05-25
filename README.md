# LIFF (LINE Front-end Framework) with Next.js in Amplify Sample

## Project Structure

```
amplify/ .... IaC

src/
  utils/
    types.ts ... utilit types

  infra/
    client/ ... Client Component の外部サービスを繋ぐ
      [slice].ts ... 提供するサービス事に定義

      async-store.tsx ... Client Component で扱う API 等の非同期の状態を共有するための store を提供

    server/ ... Server Component、Server Action、BFF API と外部サーイビスを繋ぐ
      [slice].ts ... 提供するサービス事に定義

    universal/ ... Client Component、Server Component、Server Action、BFF API と外部サーイビスを繋ぐ
      [slice].ts

  usecase/ ... ビジネスドメインを扱う処理を、Client と Server に分けて定義
    server/ ... Server Component や、Server Action、BFF API 向けに定義。 `infra/server` に依存
      [slice].ts

    client/ ... Client Component 向けに react-query で定義。`infra/client` に依存
      [slice]/
        hooks ... custom react-query hooks
        queryKeys ... react-query queryKeys.
        queryFns ... react-query queryFns.

  app/ ... Next.js App Router
    _/ ... ルーティングに
      components/ ... ビジネスドメインに依存しない機能を提供するコンポーネント

      features/ ... ビジネスドメインに依存する機能を提供するコンポーネント
        [slice]/
          schemas.ts ... この機能の Action と Component で利用する Data Schema
          actions.ts ... この機能の Component で利用する Server Action を定義する
          components.tsx ... 機能として公開する Component を export する
          components/ ... 公開しない Sub Components

      servers/ ... Next.js の Route で API を提供する Hono で実装されたサーバー
        middlewares/ ... Hono の middleware
        bff-app/ ... Backend for Frontend API
          app.ts ... server app

     app-shell.tsx ... 全体で利用する shell
```
