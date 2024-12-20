import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ScoreOutlinedIcon from '@mui/icons-material/ScoreOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import AddIcon from '@mui/icons-material/Add';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import EditRoadOutlinedIcon from '@mui/icons-material/EditRoadOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const Navbar = () => {
  return (
    <div className="text-gray-700 p-3 m-3 md:w-[1700px] rounded-lg shadow-lg bg-white flex justify-between">
      <div className="flex justify-center text-center">
        <span>My open leads</span>
        <KeyboardArrowDownOutlinedIcon className='cursor-pointer'/>
      </div>
      <div className="hidden md:flex gap-4">
        <div className="flex gap-2">
          <ScoreOutlinedIcon/>
          <span>Show chart</span>
        </div>
        <div className="flex gap-2">
          <ListOutlinedIcon className='text-blue-600'/>
          <span>Focused view</span>
        </div>
        <div className="flex gap-2">
          <AddIcon className='text-green-600'/>
          <span>New</span>
        </div>
        <div className="flex gap-2">
          <RefreshOutlinedIcon className='text-gray-500'/>
          <span>Refresh</span>
        </div>
        <div className="flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="-334.32495 -518.3335 2897.4829 3110.001"><path d="M1554.637 777.5h575.713c54.391 0 98.483 44.092 98.483 98.483v524.398c0 199.901-162.051 361.952-361.952 361.952h-1.711c-199.901.028-361.975-162-362.004-361.901V828.971c.001-28.427 23.045-51.471 51.471-51.471z" fill="#5059C9"/><circle r="233.25" cy="440.583" cx="1943.75" fill="#5059C9"/><circle r="336.917" cy="336.917" cx="1218.083" fill="#7B83EB"/><path d="M1667.323 777.5H717.01c-53.743 1.33-96.257 45.931-95.01 99.676v598.105c-7.505 322.519 247.657 590.16 570.167 598.053 322.51-7.893 577.671-275.534 570.167-598.053V877.176c1.245-53.745-41.268-98.346-95.011-99.676z" fill="#7B83EB"/><path d="M1244 777.5v838.145c-.258 38.435-23.549 72.964-59.09 87.598a91.856 91.856 0 01-35.765 7.257H667.613c-6.738-17.105-12.958-34.21-18.142-51.833a631.287 631.287 0 01-27.472-183.49V877.02c-1.246-53.659 41.198-98.19 94.855-99.52z" opacity=".1"/><path d="M1192.167 777.5v889.978a91.802 91.802 0 01-7.257 35.765c-14.634 35.541-49.163 58.833-87.598 59.09H691.975c-8.812-17.105-17.105-34.21-24.362-51.833-7.257-17.623-12.958-34.21-18.142-51.833a631.282 631.282 0 01-27.472-183.49V877.02c-1.246-53.659 41.198-98.19 94.855-99.52z" opacity=".2"/><path d="M1192.167 777.5v786.312c-.395 52.223-42.632 94.46-94.855 94.855h-447.84A631.282 631.282 0 01622 1475.177V877.02c-1.246-53.659 41.198-98.19 94.855-99.52z" opacity=".2"/><path d="M1140.333 777.5v786.312c-.395 52.223-42.632 94.46-94.855 94.855H649.472A631.282 631.282 0 01622 1475.177V877.02c-1.246-53.659 41.198-98.19 94.855-99.52z" opacity=".2"/><path d="M1244 509.522v163.275c-8.812.518-17.105 1.037-25.917 1.037-8.812 0-17.105-.518-25.917-1.037a284.472 284.472 0 01-51.833-8.293c-104.963-24.857-191.679-98.469-233.25-198.003a288.02 288.02 0 01-16.587-51.833h258.648c52.305.198 94.657 42.549 94.856 94.854z" opacity=".1"/><path d="M1192.167 561.355v111.442a284.472 284.472 0 01-51.833-8.293c-104.963-24.857-191.679-98.469-233.25-198.003h190.228c52.304.198 94.656 42.55 94.855 94.854z" opacity=".2"/><path d="M1192.167 561.355v111.442a284.472 284.472 0 01-51.833-8.293c-104.963-24.857-191.679-98.469-233.25-198.003h190.228c52.304.198 94.656 42.55 94.855 94.854z" opacity=".2"/><path d="M1140.333 561.355v103.148c-104.963-24.857-191.679-98.469-233.25-198.003h138.395c52.305.199 94.656 42.551 94.855 94.855z" opacity=".2"/><linearGradient gradientTransform="matrix(1 0 0 -1 0 2075.333)" y2="394.261" x2="942.234" y1="1683.073" x1="198.099" gradientUnits="userSpaceOnUse" id="a"><stop offset="0" stop-color="#5a62c3"/><stop offset=".5" stop-color="#4d55bd"/><stop offset="1" stop-color="#3940ab"/></linearGradient><path d="M95.01 466.5h950.312c52.473 0 95.01 42.538 95.01 95.01v950.312c0 52.473-42.538 95.01-95.01 95.01H95.01c-52.473 0-95.01-42.538-95.01-95.01V561.51c0-52.472 42.538-95.01 95.01-95.01z" fill="url(#a)"/><path d="M820.211 828.193h-189.97v517.297h-121.03V828.193H320.123V727.844h500.088z" fill="#FFF"/></svg>
          <span>Collaborate</span>
        </div>
        <div className="flex gap-2">
          <DeleteOutlineOutlinedIcon/>
          <span>Delete</span>
        </div>
        <div className="ml-3">
          <hr />
        </div>
        <div className="">
          <KeyboardArrowDownOutlinedIcon/>
        </div>
        <div className="">
          <MoreVertIcon/>
        </div>
        <div className="border border-gray-500 rounded-md p-1">
          <ScheduleOutlinedIcon/>
          <span className='font-medium'>Smart data</span>
        </div>
        <div className="flex border border-gray-500 rounded-md p-1">
          <FilterListOutlinedIcon/>
          <span>Edit filters</span>
        </div>
        <div className="flex border border-gray-500 rounded-md p-1">
          <EditRoadOutlinedIcon/>
          <span>Edit columns</span>
        </div>
        <div className="flex rounded-lg bg-blue-600 text-white p-2 text-center">
          <OpenInNewOutlinedIcon/>
          <hr/>
          <KeyboardArrowDownOutlinedIcon/>
        </div>
      </div>
    </div>
  )
};
export default Navbar
