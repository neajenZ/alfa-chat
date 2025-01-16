import { Route, Routes } from 'react-router-dom'
import { Layout } from '@pages/Layout'
import { ChatPage } from '@pages/Chat'
import {SettingsPage} from "@pages/Settings";
import {CompanyPage} from "@pages/Company";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route path='/chat' element={<ChatPage />} />
          <Route path='/settings/*' element={<SettingsPage />} />
          <Route path='/company/*' element={<CompanyPage />} />
      </Route>
    </Routes>
  )
}

export default App
