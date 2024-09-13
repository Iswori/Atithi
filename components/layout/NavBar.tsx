'use client'

import { useAuth, UserButton } from "@clerk/nextjs";
import Container from "../container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const NavBar = () => {
    const router = useRouter()
    const  {userId } = useAuth()
    return (  
        <div className="sticky top-0 border border-b-primary/10 bg-secondary">
            <Container>
              <div className="flex justify-between items-center">
              <div className="flex  items-center gap-1 cursor-pointer " onClick={()=> router.push('/')}>
                    <Image src='/homestay_logo.png' alt="logo" width='50' height="50"/>
                    <div className="font-bold text-xl">Atithi</div>
                </div>

                <div className="flex gap-3 items-center">
                    <div>
                        theme
                    </div>

                    <UserButton afterSignOutUrl="/" />
                    { !userId && <>
                    <Button onClick={() => router.push('/sign-in')} variant='outline' size='sm'>Sign in </Button>
                    <Button onClick={() => router.push('/sign-up')}  size='sm'>Sign out</Button>
                    </>}
                </div>
              </div>

               
    
            </Container>
            
        </div>
    );
}
 
export default NavBar;