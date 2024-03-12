const jwt = require('jsonwebtoken')

const privateKey = "8cnd58fy32c7632x-12*2pantpxn8fky"

const generateToken = (id) => {
    return jwt.sign({ id }, privateKey, { expiresIn: '1h' })
}

module.exports = { generateToken }