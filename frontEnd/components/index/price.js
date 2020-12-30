import '../common/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Price(){
    return (
        <div className="container max-auto grid  grid-cols-12  mb-20">
            <div className='col-start-3 col-span-8 text-center text-3xl mt-4 font-medium leading-loose'>
                Simple, Straight Pricing
            </div>
            <div className='col-start-3 col-span-8 text-center text-gray-500 leading-loose mt-2 p-5'>
             Thousands of developers around the world have already made Quick the main tool for building websites.
            </div>
            <div className='col-start-3 col-span-4 text-center ' >
                    <div className='box bg-gray-50 rounded-md divide-y divide-gray-300 hover:divide-gray-500  mt-2 p-5 transform scale-90 hover:scale-110 transition duration-500'>
                            <div >
                            <div className='mt-2 text-3xl'>$49</div><div className='mt-2 mb-10'>Standard License</div>  
                            </div>
                            <div className='text-xs'>
                            <ul className='leading-loose mb-5'>
                                <li className='mt-10'>1 end product</li>
                                <li>Use for personal or a client</li>
                                <li><div 
                                    className='inline-flex'
                                >Use in an end product</div>
                                     </li>
                                <li>6 months technical support</li>
                            
                            </ul>
                            <button className="bg-yellow-500  text-white py-2 px-4 rounded p-1 mb-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Purchase now</button>
                    </div>

                    </div>
            </div>
            <div className='col-span-4 text-center p-19 '>
                <div className='box bg-blue-500 rounded-md text-gray-50 px-3 py-10 transform scale-90 hover:scale-110 transition duration-500'>
                    <div className="grid grid-cols-1 divide-y divide-gray-500">
                        <div ><div className='mt-2 text-3xl'>$590 </div><div className='mt-2 mb-10'>Extended License</div>  </div>
                        <div className='text-xs'>
                                <ul className='leading-loose mb-5'>
                                    <li className='mt-10'>1 end product</li>
                                    <li>Use for personal or a client</li>
                                    <li><div 
                                        className='inline-flex'
                                    >Use in an end product that is</div> <div className='text-green-400 inline-flex border-dotted border-b-2'>sold</div>
                                        </li>
                                    <li>6 months technical support</li>
                                
                                </ul>
                                <button className="bg-gray-50 text-black  scale-100 hover:scale-110 py-2 px-4 rounded p-1 mb-5 transition duration-500 ease-in-out transform hover:-translate-y-2">Purchase now</button>
                        </div>
                        </div>
                </div>
            </div>
            <div className='col-span-12 text-center text-xs mt-20'>
                <div className='text-gray-500 mb-2'>Both pricings contains all 6 months free support. Need more?</div>
                
                <div className='text-yellow-500 inline-flex border-dashed border-yellow-500 border-b-2'>Contact us
                <div className='h-4 w-4 ml-3'><FontAwesomeIcon icon={['fas','arrow-right']}/></div> 
                 </div>
            </div>
        </div>


    )
}