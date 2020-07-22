import httpStatus from "http-status";
import createError from 'http-errors'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userRepo from '../../repositories/user.repository'
import response from '../../utils/response'

const login = async(req, res, next) => {
    try{
        const email = req.body.email
        const password = req.body.password

        const user = await userRepo.findByEmail(email)

        if(!user){
            return next(createError(404, '사용자를 찾을 수 없습니다...'))
        }

        const match = await bcrypt.compare(password, user.password)

        if(!match){
            return next(createError(422, '비밀번호를 확인하십시오'))
        }

        const payload = {message: 'access granted'}

        const secret = 'secret'

        const ttl = 360000

        const token = jwt.sign(payload, secret, {
            expiresIn: ttl
        })

        return response(res, {token})
    }catch(e){
        next(e)
    }
}

export{
    login
}