import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  var texto = ""
  return (
    <div className={styles.container}>
      <head>
        <title>Bem Vindo a História de Berlo</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Image src="/CABEÇA.jpg"
        unsized={true}
        alt="teste"/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo a história de Berlo, por favor coloque sua máscara - não pode ser a do teatro
        </h1>
        
        <h2><a target="_blank" rel="noopener noreferrer" 
          href="https://www.youtube.com/channel/UC7ngz6vzPqtgdt9_YYO2P8A?view_as=subscriber">Quem Matou Dionísio?</a></h2>
      

        <Link href="vacinas/vacina1">{texto}</Link>
        


        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Depoimento de sua irmã &rarr;<a target="_blank" rel="noopener noreferrer" 
          href="https://www.youtube.com/channel/UC7ngz6vzPqtgdt9_YYO2P8A?view_as=subscriber">Sobre sua infância</a>

            </h3>
            <p>Assista o depoimento da irmã de Berlo</p>
          </a>

          <a href="Chamada/chamada" className={styles.card}>
            <h3>Como é Berlo? </h3>
            <p>Veja seu rosto.</p>
          </a>

          <a
            href="https://youtu.be/QHPsJeo3_hk"
            className={styles.card}
          >
            <h3>Depoimentos de George e Mary &rarr;</h3>
            <p>Clique aqui para ver os depoimentos de George e Mary que abrigaram Berlo em uma de suas viagens.</p>
          </a>

          <a
            href="Chamada/chamada2"
            className={styles.card}
          >
            <h3> Texto sobre seu documentário "Quem Matou Dionísio?" &rarr;</h3>
            <p>
              Clique aqui.
            </p>
          </a>

          <a
            href="https://youtu.be/wW90etFT6_U"
            className={styles.card}
          >
            <h3>Caso Berlo na TV &rarr;</h3>
            <p>Assista duas menções a história de Berlo na TV Aberta.</p>
          </a>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
