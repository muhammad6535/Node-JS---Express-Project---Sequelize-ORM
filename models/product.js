module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Set storeId as the primary key
      autoIncrement: true, // Assuming you want it to be an auto-incrementing primary key
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    // Add other attributes specific to the Product model
  });

  Product.associate = (models) => {
    // Associate Product with Store
    Product.belongsTo(models.Store, {
      foreignKey: "storeId",
    });
  };

  return Product;
};
