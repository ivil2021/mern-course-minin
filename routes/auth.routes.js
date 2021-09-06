//подключаем роутер из экспресса
const { Router } = require('express');
// bcrypt позволяет хэшировать пароли и сравнивать их
// const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = Router();

//нужно обработать 2 пост запроса
// префикс из app.use('/api/auth', require('./routes/auth.routes'));
// /api/auth будет конкатенироваться с /register
// /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        const candidate = await User.findOne({ email }); // { email: email }

        if (candidate) {
            return res
                .status(400)
                .json({ message: 'Такой пользователь уже существует' });
        }

        // если пользователя с таким имэйлом нет, регистрируем, хэшируем его пароль
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hashedPassword });

        await user.save();

        res.status(201).json({ message: 'Пользователь создан' });
    } catch (e) {
        res.status(500).json({
            message: 'Что-то пошло не так, попробуйте снова',
        });
    }
});

// /api/auth/login
router.post('/login', async (req, res) => {});

module.exports = router;
