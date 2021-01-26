import { Theme as theme} from "../src/utils/theme"
import Footer from "../src/components/Footer"
import QuizLogo from "../src/components/QuizLogo"

export default function Home() {
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
          
          <header className="
          flex
          h-14
          bg-indigo-300
          py-6
          rounded-tl-md rounded-tr-md
          items-center
          justify-center
          "
          >
            <h1 className="
            self-center
            font-mono
            font-bold
            text-xl
            text-white
            ">
              {theme.title}
            </h1>
          </header>

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
