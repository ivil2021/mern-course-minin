const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express(); //our future server

app.use(express.json({ extended: true }));

//регистрируем роуты, которые будут по-разному обрабатывать наши апи запросы с фронтенда
// app.use('/api/auth', require('./routes/auth.routes'));

const PORT = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
        });

        //run listen method for our server app
        //только после подсоединения к базе будем запускать сервер
        app.listen(PORT, () =>
            console.log(`app has been started on port ${PORT}...`)
        );
    } catch (e) {
        console.log('server error', e.message);
        process.exit(1);
    }
}

start();
