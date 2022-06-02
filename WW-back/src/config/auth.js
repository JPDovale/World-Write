import "dotenv/config"

export default {
    secret: process.env.SECRET,
    expiresIn: "100d"
}