module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define("Store", {
    storeId: {
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
    // Add other attributes specific to the Store model
  });

  Store.associate = (models) => {
    // Associate Store with Product
    Store.hasMany(models.Product, {
      foreignKey: "storeId",
      as: "products", // You can give the association a custom alias if needed
    });
  };

  return Store;
};
