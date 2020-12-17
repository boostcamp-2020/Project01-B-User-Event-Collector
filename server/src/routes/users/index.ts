import express from 'express';
import * as userController from './users.controller';
import { authenticateJWT } from '../../middlewares/auth';

const router = express.Router();

router.get('/', authenticateJWT, userController.getLoginedUser);
router.post('/join', authenticateJWT, userController.joinUser);

export default router;
