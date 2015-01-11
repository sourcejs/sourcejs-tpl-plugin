'use strict';

define([
    'jquery',
    'sourceModules/module',
    'sourceModules/css'
], function ($, module, css) {
    var moduleCss = new css('/node_modules/sourcejs-tpl-plugin/assets/css/tpl-plugin.css');

    // Plugin constructor
    function PluginName() {
    }

    PluginName.prototype = module.createInstance();
    PluginName.prototype.constructor = PluginName;

    PluginName.prototype.method = function () {
    };

    return new PluginName();
});