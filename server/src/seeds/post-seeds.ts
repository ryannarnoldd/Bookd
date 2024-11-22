import { Post } from '../models/index.js';

export const seedPosts = async () => {
  await Post.bulkCreate(
    [
      { postUser: 'RadiantComet',
        title: 'The Stranger',
        author: 'Albert Camus',
        rating: 9,
        review: 'Mom\'s funeral...'
      },
      {
        postUser: 'SunnyScribe',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        rating: 10,
        review: 'A gripping tale of justice and morality in the Deep South.'
      },
      {
        postUser: 'SunnyScribe',
        title: '1984',
        author: 'George Orwell',
        rating: 8,
        review: 'A chilling dystopian vision of the future.'
      },
      {
        postUser: 'SunnyScribe',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        rating: 7,
        review: 'A witty and romantic look at societal expectations.'
      },
      {
        postUser: 'SunnyScribe',
        title: 'Moby-Dick',
        author: 'Herman Melville',
        rating: 6,
        review: 'A long but rewarding journey into obsession and revenge.'
      }

    ],
    { individualHooks: true }
  );
};