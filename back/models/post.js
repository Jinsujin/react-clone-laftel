module.exports = (sequelize, DataTypes) => {
  // model: Post => mysql: posts table
  const Post = sequelize.define(
    'User',
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'urf8mb4_general_ci',
    },
  );
  Post.associate = db => {};

  return Post;
};
