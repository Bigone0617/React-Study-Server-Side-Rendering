import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import express from 'express';

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import App from './App';
import { StaticRouter } from 'react-router-dom/server';

const app = express();

const server = http.createServer(app);

const staticFiles = [
    '/static/*',
    '/asset-manifest.json',
    '/manifest.json',
    '/service-worker.js',
    '/favicon.ico',
    '/logo.svg'
];

staticFiles.forEach(file => {
    app.get(file, (req, res) => {
        const filePath = path.join(__dirname, '../build', req.url);
        console.log(filePath);
        res.sendFile(filePath);
    });
});

app.get('*', (req, res) => {
    const html = path.join(__dirname, '../build/index.html');
    const htmlData = fs.readFileSync(html).toString();

    const context: {url?: string}  = {};

    const ReactApp = ReactDOMServer.renderToString(
        React.createElement(
            StaticRouter,
            {location: req.url},
            React.createElement(App)
        )
    );
    
    if (context.url) {
        res.redirect(301, '/');
    } else {
        const renderedHtml = htmlData.replace('{{SSR}}', ReactApp);
        res.status(200).send(renderedHtml);
    }
});

server.listen(3000);

/**
 * yarn serve하면 app.css와 logo.svg에서 에러가 남
 * 1. app.css는 app.tsx에서 제거하고 index.tsx에 import함
 * 2. logo.svg는 src -> public으로 옮기고, server.ts에서 static파일 리스트에 추가해줌
 */