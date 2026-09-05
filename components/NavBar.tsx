export default function NavBar({ active }: { active?: string }) {
  const links = [
    { href: "/opportunites", label: "Opportunités" },
    { href: "/formules", label: "Formules" },
    { href: "/methode-selection", label: "Méthode de sélection" },
    { href: "/risques", label: "Risques" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav>
      <div className="brand">Ancrage</div>
      <div className="navlinks">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={active === l.href ? { color: "var(--ink)", fontWeight: 500 } : undefined}
          >
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="/espace-investisseur"
        className="btn btn-ghost"
        style={{ padding: "9px 18px", fontSize: 14 }}
      >
        Espace investisseur
      </a>
    </nav>
  );
}
