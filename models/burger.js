module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("burger", {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	}, {
    timestamps: false
	});
	return Burger;
}