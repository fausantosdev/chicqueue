import React, { FC } from 'react'

import PublicRoutes from './Public'
import PrivateRoutes from './Private'

import { useAuth } from '../contexts/Auth'

const Routes: FC = () => {
	const { user } = useAuth()

  return !!user ? <PrivateRoutes/> : <PublicRoutes/> 
} 

export default Routes
