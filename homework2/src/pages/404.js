import Link from 'next/link';
import 'bulma/css/bulma.min.css'
import TodoComp from '@/components/TodoComp';
export default function Custom404() {
    
    return(
        <>
     <h1>Oi! We ain't got this page! </h1>
     <Link href='/todos' ><button class="button is-primary" >Take me back, pretty please!</button> </Link>
     </>
    )
}