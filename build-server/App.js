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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home = () => {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Home"),
        React.createElement("p", null,
            React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
        React.createElement("p", null,
            React.createElement(react_router_dom_1.Link, { to: "/hello" }, "Hello")),
        React.createElement("p", null,
            React.createElement(react_router_dom_1.Link, { to: "/hi" }, "Hi"))));
};
const Hello = () => {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Hello"),
        React.createElement("p", null,
            React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
        React.createElement("p", null,
            React.createElement(react_router_dom_1.Link, { to: "/hello" }, "Hello")),
        React.createElement("p", null,
            React.createElement(react_router_dom_1.Link, { to: "/hi" }, "Hi"))));
};
class App extends React.Component {
    render() {
        return (React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Home, null) }),
            React.createElement(react_router_dom_1.Route, { path: "/hello", element: React.createElement(Hello, null) }),
            React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(react_router_dom_1.Navigate, { to: "/" }) })));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map