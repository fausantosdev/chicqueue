import axios from "axios"

import { TypeLogin, TypeUser } from "../types/GlobalTypes"

const { VITE_API_URL } = import.meta.env

const api = axios.create({
    baseURL: VITE_API_URL
})

type TypeGetSchedules = {
    token: string
    date: Date
}

type TypeGetSchedule = {
    token: string
    id: number
}

export const useApi = () => ({
    refreshToken: async(token: string) => {
        const response = await api.post("/auth/token-refresh", {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data
    },

    signIn: async ({ email, password }: TypeLogin) => {
        const response = await api.post("/auth/login", {
            email, password
        })

        return response.data
    },

    signUp: async ({ name , username, email, password }: TypeUser) => {
        const response = await api.post("/auth/sign-up", {
            name, username, email, password
        })

        return response.data
    },

    getSchedules: async ({ token, date }: TypeGetSchedules) => {
        const response = await api.get('/schedule', {
            params: {
                date
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data
    },

    getSchedule: async ({ token, id }: TypeGetSchedule) => {
        const response = await api.get(`/schedule/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data
    },

    logOut: async (token: string) => {
        const response = await api.post("/auth/logout", {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data
    },
})