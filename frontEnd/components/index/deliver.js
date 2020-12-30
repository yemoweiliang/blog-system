import '../common/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Deliver(){
    return (
        <div className="container max-auto grid  grid-cols-2 items-center  mb-20">
            <div >
                <img src='/illustration-2.svg'></img>
            </div>
            <div  className='ml-auto pl-12'>
                <div className='text-3xl mt-4 font-medium leading-loose'>
                We deliver the high quality end results you need
                </div>
                <div className='text-gray-500 my-4 leading-loose' >
                With Quick you get components and examples, including tons of variables that will help you customize this theme with ease.
                </div>
                <div>
                    <ul>
                        <li className="flex items-center mt-4 ">
                        <div className="rounded-full h-8 w-8  items-center bg-blue-200 p-2"><FontAwesomeIcon icon={['fas','store-alt']} className='text-blue-500' /></div>
                        <span className='ml-3'>Perfect for modern startups</span>
                        </li>
                        <li className="flex items-center mt-4 mr-3">
                        <div className="rounded-full h-8 w-8  items-center justify-center bg-yellow-200 p-2"><FontAwesomeIcon icon={['fas','palette']} className='text-yellow-500' /></div>
                         <span className='ml-3'>Built with customization and ease-of-use at its core</span></li>
                         <li className="flex items-center mt-4 mr-3">
                         <div className="rounded-full h-8 w-8  items-center justify-center bg-green-200 p-2"><FontAwesomeIcon icon={['fas','cog']} className='text-green-500' /></div>
                         <span className='ml-3'>Quality design and thoughfully crafted code</span></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}