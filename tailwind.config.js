module.exports = {
  content: ["./src/**/*.{html,js}"],
  container: {
    center: true,
    padding: '2rem'
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        dunes: "url('/src/img/MaskGroupSevenTwo.png')",
        twoImage: "url('/src/img/MaskGroupTrinaest.png')",
      }),
      gridTemplateColumns: {
        '10/40/45/5': '10% 40% 45% 5%',
        '50/50': '50% 50%',
        '30/70': '30% 70%',
        '90/10': '90% 10%',
        '100/100' : '100% 100%',
        '10/90': '10% 90%',
      },
      colors: {
        'regal-orange': '#FF9300',
        'menu-color': '#656565',
        'dropdown-color' : '#EBEFF7',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
