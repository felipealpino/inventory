import App from './app';
import UsersRoute from './routes/user.routes';

const app = new App([new UsersRoute()]);

app.listen();

export { app as server };
