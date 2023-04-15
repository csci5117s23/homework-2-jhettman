import {getSingleTodo, doneTodo, editTodo} from "@/modules/Data";
import { useAuth } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

export default function ViewTodo({post}){
    const [loading, setLoading] = useState(true);
    const [todo, setTodo] = useState(null);
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    
    const [newDesc, setnewDesc] = useState("")
    const router = useRouter()
    
    useEffect(() => {
        async function startup(){
            if(userId){
                const token = await getToken({template:'codehooks'})
                await getSingleTodo(token, post)
                const newtodo= await getSingleTodo(token, post)
                
                if(newtodo){
                    if(newtodo.userId == userId){
                        setnewDesc(newtodo?.todo)
                    }
                    else{
                        router.push('/todos')
                    }
                }
                setTodo(newtodo)
                setLoading(false)
            }
        }
        startup();
    }, [isLoaded, post]);

    async function done(id) {
        const token = await getToken({template:'codehooks'})
        console.log(id)
        await doneTodo(token, id)
        router.push('/done')
    }
    async function edit(id) {
        const token = await getToken({template:'codehooks'})
        await editTodo(token, id, newDesc)
        router.push('/todos')
    }
    if(loading){
        return <span>Hol' on one sec... </span>
    }
    else{
        return(
        <div class="control">
                <textarea class="textarea" value={newDesc} onChange={(e)=>setnewDesc(e.target.value)}></textarea>
                <button class="button is-dark" onClick={() => {done(todo._id)}}>Mark done?</button>
                <div class='buttons are-medium'>
                    <Link href='/todos'><button class="button is-danger">Cancel</button></Link>
                    <button class="button is-success" onClick={() => {edit(todo._id)}}>Submit!</button>
                </div>
            </div>
        )
    }
}