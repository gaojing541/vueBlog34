import axios from 'axios'

const instance = axios.create({
    baseURL:"https://wd7747294513zslrqc.wilddogio.com"

})

//instance.defaults.headers.common['SOMETHINE'] = 'SOMETHINE'

export default instance