import Head from 'next/head'

import Link from 'next/link'
import 'bulma/css/bulma.min.css'


export default function Home() {
  function handlePress(){

  }
  return (
    <>
      <Head>
        <meta charset="utf-8"></meta>
        
      </Head>
      <>
      <Head>
        <title>TO-DO PAGERINO</title>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      
      <div class>
          <nav class='navbar has-background-dark'> 
            <div class="navbar-menu">
              <div class="navbar is-center has-background-dark">
                <Link href='/todos'>
                  <button class="button is-light">
                    To-do
                  </button>
                </Link>
              </div>
            </div>
          </nav>

          <div class= "container ">
            <div class="section">
                <div class='columns'>
                  <div class="column has-text-centered">
                      <h1 class="title" >To-do!</h1><br></br>
                  </div>
                </div>
                <div class="row columns is-multiline">
                  <div class="column is-4">
                    <div class="card large">
                      <div class="card-image is-size-1">
                        Title
                      </div>
                      <div class="card-content">
                        Temp input
                      </div>
                    </div>
                  </div>
                  <div class="column is-4">
                    <div class="card large">
                      <div class="card-image is-size-1">
                        Title
                      </div>
                      <div class="card-content">
                        Temp input
                        
                      </div>

                    </div>
                  </div>
                  <div class="column is-4">
                    <div class="card large">
                      <div class="card-image is-size-1">
                        Title
                      </div>
                      <div class="card-content">
                        Temp input
                      </div>
                    </div>
                  </div>
                  
                </div>
            </div>
          </div>          
      </div>          
      
    </>
    </>
  )
}
