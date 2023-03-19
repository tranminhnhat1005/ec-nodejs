const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// init middleware
app.use(morgan('dev'));                 // GET / 500 3.911 ms - 27
// app.use(morgan('tiny'));             // GET / 500 27 - 3.797 ms
// app.use(morgan('combined'));         // ::ffff:127.0.0.1 - - [19/Mar/2023:09:27:36 +0000] "GET / HTTP/1.1" 500 27 "-" "curl/7.87.0"
// app.use(morgan('common'));           // ::ffff:127.0.0.1 - - [19/Mar/2023:09:31:35 +0000] "GET / HTTP/1.1" 500 27
// app.use(morgan('short'));            // ::ffff:127.0.0.1 - GET / HTTP/1.1 500 27 - 3.995 ms

app.use(helmet());

app.use(compression());

// init db


// init routes
app.get('/', (req, res, next) => {
    const strCompress = 'Hello boys!';
    return res.status(200).json({
        message: 'Welcome boys!',
        metadata: strCompress.repeat(10000),
    });
});

// handle errors

module.exports = app;