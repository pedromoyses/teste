import Image from 'next/image'

function Chamada() {
  return (
    <>
      <Image
        src="/BERLO2.jpg"
        alt="Imagem"
        unsized
      />
      <p>Bem vindo!</p>
    </>
  )
}

export default Chamada