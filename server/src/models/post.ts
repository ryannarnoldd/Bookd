import {

  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
  DataTypes,
  type ForeignKey,
  type Sequelize,
} from 'sequelize';

//   import type { Reader } from './Reader.js';
import type { User } from './user.js';

/*
! Post Model using our own interfaces
 
import { DataTypes, Sequelize, Model, Optional } from 'sequelize'
 
interface PostAttributes {
  id: number;
  authorId: number;
  title: string;
  isbn: string;
  pages: number;
  edition: number;
  isPaperback: boolean;
}
 
interface PostCreationAttributes extends Optional<PostAttributes, 'id'> {}
 
export class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
  declare id: number;
  declare authorId: number;
  declare title: string;
  declare isbn: string;
  declare pages: number;
  declare edition: number;
  declare isPaperback: boolean;
}
 
*/

export class Post extends Model<
  InferAttributes<Post>,
  InferCreationAttributes<Post>
> {
  declare id: CreationOptional<number>;
  declare userId: ForeignKey<User['id']>;
  declare title: string;
  declare author: string;
  declare rating: number;
  declare review: string;

  // ! Since TS cannot determine model associations at compile time, we need to declare the association methods here. These methods are "virtual" and will not exist until `Model.init` is called at runtime.
  // declare addReaders: BelongsToManyAddAssociationMixin<
  //   Reader[],
  //   Reader['id'][]
  // >;
  // declare addReader: BelongsToManyAddAssociationMixin<Reader, Reader['id']>;
}

export function PostFactory(sequelize: Sequelize) {
  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      review: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      modelName: 'Post',
    }
  );

  return Post;
}