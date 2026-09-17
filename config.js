// Configuration de la page publique (dépôt web public). La clé publishable est
// publique par nature ; la clé secrète ne doit JAMAIS apparaître ici.
window.MEMOMATON_CONFIG = {
  supabaseUrl: "https://oxfaflrimhzpsakxjgwb.supabase.co",
  publishableKey: "sb_publishable_3GbFFtX7UzTzcVNm3-PbBQ_7zp_oG7n",
  bucket: "memes",
  prefix: "m",
  retentionDays: 30,
  contactEmail: "makers@ecam.fr",
  links: {
    instagram: "https://www.instagram.com/makers.ecam",
    discord: "",
    adhesion: "https://docs.google.com/forms/d/e/1FAIpQLSfhk9_X8_mPZdpcLvvVnztbiJP8jmJVg34FPYY-7dNYgJXAcQ/viewform",
    evenement: "",
  },
  texts: {
    assoName: "Makers ECAM",
    tagline: "Le club maker de l'ECAM. Projets, entraide, soirées.",
    recruit: "Tu kiffes ? Rejoins Makers !",
  },
  colors: {
    accent: "#190580", // bleu Makers (couleur du logo)
    bg: "#09071a",
  },
};
