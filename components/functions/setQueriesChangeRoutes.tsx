import Router from "next/router"
type type = (route: string, queryObj?: { [key: string]: string }) => void
const setQueriesChangeRoutes: type = (route, queryObj = {}) => {
    Router.push({
        pathname: route,
        query: {
            ...Router.query,
            ...queryObj
        }
    })
}

export default setQueriesChangeRoutes