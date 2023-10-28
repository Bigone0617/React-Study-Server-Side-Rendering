"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const express_1 = __importDefault(require("express"));
const React = __importStar(require("react"));
const ReactDOMServer = __importStar(require("react-dom/server"));
const App_1 = __importDefault(require("./App"));
const server_1 = require("react-router-dom/server");
const app = (0, express_1.default)();
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
    const context = {};
    const ReactApp = ReactDOMServer.renderToString(React.createElement(server_1.StaticRouter, { location: req.url }, React.createElement(App_1.default)));
    if (context.url) {
        res.redirect(301, '/');
    }
    else {
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
//# sourceMappingURL=server.js.map