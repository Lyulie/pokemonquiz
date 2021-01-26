import { Theme as theme} from "../src/utils/theme"
import { Header } from "../src/components/Header"
import Footer from "../src/components/Footer"
import QuizLogo from "../src/components/QuizLogo"

import { useState } from 'react'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Base64 from "../src/components/Base64"

export default function Home() {
  
  const [name, setName] = useState("")
  const router = useRouter()

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(name) {
      const nameEncoded = Base64.encode(name)
      router.push(`/quiz?name=${nameEncoded}`)
    }
  }

  return (
    <div className="
    container
    mx-20 my-20
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
          {theme.title}
        </Header>

        <main className="
        grid-row
        h-full
        px-6
        pt-6
        "
        >
          <p className="
          text-white
          my-4 mx-2
          whitespace-pre-wrap
          break-words
          ">{theme.description}</p>
          
          <form 
            className="
            flex
            items-center
            justify-between
            gap-4
            "
            onSubmit={handleSubmit}
          >
            <input 
              className={`
              w-full
              rounded
              py-2 px-2
              focus:outline-none
              focus:ring-2
              focus:ring-${name? "indigo":"red"}-500
              placeholder-indigo-300
              text-indigo-900
              `}
              type="text" 
              placeholder="Nome"
              onChange={(e) => handleName(e)}
            />
            <button 
              type="submit"
              className="
              focus:outline-none
              "              
            >
              <FontAwesomeIcon className={`
              ${name?"text-indigo-200": "text-red-200 cursor-not-allowed"}
              text-2xl
              ${name? "hover:text-indigo-100":""}
              transition
              duration-800
              `} icon={faCheckCircle} />
            </button>
          </form>
        </main>
        
        <div className="
        flex
        items-center
        fixed-w
        px-6
        py-6
        ">
          <footer className="
          h-40
          bg-indigo-300
          flex
          px-6
          inner-w
          rounded
          "
          >
            <Footer />
          </footer>
        </div>
        
          
      </section>

      
    </div>
  )
}
