const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Cible arbitraire, pas utilisée ici pour servir le HTML
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname), // 👈 Sert les fichiers HTML depuis la racine
    },
    port: 8080,
    open: true,
  },
};
