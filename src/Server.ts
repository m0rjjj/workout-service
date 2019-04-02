import {ServerLoader, ServerSettings, GlobalAcceptMimesMiddleware} from '@tsed/common';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compress from 'compression';
const rootDir = __dirname;

@ServerSettings({
	rootDir,
	acceptMimes: ['application/json'],
	port: 3001,
	httpsPort: 9443,
	mount: {
		'/api': '${rootDir}/controllers/**/*.ts'
	},
	swagger: [{
		path: '/api/docs'
	}],
	typeorm: [{
		name: 'default',
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'root',
		password: '0000',
		database: 'workout',
		synchronize: true,
		logging: false,
		entities: [
			`${rootDir}/entities/*{.ts,.js}`
		]
	}],
})
export class Server extends ServerLoader {
	public $onMountingMiddlewares(): void|Promise<any> {
			this
				.use(GlobalAcceptMimesMiddleware)
				.use(cookieParser())
				.use(compress({}))
				.use(bodyParser.json())
				.use(bodyParser.urlencoded({
					extended: true
				}));
	}

	public $onReady() {
			console.log('Server started...');
	}

	public $onServerInitError(err: any) {
			console.error(err);
	}
}