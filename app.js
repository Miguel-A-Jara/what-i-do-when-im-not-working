const express = require('express');
const app = express();

const todoRoutes = require('./routes/todoRoutes');

app.use(express.json());

/* Routes */
app.use('/todos', todoRoutes);

module.exports = app;