require('dotenv').config();

const app = require('./app');

const port = process.env.NODE_PORT || 3000;
const host = process.env.NODE_HOST || 'localhost';

app.listen(port, () => {
    console.log(`server is running on ${host}:${port}`);
});
