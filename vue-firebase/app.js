const app = Vue.createApp({
  data() {
    return {
      url: "https://www.thenetninja.co.uk",
      chowBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
      x: 0,
      y: 0,
      showFav: true,
    }
  },
  methods: {
    toggleShowBooks() {
      this.chowBooks = !this.chowBooks
    },

    handleEvent(e) {},

    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },

    handleFav(book) {
      book.isFav = !book.isFav
    },

    handleShowFav() {
      this.showFav = !this.showFav
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    },
  },
})

app.mount("#app")
