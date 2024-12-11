import Header from './components/Header'
import { ThemeProvider } from '@/components/theme-provider'
import Projects from './components/projects'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <main className="container py-2">
        <Projects />
      </main>
    </ThemeProvider>
  )
}

export default App
