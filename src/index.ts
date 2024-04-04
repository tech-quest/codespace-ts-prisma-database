import { PrismaClient } from '@prisma/client';
import express from 'express';

import { applyServerSettings } from './settings';

const app = express();
const port = 3000;

applyServerSettings(app);

// MEMO: Express サーバーで使用する PrismaClient を生成する
declare global {
  var __db__: PrismaClient | undefined;
}
const initPrisma = () => {
  // MEMO: ファイルを修正するたびにサーバーが再起動するため、 PrismaClient が再作成されるのを防ぐ
  const db = (global.__db__ = global.__db__ ?? new PrismaClient());
  db.$connect();
  return db;
};
const prisma = initPrisma();

app.get('/', async (req, res) => {
  res.send('データベースを操作する処理を作成して URL をしてしてみよう');
});

// MEMO: ユーザー情報を取得する URL を作成してみよう
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();

  res.json({ users: users });
});

// MEMO: プロフィール情報を取得する URL を作成してみよう
app.get('/profiles', async (req, res) => {
  const profiles = await prisma.profile.findMany();

  res.json({ users: profiles });
});

// MEMO: プロフィール付きのユーザー情報を取得してみよう
app.get('/users-with-profiles', async (req, res) => {
  const users = await prisma.user.findMany({
    include: {
      profile: true,
    },
  });

  res.json({ users: users });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
