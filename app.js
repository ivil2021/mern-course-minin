// console.log('app');

const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express(); //наш будущий сервер

const PORT = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnfiedTopology: true,
            useCreateIndex: true,
        });

        //у этого сервера вызываем метод листен
        app.listen(PORT, () =>
            console.log(`app has been startted on port ${PORT}...`)
        );
    } catch (e) {
        console.log('server error', e.message);
        process.exit(1);
    }
}

start();
