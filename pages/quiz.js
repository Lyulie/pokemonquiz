import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import Base64 from "../src/components/Base64"
import { Header } from "../src/components/Header"
import QuizLogo from "../src/components/QuizLogo"
import { Theme as theme} from "../src/utils/theme"

export default function QuizPage() {
    
    const router = useRouter()
    const name = Base64.decode(`${router.query.name}`)

    return(
        <div className="
        container
        mx-40 sm:mx-auto
        mt-20
        max-w-sm
        ">
            <div className="
            flex-col
            fixed-w
            mb-4
            ">
                <QuizLogo /> 
            </div>

            <section className="
            flex-col 
            ring-2
            ring-purple-200
            fixed-w
            rounded
            h-70
            bg-indigo-400
            ">
                <Header>
                Olá {name}
                </Header>

                <main className="
                flex
                flex-col
                items-center
                h-full
                px-6
                py-auto
                "
                >
                    <FontAwesomeIcon className="
                    mt-5
                    text-3xl
                    text-green-300
                    " icon={faRobot} />

                    <p className="
                    text-center
                    text-white
                    my-4 mx-2
                    whitespace-pre-wrap
                    break-words
                    ">{theme.maintenance}</p>
                </main>

            </section>

            
        </div>
    )


}