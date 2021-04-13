const shell = require('shelljs');
const {join} = require('path');

const root = join(__dirname, '..');
const path = {
    bin: join(root, 'node_modules', '.bin'),
    config: join(root, 'config', 'webpack.production.js')
}

shell.cd(root);

shell.rm('-rf', `dist`);
shell.exec(`${path.bin}/webpack --config=${path.config}`);