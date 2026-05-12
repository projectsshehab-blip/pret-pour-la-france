'use strict';

const MATERIALS = [
  // ─── TOPIC 1 ─────────────────────────────────────────────────────────────────
  {
    id: 1,
    icon: '🏛️',
    sections: [
      {
        heading: 'La laïcité — Définition et principes',
        content: [
          '<strong>Définition :</strong> La laïcité garantit la liberté de conscience pour tous — chaque personne est libre d\'avoir ou non une religion, d\'en changer ou de ne plus en avoir.',
          '<strong>Article 1er de la Constitution (1958) :</strong> "La France est une République indivisible, <em>laïque</em>, démocratique et sociale."',
          '<strong>L\'État est neutre :</strong> L\'État français ne reconnaît aucune religion, ne salarie ni ne subventionne aucun culte, et ne participe pas au fonctionnement interne des organisations religieuses.',
          '<strong>Liberté de pratiquer :</strong> Toute personne peut pratiquer sa religion dans le respect de l\'ordre public. Personne ne peut être obligé de respecter les prescriptions d\'une religion.',
          '<strong>Loi de 1905 :</strong> La loi de séparation des Églises et de l\'État du 9 décembre 1905 est le fondement de la laïcité française.',
          '<strong>La laïcité n\'est pas une opinion :</strong> C\'est un principe constitutionnel qui s\'impose à tous.',
        ]
      },
      {
        heading: 'Histoire de la laïcité — Dates clés',
        content: [
          '<strong>1539 :</strong> Le français remplace le latin dans les textes administratifs (Ordonnance de Villers-Cotterêts).',
          '<strong>1789 :</strong> La Déclaration des droits de l\'homme et du citoyen crée le principe de liberté de conscience et de religion.',
          '<strong>1801 :</strong> Le Concordat organise les relations entre l\'État et l\'Église catholique.',
          '<strong>1882 :</strong> Jules Ferry rend l\'école primaire publique obligatoire, gratuite et indépendante de l\'Église.',
          '<strong>1905 :</strong> Loi de séparation de l\'Église et de l\'État — l\'État est désormais indépendant des religions.',
          '<strong>2004 :</strong> Loi interdisant les signes religieux ostensibles dans les écoles, collèges et lycées publics.',
          '<strong>2010 :</strong> Loi interdisant la dissimulation du visage (cagoule, voile intégral...) dans l\'espace public.',
          '<strong>2021 :</strong> Loi renforçant la laïcité et la neutralité dans les services publics et les associations.',
        ]
      },
      {
        heading: 'La laïcité dans la vie quotidienne',
        content: [
          '<strong>Espace public :</strong> Toute personne peut porter des signes religieux (voile, kippa, croix, turban...) dans les rues, restaurants, transports et lieux ouverts à tous.',
          '<strong>Services publics :</strong> Les agents de la fonction publique ne peuvent pas exprimer leurs convictions religieuses dans le cadre de leur travail. La neutralité est obligatoire.',
          '<strong>Usagers des services publics :</strong> Les usagers peuvent exprimer leur religion, mais ne peuvent pas demander une adaptation du service au nom d\'une religion.',
          '<strong>Travail privé :</strong> Un salarié peut exprimer ses convictions, sauf si cela perturbe le fonctionnement de l\'entreprise. L\'employeur peut imposer des limites pour des raisons d\'hygiène, de sécurité ou de contact clientèle.',
          '<strong>École publique :</strong> Les élèves ne peuvent pas porter de signes religieux ostensibles. Les enseignants sont soumis au principe de neutralité absolue. Aucun cours ne peut être refusé pour motif religieux.',
          '<strong>Prosélytisme :</strong> Autorisé en France mais interdit dans les écoles publiques, services publics et hôpitaux. Le harcèlement religieux est interdit.',
          '<strong>Blasphème :</strong> Non interdit en France (liberté d\'expression). Cependant, l\'incitation à la haine, les insultes envers des personnes pour leur religion, et la négationnisme de la Shoah sont punis par la loi.',
        ]
      },
      {
        heading: 'Les symboles de la République',
        content: [
          '<strong>Drapeau tricolore :</strong> Bleu, blanc, rouge. Né en 1789 (bleu et rouge = Paris, blanc = royauté). Officiel depuis 1794. Insulter ou détruire le drapeau en public est un délit.',
          '<strong>Marianne :</strong> Symbole féminin de la République depuis la Révolution. Porte le bonnet phrygien (symbole de liberté). Présente dans toutes les mairies, sur les timbres et pièces de monnaie.',
          '<strong>La Marseillaise :</strong> Hymne national composé en 1792. Déclaré hymne national en 1879. Joué lors des cérémonies officielles et événements sportifs internationaux.',
          '<strong>Le coq gaulois :</strong> Symbole non officiel mais emblématique. Utilisé sur les maillots des équipes nationales et la diplomatie culturelle.',
          '<strong>Fête nationale — 14 juillet :</strong> Commémore la prise de la Bastille (14 juillet 1789) et la Fête de la Fédération (14 juillet 1790). Défilé militaire sur les Champs-Élysées. Feux d\'artifice dans tout le pays.',
        ]
      },
      {
        heading: 'La devise : Liberté, Égalité, Fraternité',
        content: [
          '<strong>Origine :</strong> Née pendant la Révolution française (1789). Adoptée officiellement en 1848. Inscrite dans la Constitution de 1958.',
          '<strong>Liberté :</strong> Chaque personne peut penser, s\'exprimer et vivre comme elle le souhaite. Deux types : libertés individuelles (religion, expression, déplacement) et libertés collectives (association, manifestation, syndicats).',
          '<strong>Égalité :</strong> La loi est la même pour tous. Égalité devant la loi, les droits civiques, les droits sociaux et les services publics. Plus de <strong>26 critères de discrimination</strong> interdits par la loi (origine, sexe, handicap, religion, orientation sexuelle, âge, apparence physique...).',
          '<strong>Égalité femmes-hommes :</strong> Inscrite dans le Préambule de la Constitution de 1946. Des inégalités persistent (écart salarial, sous-représentation dans les postes de direction). Loi de 2000 sur la parité politique.',
          '<strong>Fraternité :</strong> Solidarité entre les citoyens. Formes : solidarité collective (Sécurité sociale, RSA, aide au logement), solidarité entre générations (retraites), engagement associatif.',
          '<strong>Engagement citoyen :</strong> Toute personne (française ou étrangère) peut créer ou rejoindre une association (loi 1901 : minimum 2 personnes, but non lucratif). Engagement associatif, syndical ou politique est garanti.',
        ]
      },
      {
        heading: 'La langue française et le contrat républicain',
        content: [
          '<strong>Langue officielle :</strong> Le français est la seule langue officielle (article 2 de la Constitution depuis 1992). Il est utilisé dans les écoles, l\'administration, la justice et la vie publique.',
          '<strong>Langues régionales :</strong> Le breton, le corse, l\'alsacien, le basque, le créole peuvent être enseignés mais ne sont pas langues officielles.',
          '<strong>Le français évolue :</strong> Il s\'enrichit de mots étrangers (banque = italien, week-end = anglais, chiffre = arabe).',
          '<strong>Contrat d\'engagement républicain :</strong> Tout étranger doit le signer lors d\'une demande de titre de séjour. Il engage à respecter : la liberté personnelle, la liberté d\'expression, l\'égalité femmes-hommes, la dignité humaine, la devise, les symboles, les frontières nationales et la laïcité. Sans ce contrat signé, aucun titre de séjour ne peut être délivré.',
        ]
      },
    ]
  },

  // ─── TOPIC 2 ─────────────────────────────────────────────────────────────────
  {
    id: 2,
    icon: '⚖️',
    sections: [
      {
        heading: 'La démocratie et la République',
        content: [
          '<strong>Démocratie :</strong> Du grec "Demos Kratos" = "Pouvoir du peuple". Régime où le pouvoir appartient au peuple sans distinction de sexe, religion, richesse ou origine. La Constitution de 1958 dit : "gouvernement du peuple, par le peuple et pour le peuple".',
          '<strong>République :</strong> Du latin "Res Publica" = "chose publique". Le pouvoir est exercé par des représentants élus. S\'oppose à la monarchie (pouvoir héréditaire).',
          '<strong>La France :</strong> République démocratique — les citoyens élisent leurs représentants au suffrage universel. Pour voter : nationalité française + 18 ans + droits civiques + inscrit sur les listes électorales.',
          '<strong>Ve République :</strong> Fondée en 1958 par le général de Gaulle. Constitution adoptée par référendum à 82% des voix le 28 septembre 1958. Toujours en vigueur aujourd\'hui.',
        ]
      },
      {
        heading: 'L\'État de droit et la séparation des pouvoirs',
        content: [
          '<strong>État de droit :</strong> Système dans lequel la loi est la même pour tous, y compris pour l\'État. Fondé sur 6 principes : primauté du droit, égalité devant la loi, séparation des pouvoirs, légalité, sécurité juridique, protection juridictionnelle effective.',
          '<strong>Pouvoir LÉGISLATIF :</strong> Le Parlement (Assemblée nationale + Sénat). Vote les lois et contrôle le gouvernement.',
          '<strong>Pouvoir EXÉCUTIF :</strong> Le président de la République (chef de l\'État, réside au palais de l\'Élysée) + le gouvernement (Premier ministre + ministres, résidence à l\'Hôtel de Matignon). Applique et fait respecter les lois.',
          '<strong>Autorité JUDICIAIRE :</strong> Les juges et magistrats. Indépendante. Juge et rend la justice. Justice civile (litiges entre citoyens), pénale (infractions à la loi) et administrative (litiges citoyen/État).',
          '<strong>Un ministre qui ne respecte pas la loi :</strong> peut être sanctionné comme tout citoyen — nul n\'est au-dessus des lois.',
        ]
      },
      {
        heading: 'Les élections et le vote en France',
        content: [
          '<strong>Suffrage universel :</strong> Tous les citoyens français (18 ans, droits civiques, inscrits sur les listes) peuvent voter sans distinction de sexe, d\'origine ou de religion.',
          '<strong>Le vote est personnel, libre et secret.</strong> Il n\'est pas obligatoire en France — c\'est un droit et non un devoir. Le vote par procuration est possible.',
          '<strong>Types d\'élections :</strong> Présidentielles (tous les 5 ans), législatives (5 ans), municipales (6 ans), départementales (6 ans), régionales (6 ans), européennes (5 ans — citoyens UE résidant en France).',
          '<strong>Sénatoriales :</strong> Élection au suffrage universel indirect — uniquement par les grands électeurs (maires, conseillers municipaux, députés). Renouvellement par moitié tous les 3 ans.',
          '<strong>Ressortissants UE :</strong> Peuvent voter aux élections municipales (résidence de plus de 6 mois) et européennes.',
        ]
      },
      {
        heading: 'Les institutions et les élus',
        content: [
          '<strong>Président de la République :</strong> Élu pour 5 ans au suffrage universel direct (depuis 1962). Nomme le Premier ministre. Chef des armées. Réside au palais de l\'Élysée.',
          '<strong>Parlement :</strong> Assemblée nationale (577 députés, élus pour 5 ans au suffrage direct) + Sénat (348 sénateurs, élus pour 6 ans au suffrage indirect). Vote les lois.',
          '<strong>Gouvernement :</strong> Premier ministre + ministres. Le Premier ministre dirige l\'action du gouvernement depuis l\'Hôtel de Matignon.',
          '<strong>Élus locaux :</strong> Conseillers municipaux + maire (6 ans) ; conseillers départementaux (6 ans) ; conseillers régionaux (6 ans).',
          '<strong>Partis politiques :</strong> La pluralité des partis est un principe fondamental. Ils proposent des programmes et sélectionnent des candidats. Les médias ont l\'obligation d\'être équitables entre les partis (loi de 1986).',
        ]
      },
      {
        heading: 'Comment est votée une loi ?',
        content: [
          '<strong>Étape 1 — Initiative :</strong> Le gouvernement (projet de loi) ou le Parlement (proposition de loi) propose un texte.',
          '<strong>Étape 2 — Examen :</strong> Une commission parlementaire examine, amende et rédige un rapport.',
          '<strong>Étape 3 — Navette parlementaire :</strong> Le texte est voté article par article à l\'Assemblée nationale puis au Sénat. Les deux chambres doivent adopter le même texte.',
          '<strong>Étape 4 — Désaccord :</strong> Si désaccord → commission mixte paritaire (7 députés + 7 sénateurs). Si toujours pas d\'accord → l\'Assemblée nationale a le dernier mot.',
          '<strong>Étape 5 — Promulgation :</strong> Le Conseil constitutionnel peut être saisi pour vérifier la conformité. Le président signe dans un délai de 15 jours. La loi est publiée au Journal officiel.',
        ]
      },
      {
        heading: 'L\'organisation administrative de la France',
        content: [
          '<strong>Décentralisation :</strong> L\'État transfère des compétences aux collectivités territoriales (communes, départements, régions).',
          '<strong>Communes :</strong> ~35 000 communes en France. Gèrent l\'urbanisme, les écoles primaires et maternelles, les services de proximité. Dirigées par le maire.',
          '<strong>Départements :</strong> 101 au total (96 métropolitains + 5 outre-mer). Compétences : aide sociale, RSA, gestion des collèges, routes. <strong>Le préfet</strong> représente l\'État dans le département.',
          '<strong>Régions :</strong> 18 au total (13 métropolitaines + 5 outre-mer). Gèrent les lycées, le développement économique, l\'aménagement du territoire.',
          '<strong>Rôle du préfet :</strong> Représentant de l\'État dans le département. Organise la sécurité, délivre les titres administratifs, vérifie que les collectivités respectent les lois.',
        ]
      },
      {
        heading: 'L\'Union européenne',
        content: [
          '<strong>Étapes clés :</strong> 1951 — Traité de Paris : CECA (6 pays fondateurs : France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg). 1957 — Traité de Rome : CEE. 1992 — Traité de Maastricht : UE. 2007 — Traité de Lisbonne. 2020 — Brexit (Royaume-Uni quitte l\'UE).',
          '<strong>27 États membres</strong> (au 1er janvier 2025). Devise : "Unie dans la diversité". Hymne : <em>L\'Ode à la joie</em> (Beethoven). Drapeau : 12 étoiles dorées sur fond bleu. Journée de l\'Europe : 9 mai.',
          '<strong>Monnaie :</strong> L\'euro est utilisé en France depuis le 1er janvier 2002.',
          '<strong>Institutions :</strong> Conseil européen (Bruxelles — 27 chefs d\'État), Conseil de l\'UE (ministres), Commission européenne (Bruxelles — 27 commissaires), Parlement européen (Strasbourg et Bruxelles — 720 députés dont 81 Français), Cour de justice (Luxembourg).',
          '<strong>Élections européennes :</strong> Tous les 5 ans. Tout citoyen UE résidant en France peut voter et être candidat (18 ans minimum, inscrit sur les listes).',
          '<strong>Siège du Parlement européen :</strong> Strasbourg (siège officiel) et Bruxelles. <strong>Siège de la Commission :</strong> Bruxelles.',
        ]
      },
    ]
  },

  // ─── TOPIC 3 ─────────────────────────────────────────────────────────────────
  {
    id: 3,
    icon: '📜',
    sections: [
      {
        heading: 'Les droits fondamentaux — Trois catégories',
        content: [
          '<strong>Catégorie 1 — Droits liés à la personne :</strong> Droits naturels de tout être humain. Comprennent : l\'égalité devant la loi, la liberté, la sûreté, la résistance à l\'oppression, la présomption d\'innocence, le droit à un procès équitable, le droit à un avocat, la liberté d\'expression, de culte, de grève et le droit de propriété.',
          '<strong>Catégorie 2 — Droits économiques et sociaux :</strong> Garantissent des conditions de vie dignes. Comprennent : droit à l\'emploi, à la santé, à l\'éducation gratuite, au logement, à la sécurité sociale. Ces droits nécessitent l\'intervention de l\'État.',
          '<strong>Catégorie 3 — Droits de "troisième génération" :</strong> Droits collectifs fondés sur la solidarité. Comprennent : le droit à la paix, à un environnement sain, à l\'aide humanitaire. Ils concernent les générations futures.',
        ]
      },
      {
        heading: 'Les grands textes fondateurs',
        content: [
          '<strong>DDHC 1789 :</strong> La Déclaration des droits de l\'homme et du citoyen du 26 août 1789. Texte fondateur. 17 articles. Affirme : "Les Hommes naissent et demeurent libres et égaux en droits" (art. 1). Droits naturels = liberté, propriété, sûreté, résistance à l\'oppression (art. 2). Liberté d\'opinion et d\'expression (art. 10-11).',
          '<strong>Constitution de la Ve République (1958) :</strong> Loi fondamentale. 108 articles. Adoptée le 4 octobre 1958 par référendum (82% des voix). Le <strong>bloc de constitutionnalité</strong> = Constitution 1958 + Préambule de 1946 + DDHC de 1789 + Charte de l\'environnement 2004. Toutes les lois françaises doivent le respecter.',
          '<strong>Charte de l\'environnement (2004) :</strong> Intégrée à la Constitution en 2005. Affirme que "chacun a le droit de vivre dans un environnement équilibré et respectueux de la santé" (art. 1). Le développement durable ne doit pas compromettre les besoins des générations futures.',
          '<strong>Autres textes :</strong> Code civil (1804), Préambule de la Constitution de 1946, Convention européenne des droits de l\'homme (1959), Charte des droits fondamentaux de l\'UE (2000).',
        ]
      },
      {
        heading: 'Les droits individuels',
        content: [
          '<strong>Dignité humaine :</strong> Chaque personne mérite le respect inconditionnel, quels que soient son âge, sexe, santé, religion ou origine. Interdiction de la torture, de l\'esclavage, des traitements inhumains. Le corps humain ne peut être une source de profit (trafic d\'organes interdit).',
          '<strong>Liberté conjugale :</strong> Chacun est libre de choisir son conjoint (quel que soit son sexe). Consentement libre = condition essentielle du mariage. Liberté de mettre fin à l\'union (divorce, dissolution du PACS, séparation du concubinage).',
          '<strong>Contraception et IVG :</strong> La contraception est accessible à tous, sans autorisation du partenaire. Remboursée pour les femmes de moins de 26 ans. L\'IVG (Interruption Volontaire de Grossesse) est légale jusqu\'à 14 semaines de grossesse depuis 2022. Inscrite dans la Constitution depuis le 4 mars 2024. Prise en charge à 100% par l\'Assurance Maladie.',
          '<strong>PMA :</strong> Procréation Médicalement Assistée — ouverte à toutes les femmes (en couple ou seules) depuis la loi bioéthique du 2 août 2021.',
          '<strong>Limites des libertés :</strong> "La liberté consiste à faire tout ce qui ne nuit pas à autrui" (DDHC art. 4). Nos droits sont limités par : l\'intérêt général, les libertés des autres, l\'ordre public, la dignité humaine.',
        ]
      },
      {
        heading: 'Les obligations des résidents et citoyens',
        content: [
          '<strong>Obligations de tout résident :</strong> Payer des impôts (l\'impôt est inscrit dans la DDHC de 1789), être en situation régulière (titre de séjour valide), assister toute personne en danger (non-assistance est un délit), défendre l\'environnement (tri des déchets, consommation responsable).',
          '<strong>Obligations du citoyen français :</strong> En plus des obligations des résidents : respecter et faire respecter la loi, participer à la vie politique (vote), défense du pays (Journée Défense et Citoyenneté — JDC), participer au fonctionnement de la justice (jurer lors d\'un procès d\'assises possible à partir de 23 ans).',
          '<strong>Les 3 types d\'infractions pénales :</strong>',
          '• <strong>Contravention</strong> (la moins grave) : amende max 3 000 €, pas de prison. Exemples : excès de vitesse, tapage nocturne. Jugée par le tribunal de police.',
          '• <strong>Délit</strong> : amende ≥ 3 750 € + 2 mois à 10 ans de prison. Exemples : vol, fraude fiscale, harcèlement, ne pas scolariser son enfant. Jugé par le tribunal correctionnel.',
          '• <strong>Crime</strong> (la plus grave) : amende ≥ 3 750 € + 15 ans à la perpétuité. Exemples : assassinat (prémédité), meurtre, viol, terrorisme. Jugé par la cour d\'assises.',
        ]
      },
      {
        heading: 'La protection contre les violences',
        content: [
          '<strong>Types de violences interdites :</strong> Psychologiques (insultes, menaces, confiscation de documents), physiques (gifle, coup, tirer par les cheveux), économiques (contrôle total des finances), sexuelles (harcèlement sexuel, agression sexuelle, viol). Toutes sont strictement interdites, y compris au sein du couple.',
          '<strong>Consentement :</strong> Tout rapprochement physique doit être validé par les 2 personnes. Le silence n\'est pas un consentement. Le consentement peut être retiré à tout moment.',
          '<strong>Violences envers les enfants :</strong> La maltraitance physique, psychologique ou sexuelle est interdite et punissable. Les gifles et fessées sont interdites. Harcèlement scolaire = délit.',
          '<strong>Mutilations sexuelles féminines :</strong> Strictement interdites et sévèrement punies en France, y compris si commises à l\'étranger.',
          '<strong>Traite des êtres humains :</strong> Recruter, transporter ou héberger une personne pour l\'exploiter (prostitution, esclavage, travail forcé) est un crime grave.',
          '<strong>Que faire en cas de violence :</strong> Parler à une personne de confiance, contacter une association spécialisée, déposer plainte auprès de la police ou gendarmerie, envoyer un signalement au procureur.',
        ]
      },
      {
        heading: 'Numéros d\'urgence',
        content: [
          '<strong>15 — SAMU</strong> : Urgences médicales.',
          '<strong>17 — Police secours</strong> : Urgences sécurité.',
          '<strong>18 — Sapeurs-pompiers</strong> : Incendie, accidents.',
          '<strong>112</strong> : Numéro d\'urgence européen (depuis tout téléphone, gratuit).',
          '<strong>115</strong> : Hébergement d\'urgence.',
          '<strong>119</strong> : Enfance maltraitée — Allô Enfance en Danger (gratuit 24h/24).',
          '<strong>3919</strong> : Violences conjugales (femmes).',
          '<strong>3018</strong> : Harcèlement scolaire.',
          '<strong>3114</strong> : Numéro national de prévention du suicide.',
          '<strong>114</strong> : Par SMS pour les personnes malentendantes.',
        ]
      },
      {
        heading: 'Protection de l\'environnement',
        content: [
          '"Chacun a le droit de vivre dans un environnement équilibré et respectueux de la santé" — Article 1 de la Charte de l\'environnement (2004).',
          '"Toute personne a le devoir de prendre part à la préservation et à l\'amélioration de l\'environnement" — Article 2.',
          '<strong>Actions concrètes :</strong> Trier ses déchets, réduire les plastiques, éviter le gaspillage alimentaire et énergétique, privilégier les transports en commun et le vélo, respecter les espaces communs, participer aux actions locales (nettoyage collectif).',
          '<strong>Ne pas jeter ses déchets</strong> dans la rue ou un cours d\'eau est une obligation légale — c\'est une infraction passible d\'amende.',
        ]
      },
    ]
  },

  // ─── TOPIC 4 ─────────────────────────────────────────────────────────────────
  {
    id: 4,
    icon: '🗺️',
    sections: [
      {
        heading: 'Chronologie des régimes politiques',
        content: [
          '<strong>Avant 1789 — Ancien Régime :</strong> Monarchie absolue. Le roi détient tous les pouvoirs (droit divin). Société divisée en 3 ordres : Clergé, Noblesse, Tiers État (paysans = 80% de la population).',
          '<strong>1789 — Révolution française :</strong> Prise de la Bastille (14 juillet). DDHC (26 août). Fin de la monarchie absolue.',
          '<strong>1792-1804 — Ire République :</strong> 1ère République française. Période agitée : la Terreur (Robespierre), le Directoire, le Consulat (Napoléon Bonaparte). Suffrage universel masculin proclamé.',
          '<strong>1804-1815 — 1er Empire :</strong> Napoléon Ier Empereur. Code civil (1804), préfets, lycées, Banque de France. Victoire d\'Austerlitz (1805). Défaite de Waterloo (1815).',
          '<strong>1815-1848 — Restauration :</strong> Retour des Bourbons (Louis XVIII, Charles X). Révolution de 1830 → Louis-Philippe (Monarchie de Juillet).',
          '<strong>1848-1851 — IIe République :</strong> Suffrage universel masculin. Abolition définitive de l\'esclavage (27 avril 1848 — Schoelcher). Coup d\'État de Louis-Napoléon Bonaparte.',
          '<strong>1852-1870 — 2nd Empire :</strong> Napoléon III. Modernisation économique. Défaite contre la Prusse (1870).',
          '<strong>1870-1940 — IIIe République :</strong> La plus longue (70 ans). Lois Jules Ferry (1881-1882). Séparation Église-État (1905). Guerre 14-18. Front populaire (1936).',
          '<strong>1940-1944 — État français (Vichy) :</strong> Maréchal Pétain. Collaboration avec l\'Allemagne nazie. Période noire.',
          '<strong>1946-1958 — IVe République :</strong> Instabilité (21 gouvernements en 12 ans). Décolonisation. Début de la construction européenne.',
          '<strong>1958 → Ve République :</strong> Constitution du 4 octobre 1958 sous de Gaulle. Toujours en vigueur. Président élu au suffrage universel direct depuis 1962.',
        ]
      },
      {
        heading: 'La Ve République — Présidents et grandes dates',
        content: [
          '<strong>Charles de Gaulle</strong> (1959-1969) — Fondateur de la Ve République.',
          '<strong>Georges Pompidou</strong> (1969-1974) — Mort en fonction.',
          '<strong>Valéry Giscard d\'Estaing</strong> (1974-1981) — Âge du vote abaissé à 18 ans (1974).',
          '<strong>François Mitterrand</strong> (1981-1995) — Abolition de la peine de mort (9 octobre 1981 — loi Badinter).',
          '<strong>Jacques Chirac</strong> (1995-2007) — Charte de l\'environnement (2004). Reconnaissance de la responsabilité de la France dans la Rafle du Vel d\'Hiv (1995).',
          '<strong>Nicolas Sarkozy</strong> (2007-2012).',
          '<strong>François Hollande</strong> (2012-2017) — Mariage pour tous (17 mai 2013 — loi Taubira). La France = 14ème pays à légaliser le mariage homosexuel.',
          '<strong>Emmanuel Macron</strong> (2017- ) — IVG inscrite dans la Constitution (4 mars 2024). La France = 1er pays au monde à constitutionnaliser ce droit.',
          '<strong>Loi Veil — 17 janvier 1975 :</strong> Simone Veil légalise l\'IVG. Délai allongé à 14 semaines en 2022.',
        ]
      },
      {
        heading: 'Les conflits mondiaux',
        content: [
          '<strong>Première Guerre mondiale (1914-1918) :</strong> Triple Entente (France, Royaume-Uni, Russie) vs Triple Alliance (Allemagne, Autriche-Hongrie, Italie). Déclenchée par l\'assassinat de l\'archiduc François-Ferdinand (28 juin 1914). Batailles de Verdun et de la Somme (1916). Armistice le 11 novembre 1918 à 11h. Bilan : ~10 millions de soldats morts. Traité de Versailles (1919). La France récupère l\'Alsace-Lorraine.',
          '<strong>Seconde Guerre mondiale (1939-1945) :</strong> Hitler au pouvoir en 1933. Invasion de la Pologne le 1er septembre 1939. La France envahie en mai-juin 1940. Armistice franco-allemand (22 juin 1940). État français (Vichy) : collaboration. Appel du 18 juin 1940 depuis Londres (de Gaulle). Débarquement en Normandie (6 juin 1944 — Jour J). Libération de Paris (25 août 1944). Capitulation de l\'Allemagne (8 mai 1945). Bilan : 60 millions de morts dans le monde dont 6 millions de Juifs (Shoah).',
          '<strong>La Rafle du Vél d\'Hiv (16-17 juillet 1942) :</strong> La police française (Vichy) arrête 13 152 Juifs à Paris. Déportés vers les camps d\'extermination. Jacques Chirac reconnaît officiellement la responsabilité de la France en 1995.',
          '<strong>La Shoah :</strong> Génocide de 6 millions de Juifs d\'Europe organisé par l\'Allemagne nazie (1941-1945). La négation de la Shoah est un délit en France (loi Gayssot 1990). Mémorial de la Shoah à Paris.',
          '<strong>La Résistance :</strong> Mouvement de refus de l\'occupation et du régime de Vichy. Jean Moulin = figure emblématique (mort sous la torture en 1943). France libre (de Gaulle à Londres), maquis, réseaux de renseignements.',
          '<strong>Création de l\'ONU (1945) :</strong> Pour maintenir la paix mondiale. Procès de Nuremberg (1945-1946) : crimes contre l\'humanité.',
        ]
      },
      {
        heading: 'Géographie de la France',
        content: [
          '<strong>France métropolitaine :</strong> Superficie = 551 695 km² (3ème pays d\'Europe). Forme hexagonale → "l\'Hexagone". Population ≈ 68 millions d\'habitants (2024). Capitale : Paris.',
          '<strong>Frontières terrestres :</strong> 8 pays voisins. Nord-est : Belgique, Luxembourg, Allemagne. Est : Suisse, Italie. Sud : Monaco, Espagne, Andorre.',
          '<strong>Frontières maritimes :</strong> La Manche (nord — France/Royaume-Uni), l\'Atlantique (ouest), la Méditerranée (sud), la mer du Nord (nord-ouest).',
          '<strong>Les 5 grands fleuves :</strong> Loire (1 013 km — le plus long, Atlantique), Seine (775 km — traverse Paris, Manche), Rhône (812 km — Méditerranée, traverse Lyon), Garonne (650 km — Atlantique, traverse Toulouse/Bordeaux), Rhin (1 230 km — mer du Nord, frontière Strasbourg).',
          '<strong>Découpage :</strong> 13 régions métropolitaines + 5 régions d\'outre-mer (DROM). 101 départements (96 métro + 5 outre-mer). ~35 000 communes.',
          '<strong>Territoires d\'outre-mer :</strong> DROM : Guadeloupe (Caraïbes), Martinique (Caraïbes — "l\'île aux fleurs"), Guyane (Amérique du Sud — Centre spatial de Kourou), La Réunion (océan Indien — Piton de la Fournaise), Mayotte (océan Indien — 101ème département depuis 2011).',
        ]
      },
      {
        heading: 'La France dans le monde',
        content: [
          '<strong>Puissance économique :</strong> 7ème économie mondiale (PIB ~3 000 milliards €). Membre du G7 et du G20. 1er pays agricole de l\'UE. 2ème exportateur mondial de produits agricoles. Secteurs clés : aéronautique (Airbus/Toulouse), automobile (Renault, Stellantis), énergie nucléaire (75% de l\'électricité), luxe (LVMH, Hermès, Chanel, L\'Oréal).',
          '<strong>Tourisme :</strong> 1er pays touristique mondial — ~90 millions de visiteurs/an. Principales attractions : Tour Eiffel, Louvre, Riviera, Châteaux de la Loire, Mont-Saint-Michel, Alpes.',
          '<strong>Puissance militaire et diplomatique :</strong> Puissance nucléaire (bombe atomique). Armée de ~200 000 militaires. Membre de l\'OTAN depuis 1949. Membre permanent du Conseil de sécurité de l\'ONU avec droit de veto. ~160 ambassades dans le monde.',
          '<strong>Puissance maritime :</strong> 2ème Zone Économique Exclusive (ZEE) du monde — 11 millions de km². Présence dans tous les océans.',
          '<strong>Francophonie :</strong> Le français est parlé par ~300 millions de personnes dans le monde. 5ème langue la plus parlée. 29 pays francophones. L\'OIF (Organisation internationale de la Francophonie) = 54 États membres. Journée internationale de la Francophonie : 20 mars.',
        ]
      },
      {
        heading: 'Les 13 régions métropolitaines',
        content: [
          '<strong>Île-de-France</strong> (Paris) — 12,2 M hab. Capitale, densité maximale.',
          '<strong>Auvergne-Rhône-Alpes</strong> (Lyon) — 8,1 M hab. Alpes, Mont-Blanc (4 810 m).',
          '<strong>Hauts-de-France</strong> (Lille) — 6 M hab. Frontière belge, industrie.',
          '<strong>Nouvelle-Aquitaine</strong> (Bordeaux) — 6,1 M hab. Plus grande région de France.',
          '<strong>Occitanie</strong> (Toulouse) — 6,1 M hab. Aéronautique (Airbus).',
          '<strong>Grand Est</strong> (Strasbourg) — 5,6 M hab. Alsace-Lorraine, Parlement européen.',
          '<strong>Provence-Alpes-Côte d\'Azur</strong> (Marseille) — 5,1 M hab. Riviera, 1er port méditerranéen.',
          '<strong>Pays de la Loire</strong> (Nantes) — 3,9 M hab. Tourisme vert.',
          '<strong>Bretagne</strong> (Rennes) — 3,4 M hab. Péninsule, culture celte.',
          '<strong>Normandie</strong> (Rouen) — 3,3 M hab. Plages du Débarquement.',
          '<strong>Bourgogne-Franche-Comté</strong> (Dijon) — 2,8 M hab. Vignobles.',
          '<strong>Centre-Val de Loire</strong> (Orléans) — 2,6 M hab. Châteaux de la Loire (UNESCO).',
          '<strong>Corse</strong> (Ajaccio) — 0,35 M hab. Île, statut particulier.',
        ]
      },
      {
        heading: 'Culture française et patrimoine',
        content: [
          '<strong>52 sites UNESCO</strong> (2024) parmi les plus nombreux au monde. Sites emblématiques : Tour Eiffel, Notre-Dame de Paris (incendie 2019 — en restauration), Musée du Louvre (plus grand musée du monde — abrite la Joconde), Mont-Saint-Michel, Versailles, Pont du Gard.',
          '<strong>Gastronomie :</strong> Classée au patrimoine culturel immatériel de l\'UNESCO (2010). Spécialités : baguette, fromages (>1 200 variétés), vins (Bordeaux, Bourgogne, Champagne), cassoulet, bouillabaisse, crêpes bretonnes, choucroute alsacienne.',
          '<strong>Cinéma :</strong> La France est l\'un des plus gros producteurs de films. Festival de Cannes = festival le plus prestigieux au monde.',
          '<strong>Littérature :</strong> La France a reçu le plus de Prix Nobel de littérature. Grands auteurs : Molière, Victor Hugo, Albert Camus, Simone de Beauvoir, Marguerite Yourcenar (1ère femme élue à l\'Académie française — 1980).',
          '<strong>Mode et luxe :</strong> Paris = capitale mondiale de la mode. LVMH, Hermès, Chanel, L\'Oréal = marques françaises mondiales.',
          '<strong>Artistes célèbres :</strong> Paul Cézanne, Marc Chagall, Auguste Rodin (Le Penseur, Le Baiser), Auguste Renoir. Écrivains : Jean de la Fontaine, Charles Baudelaire, George Sand, Albert Camus. Chanteuses : Édith Piaf, Joséphine Baker.',
        ]
      },
    ]
  },

  // ─── TOPIC 5 ─────────────────────────────────────────────────────────────────
  {
    id: 5,
    icon: '🏠',
    sections: [
      {
        heading: 'Démarches administratives essentielles',
        content: [
          '<strong>Domiciliation :</strong> Avoir une adresse officielle est indispensable pour toutes démarches (listes électorales, banque, aides sociales...). Sans logement fixe : CCAS (Centre Communal d\'Action Sociale) de la mairie ou association agréée.',
          '<strong>Compte bancaire :</strong> Obligatoire pour recevoir son salaire, payer son loyer. Si une banque refuse, le <strong>droit au compte</strong> permet de saisir la Banque de France qui désigne une banque. Services de base gratuits.',
          '<strong>Permis de conduire étranger :</strong> Permis UE → échange automatique. Permis hors UE avec accord bilatéral → échange dans l\'année suivant l\'obtention du titre de séjour. Permis hors UE sans accord → passer le permis français complet (code + conduite).',
          '<strong>Code de la route :</strong> QCM de 40 questions — il faut obtenir au moins 35 bonnes réponses. Permis probatoire : 6 points au départ, jusqu\'à 12 points possibles.',
          '<strong>Assurance obligatoire :</strong> L\'assurance automobile (responsabilité civile) est obligatoire avant de conduire. L\'assurance habitation est obligatoire pour tout locataire.',
          '<strong>Impôts :</strong> Toute personne résidant en France et percevant des revenus doit les déclarer (impots.gouv.fr, avril-juin). Prélèvement à la source depuis 2019. TVA : 20% (normal), 5,5% (alimentation), 10% (restaurant).',
        ]
      },
      {
        heading: 'Séjour et nationalité française',
        content: [
          '<strong>Types de titres de séjour :</strong> Carte temporaire (1 an), Carte pluriannuelle / CSP (2-4 ans — nécessite examen civique), Carte de résident (10 ans — après 5 ans de résidence régulière), Carte de résident longue durée UE.',
          '<strong>Renouvellement :</strong> La demande doit être faite AVANT expiration. Un récépissé est remis pendant l\'instruction. Ne pas renouveler = infraction passible d\'une OQTF (Obligation de Quitter le Territoire).',
          '<strong>Naturalisation :</strong> 5 ans de résidence régulière (réduit à 2 ans pour diplôme d\'université française) + niveau B1 en français + réussite de l\'examen civique + bonne intégration + aucune condamnation grave.',
          '<strong>Nationalité par mariage :</strong> 4 ans de mariage avec un(e) Français(e) (5 ans si pas de vie commune en France).',
          '<strong>Droit du sol :</strong> Enfant né en France de parents étrangers → nationalité française à 18 ans, si résidence habituelle en France pendant 5 ans depuis ses 11 ans.',
          '<strong>Double nationalité :</strong> Autorisée en France.',
        ]
      },
      {
        heading: 'État civil — Naissance, mariage, PACS, divorce',
        content: [
          '<strong>Déclaration de naissance :</strong> Dans les 5 jours suivant la naissance (le jour de naissance ne compte pas). À la mairie du lieu d\'accouchement. Documents : certificat d\'accouchement + pièces d\'identité des parents.',
          '<strong>Mariage civil :</strong> Seul mariage reconnu par la loi française. Célébré en mairie. Consentement libre obligatoire. Dossier déposé 10 jours minimum avant la date. Mariage entre personnes de même sexe autorisé depuis le 17 mai 2013.',
          '<strong>PACS :</strong> Pacte Civil de Solidarité — contrat entre deux personnes majeures (peu importe le sexe) pour organiser leur vie commune. Signé en mairie ou chez un notaire. Droits proches du mariage (fiscalité, succession) mais moins étendus. Peut être rompu par déclaration en mairie.',
          '<strong>Divorce :</strong> Divorce par consentement mutuel (chez un notaire — sans juge), pour altération du lien conjugal (séparation > 2 ans), ou pour faute.',
        ]
      },
      {
        heading: 'Santé — Parcours de soins et couvertures',
        content: [
          '<strong>Médecin traitant :</strong> À déclarer sur ameli.fr. Premier recours pour tout problème de santé non urgent. Oriente vers les spécialistes. Sans médecin traitant → remboursements réduits.',
          '<strong>Spécialistes en accès direct :</strong> Gynécologues, ophtalmologues, psychiatres, pédiatres (sans ordonnance du médecin traitant).',
          '<strong>Urgences :</strong> 15 (SAMU), 18 (pompiers), 112 (européen). Pour trouver un médecin de garde : appeler le 116 117. Pour une pharmacie de garde : 3237.',
          '<strong>Assurance Maladie (Sécu) :</strong> Système d\'assurance maladie obligatoire. La <strong>carte Vitale</strong> facilite les remboursements. Consultation chez le médecin traitant remboursée à 70%.',
          '<strong>PUMa :</strong> Protection Universelle Maladie — garantit l\'accès aux soins à toute personne résidant régulièrement en France. À demander à la CPAM.',
          '<strong>CSS :</strong> Complémentaire Santé Solidaire (ex-CMU-C) — complémentaire gratuite ou à faible coût pour les personnes aux revenus modestes.',
          '<strong>AME :</strong> Aide Médicale d\'État — soins de base pour les étrangers en situation irrégulière (résidant depuis + 3 mois). Renouvelable annuellement.',
          '<strong>Maternité :</strong> Suivi de grossesse pris en charge à 100% depuis la déclaration. Congé maternité : 16 semaines minimum. Congé paternité : 25 jours (11 obligatoires depuis 2021).',
          '<strong>Droits du patient :</strong> Droit à l\'information, au consentement éclairé, au secret médical, à l\'accès au dossier médical, à un interprète.',
          '<strong>Santé mentale :</strong> 3114 = prévention du suicide (24h/24). CMP (Centres Médico-Psychologiques) = consultations gratuites. Mon Soutien Psy = 12 séances remboursées chez un psychologue.',
        ]
      },
      {
        heading: 'Emploi et droits des salariés',
        content: [
          '<strong>France Travail :</strong> (ex-Pôle Emploi, renommé 2024). Inscription en ligne ou en agence. Accompagnement personnalisé, offres d\'emploi, formations, allocations chômage. Inscription automatique possible lors d\'une fin de contrat.',
          '<strong>Formation linguistique :</strong> Tout signataire d\'un CIR a droit à des cours de français gratuits (OFII) pour atteindre le niveau A1 ou A2.',
          '<strong>Reconnaissance des diplômes étrangers :</strong> UE → reconnaissance automatique. Hors UE → attestation de comparabilité (Centre ENIC-NARIC France). VAE (Validation des Acquis de l\'Expérience) = obtenir un diplôme grâce à son expérience professionnelle (minimum 1 an d\'expérience).',
          '<strong>Types de contrats :</strong> CDI (sans date de fin — le plus protecteur), CDD (durée limitée, max 18 mois renouvelable 2 fois — prime de précarité 10% à la fin), Intérim (via une agence), Apprentissage/Professionnalisation (alternance théorie + pratique).',
          '<strong>SMIC 2025 :</strong> ~11,88 €/h brut = ~1 800 € brut/mois pour 35h/semaine. Revalorisé chaque 1er janvier.',
          '<strong>Durée légale du travail :</strong> 35 heures/semaine. Heures supplémentaires majorées : +25% (8 premières h), +50% (au-delà). Repos quotidien : 11h. Repos hebdomadaire : 24h (généralement dimanche).',
          '<strong>Congés payés :</strong> 5 semaines/an (2,5 jours par mois travaillé). 11 jours fériés par an.',
          '<strong>Fiche de paie :</strong> Contient salaire brut, cotisations sociales, salaire net. À conserver (droits à la retraite).',
          '<strong>Allocation chômage (ARE) :</strong> Conditions : avoir travaillé 6 mois sur les 24 derniers mois + licenciement involontaire + inscrit à France Travail. Montant ≈ 57-75% du salaire brut antérieur. Durée : 6 à 24 mois (36 mois pour les seniors).',
          '<strong>Retraite :</strong> Âge minimum 64 ans depuis 2023. 172 trimestres (43 ans) pour taux plein. Système par répartition (les actifs cotisent pour les retraités actuels).',
          '<strong>Protection au travail :</strong> Accident du travail couvert à 100%. Harcèlement moral et sexuel interdit et punissable. Le conseil de prud\'hommes règle les conflits employeur/salarié.',
        ]
      },
      {
        heading: 'Parentalité et éducation',
        content: [
          '<strong>Convention internationale des droits de l\'enfant (CIDE) :</strong> Signée par la France en 1990. Garantit : droit à l\'identité, à la santé, à l\'éducation, à la protection contre les abus, à la vie familiale, à l\'expression, aux loisirs.',
          '<strong>Autorité parentale :</strong> Exercée conjointement par les deux parents. Comprend : obligation d\'entretien, d\'éducation, de soins et de scolarisation. En cas de séparation : autorité parentale généralement maintenue conjointement. Retrait possible par le juge en cas de violences graves ou négligences.',
          '<strong>Modes de garde (0-3 ans) :</strong> Crèche (collective), assistante maternelle agréée (CMG = aide CAF), garde à domicile, micro-crèche, halte-garderie. Aides disponibles : PSU (CAF), CMG, crédit d\'impôt (50% des frais).',
          '<strong>Système éducatif :</strong> Maternelle (3-6 ans) → Élémentaire (6-11 ans, CP à CM2) → Collège (11-15 ans, 6ème à 3ème) → Lycée (15-18 ans, Baccalauréat) → Enseignement supérieur (université, BTS, IUT, Grandes Écoles).',
          '<strong>Scolarité obligatoire :</strong> De 3 à 16 ans pour TOUS les enfants résidant en France, quelle que soit la nationalité ou la situation des parents.',
          '<strong>UPE2A :</strong> Unités Pédagogiques pour Élèves Allophones Arrivants — cours intensifs de français pour les enfants non francophones, en parallèle d\'une intégration progressive en classe ordinaire.',
          '<strong>OEPRE :</strong> Ouvrir l\'École aux Parents pour la Réussite des Enfants — cours de français gratuits dans les écoles pour les parents étrangers. Aborde aussi le fonctionnement de l\'école française et les valeurs républicaines.',
          '<strong>Droits des parents :</strong> Être informés des résultats, rencontrer les enseignants, participer aux conseils de classe, être représentants de parents d\'élèves.',
          '<strong>Diplômes :</strong> Brevet des collèges (DNB — fin de 3ème), Baccalauréat (fin de lycée — donne accès à l\'enseignement supérieur), CAP/BEP (lycée professionnel).',
        ]
      },
    ]
  }
];
