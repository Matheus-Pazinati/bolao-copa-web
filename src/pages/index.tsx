// interface HomeProps {
//   count: number
// }
import Image from 'next/image'

import logoImg from '../assets/logo.svg'
import userAvatarImg from '../assets/users-avatar-example.png'
import checkIconImg from '../assets/check-icon.svg'
import appBannerPreviewImg from '../assets/app-preview-mobile-banner.png'



export default function Home() {
  return (
    <div className='max-w-[1124px] h-screen grid grid-cols-2 items-center mx-auto gap-28'>
      <main>
        <Image src={logoImg} alt="" />
        <div>
          <h1 className='mt-12 mb-10 font-bold text-5xl text-white leading-none'>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>
          <div className='flex items-center gap-2'>
            <Image src={userAvatarImg} alt="" />
            <strong className='font-bold text-xl text-[#E1E1E6]'>
             <span className='text-[#129E57]'>+12.592</span> pessoas já estão usando
            </strong>
          </div>
        </div>
        <form className='mt-10 mb-4 flex items-center gap-2'>
          <input 
            type="text" 
            required 
            placeholder='Qual nome do seu bolão?'
            className='flex-1 px-6 py-4 text-sm text-[#C4C4CC] rounded border border-x-[1px] border-[#323238] bg-[#202024] focus:outline-[#F7DD43]' 
          />
          <button 
            type="submit"
            className='px-6 py-4 rounded text-sm text-[#09090A] bg-[#F7DD43] font-bold uppercase hover:bg-[#E1C623]'
            >
            Criar meu bolão
          </button>
        </form>
        <p className='text-[#8D8D99] text-sm leading-6'>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🏆</p>
        <footer className='mt-10 flex items-center justify-between'>
          <div className='flex items-center gap-6'>
            <Image src={checkIconImg} alt="" />
            <div className='flex flex-col'>
              <span className='text-[#E1E1E6] font-bold text-2xl'>+2034</span>
              <span className='text-[#E1E1E6] text-base'>Bolões criados</span>
            </div>
          </div>
          <div className='w-[1px] bg-[#323238] h-10'></div>
          <div className='flex items-center gap-6'>
            <Image src={checkIconImg} alt="" />
            <div className='flex flex-col'>
              <span className='text-[#E1E1E6] font-bold text-2xl'>+10000</span>
              <span className='text-[#E1E1E6] text-base'>Palpites enviados</span>
            </div>
          </div>
        </footer>
      </main>
      <Image src={appBannerPreviewImg} alt="Preview da aplicação no celular" quality={100} width={500} />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const request = await fetch('http://localhost:3333/pools/count')
//   const data = await request.json()

//   return {
//     props: {
//       count: data.count
//     }
//   }
// }
