export const mockHttp = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}