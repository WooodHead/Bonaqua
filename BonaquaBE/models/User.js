module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.NUMBER,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.NUMBER,
        allowNull: false
      }
    }, {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    });
    return User;
  };