import express from 'express';
import { serviceName } from '../config/constantConfig.js';

var router = express.Router();

router.get(`/api/${serviceName}/health-check`, (req, res) => {
    res.json({ message:"Health check success" }).status(200)
})

export { router }