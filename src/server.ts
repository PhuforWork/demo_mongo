const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

// khởi tạo port
const port = process.env.PORT || 5000;
// khởi tạo express
const app = express();
// kết nối tới mongoDB

// Middleware
app.use(cors()); // Cho phép CORS (nếu làm việc với frontend từ domain khác)
app.use(morgan('dev')); // Hiển thị log chi tiết request
app.use(express.json()); // Parse JSON trong body request
app.use(express.urlencoded({ extended: true })); // Parse form-urlencoded data




//lắng nghe tại cổng được chỉ định
app.listen(port, () => {
     console.log(`server running at http://localhost:${port}`);
});
