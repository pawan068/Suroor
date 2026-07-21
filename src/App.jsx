import React from 'react'
import AppRoutes from './Components/Routes/AppRoutes'
import Layout from './Components/Layout/Layout'
import { SidebarProvider } from './Components/Context/SidebarContext'

const App = () => {
  return( 
    <Layout>
      <SidebarProvider>
  <AppRoutes /> 
  </SidebarProvider>
  </Layout>
)
}

export default App
