module.exports = (sequelize, DataTypes) => {
    const PriceTracker = sequelize.define("PriceTracker", {
      productLink: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
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
  