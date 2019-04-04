import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}

/* 

How we call this from another file

AuthenticationService.register({
    email: 'test@register.com',
    password: '12365'
})
*/