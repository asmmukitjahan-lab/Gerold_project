
import { GoArrowUpRight } from "react-icons/go";


const CommonBtn = ( {children}) => {
  return (
<<<<<<< HEAD
    <button className='btn cursor-pointer
=======
    <button className='bg-primary cursor-pointer
>>>>>>> 030af61d092d6c0e10d6b3e10b4605c787033a60
    text-white text-[15px] font-bold rounded-full py-3.75 px-8.75 flex items-center gap-1.5
    '>
        {children}
        <GoArrowUpRight />
    </button>
  )
}

export default CommonBtn;