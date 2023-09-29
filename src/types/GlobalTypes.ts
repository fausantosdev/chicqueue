export type TypeLogin = {
    email: string
    password: string
}

export type TypeResponse = {
    status: boolean
    data: object
    message: string
}

export type TypeUser = {
    id: number
    name: string
    username: string
    phone: string
    email: string
    password: string
    type: string
    passwordResetToken: string | null
    passwordResetExpires: string | null
    createdAt: Date
    updatedAt: Date
    avatar: {
        id: number
        name: string
        url: string
    }
}


export type TypeSchedule = {
    id: number
    createdAt: string
    date: string
    updatedAt: string
    user : {
        name: string
        phone: string
    }
}