import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { PostFactory } from './post.js'

const User = UserFactory(sequelize);
const Post = PostFactory(sequelize);

User.hasMany(Post, {
    onDelete: 'CASCADE'
});
  
Post.belongsTo(User);

export { User, Post };