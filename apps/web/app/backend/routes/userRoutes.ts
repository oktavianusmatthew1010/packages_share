const express = require('express');
const { updateUserData, fetchUserData } = require('../controller/api');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.put('/user/:id', authMiddleware, updateUserData);
router.get('/user/:id', authMiddleware, fetchUserData);

module.exports = router;

// Directory: core/app.ts
const express = require('express');
const userRoutes = require('../routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/api', userRoutes);

module.exports = app;