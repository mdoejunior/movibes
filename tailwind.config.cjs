module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        "hover-color":"#1EA49EFF",
        "bghover":'#2c6865',
        "background":'#5b5454',
        "button-color":'#50515d',
        "gold":'#e6bc1a',
      },
    },
  },
  plugins: [],
};
