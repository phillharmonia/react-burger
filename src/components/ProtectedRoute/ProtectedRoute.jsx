import { useSelector } from "react-redux"
import {Navigate, Redirect, Route} from 'react-router-dom'

export const ProtectedRoute = ({ element }) => {
    const { user } = useSelector(store => store.user)

    return user ? (element) : (<Navigate to="/login" />)
}
