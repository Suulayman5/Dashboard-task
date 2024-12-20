import AddIcon from '@mui/icons-material/Add';
import  LightbulbOutline  from '@mui/icons-material/Lightbulb';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
export const Topbar = () => {
  return (
    <section className='bg-blue-900 p-2 flex text-white text-center justify-between'>
      <div className='flex  gap-2'>
        <p>Dynammics 365</p>
        <hr className='text-white w-2 h-2'/>
        <p>Sales hub</p>
      </div>
      <div className='flex md:gap-6 gap-3'>
        <div className="">
          <LightbulbOutline/>
        </div>
        <div className="">
          <AddIcon/>
        </div>
        <div className="">
          <SettingsOutlinedIcon/>
        </div>
        <div className="">
        <QuestionMarkOutlinedIcon/>
        </div>
        <div className="">
          <PersonAddAltOutlinedIcon/>
        </div>
        <div className="">
          <img src="" alt="image" />
        </div>
      </div>
    </section>
  )
}
