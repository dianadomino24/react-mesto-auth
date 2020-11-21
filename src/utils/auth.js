export const BASE_URL = 'https://auth.nomoreparties.co'

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then((response) => {
            try {
                if (response.status === 201) {
                    return response.json()
                }
            } catch (e) {
                return e
            }
        })
        .then((res) => {
            return res
        })

}

export const authorize = (email, password) => {

    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then((response) => response.json()
        )
        .then((data) => {
          if (!data) {
            console.log(`auth пользователь с email не найден : ${data}`)
          }

            if (data) {

                return data
            } else {
                return
            }
        })

}

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => res.json())
}
