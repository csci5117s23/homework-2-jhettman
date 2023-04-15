import { UserProfile } from "@clerk/nextjs";
import { useRouter } from "next/router";
import ViewTodo from "@/components/ViewTodo";
import 'bulma/css/bulma.min.css'
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
export default function singleTodo(){
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const router = useRouter();
    const {todoId} = router.query;
    if(!userId){
        if (typeof window === "undefined") return null;
        router.push('/')
    }
    else{
        return(
            <>
            <div class="container">
                <p class="has-text-centered is-size-4 box">Post editor</p>
                <ViewTodo post={todoId}></ViewTodo>
            </div>
            </>
        )
    }
}