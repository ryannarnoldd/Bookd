import { Post } from '../models/index.js';

export const seedPosts = async () => {
  await Post.bulkCreate(
    [
      {
        postUser: 'DemoUser',
        title: 'Braiding Sweetgrass',
        author: 'Robin Wall Kimmerer',
        rating: 10,
        review: 'A poetic and thoughtful exploration of our connection with nature.',
      },
      {
        postUser: 'CodeCrafters',
        title: 'Clean Code',
        author: 'Robert C. Martin',
        rating: 9,
        review: 'An essential read for anyone passionate about writing maintainable code.',
      },
      {
        postUser: 'TravelNomad',
        title: 'Into the Wild',
        author: 'Jon Krakauer',
        rating: 8,
        review: 'A fascinating story of adventure and self-discovery in the Alaskan wilderness.',
      },
      {
        postUser: 'FitnessFreak',
        title: 'Can’t Hurt Me',
        author: 'David Goggins',
        rating: 10,
        review: 'An inspiring testament to the power of mental toughness and resilience.',
      },
      {
        postUser: 'DigitalDreamer',
        title: 'The War of Art',
        author: 'Steven Pressfield',
        rating: 9,
        review: 'A motivational guide to overcoming creative blocks and realizing your dreams.',
      },
      {
        postUser: 'DemoUser',
        title: 'The Overstory',
        author: 'Richard Powers',
        rating: 9,
        review: 'An intricate tale of how trees and humans intertwine in a powerful narrative.',
      },
      {
        postUser: 'TravelNomad',
        title: 'Wild',
        author: 'Cheryl Strayed',
        rating: 7,
        review: 'A raw and emotional journey of healing and personal growth on the Pacific Crest Trail.',
      },
      {
        postUser: 'FitnessFreak',
        title: 'Atomic Habits',
        author: 'James Clear',
        rating: 8,
        review: 'A practical and insightful guide to building habits that last.',
      },
      {
        postUser: 'DemoUser',
        title: 'Silent Spring',
        author: 'Rachel Carson',
        rating: 10,
        review: 'A groundbreaking work that highlights the devastating effects of pesticides on the environment.',
      },
      {
        postUser: 'TravelNomad',
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        rating: 9,
        review: 'A magical and inspiring tale of following your dreams and listening to your heart.',
      },
      {
        postUser: 'FitnessFreak',
        title: 'Born to Run',
        author: 'Christopher McDougall',
        rating: 8,
        review: 'An incredible story of endurance and the secrets of the Tarahumara tribe.',
      },
      {
        postUser: 'DigitalDreamer',
        title: 'Big Magic',
        author: 'Elizabeth Gilbert',
        rating: 9,
        review: 'An empowering book about living a creative and fearless life.',
      },
      {
        postUser: 'CodeCrafters',
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt and David Thomas',
        rating: 10,
        review: 'A timeless classic for software developers looking to master their craft.',
      },
    ],
    { individualHooks: true }
  );
};
