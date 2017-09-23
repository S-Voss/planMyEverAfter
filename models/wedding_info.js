module.exports = function(sequelize, DataTypes) {
  var WeddingInfo = sequelize.define("Wedding", {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    max_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    num_of_guests: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        len: [5]
      }
    },
    wedding_venue: {
      type: DataTypes.INTEGER
    },
    wedding_officiant: {
    type: DataTypes.INTEGER
    },
    wedding_florist: {
      type: DataTypes.INTEGER
    },
    wedding_photo: {
      type: DataTypes.INTEGER
    },
    wedding_ent: {
      type: DataTypes.INTEGER
    },
    wedding_catering: {
      type: DataTypes.INTEGER
    },
    wedding_misc: {
      type: DataTypes.INTEGER
    },
    wedding_transportation: {
      type: DataTypes.INTEGER
    },
    wedding_hotel: {
      type: DataTypes.INTEGER
    },
  });
  return WeddingInfo;
};

// Goal is to have a list of ID's for each vendor the clients have chosen for their wedding
// the id's should reference back to the vendor table
// 'venue', 'officiant', 'florist', 'photographer', 'entertainment', 'catering', 'misc', 'transportation', 'hotel'