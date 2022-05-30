import { useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Auth, UserInfo } from '../allContext'

const ProtectedRoute = ({ component: Component, redirect = '/login', ...rest }) => {
    const { stateAuth, dispatchAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)

    const apiV1 = process.env.REACT_APP_API_V1

    let token = stateAuth.token

    useEffect(() => {
        let authFunc = async () => {
            let authFetch = await fetch(`${apiV1}/patients/auth`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET',
            })

            let authJson = await authFetch.json()

            if (authFetch.ok) {
                dispatchAuth({ type: 'auth', payload: token })
                dispatchUser({ type: 'set', payload: authJson })
            } else {
                dispatchAuth({ type: 'remove' })
                dispatchUser({ type: 'remove' })
            }
        }
        // execute the function
        try {
            authFunc()
        } catch (e) {
            dispatchAuth({ type: 'remove' })
            dispatchUser({ type: 'remove' })
        }
    }, [apiV1, dispatchAuth, dispatchUser, token])

    return (
        <Route
            {...rest}
            render={(props) =>
                stateAuth.auth === true ? <Component {...rest} {...props} /> : <Redirect to={redirect} />
            }
        />
    )
}

export default ProtectedRoute
