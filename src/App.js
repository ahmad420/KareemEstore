import { Header, Footer } from './components/index.js'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' exact component={Home} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
