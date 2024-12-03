import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate(
    [
      {
        username: 'DemoUser',
        email: 'DemoUser@gmail.com',
        password: 'password',
      },
      {
        username: 'CodeCrafters',
        email: 'team@codecrafters.dev',
        password: 'CodeLife#123',
      },
      {
        username: 'TravelNomad',
        email: 'travel.nomad@outlook.com',
        password: 'Nomad2023@!',
      },
      {
        username: 'FitnessFreak',
        email: 'fitness.freak@fitmail.com',
        password: 'Workout#100',
      },
      {
        username: 'DigitalDreamer',
        email: 'digital.dreamer@yahoo.com',
        password: 'DreamBig2024$',
      },
    ],
    { individualHooks: true }
  );
};
