import Home from "./components/Home";
import Settings from "./components/Settings";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";


const routes=[
    {
        path: '/',
        element: <Home/>
    },
    {
        path: 'Settings',
        element: <Settings/>
    },
    {
        path: 'SignUp',
        element: <SignUp/>
    },
    {
        path: 'SignIn',
        element: <SignIn/>
    },

]

export default routes