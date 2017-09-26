// 'venue', 'officiant', 'florist', 'photographer', 'entertainment', 'catering', 'misc', 'transportation', 'hotel'

module.exports = function(sequelize, DataTypes) {
  var Checklist = sequelize.define("Checklist", { 
    budget_set : {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    guest_list : {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    planner : {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    book_venue : {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    hire_officiant : {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    hire_florist : {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    hire_photographer : {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    hire_entertainment : {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    hire_catering : {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    hire_transportation : {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    hire_hotel : {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });

  Checklist.associate = function(models) {
    Checklist.belongsTo(models.Clients, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  
  return Checklist;
};