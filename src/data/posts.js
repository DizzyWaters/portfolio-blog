export const posts = [
  {
    id: 1,
    title: "Learning React Components",
    category: "React",
    excerpt: "My first experience with React and reusable components.",
    content: `
      React is a JavaScript library used to build user interfaces.

      One important concept in React is component-based
      architecture. Instead of writing an entire website
      in one HTML file, we divide it into smaller components.

      Components make our code easier to maintain and reuse.
      In my portfolio project, I created separate components
      for the header, projects, blog, and contact sections.
    `
  },

  {
    id: 2,
    title: "Understanding Git Branches",
    category: "Git",
    excerpt: "Why Git branches are useful in software development.",
    content: `
      Git branches allow developers to work on different
      features without immediately changing the main project.

      For example, we can create a new branch for developing
      a blogging system while keeping the main branch stable.

      After testing our changes, we can merge the branch
      back into the main project.
    `
  },

  {
    id: 3,
    title: "My Experience with Haskell",
    category: "Haskell",
    excerpt: "Learning recursion and functional programming.",
    content: `
      Haskell is a functional programming language.

      During my laboratory work, I implemented recursive
      functions for calculating sums, finding maximum
      values, and sorting lists.

      Functional programming helped me understand
      recursion, pattern matching, and pure functions.
    `
  }
];
