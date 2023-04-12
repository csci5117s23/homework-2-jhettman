import Head from 'next/head'

import Link from 'next/link'
import 'bulma/css/bulma.min.css'


export default function Home() {
  function handlePress(){

  }
  return (
    <>
      <Head>
        <title>Jhebb barson's handy dandy to-do thingamabob</title>
        <meta charset="utf-8"></meta>
        
      </Head>
          <div class='column is-half'>hey, welcome to Jhett's to-do list app.<br></br> 
            It's likely worse than any other planning app.<br></br>  
            Try it out. <br></br>
          <Link href='/todos' ><button class="button is-primary" >Sure... I guess.</button> </Link>
          </div>
    </>
  )
}
