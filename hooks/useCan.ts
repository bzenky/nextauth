import { useContext } from "react"
import { AuthContextt } from '../contexts/AuthContext'
import { validateUserPermissions } from "../utils/validateUserPermissions"

type UseCanParams = {
    permissions?: string[];
    roles?: string[];
}

export function useCan({ permissions, roles }): UseCanParams {
    const { user, isAuthenticated } = useContext(AuthContextt)

    if (!isAuthenticated) {
        return false
    }

    const userHasValidPermissions = validateUserPermissions({
        user,
        permissions,
        roles
    })

    return userHasValidPermissions
}