export const prepareAuthHeader = () => {
    const token = localStorage.getItem('token')
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}
