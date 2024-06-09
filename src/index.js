import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'normalize.css/normalize.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

const root = createRoot(document.getElementById('root'))
root.render(<App />)
