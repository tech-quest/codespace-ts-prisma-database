# 学習用教材: Prisma をインストールしてみよう

アプリケーションを構築する上でデータベースは切っても切り離せない存在です。<br>
プログラムに注力しがちですが、プログラムはデータを処理してわかりやすくするだけで、<br>
根幹となるのはアプリケーションを構成するためのデータとなります。

今回は Node.js を使用した開発でよく使用される Prisma という ORM を使用してデータベースの操作を体験していきましょう。<br>
また、 Prisma を導入するにあたって Node.js の npm という機能も使用します。<br>
npm に関しては学ぶことが多く今回は割愛しますが、以下の手順にそって体験をしてみましょう。

1. データベースとは何かを調べてみよう

2. ORM とは何かを調べてみよう

3. Prisma のインストールと設定をしてみよう<br>
   `sample/01-install-and-configure-prisma` ブランチを参考に Prisma を npm でインストールしてみましょう。<br>
   以下のコマンドでインストールができます。

   ```
   npm i -D prisma
   ```

   インストールが完了したら以下のコマンドを実行することで初期状態の設定を自動でやってくれます。

   ```
   npx prisma init --datasource-provider sqlite
   ```

4. Schema を作成してデータベースにテーブルを作成しよう (migrate)<br>
   データベースはテーブルという単位でデータの塊を扱っていきます。<br>
   Prisma ではどのようなテーブルを用意するかをコードで記述して管理することができ、このコードを Schema (スキーマ) と呼びます。<br>
   `sample/02-add-schema-and-migration` ブランチを参考にスキーマを作成してみましょう！<br>
   <br>
   また、作成したスキーマを元にデータベースにテーブルを作成する作業のことを migrate (マイグレート) といいます。<br>
   package.json に migrate を実行するための記述を追加してコマンドを実行してみましょう！<br>
   テーブルを作成したら Prisma Studio という機能を使用してデータベースが作成されているかを確認することができます。<br>
   こちらも実行コマンドを package.json に作成して確認をしてみましょう。<br>
   ※ codespace 環境では Studio がうまく起動しない場合があります。その場合は確認は後回しにして先の手順にいきましょう

5. テーブルに初期データを流し込んでみよう (seeding)
   テーブルは作成しただけでは意味がありません。<br>
   users テーブルであればユーザー情報となるデータを、 profiles テーブルであればプロフィール上方となるデータをテーブルに追加する必要があります。<br>
   実際のアプリケーションではユーザー登録をした際にデータを追加するなどの処理などを通じてデータを追加していきますが、<br>
   事前にデータを投入して用意しておくことを seeding (シーディング) と呼びます。<br>
   `sample/03-seeding-records` ブランチを参考にして seeding の実行ファイルを作成し、実際に実行してみましょう！

6. Express サーバーを起動してアプリからデータを取得してみよう
   テーブルとデータの作成が完了したらアプリケーションからデータの取得を行う流れを体験してみましょう。<br>
   今回は Express というフレームワークを使用して簡単な URL を生成してデータベースの値を確認できるようにしてみます。<br>
   `sample/04-add-get-data-endpoints` を参考に実装をしてみましょう。

以上が Prisma の簡単な実装となります。<br>
今回は簡単なデータ取得や作成のみを体験していただきましたが、もちろんデータの更新や削除もできます。( CRUD 機能)<br>
データベースは学ぶことも多く、奥が深いものになります。<br>
アプリケーションの規模が大きくなっていくと非常に複雑となります。<br>
(数十、数百のテーブルが必要になる場合も…)

また、今回は Prisma という ORM を使用しましたが、<br>
ORM の数も様々ですし、データベース自体もいろいろな種類があります。

一度に覚えようとするのは難しいので、今回の体験を活かして少しずつ知識を増やしていきましょう。

## 動かし方

当アプリは Github の Codespaces 機能を使用して動作の確認や編集が行えるように設計されています。

### Codespaces とは

普段 Github にアクセスしているブラウザ上で開発が行えるサービスとなっています。  
ご自身で無料でのご利用に制限はありますが、ご自身の PC 上に開発環境を構築することなく  
アプリケーションの開発を体験することが可能となります。

詳細は下記をご参照ください。  
https://docs.github.com/ja/codespaces/overview

### Codespaces を使用してアプリを起動する手順

#### 1. 新規スペースを作成する

まずはじめに新規スペースを作成してエディタを立ち上げます。

以下画面を参考にし、当リポジトリの「Use this template」ボタンをクリックして「Open in a codespace」をクリックしてください。

<img src="./.docs/images/README-image-01.png" alt="" />
※ 画像に表示されている画面は当リポジトリではありません

以下画面に切り替わり、開発環境が自動で構築されます。

<img src="./.docs/images/README-image-02.png" alt="" />

※ 構築が完了するまで数分かかる場合があります。

#### 2. ターミナルでアプリの起動コマンドを実行する

1 でスペースの作成が完了すると、コードを編集するためのエディタが表示されます。

エディタ下部にあるターミナル画面に以下コマンドを入力してエンターキーで実行し、アプリケーションを起動してください。

```
npm run dev
```

<img src="./.docs/images/README-image-03.png" alt="" />

#### 3. 起動したアプリをブラウザで確認する

2 でアプリの起動が完了すると、右下に以下のようなポップアップが表示されますので「ブラウザーで開く」をクリックしましょう。

<img src="./.docs/images/README-image-04.png" alt="" />

上記が表示されない場合は以下の画像を参考にエディター下部の「ポート」タブから「3000」番のポートを探し、地球儀アイコンをクリックすることでも開くこともできます。

<img src="./.docs/images/README-image-05.png" alt="" />

ブラウザで開いたら下記画面が表示されれば起動成功になります！

<img src="./.docs/images/README-image-06.png" alt="" />
※ 画像に表示されている画面はアプリによって異なります
