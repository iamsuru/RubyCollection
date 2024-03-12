const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const User = require('../public/db/loginSchema')
const { generateToken } = require('../public/scripts/generateToken')

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    const auth = await User.findOne({ username })
    //$2b$10$1JrDtd72haX3YLszyjSPze.nXZpuTLbqIBa/9HVMmIvMhhPrGALsa
    // bcrypt.hash(password, 10, async (err, hash) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         console.log(hash)
    //     }
    // })

    try {
        if (!auth) {
            return res.status(404).json({ message: 'User not found' })
        }
        const passwordMatch = await bcrypt.compare(password, auth.password)
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid Credentials' })
        }
        res.status(200).json({
            message: 'Authentication successful',
            auth: auth,
            token: generateToken(auth._id)
        })
    } catch (err) {
        res.status(500).json({ message: `Internal Server Error ${err}` })
    }
})

module.exports = router