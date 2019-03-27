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
    '/api': '${rootDir}/controllers/**/*.ts' // support ts with ts-node then fallback to js
  },
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