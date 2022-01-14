export default function Footer() {
  return (
    <footer className="bg-gray-300 w-full py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-medium flex flex-wrap justify-between">
          <li className="my-2">
            <a
              href="https://sistemas.unmsm.edu.pe/site/index.php"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
            >
              Página Oficial
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}