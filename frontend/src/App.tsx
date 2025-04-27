import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {

  return (
    <>
    <Button startIcon={<PlusIcon/>}></Button>
    <Button variant={'primary'} text={'Hello'}/>
    <Button variant={'secondary'} text={'Hello'}/>
    </>
  )
}

export default App
