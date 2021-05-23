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
      type: DataTypes.STRING,
      allowNull: false,
    },
    productImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    websiteName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
  });

  return TrackedProducts;
};
