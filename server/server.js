const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '..', 'dist');
const staticPath = path.join(__dirname, '..', 'dist', 'static');


const security = {
    use: true,
    headers: {
        "Content-Security-Policy": "default-src 'self'; frame-ancestors 'none'; img-src 'self' data:; style-src 'self'; font-src 'self' data:",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "deny",
        "X-XSS-Protection": "1; mode=block",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
        "Cache-Control": "no-cache"
    }
};

const appendSecurityHeadersIfNeeded = (security = {}, response) => {
    if (!security.use) {
        return;
    }

    const {headers = {}} = security;

    Object.keys(headers).map((key) => {
        response.setHeader(key, headers[key]);
    });
};

app.use("/static", express.static(staticPath, {
    fallthrough: false,
    setHeaders: function (res, path) {
        appendSecurityHeadersIfNeeded(security, res);
    }
}));

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    appendSecurityHeadersIfNeeded(security, res);
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up! Port ${port}, pid ${process.pid}`);
});