import { Router } from "express";
import {users, projects, payments} from '../db.js';

const router = Router();

router.get('/users', (req, res) => {
  res.json(users);
})

router.get('/projects', (req, res) => {
  res.json(projects);
})

router.get('/payments', (req, res) => {
  res.json(payments);
})

export default router;