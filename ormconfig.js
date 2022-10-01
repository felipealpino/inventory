const path = require('path');

module.exports = {
	logging: process.env.DBLOG ? process.env.DBLOG == 'TRUE' : false,
	type: 'postgres',
	host: process.env.DBHOST ? process.env.DBHOST : 'localhost',
	port: process.env.DBPORT ? process.env.DBPORT : 5432,
	database: process.env.DBDATABASE ? process.env.DBDATABASE : 'sandbox',
	schema: process.env.DBSCHEMA ? process.env.DBSCHEMA : 'inventory',
	username: process.env.DBUSER ? process.env.DBUSER : 'postgres',
	password: process.env.DBPASSWORD ? process.env.DBPASSWORD : 'postgres',
	entities: [path.resolve(__dirname, 'src') + '/entities/**/*.{ts,js}'],
	subscribers: [path.resolve(__dirname, 'src') + '/subscribers/**/*.{ts,js}'],
	migrations: [path.resolve(__dirname, 'src') + '/database/migrations/**/*.{ts,js}'],
	cli: {
		migrationsDir: 'src/database/migrations',
		entitiesDir: 'src/entities/',
		subscribersDir: 'src/subscribers/',
	},
};
