import { USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../data/data.js'

export const getInfosUserMocked = (id) => {

     let response =USER_MAIN_DATA
    .filter(user => user.id === Number(id)).shift();
    return {data: response}
}

export const getUserActivityMocked = (id) =>{
    let response = USER_ACTIVITY
    .filter(user=>user.userId === Number(id)).shift();
    return {data: response}
}

export const getUserAverageMocked =(id)=>{
    let response = USER_AVERAGE_SESSIONS
    .filter(user=>user.userId === Number(id)).shift();
    return {data: response}
}

export const getUserPerformanceMocked =(id) =>{
    let response = USER_PERFORMANCE
    .filter(user=>user.userId === Number(id)).shift();
    return {data: response}
}