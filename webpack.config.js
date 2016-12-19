var path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'app.js'),
        about: path.join(__dirname, 'src', 'about', 'about.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
};