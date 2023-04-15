import '@/styles/globals.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useRouter } from "next/router";
import { ClerkProvider, SignedIn,SignedOut,RedirectToSignIn } from '@clerk/nextjs'
export default function App({ Component, pageProps }) {
  const router = useRouter()
  return( 
    <ClerkProvider  >
        <Component {...pageProps} />
    </ClerkProvider>
  )
}
