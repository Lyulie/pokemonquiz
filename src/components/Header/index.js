export const Header = (props) => {
    return (
      <header className="
          flex
          h-14
          bg-indigo-300
          py-6
          rounded-tl rounded-tr
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
              {props.children}
            </h1>
          </header>
    )
  }