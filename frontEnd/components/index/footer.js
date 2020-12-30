import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../common/fontawesome'
export default function Footer(){
    return (

        <div className='bg-indigo-900 text-gray-50 '>
            <div className='my-20'>

            </div>
            <div className='container grid grid-cols-2 '>
            <div>
                <div className='text-2xl'>Brilliant solutions for your ideas</div>
                <div className='py-5 text-sx'>Build modern looking websites fast and easy using Quick.</div>
            </div>
            <div className='p-2 m-4 ml-20   flex flex-row-reverse'>
                <button className="bg-blue-500  text-gray-50 py-3 px-6 rounded p-1 mb-5 text-xs flex p-20">Purchase now
                </button>
                <button className="bg-gray-50   text-black py-3 px-6 rounded mb-5 mr-4 text-xs flex ">
                <div className='ml-2 text-blue-500'><FontAwesomeIcon icon={['far','file']}/></div>Documentation</button>
            </div>
            </div>
            <div className='container grid grid-cols-2 divide-y divide-gray-500'>
                <div className='col-span-2'></div>
            <div className='py-10'>
                <img src='/light.svg'></img>
                <div className='py-5 text-xs pr-36 text-gray-400'>
                Webpixels attempts to bring the best development experience to designers and developers by offering the tools needed for having a quick and solid start in most web projects.
                </div>
                <ul className='flex'>
                    <li className='mr-5'><FontAwesomeIcon icon={['fab','dribbble']}/></li>
                    <li className='mr-5'><FontAwesomeIcon icon={['fab','github']}/></li>
                    <li className='mr-5'><FontAwesomeIcon icon={['fab','instagram']}/></li>
                    <li className='mr-5'><FontAwesomeIcon icon={['fab','facebook']}/></li>
                    
                    
                </ul>
            </div>
            <div className='item-top py-10'>
                <div className=' grid grid-cols-3 text-left table-fixed text-xs  '>

                        <div className='mb-3' >Account</div>
                        <div className='mb-3' >About</div>
                        <div className='mb-3'>Company</div>
                        <div className='py-1 text-gray-400'>Profile</div>
                        <div className='py-1 text-gray-400'>Services</div>
                        <div className='py-1 text-gray-400'>Community</div>
                        <div className='py-1 text-gray-400'>Settings</div>
                        <div className='py-1 text-gray-400'>Pricing</div>
                        <div className='py-1 text-gray-400'>Help center</div>
                        <div className='py-1 text-gray-400'>Billing</div>
                        <div className='py-1 text-gray-400'>Contact</div>
                        <div className='py-1 text-gray-400'>Support</div>
                        <div className='py-1 text-gray-400'>Notifications</div>
                        <div className='py-1 text-gray-400'>Careers</div>


                </div>

            </div>
            <div className='text-xs py-5 text-gray-400 text-xs'>© 2020 Webpixels. All rights reserved</div>
            <div className='flex flex-row-reverse text-center text-xs text-gray-400 py-5 py-5'>
                
                
                <div className='px-5'>Cookies</div>
                <div className='px-5'>Privacy</div>
                <div className='px-5'>Terms</div>
            </div>
            </div>
            

        </div>
    )
}