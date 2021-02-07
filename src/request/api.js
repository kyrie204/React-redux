import {
    get,
    post
} from './http'


// export const test = p => post('/op/getPage3', p); //mock测试接口
export const users = p => get('https://601ce2ca1a9c220017060f1d.mockapi.io/api/v1/users', p); //mock测试接口
export const testList = p => get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists', p); //mockapi测试接口