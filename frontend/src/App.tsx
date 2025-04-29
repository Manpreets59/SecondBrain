import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
    <Button startIcon={<PlusIcon  size = {"lg"}/>}
            endIcon={<ShareIcon sie = {"lg"}}/></Button>
    {/* <Button variant={'primary'} text={'Hello'}/>
    <Button variant={'secondary'} text={'Hello'}/> */}
    </>
  )
}

export default App
