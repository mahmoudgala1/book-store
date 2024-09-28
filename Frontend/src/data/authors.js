export const authors = [
  
  {
    id: 1,
    name: "Robert Kiyosaki",
    image: "/authors/kiyosaki.jpg",
  },
  {
    id: 2,
    name: "James Clear",
    image: "/authors/james.jpg",
  },
  {
    id: 3,
    name: "Colleen Hoover",
    image: "/authors/hoover.jpg",
  },
  {
    id: 4,
    name: "Sajni Patel",
    image: "/authors/patel.jpg",
  },
  {
    id: 5,
    name: "Taylor Jenkins Reid",
    image: "/authors/reid.jpg",
  },
  {
    id: 6,
    name: "Napolen Hill",
    image: "/authors/hill.jpg",
  },

  {
  id: 7,
  name: "Juliette Aristides",
  image: "/authors/j.jpg",
  }

].sort((a, b) => (a.name > b.name ? 1 : -1));
