import "tailwindcss/dist/tailwind.min.css";
import "../styles/extra-styles.css"
import "../styles/corner.css"
import "../styles/footer.css"
import { GitHubCorner } from "../src/components/GitHubCorner"

function MyApp({ Component, pageProps }) {
  return (
    <div className="
    flex
    w-screen
    h-screen
    pokemon bg-cover no-repeat
    justify-center
    ">
      <GitHubCorner className="z-50"/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
