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
      collate: 'utf8mb4_general_ci',
    },
  );
  Post.associate = db => {
    db.Post.belongsTo(db.User); // post 작성자
    db.Post.hasMany(db.Review);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    // post 좋아요 누른 사람들
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
  };

  return Post;
};
