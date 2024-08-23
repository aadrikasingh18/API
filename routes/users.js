import express from 'express';
import { getUsers, createUsers, singleUser, deleteUser, updateUser } from '../controller/routefunc.js';

const router = express.Router();

// all routes in there are starting with /users
router.get('/', getUsers);

router.post('/', createUsers);

router.get('/:id', singleUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;