

export const getInfosUser = (id) => {
    return fetch(`http://localhost:3000/user/${id}`)
        .then((response) => {
            return checkResponseReturned(response);
        })
}

export const getUserActivity = (id) => {
    return fetch(`http://localhost:3000/user/${id}/activity`)
        .then((res) => {
            return checkResponseReturned(res);
        })
}

export const getUserAverage = (id) => {
    return fetch(`http://localhost:3000/user/${id}/average-sessions`)
        .then((res) => {
            return checkResponseReturned(res);
        })
}

export const getUserPerformance = (id) => {
    return fetch(`http://localhost:3000/user/${id}/performance`)
        .then((res) => {
            return checkResponseReturned(res);
        })
}

const checkResponseReturned = (res) => {
    try {
        if (res.status >= 400) {
            return res.text().then(text => {
                throw new Error("Server responds with error!")
            })
        }
        return res.json()
    } catch (err) {
        console.log(err);
    }
}

