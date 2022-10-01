import { ConnectionOptions, Connection, getConnectionManager, createConnection } from 'typeorm';
import defaultOptions from '../../ormconfig';

// connection singleton
export class Database {
	public static async connect(options?: ConnectionOptions, forceConnection?: boolean): Promise<Connection> {
		const connectionName = 'default';
		const connectionManager = getConnectionManager();
		let connection: Connection;

		if (connectionManager.has(connectionName) && !forceConnection) {
			connection = connectionManager.get(connectionName);
			/* istanbul ignore next */
			if (!connection.isConnected) connection = await connection.connect();
			return connection;
		}

		if (connectionManager.has(connectionName) && forceConnection) {
			connection = connectionManager.get(connectionName);
			await connection.close();
		}

		/* istanbul ignore next */
		if (!options) options = defaultOptions as ConnectionOptions;
		connection = await createConnection(options);
		return connection;
	}
}
