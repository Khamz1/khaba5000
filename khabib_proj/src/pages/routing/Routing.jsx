import {lazy, Suspense} from 'react'
// import {Path} from "../../constants/routesPaths.js";
import {Route, Routes} from 'react-router-dom'
import {Layout} from "./Layout.jsx";
import {Paths} from "../../constants/routesPaths.js";
// import CreatePost from "@/components/Posts/CreatePost.jsx";
// import SignIn from "@pages/Auth/SignIn.jsx";
// import SignUp from '../Auth/SignUp.jsx';


const Posts = lazy(() => import('@/components/Posts/PostList.jsx'))
const MainPage = lazy(() => import('@/pages/Main/Main.jsx'))
const CreatePost = lazy(()=>import('@/components/Posts/CreatePost.jsx'))
const SignUp = lazy(()=>import('../Auth/SignUp.jsx'))
const SignIn = lazy(()=>import('../Auth/SignIn.jsx'))
const PostDetail = lazy(()=>import('../../components/Posts/PostDetails.jsx'))

const routesList = [
    {key: 'main', path: Paths.MainPage, Page: MainPage},
    {key: 'posts', path: Paths.Posts, Page: Posts},
    {key: 'createPost', path: Paths.CreatePost, Page: CreatePost},
    {key: 'signUp', path: Paths.SignUp, Page: SignUp},
    {key:'signIn', path: Paths.SignIn, Page: SignIn},
    {key:`posts/:id`,path:Paths.PostById,Page:PostDetail }
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

