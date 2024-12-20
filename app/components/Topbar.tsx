import AddIcon from '@mui/icons-material/Add';
import  LightbulbOutline  from '@mui/icons-material/Lightbulb';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Profile from '../public/pexels-justin-shaifer-501272-1222271.jpg'
import Image from 'next/image';
export const Topbar = () => {
  return (
    <section className='bg-blue-900 p-2 py-3 flex text-white text-center justify-between'>
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
          <Image src={Profile} alt="image" width={40} height={40} className=' rounded-[100%]'/>
        </div>
      </div>
    </section>
  )
}
