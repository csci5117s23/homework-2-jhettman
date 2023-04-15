import Head from 'next/head'
import { useRouter } from "next/router";
import Link from 'next/link'
import 'bulma/css/bulma.min.css'
import DoneComp from '@/components/DoneComp'
import { useAuth } from "@clerk/nextjs";
export default function Home() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const router = useRouter();
  if(!userId){
    if (typeof window === "undefined") return null;
    router.push('/')
  }
  else{
    return (
      <>
        
        
        <Head>
          <title>Done PAGERINO</title>
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
                        <h1 class="title" >These Done!</h1><br></br>
                    </div>
                  </div>
                  <div class="row columns is-multiline">
                    <DoneComp></DoneComp>
                  </div>
              </div>
            </div>          
        </div>          
        
      </>
      
    )
  
    }
}
