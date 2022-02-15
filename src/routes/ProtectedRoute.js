import { useContext, useEffect } from 'react'
import env from 'react-dotenv'
import { Route, Redirect } from 'react-router-dom'
import { Auth, UserInfo } from '../allContext'

const ProtectedRoute = ({ component: Component, redirect = '/login', ...rest }) => {
    const { stateAuth, dispatchAuth } = useContext(Auth)
    const { dispatchUser } = useContext(UserInfo)

    const api = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API : env.REACT_APP_API

    useEffect(() => {
        let authFunc = async () => {
            let authFetch = await fetch(`${api}/me`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${stateAuth.token}`,
                },
                method: 'GET',
            })

            let authJson = await authFetch.json()

            if (authFetch.ok) {
                dispatchAuth({ type: 'auth', payload: stateAuth.token })
                dispatchUser({ type: 'set', payload: authJson })
            } else {
                dispatchAuth({ type: 'remove' })
                dispatchUser({ type: 'remove' })
            }
        }
        // execute the function
        authFunc()
    }, [dispatchUser, api, stateAuth, dispatchAuth])

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
