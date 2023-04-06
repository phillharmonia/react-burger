import { useSelector } from "react-redux"
import {Navigate, Redirect, Route, useLocation} from 'react-router-dom'

export const ProtectedRoute = ({ element }) => {
    const { user } = useSelector(store => store.user)
    const location = useLocation()

    return user ? (element) : (<Navigate to={`/login?to=${location.pathname}`} replace={false} />)
}
