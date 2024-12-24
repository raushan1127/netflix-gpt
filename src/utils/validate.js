export const checkvaliddata = (email,password) => {
    const isvalidemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ;
    const isvalidpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    if (!isvalidemail) return "Email is not valid"
    if (!isvalidpassword) return "Password is not valid"
    return null;
}