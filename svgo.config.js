// svgo.config.js
module.exports = {
    multipass: true,
    plugins: [
        'preset-default',
        'cleanupAttrs',
        'cleanupListOfValues',
        'convertStyleToAttrs',
        'removeDimensions',
        'removeOffCanvasPaths',
        'removeScriptElement',
        'removeStyleElement',
        'reusePaths',
        {
            name: 'sortAttrs',
            params: {
                xmlnsOrder: 'alphabetical'
            }
        }
    ]
};
