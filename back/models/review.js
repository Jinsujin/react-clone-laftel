module.exports = (sequelize, DataTypes) => {
  // model: Review => mysql: reviews table
  const Review = sequelize.define(
    'Review',
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false, // 필수값
      },
      starpoint: {
        type: DataTypes.INTEGER,
        allowNull: false, // 필수값
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    },
  );
  Review.associate = db => {
    db.Review.belongsTo(db.User);
    db.Review.belongsTo(db.Post);
  };

  return Review;
};
