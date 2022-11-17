import { FormEvent, useState } from 'react'

import Image from 'next/image'

import logoImg from '../assets/logo.svg'
import userAvatarImg from '../assets/users-avatar-example.png'
import checkIconImg from '../assets/check-icon.svg'
import appBannerPreviewImg from '../assets/app-preview-mobile-banner.png'

import { api } from '../lib/axios'

import Swal from 'sweetalert2'

interface HomeProps {
  poolsCount: number
  usersCount: number
  guessesCount: number
}

export default function Home({poolsCount, usersCount, guessesCount}: HomeProps) {

  const [pollTitle, setPollTitle] = useState('')

  const pollTitleFilled = pollTitle.length > 0

  async function handleCreatePoll(event: FormEvent) {
    event.preventDefault()

    try {
      await api.post('/pools', {
        title: pollTitle
      })
      .then((response) => {
        Swal.fire({
          title: 'Bolão criado com sucesso!',
          text: `Código do bolão: ${response.data.code}. Compartilhe com a galera!`,
          icon: 'success'
        })
      })
    } catch (error) {
      console.log(error)
    }

    setPollTitle('')
  }

  return (
    <div className='max-w-[1124px] h-screen grid grid-cols-2 items-center mx-auto gap-28'>
      <main>
        <Image src={logoImg} alt="" />
        <div>
          <h1 className='mt-12 mb-10 font-bold text-5xl text-white leading-none'>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>
          <div className='flex items-center gap-2'>
            <Image src={userAvatarImg} alt="" />
            <strong className='font-bold text-xl text-[#E1E1E6]'>
             <span className='text-[#129E57]'>+{usersCount}</span> pessoas já estão usando
            </strong>
          </div>
        </div>
        <form onSubmit={handleCreatePoll} className='mt-10 mb-4 flex items-center gap-2'>
          <input 
            type="text" 
            required 
            placeholder='Qual nome do seu bolão?'
            className='flex-1 px-6 py-4 text-sm text-[#C4C4CC] rounded border border-x-[1px] border-[#323238] bg-[#202024] focus:outline-[#F7DD43]'
            onChange={(e) => setPollTitle(e.target.value)} 
            value={pollTitle}
          />
          <button 
            type="submit"
            disabled={!pollTitleFilled}
            className='px-6 py-4 rounded text-sm text-[#09090A] bg-[#F7DD43] font-bold uppercase enabled:hover:bg-[#E1C623] disabled:cursor-not-allowed '
            >
            Criar meu bolão
          </button>
        </form>
        <p className='text-[#8D8D99] text-sm leading-6'>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🏆</p>
        <footer className='mt-10 flex items-center justify-between'>
          <div className='flex items-center gap-6'>
            <Image src={checkIconImg} alt="" />
            <div className='flex flex-col'>
              <span className='text-[#E1E1E6] font-bold text-2xl'>+{poolsCount}</span>
              <span className='text-[#E1E1E6] text-base'>Bolões criados</span>
            </div>
          </div>
          <div className='w-[1px] bg-[#323238] h-10'></div>
          <div className='flex items-center gap-6'>
            <Image src={checkIconImg} alt="" />
            <div className='flex flex-col'>
              <span className='text-[#E1E1E6] font-bold text-2xl'>+{guessesCount}</span>
              <span className='text-[#E1E1E6] text-base'>Palpites enviados</span>
            </div>
          </div>
        </footer>
      </main>
      <Image src={appBannerPreviewImg} alt="Preview da aplicação no celular" quality={100} width={500} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const [poolsCount, usersCount, guessesCount] = await Promise.all([
    api.get('/pools/count'),
    api.get('/users/count'),
    api.get('/guesses/count')
  ])

  return {
    props: {
      poolsCount: poolsCount.data.count,
      usersCount: usersCount.data.count,
      guessesCount: guessesCount.data.count
    }
  }
}
