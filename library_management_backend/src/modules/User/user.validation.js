import Joi from "joi"


export const signUpSchema = {
    body:Joi.object({
            name:Joi.string().min(3).max(20).required(),
            email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            phone:Joi.string().pattern(/^(?:\+?91|0)?[6789]\d{9}$/).required(),
            password:Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/).required(),
            confirmPassword: Joi.ref('password'),
    })
}


export const signInSchema = {
    body:Joi.object({
        email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password:Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/).required()
    })
}


export const updateUserSchema = {
    body:Joi.object({
            name:Joi.string().min(3).max(20).required(),
            phone:Joi.string().pattern(/^(?:\+?91|0)?[6789]\d{9}$/).required()
    })
}


export const emailSchema = {
    body:Joi.object({
        email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
    })
}

export const passwordSchema = {
    body:Joi.object({
        password:Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/).required()
    })
}

export const changePasswordSchema = {
    body:Joi.object({
        oldPassword:Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/).required(),
        newPassword:Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/).required(),
        confirmPassword: Joi.ref('newPassword'),
    })
}