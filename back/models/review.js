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
        type: DataTypes.INT,
        allowNull: false, // 필수값
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'urf8mb4_general_ci',
    },
  );
  Review.associate = db => {};

  return Review;
};
