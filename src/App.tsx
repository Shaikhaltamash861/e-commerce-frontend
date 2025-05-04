
import './App.css'
import AppRoute from './routes/App.route'
import { ThemeProvider } from './theme/theme-provider'

function App() {


  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRoute/>
    </ThemeProvider>
    </>
  )
}

export default App
