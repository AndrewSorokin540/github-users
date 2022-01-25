import axios from 'axios'

type UsersListItem = {
    id: number
    login: 'string'
}

type User = {
    id: number
    name: 'string'
    avatar_url: 'string'
    email?: 'string'
}

class Api {
    public getUsers = async () => {
        const res = await axios.get<UsersListItem[]>('https://api.github.com/users?per_page=10')
        return res.data
    }

    public getUser = async (id: string | number) => {
        const res = await axios.get<User>(`https://api.github.com/users/${id}`)
        return res.data
    }
}

const api = new Api()

export default api