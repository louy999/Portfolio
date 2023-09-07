import express, {Request, Response, Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import path from 'path'

import errHandleMiddleware from './middleware/error.handel.middleware'
import routes from './routes/index'

const app: Application = express()
app.use(morgan('combined'))
app.use(express.json())
app.use(cookieParser())
import config from './config'
import sendMail from './send_email/index'
const port = config.port || 3000

// app.use(cors())
app.use(
	cors({
		allowedHeaders: [
			'Origin',
			'X-Requested-With',
			'Content-Type',
			'Accept',
			'X-Access-Token',
			'Authorization',
			'Access-Control-Allow-Origin',
			'Access-Control-Allow-Headers',
			'Access-Control-Allow-Methods',
		],
		methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
		preflightContinue: true,
		origin: '*',
	})
)

app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}))

app.use('/api', routes)
app.get('/healthz', (_req: Request, res: Response) => {
	res.send({status: 'ok✌️'})
})
app.post('/ver', (req: Request, res: Response) => {
	sendMail(req.body.email, req.body.name, req.body.text),
		res.json({message: req.body})
})

app.listen(port, () => {
	console.log(`server is start with port :${port}`)
})
app.use(errHandleMiddleware)
