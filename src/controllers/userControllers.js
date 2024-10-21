const User = require('../models/userModel');

// Lấy danh sách người dùng
exports.getUsers = async (req, res) => {
     try {
          const users = await User.find();
          res.json(users);
     } catch (error) {
          res.status(500).json({ message: error.message });
     }
};

// Tạo người dùng mới
exports.createUser = async (req, res) => {
     const { name, email, phone } = req.body;

     // Kiểm tra nếu người dùng đã tồn tại
     const userExists = await User.findOne({ email });
     if (userExists) {
          return res.status(400).json({ message: 'Người dùng đã tồn tại' });
     }
     //Kiểm tra bị trùng sđt
     const userPhoneExists = await User.findOne({ phone });
     if (userPhoneExists) {
          return res.status(400).json({ message: 'số điện thoại bị trùng' });
     }
     // Tạo người dùng mới
     const user = new User({
          name,
          email,
          phone,
     });

     try {
          const savedUser = await user.save();
          res.status(201).json(savedUser);
     } catch (error) {
          res.status(400).json({ message: error.message });
     }
};