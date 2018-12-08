// Базовые пакеты
const express = require('express');

// Роуты
const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');

// Вспомогательные плагины
const bodyParser = require('body-parser');
const cors = require('cors'); // Для обработки запросов с других доменов
const morgan = require('morgan'); // Для логирования работы сервера



const app = express();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);

module.exports = app;