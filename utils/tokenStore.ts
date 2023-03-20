import Cookies from 'universal-cookie'

const cookies = new Cookies()

const expirationDate = new Date();
expirationDate.setTime(expirationDate.getTime() + (7 * 24 * 60 * 60 * 1000)) // 7 days in milliseconds

const OPTIONS = { path: '/', sameSite: true, expires: expirationDate }
const KEY = 'stack'

export const storeToken = (token: string): void => {
    cookies.set(KEY, token, OPTIONS)
}

export const retrieveToken = (): string | null => {
    try {
        const token = cookies.get(KEY);
        if (token) return token

        return null
    } catch (err) {
        return null;
    }
}

export const removeToken = (): void => {
    cookies.remove(KEY, OPTIONS)
}