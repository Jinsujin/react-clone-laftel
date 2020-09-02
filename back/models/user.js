module.exports = (sequelize, DataTypes) => {
  // model: User => mysql: users table
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING(30),
        allowNull: false, // 필수값
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false, // 필수값
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false, // 필수값
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );
  User.associate = db => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Review);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
  };

  return User;
};
