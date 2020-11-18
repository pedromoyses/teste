import Image from 'next/image'

function Chamada() {
  return (
    <>
      <Image
        src="/BERLO2.jpg"
        alt="Imagem"
        unsized
      />
      <p>Esse é Berlo, no auge de sua juventude.</p>
    </>
  )
}

export default Chamada