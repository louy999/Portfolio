import config from '../config'
import nodemailer from 'nodemailer'
const sendMail = (email: any, name: any, text: any) => {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'louyhany999@gmail.com',
			pass: 'ktcytwwzwrhqqelk',
		},
	})
	transporter.sendMail(
		{
			from: email,
			to: 'louyhany999@gmail.com',
			subject: email,
			text: `my name is :${name}
			${text}`,
		},
		(err: any, info: any) => {
			if (err) throw err
		}
	)
}
export default sendMail
