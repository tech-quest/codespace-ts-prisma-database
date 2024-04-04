import express from 'express';

import { applyServerSettings } from './settings';

const app = express();
const port = 3000;

applyServerSettings(app);

app.get('/', async (req, res) => {
  res.send('データベースを操作する処理を作成して URL をしてしてみよう');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
