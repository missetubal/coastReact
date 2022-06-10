import { useEffect, useState } from "react";
import { Container, Text } from "./message.style";

export default function Message({type, message}){
    const [visible, setVisible] = useState(false)

    useEffect(()=>{
        if(message){
            setVisible(true)
            return () => clearTimeout(setTimeout(()=>setVisible(false), 3000))
        }
    }, [message])

    return(
        
        <Container>
            {visible && (<Text type={type}>{message}</Text>)}
        </Container>
    )
}