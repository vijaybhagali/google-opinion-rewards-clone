import React from 'react'

const Home = () => {
  return (
    <div className='px-4'>
    <div className='flex items-center justify-between pt-5 w-full'>
        <div>
            <p className='w-5'>☰</p>
        </div>
        <div className='flex gap-2'>
        <img className='w-20' src="https://th.bing.com/th/id/R.4aa108082e7d3cbd55add79f84612aaa?rik=I4dbPhSe%2fbHHSg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png&ehk=ewmaCOvP0Ji4QViEJnxSdlrYUrTSTWhi8nZ9XdyCgAI%3d&risl=&pid=ImgRaw&r=0" />
        <p>Opinion Rewards</p>
        </div>
        <img className='w-6 h-6 rounded-full' src="https://th.bing.com/th/id/OIP.fN9gx82LKxSZVpTc18meBgHaEo?pid=ImgDet&rs=1" />
    </div>
    <div className='pt-6'>
      <p className='text-xs'>GOOGLE PLAY BALANCE</p>
     <div className='flex justify-between items-center pt-2'>
     <p className='text-2xl text-green-700'>₹21.97</p>
     <div className='flex pt-2 items-center'>
     <img className='w-6' src="https://th.bing.com/th/id/OIP.FXaZbMJKVSi4ku3UP8ODdwHaHa?pid=ImgDet&rs=1" />
     <p className='text-xs'>Play Store</p>
     </div>
     </div> 
    </div>
    <p className='text-[10px] pt-4'>PART OF YOUR BALANCE IS EXPIRIJNG ON 1 JAN 2022</p>
    <div className='pt-4 space-y-3'>
      <p className='text-xs'>MY TASKS</p>
      <div className='p-3 border space-y-1 border-gray-300   '>
        <p className='text-[12px]'>No survey is available right now</p>
        <p className='text-[10px]'>We will notify you once the survey is available</p>
      </div>
    </div>
    <div className='pt-4 space-y-3'>
      <div className='p-3 pl-3 border space-y-1 border-gray-300   '>
        <img className='text-[12px]' src="https://img.freepik.com/premium-vector/different-people-give-review-rating-feedback_132971-164.jpg" alt="" />
        <p className='text-[12px]'>Share with your friends</p>
        <p className='text-[10px]'>Share the google Opinion rewards with your friends so that they can start earning too.</p>
      <button className='flex justify-end items-end w-full pr-8 text-blue-500 cursor-pointer'>Share</button>
      </div>
    </div>

    </div>
  )
}

export default Home