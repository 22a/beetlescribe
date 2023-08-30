import EditorScreen from './components/editor/editor'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getEntireBackend } from './lib/backend'

const data = await getEntireBackend()
console.log(data)

function App(): JSX.Element {
  return (
    <EditorScreen
      data={data}
    />
  )
}

export default App
