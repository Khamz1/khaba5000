import {lazy, Suspense} from 'react'
// import {Path} from "../../constants/routesPaths.js";
import {Route, Routes} from 'react-router-dom'
import {Layout} from "./Layout.jsx";
import {Paths} from "../../constants/routesPaths.js";


const Posts = lazy(() => import('@/components/Posts/PostList.jsx'))
const MainPage = lazy(() => import('@/pages/Main/Main.jsx'))

const routesList = [
    {key: 'main', path: Paths.MainPage, Page: MainPage},
    {key: 'posts', path: Paths.Posts, Page: Posts}
]

export const Routing = ()=>{
    return (
        <Suspense fallback={"Loading..."}>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    {
                        routesList.map(({key,path, Page})=>{
                            return <Route key={key} path={path} element={<Page/>}/>
                        })
                    }
                </Route>
            </Routes>
        </Suspense>
    )
}

