'use strict';

const MATERIALS = [
  {
    id: 1,
    icon: '🏛️',
    sections: [
      {
        heading: 'La devise et les symboles',
        content: [
          '<strong>Devise :</strong> <em>Liberté, Égalité, Fraternité</em> — inscrite dans la Constitution et sur les bâtiments publics.',
          '<strong>Drapeau :</strong> Bleu, blanc, rouge (tricolore). Le bleu et le rouge sont les couleurs de Paris, le blanc est la couleur royale.',
          '<strong>Hymne national :</strong> <em>La Marseillaise</em>, composée en 1792 lors de la Révolution française.',
          '<strong>Marianne :</strong> Symbole féminin de la République française, représentée sur les timbres, les pièces de monnaie et dans les mairies.',
          '<strong>Le coq gaulois :</strong> Symbole non officiel mais emblématique de la France.',
          '<strong>Fête nationale :</strong> Le 14 juillet — célèbre la prise de la Bastille (1789) et la Fête de la Fédération (1790). Défilé militaire sur les Champs-Élysées.'
        ]
      },
      {
        heading: 'Liberté, Égalité, Fraternité',
        content: [
          '<strong>Liberté :</strong> Chaque personne peut agir, penser et s\'exprimer librement dans le respect des lois.',
          '<strong>Égalité :</strong> Tous les citoyens ont les mêmes droits et sont traités de la même façon devant la loi, sans discrimination.',
          '<strong>Fraternité :</strong> Solidarité et entraide entre tous les membres de la société. Principe de cohésion nationale.',
          'La <strong>liberté d\'expression</strong> permet d\'exprimer ses idées, mais elle a des limites : l\'incitation à la haine, la diffamation et les insultes sont punies par la loi.'
        ]
      },
      {
        heading: 'La laïcité',
        content: [
          '<strong>Définition :</strong> La laïcité est la séparation des Églises et de l\'État. Elle garantit la liberté de conscience pour tous.',
          '<strong>Loi de 1905 :</strong> Loi de séparation des Églises et de l\'État, pilier fondamental de la laïcité française.',
          '<strong>Article 1er de la Constitution :</strong> "La France est une République indivisible, <em>laïque</em>, démocratique et sociale."',
          '<strong>À l\'école publique :</strong> La loi de 2004 interdit aux élèves de porter des signes religieux ostensibles. Les agents publics (enseignants, fonctionnaires) sont soumis au principe de neutralité.',
          '<strong>Ce que garantit la laïcité :</strong> Le droit de croire ou de ne pas croire, de pratiquer une religion ou d\'en changer librement.',
          'Un enfant <strong>ne peut pas</strong> refuser d\'aller à l\'école pour une raison religieuse — l\'instruction est obligatoire.'
        ]
      },
      {
        heading: 'La langue française',
        content: [
          'Le <strong>français</strong> est la langue officielle de la République (Article 2 de la Constitution).',
          'La langue française est un élément fondamental de l\'identité nationale et de l\'intégration républicaine.',
          'La France reconnaît la diversité des langues régionales, mais le français est la seule langue officielle des services publics.'
        ]
      }
    ]
  },
  {
    id: 2,
    icon: '⚖️',
    sections: [
      {
        heading: 'La Ve République et ses institutions',
        content: [
          'La <strong>Ve République</strong> a été fondée en <strong>1958</strong> par le général de Gaulle. La Constitution actuelle date de cette même année.',
          '<strong>Régime :</strong> République semi-présidentielle — le président et le Premier ministre partagent le pouvoir exécutif.',
          '<strong>Parlement :</strong> Composé de l\'Assemblée nationale (577 députés) et du Sénat (348 sénateurs).',
          'La <strong>séparation des pouvoirs</strong> : pouvoir exécutif (gouverner), pouvoir législatif (voter les lois), pouvoir judiciaire (rendre la justice).'
        ]
      },
      {
        heading: 'Le président de la République',
        content: [
          'Élu au <strong>suffrage universel direct</strong> pour un mandat de <strong>5 ans</strong>, renouvelable une fois.',
          'Réside au <strong>palais de l\'Élysée</strong>.',
          'Rôles : garantir le fonctionnement des institutions, représenter la France, nommer le Premier ministre, commander les armées.',
          'Il n\'a <strong>pas tous les pouvoirs</strong> — le principe de séparation des pouvoirs s\'applique même au président.'
        ]
      },
      {
        heading: 'Le gouvernement et le Parlement',
        content: [
          '<strong>Premier ministre :</strong> Nommé par le président, dirige l\'action du gouvernement depuis l\'Hôtel de Matignon.',
          '<strong>Députés :</strong> Élus pour 5 ans lors des élections législatives. Votent les lois et contrôlent le gouvernement.',
          '<strong>Sénateurs :</strong> Élus pour 6 ans au suffrage indirect. Représentent les collectivités territoriales.',
          'Tout le monde — y compris un ministre ou le président — doit respecter la loi. Nul n\'est au-dessus des lois.'
        ]
      },
      {
        heading: 'Les collectivités territoriales',
        content: [
          '<strong>Communes :</strong> ~36 000 en France. Dirigées par un maire élu. Gèrent l\'état civil, l\'urbanisme, les écoles primaires.',
          '<strong>Départements :</strong> 101 au total (96 métropolitains + 5 d\'outre-mer). Le <strong>préfet</strong> représente l\'État dans le département.',
          '<strong>Régions :</strong> 13 régions métropolitaines + 5 régions d\'outre-mer.',
          '<strong>Le suffrage universel</strong> : tous les citoyens français majeurs (18 ans) inscrits sur les listes électorales ont le droit de vote.'
        ]
      },
      {
        heading: 'L\'Union européenne',
        content: [
          'L\'UE compte <strong>27 États membres</strong> (au 1er janvier 2025). Le Royaume-Uni l\'a quittée en 2020 (Brexit).',
          '<strong>Monnaie :</strong> L\'euro est utilisé en France depuis 2002.',
          '<strong>Journée de l\'Europe :</strong> Le 9 mai.',
          '<strong>Traité de Maastricht :</strong> Signé en 1992, fondateur de l\'Union européenne actuelle.',
          'Le Parlement européen siège à Bruxelles et Strasbourg. La Commission européenne siège à Bruxelles.',
          'Devise de l\'UE : <em>Unie dans la diversité</em>. Hymne : <em>L\'Ode à la joie</em> (Beethoven).'
        ]
      }
    ]
  },
  {
    id: 3,
    icon: '📜',
    sections: [
      {
        heading: 'Les textes fondateurs',
        content: [
          '<strong>Déclaration des droits de l\'homme et du citoyen (1789)</strong> : Adoptée pendant la Révolution française. Texte fondateur des droits et libertés en France.',
          '<strong>Constitution de la Ve République (1958)</strong> : Loi fondamentale qui organise les pouvoirs de l\'État. La plus difficile à modifier.',
          '<strong>Charte de l\'environnement (2004)</strong> : Intégrée à la Constitution, elle donne valeur constitutionnelle à la protection de l\'environnement.',
          '<strong>Convention européenne des droits de l\'homme</strong> : Traité international garantissant les droits fondamentaux.'
        ]
      },
      {
        heading: 'Les droits fondamentaux',
        content: [
          '<strong>Liberté d\'expression :</strong> Exprimer ses opinions librement, dans le respect des lois (pas d\'incitation à la haine, pas de diffamation).',
          '<strong>Liberté de conscience et de religion :</strong> Croire ou ne pas croire, pratiquer une religion ou en changer librement.',
          '<strong>Droit à la défense :</strong> Toute personne accusée a droit à un procès équitable et à un avocat.',
          '<strong>Dignité humaine :</strong> Chaque personne doit être traitée avec respect, sans être dégradée ou humiliée.',
          '<strong>Droit de grève :</strong> Les salariés peuvent cesser collectivement le travail pour défendre leurs droits.',
          'La <strong>peine de mort</strong> est abolie en France depuis <strong>1981</strong> (sous François Mitterrand).'
        ]
      },
      {
        heading: 'Les devoirs et obligations',
        content: [
          'Toute personne résidant en France doit <strong>respecter les lois françaises</strong>, quelle que soit sa nationalité.',
          'Ne pas respecter la loi expose à des <strong>sanctions pénales</strong> : contravention (la moins grave), délit, crime (le plus grave).',
          '<strong>Obligations environnementales :</strong> Trier ses déchets, ne pas jeter ses déchets dans l\'espace public.',
          'Jeter une bouteille dans la rue ou déposer des encombrants sur le trottoir sont des <strong>infractions</strong> punissables.',
          'En cas d\'accident, toute personne a l\'obligation de <strong>porter secours</strong> ou d\'appeler les secours.',
          '<strong>La polygamie</strong> est interdite en France. Le mariage civil devant un officier d\'état civil est le seul reconnu par la loi.'
        ]
      },
      {
        heading: 'Les numéros d\'urgence',
        content: [
          '<strong>15 — SAMU</strong> : Urgences médicales',
          '<strong>17 — Police / Gendarmerie</strong> : Urgences sécurité',
          '<strong>18 — Pompiers</strong> : Incendie, accidents',
          '<strong>112</strong> : Numéro d\'urgence européen universel (gratuit depuis tout téléphone)',
          'Ces numéros sont <strong>gratuits</strong> et accessibles 24h/24, 7j/7.'
        ]
      }
    ]
  },
  {
    id: 4,
    icon: '🗺️',
    sections: [
      {
        heading: 'Histoire : de la Révolution à la Ve République',
        content: [
          '<strong>1789 :</strong> Révolution française. Prise de la Bastille le 14 juillet. Déclaration des droits de l\'homme et du citoyen.',
          '<strong>Louis XVI</strong> était le roi de France lors de la Révolution. Il a été exécuté en 1793.',
          '<strong>Napoléon Ier</strong> : général de la Révolution, devient consul puis <strong>empereur en 1804</strong>.',
          '<strong>1848 :</strong> Abolition définitive de l\'esclavage. Suffrage universel masculin.',
          '<strong>IIIe République :</strong> Jules Ferry rend l\'école <strong>gratuite (1881), laïque et obligatoire (1882)</strong>.',
          '<strong>1914–1918 :</strong> Première Guerre mondiale. Armistice le <strong>11 novembre 1918</strong>.',
          '<strong>1939–1945 :</strong> Seconde Guerre mondiale. Appel à la résistance du général de Gaulle le <strong>18 juin 1940</strong>.',
          '<strong>La Shoah :</strong> Génocide des Juifs d\'Europe perpétré par les nazis. Sujet étudié à l\'école pour ne pas oublier.',
          '<strong>1944 :</strong> Débarquement en Normandie. Les femmes obtiennent le droit de vote.',
          '<strong>8 mai 1945 :</strong> Capitulation de l\'Allemagne nazie — fin de la guerre en Europe.',
          '<strong>1958 :</strong> Fondation de la Ve République par de Gaulle. Constitution actuelle.',
          '<strong>1962 :</strong> Le président est élu au suffrage universel direct.',
          '<strong>1981 :</strong> Abolition de la peine de mort sous Mitterrand.'
        ]
      },
      {
        heading: 'Géographie de la France',
        content: [
          '<strong>Capitale :</strong> Paris (traversée par la Seine).',
          '<strong>Continent :</strong> Europe. La France est surnommée <em>l\'Hexagone</em> pour sa forme.',
          '<strong>Population (2025) :</strong> environ 68 millions d\'habitants.',
          '<strong>Frontières :</strong> Espagne (Pyrénées), Italie et Suisse (Alpes), Allemagne, Luxembourg, Belgique au nord-est.',
          '<strong>Mers et océans :</strong> Atlantique à l\'ouest, Méditerranée au sud, Manche entre la France et l\'Angleterre.',
          '<strong>13 régions métropolitaines</strong> + 5 régions d\'outre-mer (DOM-ROM).',
          '<strong>101 départements</strong> au total (96 métropolitains + 5 d\'outre-mer).',
          'La <strong>Réunion</strong> est un département d\'outre-mer dans l\'océan Indien.',
          'La France est le <strong>premier pays touristique au monde</strong>.'
        ]
      },
      {
        heading: 'Culture française',
        content: [
          'La <strong>tour Eiffel</strong> se trouve à Paris. Construite en 1889.',
          'Le <strong>Louvre</strong> est le plus grand musée du monde, situé à Paris.',
          '<strong>Notre-Dame de Paris :</strong> Cathédrale gothique, en partie détruite par un incendie en 2019, en cours de restauration.',
          '<strong>Molière :</strong> Dramaturge et comédien du XVIIe siècle (<em>Le Misanthrope, Tartuffe</em>).',
          '<strong>Albert Camus :</strong> Écrivain et philosophe, prix Nobel de littérature 1957 (<em>L\'Étranger</em>).',
          '<strong>Simone de Beauvoir :</strong> Philosophe et écrivaine féministe (<em>Le Deuxième Sexe</em>).',
          '<strong>Marguerite Yourcenar :</strong> Première femme élue à l\'Académie française (1980).',
          'Le français est parlé par <strong>environ 300 millions</strong> de personnes dans le monde.'
        ]
      }
    ]
  },
  {
    id: 5,
    icon: '🏠',
    sections: [
      {
        heading: 'Santé',
        content: [
          '<strong>Médecin traitant :</strong> Premier recours en cas de problème de santé non urgent. Il coordonne le parcours de soins.',
          '<strong>Urgences hospitalières :</strong> Réservées aux situations d\'urgence vitale ou grave.',
          '<strong>Assurance maladie (Sécurité sociale) :</strong> Inscription obligatoire pour tout résident stable en France. La <strong>carte Vitale</strong> facilite les remboursements.',
          '<strong>Mutuelle santé :</strong> Complémentaire à la Sécurité sociale, couvre la partie non remboursée.',
          '<strong>Vaccinations obligatoires :</strong> Pour protéger la santé individuelle et collective.',
          'Le principe de <strong>confidentialité médicale</strong> protège les informations de santé du patient.'
        ]
      },
      {
        heading: 'Emploi et travail',
        content: [
          '<strong>France Travail</strong> (ex-Pôle Emploi) : Service public de l\'emploi. Inscription obligatoire pour bénéficier des allocations chômage.',
          '<strong>SMIC</strong> : Salaire Minimum Interprofessionnel de Croissance — salaire minimum légal que tout employeur doit respecter.',
          '<strong>Durée légale du travail :</strong> 35 heures par semaine.',
          '<strong>Travail non déclaré :</strong> Interdit et punissable par la loi.',
          'Les personnes étrangères en situation régulière <strong>peuvent créer leur entreprise</strong>. Les femmes ont les mêmes droits que les hommes.',
          'Un mineur peut travailler à partir de <strong>16 ans</strong> dans certaines conditions.',
          '<strong>CDI</strong> (Contrat à Durée Indéterminée) — contrat permanent. <strong>CDD</strong> — contrat temporaire.'
        ]
      },
      {
        heading: 'Famille et état civil',
        content: [
          'La <strong>naissance</strong> d\'un enfant doit être déclarée à la mairie dans les <strong>5 jours</strong>.',
          'Le mariage <strong>civil</strong> célébré en mairie est le seul reconnu par la loi. La cérémonie religieuse est facultative.',
          'En cas de divorce, les deux parents exercent <strong>conjointement l\'autorité parentale</strong>, sauf décision contraire du juge.',
          'La <strong>répudiation</strong> (dissolution unilatérale du mariage) est interdite en France.',
          'La <strong>polygamie</strong> est interdite.',
          'Une femme peut <strong>avorter</strong> librement jusqu\'à 14 semaines de grossesse.'
        ]
      },
      {
        heading: 'Éducation',
        content: [
          'L\'instruction est obligatoire de <strong>3 à 16 ans</strong> pour tous les enfants résidant en France, quelle que soit leur nationalité.',
          '<strong>École maternelle :</strong> 3 à 6 ans. <strong>École élémentaire :</strong> 6 à 11 ans. <strong>Collège :</strong> 11 à 15 ans. <strong>Lycée :</strong> 15 à 18 ans.',
          '<strong>Diplômes :</strong> Brevet des collèges (fin de collège), Baccalauréat (fin de lycée).',
          'Les enfants qui ne parlent pas français peuvent être scolarisés et bénéficient d\'un soutien linguistique.',
          'Les parents d\'élèves ont des droits : participer aux conseils d\'école, être informés des résultats.',
          'Un enfant en situation de handicap a le droit d\'être scolarisé en milieu ordinaire avec les adaptations nécessaires.'
        ]
      },
      {
        heading: 'Démarches administratives',
        content: [
          '<strong>Permis de conduire :</strong> Examen théorique (code de la route) + pratique. Assurance obligatoire avant de conduire.',
          '<strong>Bail locatif :</strong> Doit être écrit et signé par le propriétaire et le locataire pour être valide.',
          '<strong>Aide juridictionnelle :</strong> Aide financière pour avoir un avocat si on a des difficultés financières.',
          '<strong>Conseil de prud\'hommes :</strong> Règle les conflits entre employeurs et salariés.',
          'La majorité légale est fixée à <strong>18 ans</strong>.',
          'L\'<strong>Assurance maladie</strong> est obligatoire pour tous les résidents stables en France.'
        ]
      }
    ]
  }
];
