import bcrypt from "bcryptjs";

export const createPasswordHash = async (password) =>{
    return bcrypt.hash(password, 12)
}

export const comparePassword = async (password, enteredPassword) => {
    return bcrypt.compareSync(password, enteredPassword)
}