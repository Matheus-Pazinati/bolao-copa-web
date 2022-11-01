interface HomeProps {
  count: number
}

export default function Home({ count }: HomeProps) {
  return (
    <h1>Contagem: {count}</h1>
  )
}

export const getServerSideProps = async () => {
  const request = await fetch('http://localhost:3333/pools/count')
  const data = await request.json()

  return {
    props: {
      count: data.count
    }
  }
}
