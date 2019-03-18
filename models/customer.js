module.exports = function(sequelize, DataTypes) {
	var Customer = sequelize.define("customer", {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		customer_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		burger_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	}, {
    timestamps: false
	});
	return Customer;
}