module.exports = function(sequelize, DataTypes) {
  var Vendor = sequelize.define("Vendor", { 
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    category: {
      type: DataTypes.ENUM('venue', 'officiant', 'florist', 'photographer', 'entertainment', 'catering', 'misc', 'transportation', 'hotel'),
      allowNull: false,
      unique: true
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        len: [2]
      } 
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        len: [5]
      }
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
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      validate: {
        isUrl: true
      }
    },
    min: {
      type: DataTypes.INT,
      allowNull: false,
      unique: false,
      validate: {
        isNumeric: true
      }
    },
    rating: {
      type: DataTypes.INT,
      allowNull: true,
      unique: false,
      validate: {
        isNumeric: true,
        max: 5
      }
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false,
      validate: {
        isIn: [[true, false]]
      }
    }
  });
};