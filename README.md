# LIFF (LINE Front-end Framework) with Next.js in Amplify Sample

## 方針

- ファイルとディレクトリの名称は kebab-case にする
- `index.ts` や `index.tsx` は作らない明示的な名前をつける
- 各レイヤーに公開するモジュールは `[slice].ts` あるいは、`[slicel]/` の一階層目に定義する
- 外部から参照できるのは各 `[slice]` の一階層目のファイルのみ

## ディレクトリ構成

```
amplify/ .... IaC

src/
  utils/ ... 環境に依存せず利用できる関数や、型を定義するレイヤー
    types.ts ... utilit types

  domain/ ... ドメインオブジェクトや、その型を定義するレイヤー
    [slice].ts

  infra/ ... 外部リソースへの操作を定義するレイヤー
    client/ ... Client Component の外部サービスを繋ぐ
      [slice].ts ... 提供するサービス事に定義

    server/ ... Server Component、Server Action、BFF API と外部サーイビスを繋ぐ
      [slice].ts ... 提供するサービス事に定義

    universal/ ... Client Component、Server Component、Server Action、BFF API と外部サーイビスを繋ぐ
      [slice].ts

  usecase/ ... ビジネスロジックを定義するレイヤー
    server/ ... Server Component や、Server Action、BFF API 向けに定義。 `infra/server` に依存
      [slice].ts

    client/ ... Client Component 向けに react-query で定義。`infra/client` に依存
      [slice]/
        hooks ... custom react-query hooks
        queryKeys ... react-query queryKeys.
        queryFns ... react-query queryFns.

  app/ ... アプリケーションレイヤー (View & Controller)
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
