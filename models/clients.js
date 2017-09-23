module.exports = function(sequelize, DataTypes) {
  var Clients = sequelize.define("Clients", { 
    spouse1_first: {
      type: DataTypes.STRING,
      allowNull: false
    },
    spouse1_last: {
      type: DataTypes.STRING,
      allowNull: false
    },   
    spouse2_first: {
      type: DataTypes.STRING,
      allowNull: false
    },
    spouse2_last: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    }
  });
  return Clients;
};