var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        app: path.join('./app.js'),
        about: path.join('./about/about.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
};