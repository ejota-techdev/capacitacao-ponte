import Link from "next/link";

export default function SiteFooter() {
  return (
    <>
      <Link
        href="#"
        className="botao botao-primario botao-arredondado whatsapp-fixo"
      >
        WhatsApp
      </Link>

      <footer>
        <div className="container-footer">
          <p className="logo-footer">PONTE IDIOMAS</p>
          <div className="footer-col">
            <h2>Ponte Idiomas</h2>
            <p>Inglês e espanhol</p>
            <p>Tijuca · Rio de Janeiro</p>
          </div>
          <nav className="footer-col" aria-label="Rodapé">
            <h2>Navegação</h2>
            <Link href="/cursos">Cursos</Link>
            <Link href="#">Metodologia</Link>
            <Link href="#">Equipe</Link>
            <Link href="/#contato">Contato</Link>
          </nav>
          <div className="footer-col">
            <h2>Contato</h2>
            <p>WhatsApp</p>
            <p>Instagram @ponte.idiomas</p>
            <p>Seg a sex, 9h às 20h</p>
          </div>
        </div>
      </footer>
    </>
  );
}
