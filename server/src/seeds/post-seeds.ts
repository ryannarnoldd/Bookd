import { Post } from '../models/index.js';

export const seedPosts = async () => {
  await Post.bulkCreate(
    [
      { userId: 1,
        title: 'The Stranger',
        author: 'Albert Camus',
        rating: 9,
        review: 'Mom\'s funeral...'
      },
      {
        userId: 1,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        rating: 10,
        review: 'A gripping tale of justice and morality in the Deep South.'
      },
      {
        userId: 2,
        title: '1984',
        author: 'George Orwell',
        rating: 8,
        review: 'A chilling dystopian vision of the future.'
      },
      {
        userId: 2,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        rating: 7,
        review: 'A witty and romantic look at societal expectations.'
      },
      {
        userId: 3,
        title: 'Moby-Dick',
        author: 'Herman Melville',
        rating: 6,
        review: 'A long but rewarding journey into obsession and revenge.'
      }

    ],
    { individualHooks: true }
  );
};