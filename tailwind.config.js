module.exports = {
  content: [
    "./index.html",
    "./src/components/*",
    "./src/pages/*",
    "./src/App.vue",
    "./src/main.js",
  ],
  theme: {
    extend: {
      colors: {
        "danby-yellow": "#cd9a3c",
      },
    },
    listStyleType: {
      square: 'square',
      circle: 'circle',
      disc: 'disc'
    }
  },
  plugins: [],
};
