/**
 * 게시글 이미지
 */
module.exports = (sequelize, DataTypes) => {
  // model: Image => mysql: images table
  const Image = sequelize.define(
    'Image',
    {
      src: {
        type: DataTypes.STRING(200),
        allowNull: false, // 필수값
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );
  Image.associate = db => {
    db.Image.belongsTo(db.Post);
  };

  return Image;
};
