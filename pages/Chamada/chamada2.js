import Image from 'next/image'

function Chamada() {
  return (
    <>
      <Image
        src="/berlo.png"
        alt="Imagem"
        unsized
      />
      <p>Texto publicado no Jornal A Hora de Desembargador de Dentro, Minas Específicas</p>
    </>
  )
}

export default Chamada