const createPassword = () => {
    const alphaNumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

    let password = '';
    for(let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * alphaNumeric.length);

        password += alphaNumeric[randomIndex];
    }

    return password;
}

const createUserId = (name: string) => {
    const random = Math.floor(Math.random() * 100);
    const userId = `EMP_${random}_${name}`;
    return userId;
}


export const getCredentials = (name: string) => {
    const password = createPassword();
    const userId = createUserId(name);
    return { password, userId };
}