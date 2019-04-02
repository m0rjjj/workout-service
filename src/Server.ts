import { GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings } from '@tsed/common';
import bodyParser from 'body-parser';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import { $log } from 'ts-log-debug';
const rootDir = __dirname;

@ServerSettings({
	acceptMimes: ['application/json'],
	httpsPort: 9443,
	mount: {
		'/api': `${rootDir}/controllers/**/*.ts`
	},
	port: 3001,
	rootDir,
	swagger: [
		{
			path: '/api/docs'
		}
	],
	typeorm: [
		{
			database: 'workout',
			entities: [`${rootDir}/entities/*{.ts,.js}`],
			host: 'localhost',
			logging: false,
			name: 'default',
			password: '0000',
			port: 5432,
			synchronize: true,
			type: 'postgres',
			username: 'root'
		}
	]
})
export class Server extends ServerLoader {
	public $onMountingMiddlewares(): void | Promise<any> {
		this.use(GlobalAcceptMimesMiddleware)
			.use(cookieParser())
			.use(compress({}))
			.use(bodyParser.json())
			.use(
				bodyParser.urlencoded({
					extended: true
				})
			);
	}

	public $onReady() {
		$log.debug('Server started...');
	}

	public $onServerInitError(err: any) {
		$log.error(err);
	}
}
