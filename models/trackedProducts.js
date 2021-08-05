module.exports = (sequelize, DataTypes) => {
  const TrackedProducts = sequelize.define("TrackedProducts", {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productLink: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    productPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    productImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productTag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    websiteName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return TrackedProducts;
};
