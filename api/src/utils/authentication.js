import bcrypt from "bcrypt";

export default async function Autheticator(passwordRequest, passwordDB) {
    const autheticator = await bcrypt.compare(passwordRequest, passwordDB)

    return autheticator
}