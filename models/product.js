module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    productDescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    productTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productBrand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productThumbnail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    productCreatedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Products;
};
