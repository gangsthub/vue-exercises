import { Router } from 'express';

import posts from './posts';
import emojis from './emojis';

const router = Router();

// Add USERS Routes
router.use(posts);
router.use(emojis);

export default router;
