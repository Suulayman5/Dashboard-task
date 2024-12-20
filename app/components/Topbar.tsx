import AddIcon from '@mui/icons-material/Add';
import  LightbulbOutline  from '@mui/icons-material/Lightbulb';

export const Topbar = () => {
  return (
    <section className='bg-blue-900 p-2 flex text-white text-center justify-between'>
      <div className='flex gap-2'>
        <p>Dynammics 365</p>
        <hr/>
        <p>Sales hub</p>
      </div>
      <div className='flex gap-2'>
        <div className="">
          <LightbulbOutline/>
        </div>
        <div className="">
          <AddIcon/>
        </div>
      </div>
    </section>
  )
}
