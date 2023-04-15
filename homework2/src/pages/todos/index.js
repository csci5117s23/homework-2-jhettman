import Head from 'next/head'
import { useRouter } from "next/router";
import Link from 'next/link'
import 'bulma/css/bulma.min.css'
import TodoComp from '@/components/TodoComp'
import { useAuth } from "@clerk/nextjs";
export default function todos() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  let router = useRouter()
  if(!userId){
    if (typeof window === "undefined") return null;
    router.push('/')
  }
  else{
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
                    <TodoComp></TodoComp>
                  </div>
              </div>
            </div>          
        </div>
      </>
    )
    }
  
}
