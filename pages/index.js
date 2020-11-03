import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  var texto = "Seu novo serviço de Videochamadas"
  return (
    <div className={styles.container}>
      <head>
        <title>Bem Vindo ao Jam Meet</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Image src="/Logomenor.png"
        unsized={true}
        alt="teste"/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo ao Jam - Meet 
        </h1>
        
        <h2><a target="_blank" rel="noopener noreferrer" 
          href="https://www.youtube.com/channel/UC7ngz6vzPqtgdt9_YYO2P8A?view_as=subscriber">Como funciona?</a></h2>
      

        <Link href="vacinas/vacina1">{texto}</Link>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Criar nova conta &rarr;<a target="_blank" rel="noopener noreferrer" 
          href="https://www.youtube.com/channel/UC7ngz6vzPqtgdt9_YYO2P8A?view_as=subscriber">Como funciona?</a>

            </h3>
            <p>Crie sua nova conta e comece sua própria Jam.</p>
          </a>

          <a href="Chamada/chamada" className={styles.card}>
            <h3>Nova Chamada </h3>
            <p>Crie agora um link para seu ensaio.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Depoimentos de Usuários &rarr;</h3>
            <p>Clique aqui para ouvir o depoimento de nossos usuários.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Entrar em uma Jam &rarr;</h3>
            <p>
              Clique aqui.
            </p>
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
