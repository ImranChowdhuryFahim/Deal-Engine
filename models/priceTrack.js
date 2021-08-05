module.exports = (sequelize, DataTypes) => {
  const PriceTracker = sequelize.define("PriceTracker", {
    productLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    productTag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return PriceTracker;
};
