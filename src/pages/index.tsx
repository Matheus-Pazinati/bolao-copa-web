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
    <div>
      <main>
        <Image src={logoImg} alt="" />
        <div>
          <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>
          <div>
            <Image src={userAvatarImg} alt="" />
            <strong>
             <span>+12.592</span> pessoas já estão usando
            </strong>
          </div>
        </div>
        <form>
          <input type="text" required placeholder='Qual nome do seu bolão' />
          <button type="submit">Criar meu bolão</button>
        </form>
        <p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>
        <footer>
          <div>
            <Image src={checkIconImg} alt="" />
            <div>
              <span>+2034</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div>
            <Image src={checkIconImg} alt="" />
            <div>
              <span>+100000</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </footer>
      </main>
      <Image src={appBannerPreviewImg} alt="Preview da aplicação no celular" quality={100} />
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
