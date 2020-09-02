module.exports = (sequelize, DataTypes) => {
  // model: Hashtag => mysql: hashtags table
  const Hashtag = sequelize.define(
    'Hashtag',
    {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false, // 필수값
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );
  Hashtag.associate = db => {
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  };

  return Hashtag;
};
