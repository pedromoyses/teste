import Image from 'next/image'

function Chamada() {
  return (
    <>
      <Image
        src="/Jam1.png"
        alt="Imagem"
        unsized
      />
      <p>Bem vindo!</p>
    </>
  )
}

export default Chamada