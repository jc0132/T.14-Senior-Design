import bmeslogo from '../images/bmes-logo.png'
function Header() {
    return (
        <div className="w-full flex border-b-2 border-b-black flex-col h-[32rem]">
            <div className='h-[10%] bg-[#394374] flex justify-center content-center'>
                <div className='text-center text-white flex justify-center items-center tracking-wider text-2xl'>TEAM 14</div>
            </div>
            <div className='flex-col text-[#394374] mb-10'>
                <p className='text-center font-bold text-2xl p-6'>
                    ONE-WAY SURGICAL DRAINAGE AND FLUSHING Y-ADAPTOR
                </p>
                <p className='text-center text-[1.25rem] px-6 mb-5'>
                    James Virtucio, Natty Lapinski, Nuha Mirza, Terry Coley, Joie Chen
                </p>
                <p className='text-center text-[1.25rem] px-6'>
                    Dr. Timothy Nieson, Dr. Adrian Shieh, Dr. Wan Shih
                </p>
            </div>
            <div className='h-[20%] flex justify-center mb-1 p-1'>
                <img className='object-contain'src={bmeslogo}/>
            </div>
        </div>
    )
}

export default Header;