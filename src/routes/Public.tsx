import { Routes, Route, Navigate } from 'react-router-dom'

import SignIn from '../pages/public/SignIn'
import SignUp from '../pages/public/SignUp'

const PublicRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<SignIn />}/>
            <Route path='/sign-up' element={<SignUp />}/>
            <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes>
    )
}

export default PublicRoutes