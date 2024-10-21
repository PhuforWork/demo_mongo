require('dotenv').config();  // Load biến môi trường từ file .env
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');

const app = express();

// Kết nối Database
connectDB();

const { errorHandler } = require('./middlewares/errorMiddleware');
// Middleware
app.use(morgan('dev')); // Log request
app.use(express.json()); // Parse JSON

// Import routes
const userRoutes = require('./routes/userRoutes');

// Sử dụng các route
app.use('/api/users', userRoutes);

// middleware xử lý lỗi
app.use(errorHandler);

// Cấu hình port
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});