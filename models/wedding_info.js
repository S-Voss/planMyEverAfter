module.exports = function(sequelize, DataTypes) {
  var WeddingInfo = sequelize.define("Wedding", {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    max_price: {
      type: DataTypes.INT,
      allowNull: false
    },
    num_of_guests: {
      type: DataTypes.INT,
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        len: [5]
      },
    wedding_venue: {
      type: DataTypes.INT,
      references: {
        model: Vendor,
        key: 'id'
      }
    },
    wedding_officiant: {
    type: DataTypes.INT,
    references: {
      model: Vendor,
      key: 'id'
    }
    },
    wedding_florist: {
      type: DataTypes.INT,
      references: {
        model: Vendor,
        key: 'id'
      }
    },
    wedding_photo: {
      type: DataTypes.INT,
      references: {
        model: Vendor,
        key: 'id'
      }
    },
    wedding_ent: {
      type: DataTypes.INT,
      references: {
        model: Vendor,
        key: 'id'
      }
    },
    wedding_catering: {
      type: DataTypes.INT,
      references: {
        model: Vendor,
        key: 'id'
      }
    },
    wedding_misc: {
      type: DataTypes.INT,
      references: {
        model: Vendor,
        key: 'id'
      }
    },
    wedding_transportation: {
      type: DataTypes.INT,
      references: {
        model: Vendor,
        key: 'id'
      }
    },
    wedding_hotel: {
      type: DataTypes.INT,
      references: {
        model: Vendor,
        key: 'id'
      }
    },
    }
  });
};

// Goal is to have a list of ID's for each vendor the clients have chosen for their wedding
// the id's should reference back to the vendor table
// 'venue', 'officiant', 'florist', 'photographer', 'entertainment', 'catering', 'misc', 'transportation', 'hotel'