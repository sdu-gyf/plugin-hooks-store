"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugin = ({ onGetWebpackConfig }) => {
    onGetWebpackConfig((config) => {
        config.mode('production');
    });
};
exports.default = plugin;
