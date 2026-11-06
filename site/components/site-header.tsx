"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const links = [
  { label: "Início", href: "/" },
  { label: "Cursos", href: "/cursos" },
  { label: "Metodologia", href: "#" },
  { label: "Equipe", href: "#" },
  { label: "Contato", href: "/#contato" },
];

function NavigationLinks({
  onNavigate,
  pathname,
}: {
  onNavigate?: () => void;
  pathname: string;
}) {
  return (
    <>
      {links.map((link) => (
        <li key={link.label}>
          <Link
            className="nav-link"
            href={link.href}
            onClick={onNavigate}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        </li>
      ))}
      <li>
        <Link className="nav-cta" href="/#contato" onClick={onNavigate}>
          Fazer teste de nível
        </Link>
      </li>
    </>
  );
}

export default function SiteHeader() {
  const drawer = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  function openMenu() {
    if (!drawer.current?.open) {
      drawer.current?.showModal();
    }
  }

  function closeMenu() {
    drawer.current?.close();
  }

  return (
    <header>
      <div className="avisos">
        <p>Matrículas 2027 a partir de 03/11 · matrícula grátis durante a campanha</p>
      </div>

      <nav className="barra-nav" aria-label="Principal">
        <Link className="navbar-brand" href="/">
          PONTE IDIOMAS
        </Link>

        <ul className="navbar-nav navegacao-desktop">
          <NavigationLinks pathname={pathname} />
        </ul>

        <button
          className="navbar-toggler"
          type="button"
          onClick={openMenu}
          aria-label="Abrir menu"
          aria-haspopup="dialog"
        >
          <span className="navbar-toggler-icon" aria-hidden="true" />
        </button>

        <dialog
          className="drawer"
          ref={drawer}
          aria-labelledby="menuDrawerLabel"
          onClick={(event) => {
            if (event.target === drawer.current) {
              closeMenu();
            }
          }}
        >
          <div className="drawer-header">
            <h2 className="drawer-title" id="menuDrawerLabel">
              Menu
            </h2>
            <button
              type="button"
              className="btn-close"
              onClick={closeMenu}
              aria-label="Fechar menu"
            >
              &times;
            </button>
          </div>
          <ul className="navbar-nav">
            <NavigationLinks onNavigate={closeMenu} pathname={pathname} />
          </ul>
        </dialog>
      </nav>
    </header>
  );
}
