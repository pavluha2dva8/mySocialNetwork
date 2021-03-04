import * as axios from 'axios'
import { follow } from '../redux/users-reducer'

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '56dc8f95-3bde-4261-a6fc-2951268bd8f5'
    }
})

// це про юзерів, тому в окремий обєкт
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    // getProfilePage
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    // getProfilePage
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
}

// це про аутентифікацію, тому создав новий обєкт зі своїм методом
export const authAPI = {
    // authMe - header login
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    logout () {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}
// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response => {
//             return response.data
//         })
// }