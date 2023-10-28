import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import express from 'express';

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import App from './App';

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
    console.log(req.url);
    const html = path.join(__dirname, '../build/index.html');
    const htmlData = fs.readFileSync(html).toString();


    // App.tsx에 child 전달하기
    const ReactApp = ReactDOMServer.renderToString(React.createElement(App, {}, req.url));
    // root 밖에 요소를 그리도록 하기 : root안에서 그리고 check-sum이 같아 server side에서 렌더한 부분이 csr에 의해 덥어 써짐.
    const renderedHtml = htmlData.replace('<div id="root">{{SSR}}</div>', `<div id="root">${ReactApp}</div><script id="initial-data" type="text/plain" data-json="${req.url}"></script>`);
    res.status(200).send(renderedHtml);
});

server.listen(3000);

/**
 * yarn serve하면 app.css와 logo.svg에서 에러가 남
 * 1. app.css는 app.tsx에서 제거하고 index.tsx에 import함
 * 2. logo.svg는 src -> public으로 옮기고, server.ts에서 static파일 리스트에 추가해줌
 */