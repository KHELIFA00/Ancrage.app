import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  operations,
  statusLabels,
  statusClass,
  formatEuro,
  progressPercent,
} from "@/lib/operations";

export default function Opportunites() {
  return (
    <div className="wrap">
      <NavBar active="/opportunites" />

      <div className="page-head">
        <p className="kicker serif">OPPORTUNITÉS</p>
        <h1>Les opérations en cours</h1>
        <p>
          Chaque acquisition est présentée avec ses données financières, sa
          formule et son niveau de risque. Cliquez sur une opération pour la
          fiche complète.
        </p>
        <div className="demo-flag">
          <span className="dot"></span>Données de démonstration — aucune
          collecte réelle n&apos;est active sur ce site
        </div>
      </div>

      <div className="filters">
        <div className="chip active">Toutes</div>
        <div className="chip">Ambulances</div>
        <div className="chip">VSL</div>
        <div className="chip">Taxis</div>
        <div className="chip">Ouvertes</div>
        <div className="chip">En analyse</div>
      </div>

      <div className="grid">
        {operations.map((op) => (
          <div className="op-card" key={op.slug}>
            <div className="op-top">
              <span className={`op-status ${statusClass[op.status]}`}>
                {statusLabels[op.status]}
              </span>
              <h3>{op.name}</h3>
              <p className="op-meta">
                {op.sector} · {op.location} · {op.formule}
              </p>
              <div className="op-figures">
                <span>Recherché</span>
                <span className="val">{formatEuro(op.amountTarget)}</span>
              </div>
              <div className="op-figures">
                <span>Réservé</span>
                <span className="val">{formatEuro(op.amountReserved)}</span>
              </div>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  style={{ width: `${progressPercent(op)}%` }}
                ></div>
              </div>
              <p className="op-progress-lbl">
                {op.amountTarget && op.amountReserved
                  ? `${progressPercent(op)} % financé`
                  : "Montant à confirmer"}
              </p>
            </div>
            <div className="op-bottom">
              <span className="op-tag">{op.risk}</span>
              <a href={`/opportunites/${op.slug}`} className="op-link">
                Voir la fiche →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="risk-band" style={{ marginBottom: 50 }}>
        <div className="dot"></div>
        <p>
          <strong>Rappel.</strong> Les statuts, montants et taux de
          financement affichés ici sont des données fictives à des fins de
          démonstration. Aucune rémunération ni remboursement n&apos;est
          garanti — voir la page Risques.
        </p>
      </div>

      <Footer />
    </div>
  );
}
