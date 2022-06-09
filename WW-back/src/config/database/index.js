import "dotenv/config"
import serviceAccount from '../../../worldwrite-38e1f-firebase-adminsdk-t6g90-45e7c489c5.json'

export default {
    urlMongo: process.env.MONGO_DB,
    urlFirebase: serviceAccount
}