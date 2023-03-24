- [NestJSのアーキテクチャ](#nestjsのアーキテクチャ)
- [@Moduleデコレータのプロパティ](#moduleデコレータのプロパティ)
- [DTO を使うメリット](#dto-を使うメリット)
- [NestJS でバリデーション](#nestjs-でバリデーション)
- [ORM](#orm)
  - [TypeORM](#typeorm)

## NestJSのアーキテクチャ
- エントリーポイントは`main.ts`
- ルートモジュールは`app.module.ts`
  - ここでインジェクションされたmoduleがアプリとして利用可能になる
- `app.module`に自前で実装したmoduleを登録してくことになる

## @Moduleデコレータのプロパティ
- providers: `@Injectable`がついたクラスを書く
- controllers: `@Controller`がついたクラスを書く
- imports: モジュール内部で必要な外部モジュールを書く
- exports: 外部のモジュールにexportしたいものを書く

## DTO を使うメリット
- メンテナンス性の向上
  - データの内容や型などが修正になっても、修正箇所を DTO 内に閉じ込める
- 安全性の向上
  - やりとりするデータを DTO に制限
- NestJS のバリデーション機能が利用可能
  - 型チェックのみならず複雑なバリデーションが可能
- `@Body` のパラメータをまとめて受け取り可能
  - パラメータと DTO のフィールドが一致させる必要はある
  - `@Body() createItemDto: CreateItemDto`

## NestJS でバリデーション
- Pipe を使う
  - ハンドラーがリクエストを受け取る前にリクエストに対して処理を実行
  - データの変換とバリデーションが可能
  - Pipe の処理中に例外を返すことも可能
- 適用方法
  - ハンドラー
    - ハンドラー全体に Pipe を設定
  - パラメータ
    - パラメータ単位でそれぞれ Pipe を設定
  - グローバル
    - app に Pipe を設定

## ORM
- オブジェクト指向の言語と RDB の非互換なデータをマッピング
  - オブジェクト指向は「現実世界の物事に即したデータモデル」
  - RDB は「検索など RDB としての役割を果たすために最適化されたモデル」

### TypeORM
- Entity
  - RDB のテーブルと対応するオブジェクト
  - `@Entity` デコレータをつけたクラスとして定義
  - `@PrimaryGeneratedColumn`デコレータや`@Column`デコレータがついたプロパティが RDB の Column とマッピングされる
- Repository
  - Entity を管理するためのオブジェクト
  - Entity と Repository が 1 対 1 となり DB 操作を抽象化する
  - クラスに `@EntityRepository()`デコレータを付けて Repository を継承する
