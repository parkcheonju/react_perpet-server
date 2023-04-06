/* DB모델링 : MAKE A TABLE sequelize : 테이블과 칼럼생성*/

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
    },
    orgPrice: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    discount: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    seller: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    soldout: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0,
    },
  });
  return product;
};
