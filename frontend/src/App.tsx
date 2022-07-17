import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Notificationbutton from './components/Notificationbutton'
import Header from './components/Header'
import Salescard from './components/Salescard'

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="ds-meta-container">
            <Salescard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
