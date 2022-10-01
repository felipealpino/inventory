import 'reflect-metadata';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import compression from 'compression';
import { ConnectionOptions, createConnection } from 'typeorm';
import dbConnection from '../ormconfig';
import { Routes } from '@/routes/interfaces/routes.interface';

class App {
	public app: express.Application;
	public env: string;
	public port: string | number;

	constructor(routes: Routes[]) {
		this.app = express();
		this.env = process.env.NODE_ENV || 'development';
		this.port = process.env.PORT || 3001;

		this.env !== 'test' && this.connectToDatabase();
		this.initializeMiddlewares();
		this.initializeRoutes(routes);
	}

	public listen() {
		this.app.listen(this.port, () =>
			console.log(`
      =================================
      ======= ENV: ${this.env} =======
      🚀 Rodando na porta ${this.port}
      =================================
    `)
		);
	}

	public getServer() {
		return this.app;
	}

	private connectToDatabase() {
		createConnection(dbConnection as ConnectionOptions);
	}

	private initializeMiddlewares() {
		this.app.use(cors());
		this.app.use(hpp());
		this.app.use(helmet());
		this.app.use(compression());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(cookieParser());
	}

	private initializeRoutes(routes: Routes[]) {
		routes.forEach((route) => {
			this.app.use('/', route.router);
		});
	}
}

export default App;
