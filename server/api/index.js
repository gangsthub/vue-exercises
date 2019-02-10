import { Router } from 'express';

import posts from './posts';
import emojis from './emojis';

const router = Router();

// Add USERS Routes
router.use(posts);
router.use(emojis);

router.get('/', function (_req, res) {
  return res.status(200).send('It works')
});

export default router;
