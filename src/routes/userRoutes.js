const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userControllers');
const { protect } = require('../middlewares/authMiddleware');


// Định nghĩa route
router.get('/', getUsers);
router.post('/', createUser);

// check auth
router.get('/private', protect, (req, res) => {
     res.json({ message: 'Đây là thông tin bảo mật' });
});

module.exports = router;