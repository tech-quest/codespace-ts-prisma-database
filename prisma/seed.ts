import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// MEMO: users テーブルに値を設定する
const createUsers = async () => {
  // MEMO: 単体の値を追加する場合は create を使用
  await prisma.user.create({
    data: {
      id: 'user-00001',
      name: 'テストユーザー1',
      email: 'test1@example.com',
    },
  });

  // MEMO: 複数の値を追加する場合は createMany を使用
  await prisma.user.createMany({
    data: [
      {
        id: 'user-00002',
        name: 'テストユーザー2',
        email: 'test2@example.com',
      },
      {
        id: 'user-00003',
        name: 'テストユーザー3',
        email: 'test3@example.com',
      },
      {
        id: 'user-00004',
        name: 'テストユーザー4',
        email: 'test4@example.com',
      },
    ],
  });
};

// MEMO: profiles テーブルに値を設定する
const createProfiles = async () => {
  // MEMO: 関連するユーザーIDを指定して値を追加する
  await prisma.profile.create({
    data: {
      id: 'profile-00001',
      bio: 'テストユーザー1です。よろしくお願いします',
      userId: 'user-00001',
    },
  });

  await prisma.profile.createMany({
    data: [
      {
        id: 'profile-00002',
        bio: 'テストユーザー2です。よろしくお願いします',
        userId: 'user-00002',
      },
      {
        id: 'profile-00003',
        bio: 'テストユーザー1です。よろしくお願いします',
        userId: 'user-00003',
      },
      {
        id: 'profile-00004',
        bio: 'テストユーザー1です。よろしくお願いします',
        userId: 'user-00004',
      },
    ],
  });
};

const seed = async () => {
  await createUsers();
  await createProfiles();

  console.log('Seed complete');
  process.exit(0);
};

seed();
