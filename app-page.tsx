import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="wrap">
        <NavBar active="/" />

        <div className="hero">
          <p className="kicker serif">
            ACQUISITION DE PME — AMBULANCES · VSL · TAXIS
          </p>
          <h1>
            Nous rachetons des PME rentables. Vous financez des opérations
            précises, pas une promesse.
          </h1>
          <p className="lead">
            Ancrage identifie, audite et acquiert des entreprises de mobilité
            sanitaire et de transport en Provence, avec une méthode de
            sélection exigeante et une gestion transparente, opération par
            opération.
          </p>
          <div className="hero-ctas">
            <a href="/opportunites" className="btn btn-primary">
              Découvrir les opportunités
            </a>
            <a href="/comment-ca-marche" className="btn btn-ghost">
              Comprendre le fonctionnement
            </a>
            <a href="/liste-attente" className="btn btn-ghost">
              Rejoindre la liste investisseurs
            </a>
          </div>

          <div className="stat-row">
            <div className="stat">
              <div className="num">3</div>
              <div className="lbl">secteurs ciblés au démarrage</div>
            </div>
            <div className="stat">
              <div className="num">Bouches-du-Rhône</div>
              <div className="lbl">zone géographique initiale</div>
            </div>
            <div className="stat">
              <div className="num">Capital à risque</div>
              <div className="lbl">
                rémunération non garantie — voir la page Risques
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker serif">LE PRINCIPE</p>
            <h2>Financer une entreprise identifiée, pas un fonds abstrait</h2>
            <p>
              Chaque opération est adossée à une entreprise réelle, analysée
              en détail avant d&apos;être proposée. Vous choisissez
              l&apos;opération, pas une enveloppe globale.
            </p>
          </div>
          <div className="grid-3">
            <div className="card">
              <h3>Ambulances</h3>
              <p>
                Transport sanitaire, flottes de véhicules, conventions et
                agréments à examiner opération par opération.
              </p>
            </div>
            <div className="card">
              <h3>VSL</h3>
              <p>
                Véhicules sanitaires légers — activité récurrente, dépendante
                de la qualité des conventions et du parc.
              </p>
            </div>
            <div className="card">
              <h3>Taxis</h3>
              <p>
                Licences, zones de chalandise, clientèle conventionnée —
                critères spécifiques d&apos;analyse pour ce secteur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker serif">COMMENT ÇA MARCHE</p>
            <h2>Neuf étapes, de l&apos;identification à la sortie</h2>
          </div>
          <div className="steps">
            {[
              ["01", "Identification", "Recherche d'entreprises correspondant aux critères sectoriels et géographiques."],
              ["02", "Analyse préliminaire", "Premier passage sur les indicateurs financiers et opérationnels."],
              ["03", "Audit", "Comptes, trésorerie, dettes, passif fiscal et social, flotte de véhicules, litiges."],
              ["04", "Négociation", "Prix, valorisation et conditions de reprise."],
              ["05", "Présentation de l'opération", "Publication de la fiche détaillée avec scénarios prudent, central et favorable."],
              ["06", "Financement", "Collecte auprès des investisseurs pour l'opération concernée."],
              ["07", "Acquisition", "Reprise effective de l'entreprise par la société d'acquisition dédiée."],
              ["08", "Exploitation", "Suivi de la performance de l'entreprise acquise."],
              ["09", "Rémunération et remboursement", "Selon les conditions de l'opération et la formule retenue — jamais garantis."],
            ].map(([n, title, desc]) => (
              <div className="step" key={n}>
                <div className="n">{n}</div>
                <div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <p className="kicker serif">LES DEUX FORMULES</p>
            <h2>Deux façons de financer une opération</h2>
          </div>
          <div className="formules">
            <div className="formule">
              <span className="tag serif">FORMULE 1</span>
              <h3>Remboursement progressif</h3>
              <ul>
                <li>Rémunération variable calculée chaque année selon les performances</li>
                <li>Remboursement partiel du capital si la situation financière le permet</li>
                <li>Le capital restant exposé diminue au fil du temps</li>
              </ul>
            </div>
            <div className="formule">
              <span className="tag serif">FORMULE 2</span>
              <h3>Capital immobilisé</h3>
              <ul>
                <li>Durée cible envisagée de 3 à 5 ans selon l&apos;opération</li>
                <li>Rémunération variable pendant la période d&apos;immobilisation</li>
                <li>Remboursement principalement à l&apos;échéance, selon les conditions contractuelles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="risk-band">
            <div className="dot"></div>
            <p>
              <strong>Capital à risque.</strong> Le montage juridique et
              réglementaire définitif de ce projet n&apos;est pas encore
              validé. Aucune collecte réelle de fonds n&apos;est possible sur
              ce site pour le moment. La rémunération et le remboursement ne
              sont jamais garantis.{" "}
              <a href="/risques">Consulter la page Risques</a>
            </p>
          </div>
        </div>
      </section>

      <div className="wrap">
        <Footer />
      </div>
    </>
  );
}
