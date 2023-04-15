import Head from 'next/head'
import { SignInButton, SignUpButton, re, SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/router";
import Link from 'next/link'
import 'bulma/css/bulma.min.css'
import todoComp from '@/components/TodoComp';
import { useAuth } from "@clerk/nextjs";
export default function Home() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  
  const router = useRouter()
  if(userId){
    router.push('/todos')
  }
  else{
  return (
    <>
      <Head>
        <title>Jhebb barson's handy dandy to-do thingamabob</title>
        <meta charset="utf-8"></meta>
        
      </Head>
          <div class='column is-half'>hey, welcome to Jhett's to-do list app.<br></br> 
            It's likely worse than any other planning app.<br></br>  
            Try it out. <br></br>
            <SignInButton redirectUrl='/todos'>Sign in!</SignInButton><br></br>
          </div>
    </>
  )
  }
}
