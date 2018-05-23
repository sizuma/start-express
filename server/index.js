require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.use('/public/', express.static(path.resolve(__dirname, '..', 'public')));

app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.set('views', path.resolve(__dirname, '..', 'views'));
app.set('view engine', 'ejs');
app.locals.pretty = true;

const router = require('./router/index');

app.use('/', router);

const port = process.env.NODE_PORT || 3000;
const host = process.env.NODE_HOST || 'localhost';

app.listen(port, () => {
    console.log(`server is running on ${host}:${port}`);
});
