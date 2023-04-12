import Head from 'next/head'

import Link from 'next/link'
import 'bulma/css/bulma.min.css'


export default function todos() {
  
  return (
    <>
      <Head>
        <title>TO-DO PAGERINO</title>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <div>
          <nav class='navbar has-background-light'> 
            <div class="navbar-menu ">
              <div class="navbar is-center has-background-light">
                <Link href='/done'>
                  <button class="button is-dark is-center">
                    Done
                  </button>
                </Link>
              </div>
            </div>
          </nav>

          <div class= "container">
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
                        Temp input<br></br>
                        <button class="button is-dark"></button>
                      </div>
                    </div>
                  </div>
                  <div class="column is-4">
                    <div class="card large">
                      <div class="card-image is-size-1">
                        Title
                      </div>
                      <div class="card-content">
                        Temp input<br></br>
                        <button class="button is-dark"></button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>          
      </div>
    </>
  )
}
