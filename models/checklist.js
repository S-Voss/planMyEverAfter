// 'venue', 'officiant', 'florist', 'photographer', 'entertainment', 'catering', 'misc', 'transportation', 'hotel'

module.exports = function(sequelize, DataTypes) {
  var Checklist = sequelize.define("Checklist", { 
    budget_set : {
      type: DataTypes.BOOLEAN
    },
    guest_list : {
      type: DataTypes.BOOLEAN
    },
    planner : {
      type: DataTypes.BOOLEAN
    },
    book_venue : {
      type: DataTypes.BOOLEAN
    },
    hire_officiant : {
      type: DataTypes.BOOLEAN
    },
    hire_florist : {
      type: DataTypes.BOOLEAN
    },
    hire_photographer : {
      type: DataTypes.BOOLEAN
    },
    hire_entertainment : {
      type: DataTypes.BOOLEAN
    },
    hire_catering : {
      type: DataTypes.BOOLEAN
    },
    hire_transportation : {
      type: DataTypes.BOOLEAN
    },
    hire_hotel : {
      type: DataTypes.BOOLEAN
    },
  });
  return Checklist;
};