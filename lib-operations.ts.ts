export type OperationStatus =
  | "ouverte"
  | "analyse"
  | "bientot"
  | "financee"
  | "exploitation"
  | "remboursee";

export interface Operation {
  slug: string;
  name: string;
  sector: "Ambulances" | "VSL" | "Taxis";
  location: string;
  formule: "Formule 1" | "Formule 2" | "Non définie";
  status: OperationStatus;
  amountTarget: number | null;
  amountReserved: number | null;
  risk: string;
}

export const statusLabels: Record<OperationStatus, string> = {
  ouverte: "Ouverte",
  analyse: "Analyse",
  bientot: "Bientôt disponible",
  financee: "Financée",
  exploitation: "En exploitation",
  remboursee: "Remboursée",
};

export const statusClass: Record<OperationStatus, string> = {
  ouverte: "st-ouverte",
  analyse: "st-analyse",
  bientot: "st-bientot",
  financee: "st-financee",
  exploitation: "st-exploitation",
  remboursee: "st-remboursee",
};

export const operations: Operation[] = [
  {
    slug: "ambulances-du-littoral",
    name: "Ambulances du Littoral",
    sector: "Ambulances",
    location: "Marseille (13)",
    formule: "Formule 1",
    status: "ouverte",
    amountTarget: 450000,
    amountReserved: 312000,
    risk: "Risque modéré",
  },
  {
    slug: "vsl-etoile-provence",
    name: "VSL Étoile Provence",
    sector: "VSL",
    location: "Aix-en-Provence (13)",
    formule: "Formule 2",
    status: "ouverte",
    amountTarget: 280000,
    amountReserved: 96000,
    risk: "Risque modéré",
  },
  {
    slug: "taxis-salonais-reunis",
    name: "Taxis Salonais Réunis",
    sector: "Taxis",
    location: "Salon-de-Provence (13)",
    formule: "Non définie",
    status: "analyse",
    amountTarget: null,
    amountReserved: null,
    risk: "Risque à évaluer",
  },
  {
    slug: "ambulances-esterel",
    name: "Ambulances Estérel",
    sector: "Ambulances",
    location: "Aubagne (13)",
    formule: "Formule 1",
    status: "bientot",
    amountTarget: 380000,
    amountReserved: null,
    risk: "Risque à évaluer",
  },
  {
    slug: "vsl-du-pays-daix",
    name: "VSL du Pays d'Aix",
    sector: "VSL",
    location: "Vitrolles (13)",
    formule: "Formule 1",
    status: "financee",
    amountTarget: 310000,
    amountReserved: 310000,
    risk: "Risque modéré",
  },
  {
    slug: "taxis-marignane-services",
    name: "Taxis Marignane Services",
    sector: "Taxis",
    location: "Marignane (13)",
    formule: "Formule 2",
    status: "exploitation",
    amountTarget: 250000,
    amountReserved: 250000,
    risk: "Risque modéré",
  },
];

export function formatEuro(n: number | null): string {
  if (n === null) return "—";
  return n.toLocaleString("fr-FR") + " €";
}

export function progressPercent(op: Operation): number {
  if (!op.amountTarget || !op.amountReserved) return 0;
  return Math.round((op.amountReserved / op.amountTarget) * 100);
}
