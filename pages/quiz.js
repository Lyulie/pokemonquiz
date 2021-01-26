import next from 'next'
import { useRouter } from 'next/router'
import Base64 from "../src/components/Base64"

export default function QuizPage() {
    
    const router = useRouter()
    const name = Base64.decode(`${router.query.name}`)

    return(
        <h1>{name}</h1>
    )


}