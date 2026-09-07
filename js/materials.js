'use strict';

// Each section heading and content support 5 languages: fr, en, zh, ar, es
// French is always the fallback. MCQ questions remain in French only.

const MATERIALS = [
  // ─── TOPIC 1 ─────────────────────────────────────────────────────────────────
  {
    id: 1,
    icon: 'landmark',
    sections: [
      {
        heading: {
          fr: 'La laïcité — Définition et principes',
          en: 'Secularism — Definition and principles',
          zh: '世俗主义——定义与原则',
          ar: 'العلمانية — التعريف والمبادئ',
          es: 'El laicismo — Definición y principios'
        },
        content: {
          fr: [
            '<strong>Définition :</strong> La laïcité garantit la liberté de conscience pour tous — chaque personne est libre d\'avoir ou non une religion, d\'en changer ou de ne plus en avoir.',
            '<strong>Article 1er de la Constitution (1958) :</strong> "La France est une République indivisible, <em>laïque</em>, démocratique et sociale."',
            '<strong>L\'État est neutre :</strong> L\'État français ne reconnaît aucune religion, ne salarie ni ne subventionne aucun culte.',
            '<strong>Liberté de pratiquer :</strong> Toute personne peut pratiquer sa religion dans le respect de l\'ordre public. Personne ne peut être obligé de respecter les prescriptions d\'une religion.',
            '<strong>Loi de 1905 :</strong> La loi de séparation des Églises et de l\'État du 9 décembre 1905 est le fondement de la laïcité française.',
            '<strong>La laïcité n\'est pas une opinion :</strong> C\'est un principe constitutionnel qui s\'impose à tous.',
          ],
          en: [
            '<strong>Definition:</strong> Secularism (laïcité) guarantees freedom of conscience for all — everyone is free to have or not have a religion, to change it or abandon it.',
            '<strong>Article 1 of the Constitution (1958):</strong> "France is an indivisible, <em>secular</em>, democratic and social Republic."',
            '<strong>The State is neutral:</strong> The French State does not recognise any religion and does not fund any religious institution.',
            '<strong>Freedom to practise:</strong> Anyone may practise their religion within the bounds of public order. No one can be forced to follow religious rules.',
            '<strong>Law of 1905:</strong> The law separating Churches and State (9 December 1905) is the foundation of French secularism.',
            '<strong>Secularism is not an opinion:</strong> It is a constitutional principle binding on everyone.',
          ],
          zh: [
            '<strong>定义：</strong>世俗主义（laïcité）保障所有人的良心自由——每个人都有权信仰或不信仰某种宗教，可以改变或放弃宗教信仰。',
            '<strong>1958年宪法第1条：</strong>"法国是一个不可分割的、<em>世俗的</em>、民主的和社会的共和国。"',
            '<strong>国家保持中立：</strong>法国国家不承认任何宗教，不资助任何宗教机构。',
            '<strong>宗教自由：</strong>任何人都可以在不扰乱公共秩序的前提下信仰宗教。任何人都不能被强迫遵守宗教规定。',
            '<strong>1905年法律：</strong>《政教分离法》是法国世俗主义的基础。',
            '<strong>世俗主义不是意见：</strong>它是对所有人具有约束力的宪法原则。',
          ],
          ar: [
            '<strong>التعريف:</strong> تضمن العلمانية (laïcité) حرية الضمير للجميع — فكل شخص حر في اعتناق دين أو عدمه، وتغييره أو التخلي عنه.',
            '<strong>المادة 1 من الدستور (1958):</strong> "فرنسا جمهورية غير قابلة للتجزئة، <em>علمانية</em>، ديمقراطية واجتماعية."',
            '<strong>الدولة محايدة:</strong> لا تعترف الدولة الفرنسية بأي دين ولا تموّل أي مؤسسة دينية.',
            '<strong>حرية الممارسة الدينية:</strong> يحق لكل شخص ممارسة دينه ضمن حدود النظام العام. لا يمكن إجبار أحد على اتباع تعاليم دينية.',
            '<strong>قانون 1905:</strong> قانون الفصل بين الكنائس والدولة (9 ديسمبر 1905) هو أساس العلمانية الفرنسية.',
            '<strong>العلمانية ليست رأياً:</strong> إنها مبدأ دستوري يلزم الجميع.',
          ],
          es: [
            '<strong>Definición:</strong> El laicismo (laïcité) garantiza la libertad de conciencia para todos — cada persona es libre de tener o no una religión, de cambiarla o abandonarla.',
            '<strong>Artículo 1 de la Constitución (1958):</strong> "Francia es una República indivisible, <em>laica</em>, democrática y social."',
            '<strong>El Estado es neutral:</strong> El Estado francés no reconoce ninguna religión ni financia ninguna institución religiosa.',
            '<strong>Libertad de práctica:</strong> Cualquier persona puede practicar su religión dentro del respeto al orden público. Nadie puede ser obligado a seguir preceptos religiosos.',
            '<strong>Ley de 1905:</strong> La ley de separación de las Iglesias y el Estado del 9 de diciembre de 1905 es el fundamento del laicismo francés.',
            '<strong>El laicismo no es una opinión:</strong> Es un principio constitucional que obliga a todos.',
          ]
        }
      },
      {
        heading: {
          fr: 'Histoire de la laïcité — Dates clés',
          en: 'History of secularism — Key dates',
          zh: '世俗主义历史——重要日期',
          ar: 'تاريخ العلمانية — التواريخ الرئيسية',
          es: 'Historia del laicismo — Fechas clave'
        },
        content: {
          fr: [
            '<strong>1789 :</strong> La DDHC crée le principe de liberté de conscience et de religion.',
            '<strong>1882 :</strong> Jules Ferry rend l\'école primaire publique obligatoire, gratuite et indépendante de l\'Église.',
            '<strong>1905 :</strong> Loi de séparation de l\'Église et de l\'État — l\'État est indépendant des religions.',
            '<strong>2004 :</strong> Loi interdisant les signes religieux ostensibles dans les écoles, collèges et lycées publics.',
            '<strong>2010 :</strong> Loi interdisant la dissimulation du visage dans l\'espace public.',
            '<strong>2021 :</strong> Loi renforçant la laïcité et la neutralité dans les services publics.',
          ],
          en: [
            '<strong>1789:</strong> The Declaration of Human Rights establishes freedom of conscience and religion.',
            '<strong>1882:</strong> Jules Ferry makes public primary school compulsory, free, and independent of the Church.',
            '<strong>1905:</strong> Law separating Church and State — the State is independent of all religions.',
            '<strong>2004:</strong> Law banning conspicuous religious symbols in public schools (primary, secondary, lycée).',
            '<strong>2010:</strong> Law banning face coverings in public spaces.',
            '<strong>2021:</strong> Law strengthening secularism and neutrality in public services.',
          ],
          zh: [
            '<strong>1789年：</strong>《人权宣言》确立良心与宗教自由原则。',
            '<strong>1882年：</strong>茹费理使公立小学义务化、免费化，并与教会分离。',
            '<strong>1905年：</strong>《政教分离法》——国家独立于所有宗教。',
            '<strong>2004年：</strong>禁止在公立学校佩戴明显宗教符号的法律。',
            '<strong>2010年：</strong>禁止在公共场所遮盖面部的法律。',
            '<strong>2021年：</strong>加强公共服务领域世俗主义和中立性的法律。',
          ],
          ar: [
            '<strong>1789:</strong> أرسى إعلان حقوق الإنسان والمواطن مبدأ حرية الضمير والدين.',
            '<strong>1882:</strong> جعل جول فيري التعليم الابتدائي إلزامياً ومجانياً ومستقلاً عن الكنيسة.',
            '<strong>1905:</strong> قانون الفصل بين الكنائس والدولة — الدولة مستقلة عن جميع الأديان.',
            '<strong>2004:</strong> قانون يحظر الرموز الدينية الظاهرة في المدارس العامة.',
            '<strong>2010:</strong> قانون يحظر إخفاء الوجه في الأماكن العامة.',
            '<strong>2021:</strong> قانون يعزز العلمانية والحياد في الخدمات العامة.',
          ],
          es: [
            '<strong>1789:</strong> La Declaración de Derechos del Hombre y del Ciudadano establece la libertad de conciencia y de religión.',
            '<strong>1882:</strong> Jules Ferry hace la escuela primaria pública obligatoria, gratuita e independiente de la Iglesia.',
            '<strong>1905:</strong> Ley de separación de la Iglesia y el Estado — el Estado es independiente de todas las religiones.',
            '<strong>2004:</strong> Ley que prohíbe los signos religiosos ostensibles en las escuelas públicas (primaria, secundaria y bachillerato).',
            '<strong>2010:</strong> Ley que prohíbe la ocultación del rostro en los espacios públicos.',
            '<strong>2021:</strong> Ley que refuerza el laicismo y la neutralidad en los servicios públicos.',
          ]
        }
      },
      {
        heading: {
          fr: 'La laïcité dans la vie quotidienne',
          en: 'Secularism in daily life',
          zh: '日常生活中的世俗主义',
          ar: 'العلمانية في الحياة اليومية',
          es: 'El laicismo en la vida cotidiana'
        },
        content: {
          fr: [
            '<strong>Espace public :</strong> Toute personne peut porter des signes religieux (voile, kippa, croix...) dans les rues, restaurants, transports.',
            '<strong>Services publics :</strong> Les agents de la fonction publique ne peuvent pas exprimer leurs convictions religieuses dans le cadre de leur travail.',
            '<strong>Travail privé :</strong> Un salarié peut exprimer ses convictions, sauf si cela perturbe le fonctionnement de l\'entreprise.',
            '<strong>École publique :</strong> Les élèves ne peuvent pas porter de signes religieux ostensibles. Les enseignants sont soumis au principe de neutralité absolue.',
            '<strong>Prosélytisme :</strong> Autorisé en France mais interdit dans les écoles publiques, services publics et hôpitaux.',
            '<strong>Blasphème :</strong> Non interdit en France. Cependant, l\'incitation à la haine religieuse et la négation de la Shoah sont punies par la loi.',
          ],
          en: [
            '<strong>Public space:</strong> Anyone may wear religious symbols (veil, kippa, cross…) in streets, restaurants and transport.',
            '<strong>Public services:</strong> Civil servants may not express religious beliefs while on duty.',
            '<strong>Private sector:</strong> Employees may express beliefs unless it disrupts the company\'s operations.',
            '<strong>Public school:</strong> Pupils may not wear conspicuous religious symbols. Teachers must maintain strict neutrality.',
            '<strong>Proselytism:</strong> Permitted in France, but banned in public schools, public services and hospitals.',
            '<strong>Blasphemy:</strong> Not illegal in France. However, inciting religious hatred and denying the Holocaust are criminal offences.',
          ],
          zh: [
            '<strong>公共场所：</strong>任何人都可以在街道、餐厅、交通工具等地方佩戴宗教符号（头巾、基帕、十字架等）。',
            '<strong>公共服务：</strong>公务员在工作期间不得表达宗教信仰。',
            '<strong>私营部门：</strong>员工可以表达信仰，除非这会妨碍公司运营。',
            '<strong>公立学校：</strong>学生不得佩戴明显的宗教符号。教师必须保持绝对中立。',
            '<strong>传教：</strong>在法国允许，但在公立学校、公共服务机构和医院禁止。',
            '<strong>亵渎：</strong>在法国不违法。但煽动宗教仇恨和否认大屠杀是刑事犯罪。',
          ],
          ar: [
            '<strong>الفضاء العام:</strong> يحق لأي شخص ارتداء رموز دينية (حجاب، كيبا، صليب...) في الشوارع والمطاعم والمواصلات.',
            '<strong>الخدمات العامة:</strong> لا يجوز للموظفين العموميين التعبير عن قناعاتهم الدينية أثناء العمل.',
            '<strong>القطاع الخاص:</strong> يمكن للموظف التعبير عن قناعاته ما لم يُخل ذلك بسير العمل.',
            '<strong>المدرسة العامة:</strong> لا يحق للتلاميذ ارتداء رموز دينية ظاهرة. يلتزم المعلمون بالحياد المطلق.',
            '<strong>التبشير:</strong> مسموح به في فرنسا لكنه محظور في المدارس والخدمات العامة والمستشفيات.',
            '<strong>التجديف:</strong> ليس مخالفاً للقانون في فرنسا. أما التحريض على الكراهية الدينية وإنكار المحرقة فهما جريمتان جنائيتان.',
          ],
          es: [
            '<strong>Espacio público:</strong> Cualquier persona puede llevar símbolos religiosos (velo, kipá, cruz...) en calles, restaurantes y transporte.',
            '<strong>Servicios públicos:</strong> Los funcionarios no pueden expresar sus convicciones religiosas durante el ejercicio de su cargo.',
            '<strong>Sector privado:</strong> Un empleado puede expresar sus convicciones, salvo que ello perturbe el funcionamiento de la empresa.',
            '<strong>Escuela pública:</strong> Los alumnos no pueden llevar signos religiosos ostensibles. Los profesores están sometidos al principio de neutralidad absoluta.',
            '<strong>Proselitismo:</strong> Permitido en Francia, pero prohibido en escuelas públicas, servicios públicos y hospitales.',
            '<strong>Blasfemia:</strong> No es ilegal en Francia. Sin embargo, la incitación al odio religioso y la negación del Holocausto son delitos penales.',
          ]
        }
      },
      {
        heading: {
          fr: 'Les symboles de la République',
          en: 'Symbols of the Republic',
          zh: '共和国的象征',
          ar: 'رموز الجمهورية',
          es: 'Los símbolos de la República'
        },
        content: {
          fr: [
            '<strong>Drapeau tricolore :</strong> Bleu, blanc, rouge. Né en 1789. Officiel depuis 1794. Insulter ou détruire le drapeau en public est un délit.',
            '<strong>Marianne :</strong> Symbole féminin de la République depuis la Révolution. Porte le bonnet phrygien. Présente dans toutes les mairies, sur les timbres et pièces de monnaie.',
            '<strong>La Marseillaise :</strong> Hymne national composé en 1792. Déclaré hymne national en 1879.',
            '<strong>Le coq gaulois :</strong> Symbole non officiel mais emblématique. Utilisé sur les maillots des équipes nationales.',
            '<strong>Fête nationale — 14 juillet :</strong> Commémore la prise de la Bastille (1789). Défilé militaire sur les Champs-Élysées. Feux d\'artifice partout en France.',
          ],
          en: [
            '<strong>Tricolour flag:</strong> Blue, white, red. Born in 1789, official since 1794. Publicly insulting or destroying the flag is a criminal offence.',
            '<strong>Marianne:</strong> Female symbol of the Republic since the Revolution. Wears the Phrygian cap. Found in all town halls, on stamps and coins.',
            '<strong>La Marseillaise:</strong> National anthem composed in 1792, officially adopted in 1879.',
            '<strong>The Gallic rooster:</strong> Unofficial but iconic symbol. Used on national sports team jerseys.',
            '<strong>National Day — 14 July:</strong> Commemorates the storming of the Bastille (1789). Military parade on the Champs-Élysées. Fireworks across France.',
          ],
          zh: [
            '<strong>三色旗：</strong>蓝、白、红色。诞生于1789年，1794年正式确立。在公共场所侮辱或破坏国旗是违法行为。',
            '<strong>玛丽安娜：</strong>自大革命以来的共和国女性象征。戴弗里吉亚帽。出现在所有市政厅、邮票和硬币上。',
            '<strong>马赛曲：</strong>1792年创作的国歌，1879年正式采用。',
            '<strong>高卢雄鸡：</strong>非官方但具有代表性的象征。用于国家体育队球衣。',
            '<strong>国庆节——7月14日：</strong>纪念攻占巴士底狱（1789年）。香榭丽舍大道阅兵。全国烟花表演。',
          ],
          ar: [
            '<strong>العلم الثلاثي الألوان:</strong> أزرق، أبيض، أحمر. وُلد عام 1789، رسمي منذ 1794. إهانة العلم أو تدميره علناً جريمة جنائية.',
            '<strong>ماريان:</strong> الرمز الأنثوي للجمهورية منذ الثورة. ترتدي القبعة الفريجية. موجودة في جميع دور البلدية والطوابع والعملات.',
            '<strong>لا مارسييز:</strong> النشيد الوطني المؤلَّف عام 1792، اعتُمد رسمياً عام 1879.',
            '<strong>الديك الغالي:</strong> رمز غير رسمي لكنه بارز. يُستخدم على قمصان المنتخبات الوطنية.',
            '<strong>العيد الوطني — 14 يوليو:</strong> يحيي ذكرى اقتحام الباستيل (1789). عرض عسكري على الشانزليزيه. ألعاب نارية في كل أنحاء فرنسا.',
          ],
          es: [
            '<strong>Bandera tricolor:</strong> Azul, blanca y roja. Nació en 1789, oficial desde 1794. Insultar o destruir la bandera en público es un delito penal.',
            '<strong>Marianne:</strong> Símbolo femenino de la República desde la Revolución. Lleva el gorro frigio. Presente en todos los ayuntamientos, sellos y monedas.',
            '<strong>La Marsellesa:</strong> Himno nacional compuesto en 1792, adoptado oficialmente en 1879.',
            '<strong>El gallo galo:</strong> Símbolo no oficial pero emblemático. Utilizado en las camisetas de los equipos deportivos nacionales.',
            '<strong>Fiesta Nacional — 14 de julio:</strong> Conmemora la toma de la Bastilla (1789). Desfile militar en los Campos Elíseos. Fuegos artificiales en toda Francia.',
          ]
        }
      },
      {
        heading: {
          fr: 'La devise et l\'engagement républicain',
          en: 'The motto and republican commitment',
          zh: '国家格言与共和国承诺',
          ar: 'الشعار والالتزام الجمهوري',
          es: 'El lema y el compromiso republicano'
        },
        content: {
          fr: [
            '<strong>Devise :</strong> "Liberté, Égalité, Fraternité" — officielle depuis 1848, inscrite dans la Constitution de 1958.',
            '<strong>Liberté :</strong> Chaque personne peut penser, s\'exprimer et vivre comme elle le souhaite dans le respect des lois.',
            '<strong>Égalité :</strong> La loi est la même pour tous. Plus de 26 critères de discrimination interdits (origine, sexe, religion, handicap, âge...).',
            '<strong>Égalité femmes-hommes :</strong> Inscrite dans le Préambule de la Constitution de 1946. Loi de 2000 sur la parité politique.',
            '<strong>Fraternité :</strong> Solidarité collective (Sécurité sociale, RSA), entre générations (retraites), et engagement associatif.',
            '<strong>Contrat d\'engagement républicain :</strong> Doit être signé par tout étranger lors d\'une demande de titre de séjour. Engage à respecter laïcité, égalité, dignité, symboles et frontières de la République.',
          ],
          en: [
            '<strong>Motto:</strong> "Liberty, Equality, Fraternity" — official since 1848, enshrined in the 1958 Constitution.',
            '<strong>Liberty:</strong> Everyone may think, speak and live as they wish within the bounds of the law.',
            '<strong>Equality:</strong> The law is the same for all. Over 26 grounds of discrimination are prohibited (origin, sex, religion, disability, age…).',
            '<strong>Gender equality:</strong> Enshrined in the Preamble of the 1946 Constitution. A 2000 law requires gender parity in political candidacies.',
            '<strong>Fraternity:</strong> Collective solidarity (Social Security, RSA benefits), intergenerational solidarity (pensions), and voluntary associations.',
            '<strong>Republican Engagement Contract:</strong> Every foreign national must sign this when applying for a residence permit. It commits the signatory to respect secularism, equality, dignity, and the symbols and borders of the Republic.',
          ],
          zh: [
            '<strong>格言：</strong>"自由、平等、博爱"——1848年正式确立，载入1958年宪法。',
            '<strong>自由：</strong>每个人都可以在法律允许的范围内自由思考、表达和生活。',
            '<strong>平等：</strong>法律对所有人一视同仁。超过26种歧视行为被明令禁止（包括种族、性别、宗教、残疾、年龄等）。',
            '<strong>性别平等：</strong>载入1946年宪法序言。2000年通过法律要求政治候选人性别均等。',
            '<strong>博爱：</strong>集体团结（社会保障、RSA补贴）、代际团结（养老金）和志愿协会活动。',
            '<strong>共和国承诺合同：</strong>所有外国人申请居留证时必须签署。承诺尊重世俗主义、平等、尊严以及共和国的象征和边界。',
          ],
          ar: [
            '<strong>الشعار:</strong> "الحرية، المساواة، الأخوة" — رسمي منذ 1848، مكرَّس في دستور 1958.',
            '<strong>الحرية:</strong> لكل شخص الحق في التفكير والتعبير والعيش كما يشاء ضمن حدود القانون.',
            '<strong>المساواة:</strong> القانون واحد للجميع. أكثر من 26 معياراً للتمييز محظورة (الأصل، الجنس، الدين، الإعاقة، السن...).',
            '<strong>المساواة بين الجنسين:</strong> مكرَّسة في مقدمة دستور 1946. قانون 2000 يُلزم بالمناصفة في الترشح السياسي.',
            '<strong>الأخوة:</strong> التضامن الجماعي (الضمان الاجتماعي)، التضامن بين الأجيال (معاشات التقاعد)، والعمل التطوعي.',
            '<strong>عقد الالتزام الجمهوري:</strong> يجب أن يوقّعه كل أجنبي عند طلب تصريح الإقامة. يلتزم بموجبه باحترام العلمانية والمساواة والكرامة ورموز الجمهورية وحدودها.',
          ],
          es: [
            '<strong>Lema:</strong> "Libertad, Igualdad, Fraternidad" — oficial desde 1848, inscrito en la Constitución de 1958.',
            '<strong>Libertad:</strong> Cada persona puede pensar, expresarse y vivir como desee dentro del respeto a las leyes.',
            '<strong>Igualdad:</strong> La ley es la misma para todos. Más de 26 criterios de discriminación están prohibidos (origen, sexo, religión, discapacidad, edad...).',
            '<strong>Igualdad entre mujeres y hombres:</strong> Inscrita en el Preámbulo de la Constitución de 1946. Ley de 2000 sobre la paridad política.',
            '<strong>Fraternidad:</strong> Solidaridad colectiva (Seguridad Social, RSA), entre generaciones (pensiones) y compromiso asociativo.',
            '<strong>Contrato de compromiso republicano:</strong> Todo extranjero debe firmarlo al solicitar un permiso de residencia. Compromete a respetar el laicismo, la igualdad, la dignidad, los símbolos y las fronteras de la República.',
          ]
        }
      },
      {
        heading: {
          fr: 'L\'IVG dans la Constitution — Mise à jour 2026',
          en: 'Abortion rights in the Constitution — 2026 update',
          zh: '宪法中的人工终止妊娠权——2026年更新',
          ar: 'حق الإجهاض في الدستور — تحديث 2026',
          es: 'El derecho al aborto en la Constitución — Actualización 2026'
        },
        content: {
          fr: [
            '<strong>Réforme du 4 mars 2024 :</strong> La liberté garantie à la femme d\'avoir recours à l\'IVG est désormais inscrite dans l\'article 34 de la Constitution. La France est le premier pays au monde à inscrire ce droit dans sa Constitution.',
            '<strong>Portée :</strong> Ce droit constitutionnel ne peut pas être remis en cause par une loi ordinaire.',
            '<strong>Délai légal :</strong> L\'IVG est légale jusqu\'à 14 semaines de grossesse (délai allongé de 12 à 14 semaines depuis 2022).',
            '<strong>Accès et remboursement :</strong> L\'IVG est remboursée à 100% par la Sécurité sociale pour toutes les femmes. Elle peut être pratiquée en hôpital, clinique ou cabinet médical.',
            '<strong>Historique :</strong> Loi Veil de 1975 → légalisation. Loi de 2001 → allongement du délai. Réforme constitutionnelle de 2024 → consécration définitive.',
          ],
          en: [
            '<strong>Reform of 4 March 2024:</strong> The guaranteed freedom for women to have access to abortion (IVG) is now enshrined in Article 34 of the Constitution. France is the first country in the world to explicitly enshrine this right in its Constitution.',
            '<strong>Scope:</strong> This constitutional right cannot be overturned by an ordinary law.',
            '<strong>Legal deadline:</strong> Abortion is legal up to 14 weeks of pregnancy (extended from 12 to 14 weeks in 2022).',
            '<strong>Access and reimbursement:</strong> Abortion is 100% reimbursed by Social Security for all women. It can be performed in hospitals, clinics or medical practices.',
            '<strong>History:</strong> Veil Act 1975 → legalisation. 2001 law → extended deadline. 2024 constitutional reform → permanent enshrinement.',
          ],
          zh: [
            '<strong>2024年3月4日改革：</strong>保障女性进行人工终止妊娠（IVG）的自由现已写入宪法第34条。法国成为世界上第一个在宪法中明确载入这一权利的国家。',
            '<strong>意义：</strong>这一宪法权利不能被普通法律所废除。',
            '<strong>法定期限：</strong>人工流产在怀孕14周内合法（2022年从12周延长至14周）。',
            '<strong>获取与报销：</strong>社会保障为所有女性100%报销人工流产费用，可在医院、诊所或诊疗室进行。',
            '<strong>历史：</strong>1975年《维尔法》→合法化。2001年法律→延长期限。2024年宪法改革→永久确立。',
          ],
          ar: [
            '<strong>إصلاح 4 مارس 2024:</strong> باتت حرية المرأة في اللجوء إلى الإجهاض الاختياري (IVG) مكرَّسة في المادة 34 من الدستور. وتُعدّ فرنسا أول دولة في العالم تُدرج هذا الحق صراحةً في دستورها.',
            '<strong>النطاق:</strong> لا يمكن إلغاء هذا الحق الدستوري بقانون عادي.',
            '<strong>المهلة القانونية:</strong> الإجهاض قانوني حتى 14 أسبوعاً من الحمل (تمديد من 12 إلى 14 أسبوعاً منذ 2022).',
            '<strong>الوصول والتعويض:</strong> يُعوَّض الإجهاض بالكامل (100%) من قِبل الضمان الاجتماعي لجميع النساء. يمكن إجراؤه في المستشفيات والعيادات.',
            '<strong>التاريخ:</strong> قانون فيل 1975 → التشريع. قانون 2001 → تمديد المهلة. الإصلاح الدستوري 2024 → التكريس النهائي.',
          ],
          es: [
            '<strong>Reforma del 4 de marzo de 2024:</strong> La libertad garantizada a la mujer de recurrir al aborto (IVG) queda inscrita en el artículo 34 de la Constitución. Francia es el primer país del mundo en consagrar explícitamente este derecho en su Constitución.',
            '<strong>Alcance:</strong> Este derecho constitucional no puede ser suprimido por una ley ordinaria.',
            '<strong>Plazo legal:</strong> El aborto es legal hasta las 14 semanas de embarazo (ampliado de 12 a 14 semanas desde 2022).',
            '<strong>Acceso y reembolso:</strong> El aborto es reembolsado al 100% por la Seguridad Social para todas las mujeres. Puede realizarse en hospitales, clínicas o consultas médicas.',
            '<strong>Historia:</strong> Ley Veil 1975 → legalización. Ley de 2001 → ampliación del plazo. Reforma constitucional 2024 → consagración definitiva.',
          ]
        }
      },
    ]
  },

  // ─── TOPIC 2 ─────────────────────────────────────────────────────────────────
  {
    id: 2,
    icon: 'scale',
    sections: [
      {
        heading: { fr:'La démocratie et la République', en:'Democracy and the Republic', zh:'民主与共和国', ar:'الديمقراطية والجمهورية', es:'La democracia y la República' },
        content: {
          fr: [
            '<strong>Démocratie :</strong> Du grec "Demos Kratos" = "Pouvoir du peuple". Régime où le pouvoir appartient au peuple. La Constitution de 1958 dit : "gouvernement du peuple, par le peuple et pour le peuple".',
            '<strong>République :</strong> Du latin "Res Publica" = "chose publique". Pouvoir exercé par des représentants élus. S\'oppose à la monarchie.',
            '<strong>Ve République :</strong> Fondée en 1958 par le général de Gaulle. Constitution adoptée par référendum à 82%. Toujours en vigueur.',
            '<strong>Pour voter :</strong> Nationalité française + 18 ans + droits civiques + inscrit sur les listes électorales.',
          ],
          en: [
            '<strong>Democracy:</strong> From Greek "Demos Kratos" = "People Power". A system where power belongs to the people. The 1958 Constitution states: "government of the people, by the people, for the people."',
            '<strong>Republic:</strong> From Latin "Res Publica" = "public thing". Power is exercised by elected representatives. Opposite of monarchy.',
            '<strong>Fifth Republic:</strong> Founded in 1958 by General de Gaulle. Constitution approved by referendum (82%). Still in force today.',
            '<strong>To vote:</strong> French nationality + 18 years old + civic rights + registered on electoral rolls.',
          ],
          zh: [
            '<strong>民主：</strong>来自希腊语"Demos Kratos"，意为"人民的权力"。1958年宪法规定："民有、民治、民享的政府。"',
            '<strong>共和国：</strong>来自拉丁语"Res Publica"，意为"公共事务"。权力由民选代表行使，与君主制相对。',
            '<strong>第五共和国：</strong>1958年由戴高乐将军创立。宪法经全民公投（82%赞成）通过，至今有效。',
            '<strong>投票资格：</strong>法国国籍 + 年满18岁 + 具有公民权利 + 已在选民名册上登记。',
          ],
          ar: [
            '<strong>الديمقراطية:</strong> من اليونانية "Demos Kratos" = "سلطة الشعب". نظام يُملك فيه السلطة للشعب. ينص دستور 1958: "حكومة الشعب، بالشعب، للشعب."',
            '<strong>الجمهورية:</strong> من اللاتينية "Res Publica" = "الشأن العام". السلطة تمارَس من قِبَل ممثلين منتخَبين. تقابل الملكية.',
            '<strong>الجمهورية الخامسة:</strong> أسسها الجنرال ديغول عام 1958. اعتُمد الدستور باستفتاء (82%). لا يزال سارياً حتى اليوم.',
            '<strong>شروط التصويت:</strong> الجنسية الفرنسية + 18 سنة + الحقوق المدنية + التسجيل في قوائم الناخبين.',
          ],
          es: [
            '<strong>Democracia:</strong> Del griego "Demos Kratos" = "Poder del pueblo". Sistema donde el poder pertenece al pueblo. La Constitución de 1958 dice: "gobierno del pueblo, por el pueblo y para el pueblo".',
            '<strong>República:</strong> Del latín "Res Publica" = "cosa pública". El poder lo ejercen representantes elegidos. Se opone a la monarquía.',
            '<strong>Quinta República:</strong> Fundada en 1958 por el general de Gaulle. Constitución aprobada por referéndum (82%). Todavía en vigor.',
            '<strong>Para votar:</strong> Nacionalidad francesa + 18 años + derechos cívicos + inscrito en el censo electoral.',
          ]
        }
      },
      {
        heading: { fr:'L\'État de droit et la séparation des pouvoirs', en:'Rule of law and separation of powers', zh:'法治与权力分立', ar:'دولة القانون وفصل السلطات', es:'El Estado de derecho y la separación de poderes' },
        content: {
          fr: [
            '<strong>État de droit :</strong> La loi est la même pour tous, y compris pour l\'État. Fondé sur 6 principes : primauté du droit, égalité devant la loi, séparation des pouvoirs, légalité, sécurité juridique, protection juridictionnelle.',
            '<strong>Pouvoir LÉGISLATIF :</strong> Le Parlement (Assemblée nationale + Sénat). Vote les lois et contrôle le gouvernement.',
            '<strong>Pouvoir EXÉCUTIF :</strong> Le président de la République (palais de l\'Élysée) + le gouvernement (Premier ministre à l\'Hôtel de Matignon). Applique et fait respecter les lois.',
            '<strong>Autorité JUDICIAIRE :</strong> Juges et magistrats indépendants. Rend la justice. Nul n\'est au-dessus des lois.',
          ],
          en: [
            '<strong>Rule of law:</strong> The law is the same for everyone, including the State. Based on 6 principles: supremacy of law, equality before the law, separation of powers, legality, legal certainty, judicial protection.',
            '<strong>LEGISLATIVE power:</strong> Parliament (National Assembly + Senate). Votes laws and oversees the government.',
            '<strong>EXECUTIVE power:</strong> The President (Élysée Palace) + the government (Prime Minister at the Hôtel de Matignon). Implements and enforces the laws.',
            '<strong>JUDICIAL authority:</strong> Independent judges and magistrates. Administers justice. No one is above the law.',
          ],
          zh: [
            '<strong>法治：</strong>法律对所有人（包括国家）一视同仁。基于六项原则：法律至上、法律面前人人平等、权力分立、合法性、法律确定性、司法保护。',
            '<strong>立法权：</strong>议会（国民议会+参议院）。投票通过法律并监督政府。',
            '<strong>行政权：</strong>总统（爱丽舍宫）+ 政府（总理在马提尼翁宾馆）。执行和实施法律。',
            '<strong>司法权：</strong>独立的法官和司法官员。主持司法。没有人凌驾于法律之上。',
          ],
          ar: [
            '<strong>دولة القانون:</strong> القانون واحد للجميع بما فيهم الدولة. يقوم على 6 مبادئ: سيادة القانون، المساواة أمام القانون، الفصل بين السلطات، المشروعية، الأمن القانوني، الحماية القضائية.',
            '<strong>السلطة التشريعية:</strong> البرلمان (الجمعية الوطنية + مجلس الشيوخ). يُصوّت على القوانين ويُراقب الحكومة.',
            '<strong>السلطة التنفيذية:</strong> رئيس الجمهورية (قصر الإليزيه) + الحكومة (رئيس الوزراء في فندق ماتينيون). تُطبِّق القوانين وتُنفِّذها.',
            '<strong>السلطة القضائية:</strong> قضاة ومحاكم مستقلة. تُقيم العدل. لا أحد فوق القانون.',
          ],
          es: [
            '<strong>Estado de derecho:</strong> La ley es la misma para todos, incluido el Estado. Se basa en 6 principios: primacía del derecho, igualdad ante la ley, separación de poderes, legalidad, seguridad jurídica, protección jurisdiccional.',
            '<strong>Poder LEGISLATIVO:</strong> El Parlamento (Asamblea Nacional + Senado). Vota las leyes y controla al gobierno.',
            '<strong>Poder EJECUTIVO:</strong> El presidente de la República (Palacio del Elíseo) + el gobierno (Primer Ministro en el Hôtel de Matignon). Aplica y hace respetar las leyes.',
            '<strong>Autoridad JUDICIAL:</strong> Jueces y magistrados independientes. Imparte justicia. Nadie está por encima de las leyes.',
          ]
        }
      },
      {
        heading: { fr:'Les institutions et les élections', en:'Institutions and elections', zh:'机构与选举', ar:'المؤسسات والانتخابات', es:'Las instituciones y las elecciones' },
        content: {
          fr: [
            '<strong>Président :</strong> Élu pour 5 ans au suffrage universel direct (depuis 1962). Nomme le Premier ministre. Chef des armées. Réside au palais de l\'Élysée.',
            '<strong>Parlement :</strong> 577 députés (élus 5 ans) + 348 sénateurs (élus 6 ans). Vote les lois.',
            '<strong>Types d\'élections :</strong> Présidentielles (5 ans), législatives (5 ans), municipales/départementales/régionales (6 ans), européennes (5 ans).',
            '<strong>Suffrage universel :</strong> Tous les citoyens français de 18 ans, ayant leurs droits civiques et inscrits sur les listes électorales, peuvent voter. Le vote est personnel, libre et secret.',
            '<strong>Ressortissants UE :</strong> Peuvent voter aux élections municipales (résidence >6 mois) et européennes.',
          ],
          en: [
            '<strong>President:</strong> Elected for 5 years by direct universal suffrage (since 1962). Appoints the Prime Minister. Commander-in-chief of the armed forces. Resides at the Élysée Palace.',
            '<strong>Parliament:</strong> 577 deputies (5-year term) + 348 senators (6-year term). Votes laws.',
            '<strong>Types of elections:</strong> Presidential (every 5 years), legislative (5 years), municipal/departmental/regional (6 years), European (5 years).',
            '<strong>Universal suffrage:</strong> All French citizens aged 18+, with civil rights and registered on electoral rolls, can vote. Voting is personal, free and secret.',
            '<strong>EU nationals:</strong> May vote in municipal elections (after 6 months\' residence) and European elections.',
          ],
          zh: [
            '<strong>总统：</strong>通过直接普选每5年选出一次（自1962年起）。任命总理。武装力量总司令。住在爱丽舍宫。',
            '<strong>议会：</strong>577名国民议会代表（5年任期）+ 348名参议员（6年任期）。投票通过法律。',
            '<strong>选举类型：</strong>总统选举（5年）、立法选举（5年）、市政/省级/地区选举（6年）、欧洲选举（5年）。',
            '<strong>普选权：</strong>所有年满18岁、具有公民权利并已在选民名册上登记的法国公民均可投票。投票是个人的、自由的和秘密的。',
            '<strong>欧盟公民：</strong>可参加市政选举（居住>6个月）和欧洲选举投票。',
          ],
          ar: [
            '<strong>الرئيس:</strong> يُنتخَب لمدة 5 سنوات بالاقتراع العام المباشر (منذ 1962). يُعيِّن رئيس الوزراء. القائد الأعلى للقوات المسلحة. يقيم في قصر الإليزيه.',
            '<strong>البرلمان:</strong> 577 نائباً (5 سنوات) + 348 شيخاً (6 سنوات). يُصوِّت على القوانين.',
            '<strong>أنواع الانتخابات:</strong> رئاسية (كل 5 سنوات)، تشريعية (5 سنوات)، بلدية/إقليمية (6 سنوات)، أوروبية (5 سنوات).',
            '<strong>الاقتراع العام:</strong> جميع المواطنين الفرنسيين من 18 سنة فأكثر، المتمتعين بحقوقهم المدنية والمسجَّلين في القوائم الانتخابية، يحق لهم التصويت. التصويت شخصي وحر وسري.',
            '<strong>مواطنو الاتحاد الأوروبي:</strong> يمكنهم التصويت في الانتخابات البلدية (بعد 6 أشهر إقامة) والانتخابات الأوروبية.',
          ],
          es: [
            '<strong>Presidente:</strong> Elegido por 5 años por sufragio universal directo (desde 1962). Nombra al Primer Ministro. Jefe de las fuerzas armadas. Reside en el Palacio del Elíseo.',
            '<strong>Parlamento:</strong> 577 diputados (mandato de 5 años) + 348 senadores (mandato de 6 años). Vota las leyes.',
            '<strong>Tipos de elecciones:</strong> Presidenciales (cada 5 años), legislativas (5 años), municipales/departamentales/regionales (6 años), europeas (5 años).',
            '<strong>Sufragio universal:</strong> Todos los ciudadanos franceses mayores de 18 años, con derechos cívicos e inscritos en el censo electoral, pueden votar. El voto es personal, libre y secreto.',
            '<strong>Ciudadanos de la UE:</strong> Pueden votar en elecciones municipales (tras 6 meses de residencia) y en las europeas.',
          ]
        }
      },
      {
        heading: { fr:'L\'organisation administrative et l\'Union européenne', en:'Administrative organisation and the European Union', zh:'行政组织与欧盟', ar:'التنظيم الإداري والاتحاد الأوروبي', es:'La organización administrativa y la Unión Europea' },
        content: {
          fr: [
            '<strong>Communes :</strong> ~35 000 en France. Gèrent l\'urbanisme, les écoles primaires et maternelles. Dirigées par le maire.',
            '<strong>Départements :</strong> 101 au total. Gèrent l\'aide sociale, les collèges, les routes. Le préfet représente l\'État.',
            '<strong>Régions :</strong> 18 au total (13 métro + 5 outre-mer). Gèrent les lycées et le développement économique.',
            '<strong>Union européenne :</strong> 27 États membres. Fondée par le traité de Maastricht (1992). Devise : "Unie dans la diversité". Hymne : L\'Ode à la joie. Journée de l\'Europe : 9 mai. L\'euro utilisé en France depuis 2002.',
            '<strong>Institutions UE :</strong> Conseil européen (Bruxelles — 27 chefs d\'État), Commission européenne (Bruxelles — 27 commissaires), Parlement européen (Strasbourg — 720 députés), Cour de justice (Luxembourg).',
          ],
          en: [
            '<strong>Municipalities:</strong> ~35,000 in France. Manage urban planning and primary/nursery schools. Led by the mayor.',
            '<strong>Departments:</strong> 101 in total. Manage social services, secondary schools (collèges) and roads. The prefect represents the State.',
            '<strong>Regions:</strong> 18 in total (13 metropolitan + 5 overseas). Manage high schools (lycées) and economic development.',
            '<strong>European Union:</strong> 27 member states. Founded by the Maastricht Treaty (1992). Motto: "United in Diversity". Anthem: Ode to Joy. Europe Day: 9 May. Euro in use in France since 2002.',
            '<strong>EU institutions:</strong> European Council (Brussels — 27 heads of state), European Commission (Brussels — 27 commissioners), European Parliament (Strasbourg — 720 MEPs), Court of Justice (Luxembourg).',
          ],
          zh: [
            '<strong>市镇：</strong>法国约35,000个。管理城市规划和小学/幼儿园。由市长领导。',
            '<strong>省：</strong>共101个。管理社会服务、初中和道路。省长代表国家。',
            '<strong>大区：</strong>共18个（13个本土+5个海外）。管理高中和经济发展。',
            '<strong>欧盟：</strong>27个成员国。由《马斯特里赫特条约》（1992年）创立。格言："在多样性中统一"。颂歌：《欢乐颂》。欧洲日：5月9日。欧元自2002年起在法国使用。',
            '<strong>欧盟机构：</strong>欧洲理事会（布鲁塞尔——27位国家元首）、欧盟委员会（布鲁塞尔——27位委员）、欧洲议会（斯特拉斯堡——720名议员）、欧洲法院（卢森堡）。',
          ],
          ar: [
            '<strong>البلديات:</strong> نحو 35,000 في فرنسا. تُدير التعمير والمدارس الابتدائية ورياض الأطفال. يقودها العمدة.',
            '<strong>الأقسام الإدارية:</strong> 101 قسماً إجمالاً. تُدير الخدمات الاجتماعية والمتوسطات والطرق. يمثِّل المحافظُ الدولةَ فيها.',
            '<strong>الجهات:</strong> 18 جهة (13 في البر الرئيسي + 5 في ما وراء البحار). تُدير الثانويات والتنمية الاقتصادية.',
            '<strong>الاتحاد الأوروبي:</strong> 27 دولة عضو. أُسِّس بموجب معاهدة ماستريخت (1992). الشعار: "متحدون في التنوع". النشيد: نشيد الفرح. يوم أوروبا: 9 مايو. اليورو مستخدَم في فرنسا منذ 2002.',
            '<strong>مؤسسات الاتحاد الأوروبي:</strong> المجلس الأوروبي (بروكسل — 27 رئيس دولة)، المفوضية الأوروبية (بروكسل — 27 مفوضاً)، البرلمان الأوروبي (ستراسبورغ — 720 نائباً)، محكمة العدل (لوكسمبورغ).',
          ],
          es: [
            '<strong>Municipios:</strong> ~35.000 en Francia. Gestionan el urbanismo y las escuelas primarias y de infantil. Dirigidos por el alcalde.',
            '<strong>Departamentos:</strong> 101 en total. Gestionan la ayuda social, los institutos de secundaria (collèges) y las carreteras. El prefecto representa al Estado.',
            '<strong>Regiones:</strong> 18 en total (13 metropolitanas + 5 de ultramar). Gestionan los institutos (lycées) y el desarrollo económico.',
            '<strong>Unión Europea:</strong> 27 Estados miembros. Fundada por el Tratado de Maastricht (1992). Lema: "Unidos en la diversidad". Himno: Oda a la Alegría. Día de Europa: 9 de mayo. El euro se utiliza en Francia desde 2002.',
            '<strong>Instituciones UE:</strong> Consejo Europeo (Bruselas — 27 jefes de Estado), Comisión Europea (Bruselas — 27 comisarios), Parlamento Europeo (Estrasburgo — 720 diputados), Tribunal de Justicia (Luxemburgo).',
          ]
        }
      },
    ]
  },

  // ─── TOPIC 3 ─────────────────────────────────────────────────────────────────
  {
    id: 3,
    icon: 'scroll',
    sections: [
      {
        heading: { fr:'Les droits fondamentaux — Trois catégories', en:'Fundamental rights — Three categories', zh:'基本权利——三种类别', ar:'الحقوق الأساسية — ثلاث فئات', es:'Los derechos fundamentales — Tres categorías' },
        content: {
          fr: [
            '<strong>Catégorie 1 — Droits liés à la personne :</strong> Égalité devant la loi, liberté, sûreté, résistance à l\'oppression, présomption d\'innocence, droit à un avocat, liberté d\'expression, de culte, de grève, droit de propriété.',
            '<strong>Catégorie 2 — Droits économiques et sociaux :</strong> Droit à l\'emploi, à la santé, à l\'éducation gratuite, au logement, à la sécurité sociale. Ces droits nécessitent l\'intervention de l\'État.',
            '<strong>Catégorie 3 — Droits de "troisième génération" :</strong> Droits collectifs : droit à la paix, à un environnement sain, aide aux générations futures.',
          ],
          en: [
            '<strong>Category 1 — Personal rights:</strong> Equality before the law, liberty, security, resistance to oppression, presumption of innocence, right to a lawyer, freedom of expression, of worship, to strike, right to property.',
            '<strong>Category 2 — Economic and social rights:</strong> Right to work, health, free education, housing, social security. These rights require State intervention.',
            '<strong>Category 3 — "Third generation" rights:</strong> Collective rights: right to peace, a healthy environment, aid for future generations.',
          ],
          zh: [
            '<strong>第一类——个人权利：</strong>法律面前平等、自由、安全、反抗压迫、无罪推定、获得律师帮助的权利、言论自由、宗教自由、罢工权、财产权。',
            '<strong>第二类——经济和社会权利：</strong>工作权、健康权、免费教育权、住房权、社会保障权。这些权利需要国家干预。',
            '<strong>第三类——"第三代"权利：</strong>集体权利：和平权、健康环境权、为子孙后代提供援助。',
          ],
          ar: [
            '<strong>الفئة 1 — الحقوق الشخصية:</strong> المساواة أمام القانون، الحرية، الأمن، مقاومة الاضطهاد، قرينة البراءة، الحق في محامٍ، حرية التعبير والعبادة والإضراب، حق الملكية.',
            '<strong>الفئة 2 — الحقوق الاقتصادية والاجتماعية:</strong> الحق في العمل والصحة والتعليم المجاني والسكن والضمان الاجتماعي. تستلزم هذه الحقوق تدخل الدولة.',
            '<strong>الفئة 3 — حقوق "الجيل الثالث":</strong> حقوق جماعية: الحق في السلام، البيئة الصحية، والمساعدة للأجيال القادمة.',
          ],
          es: [
            '<strong>Categoría 1 — Derechos vinculados a la persona:</strong> Igualdad ante la ley, libertad, seguridad, resistencia a la opresión, presunción de inocencia, derecho a un abogado, libertad de expresión, de culto, de huelga, derecho a la propiedad.',
            '<strong>Categoría 2 — Derechos económicos y sociales:</strong> Derecho al trabajo, a la salud, a la educación gratuita, a la vivienda, a la seguridad social. Estos derechos requieren la intervención del Estado.',
            '<strong>Categoría 3 — Derechos de "tercera generación":</strong> Derechos colectivos: derecho a la paz, a un medio ambiente sano, ayuda a las generaciones futuras.',
          ]
        }
      },
      {
        heading: { fr:'Les grands textes fondateurs', en:'The founding texts', zh:'重要创始文件', ar:'النصوص التأسيسية الكبرى', es:'Los grandes textos fundadores' },
        content: {
          fr: [
            '<strong>DDHC 1789 :</strong> 17 articles. "Les Hommes naissent et demeurent libres et égaux en droits" (art. 1). Droits naturels = liberté, propriété, sûreté, résistance à l\'oppression (art. 2). Liberté d\'expression (art. 10-11).',
            '<strong>Constitution de 1958 :</strong> Le <strong>bloc de constitutionnalité</strong> = Constitution 1958 + Préambule de 1946 + DDHC 1789 + Charte de l\'environnement 2004. Toutes les lois françaises doivent le respecter.',
            '<strong>Charte de l\'environnement (2004) :</strong> "Chacun a le droit de vivre dans un environnement équilibré et respectueux de la santé." Intégrée à la Constitution en 2005.',
          ],
          en: [
            '<strong>DDHC 1789:</strong> 17 articles. "Men are born and remain free and equal in rights" (art. 1). Natural rights = liberty, property, security, resistance to oppression (art. 2). Freedom of expression (art. 10-11).',
            '<strong>1958 Constitution:</strong> The <strong>constitutional block</strong> = 1958 Constitution + 1946 Preamble + 1789 DDHC + 2004 Environmental Charter. All French laws must comply.',
            '<strong>Environmental Charter (2004):</strong> "Everyone has the right to live in a balanced environment that is respectful of health." Incorporated into the Constitution in 2005.',
          ],
          zh: [
            '<strong>1789年《人权宣言》：</strong>17条。"人生而自由，在权利上一律平等"（第1条）。自然权利 = 自由、财产、安全、反抗压迫（第2条）。言论自由（第10-11条）。',
            '<strong>1958年宪法：</strong><strong>宪法典</strong> = 1958年宪法 + 1946年序言 + 1789年《人权宣言》 + 2004年环境宪章。所有法国法律必须遵守。',
            '<strong>2004年环境宪章：</strong>"每个人都有权生活在有利于健康的均衡环境中。" 2005年纳入宪法。',
          ],
          ar: [
            '<strong>إعلان حقوق الإنسان والمواطن 1789:</strong> 17 مادة. "يولد الناس ويظلون أحراراً ومتساوين في الحقوق" (المادة 1). الحقوق الطبيعية = الحرية والملكية والأمن ومقاومة الاضطهاد (المادة 2). حرية التعبير (المادتان 10-11).',
            '<strong>دستور 1958:</strong> يتألف <strong>الكتلة الدستورية</strong> من دستور 1958 + مقدمة دستور 1946 + إعلان 1789 + ميثاق البيئة 2004. يجب أن تمتثل جميع القوانين الفرنسية لها.',
            '<strong>ميثاق البيئة (2004):</strong> "لكل شخص الحق في العيش في بيئة متوازنة تحترم الصحة." أُدرج في الدستور عام 2005.',
          ],
          es: [
            '<strong>DDHC 1789:</strong> 17 artículos. "Los hombres nacen y permanecen libres e iguales en derechos" (art. 1). Derechos naturales = libertad, propiedad, seguridad, resistencia a la opresión (art. 2). Libertad de expresión (art. 10-11).',
            '<strong>Constitución de 1958:</strong> El <strong>bloque de constitucionalidad</strong> = Constitución 1958 + Preámbulo de 1946 + DDHC 1789 + Carta del Medioambiente 2004. Todas las leyes francesas deben respetarlo.',
            '<strong>Carta del Medioambiente (2004):</strong> "Toda persona tiene derecho a vivir en un entorno equilibrado y respetuoso con la salud." Integrada en la Constitución en 2005.',
          ]
        }
      },
      {
        heading: { fr:'Obligations, infractions et numéros d\'urgence', en:'Obligations, offences and emergency numbers', zh:'义务、违法行为和急救号码', ar:'الالتزامات والمخالفات وأرقام الطوارئ', es:'Obligaciones, infracciones y números de emergencia' },
        content: {
          fr: [
            '<strong>Obligations de tout résident :</strong> Payer des impôts, être en situation régulière, assister toute personne en danger, défendre l\'environnement.',
            '<strong>Les 3 types d\'infractions :</strong> Contravention (amende max 3 000 €, pas de prison — tribunal de police) | Délit (amende ≥ 3 750 € + 2 mois à 10 ans de prison — tribunal correctionnel) | Crime (≥ 15 ans à perpétuité — cour d\'assises).',
            '<strong>15 — SAMU</strong> (urgences médicales) | <strong>17 — Police</strong> | <strong>18 — Pompiers</strong> | <strong>112</strong> (européen universel)',
            '<strong>115</strong> (hébergement d\'urgence) | <strong>119</strong> (enfance maltraitée) | <strong>3919</strong> (violences conjugales) | <strong>3114</strong> (prévention suicide)',
          ],
          en: [
            '<strong>Obligations of all residents:</strong> Pay taxes, maintain legal status, assist anyone in danger, protect the environment.',
            '<strong>The 3 types of criminal offences:</strong> Minor offence/contravention (max €3,000 fine, no prison — police court) | Offence/délit (fine ≥ €3,750 + 2 months to 10 years — criminal court) | Crime (15 years to life — criminal assizes).',
            '<strong>15 — SAMU</strong> (medical emergencies) | <strong>17 — Police</strong> | <strong>18 — Fire brigade</strong> | <strong>112</strong> (universal European emergency)',
            '<strong>115</strong> (emergency shelter) | <strong>119</strong> (child protection) | <strong>3919</strong> (domestic violence) | <strong>3114</strong> (suicide prevention)',
          ],
          zh: [
            '<strong>所有居民的义务：</strong>纳税、保持合法身份、救助处于危险中的人、保护环境。',
            '<strong>三种刑事违法类型：</strong>轻罪（最高罚款3,000欧元，无监禁——警察法庭）| 中等罪行（罚款≥3,750欧元 + 2个月至10年监禁——刑事法庭）| 重罪（15年至无期徒刑——重罪法庭）。',
            '<strong>15 — SAMU</strong>（医疗急救）| <strong>17 — 警察</strong> | <strong>18 — 消防队</strong> | <strong>112</strong>（欧洲通用急救）',
            '<strong>115</strong>（紧急庇护所）| <strong>119</strong>（儿童保护）| <strong>3919</strong>（家庭暴力）| <strong>3114</strong>（自杀预防）',
          ],
          ar: [
            '<strong>التزامات جميع المقيمين:</strong> دفع الضرائب، الإقامة القانونية، مساعدة أي شخص في خطر، حماية البيئة.',
            '<strong>أنواع المخالفات الجنائية الثلاثة:</strong> مخالفة بسيطة (غرامة قصوى 3,000 يورو، بدون سجن — محكمة الشرطة) | جنحة (غرامة ≥ 3,750 يورو + شهرين إلى 10 سنوات سجناً — المحكمة الجنائية) | جريمة (15 سنة إلى السجن المؤبد — محكمة الجنايات).',
            '<strong>15 — SAMU</strong> (الطوارئ الطبية) | <strong>17 — الشرطة</strong> | <strong>18 — المطافئ</strong> | <strong>112</strong> (الطوارئ الأوروبية)',
            '<strong>115</strong> (الإيواء الطارئ) | <strong>119</strong> (حماية الطفولة) | <strong>3919</strong> (العنف الزوجي) | <strong>3114</strong> (الوقاية من الانتحار)',
          ],
          es: [
            '<strong>Obligaciones de todo residente:</strong> Pagar impuestos, tener situación regular, asistir a cualquier persona en peligro, defender el medioambiente.',
            '<strong>Los 3 tipos de infracciones:</strong> Contravención (multa máx. 3.000 €, sin prisión — tribunal de policía) | Delito (multa ≥ 3.750 € + 2 meses a 10 años de prisión — tribunal correccional) | Crimen (≥ 15 años a cadena perpetua — tribunal de asizes).',
            '<strong>15 — SAMU</strong> (urgencias médicas) | <strong>17 — Policía</strong> | <strong>18 — Bomberos</strong> | <strong>112</strong> (europeo universal)',
            '<strong>115</strong> (alojamiento de urgencia) | <strong>119</strong> (protección de menores) | <strong>3919</strong> (violencia de género) | <strong>3114</strong> (prevención del suicidio)',
          ]
        }
      },
      {
        heading: {
          fr: 'SNU et majorité numérique — Nouveautés 2026',
          en: 'SNU and digital age of majority — 2026 updates',
          zh: 'SNU与数字成年年龄——2026年新内容',
          ar: 'SNU وسن الرشد الرقمي — مستجدات 2026',
          es: 'SNU y mayoría de edad digital — Novedades 2026'
        },
        content: {
          fr: [
            '<strong>SNU — Service National Universel :</strong> Programme de cohésion nationale destiné aux jeunes de 15 à 17 ans, créé en 2019.',
            '<strong>Phase 1 — Séjour de cohésion :</strong> 2 semaines en internat avec des jeunes de toute la France. Activités sportives, civiques et culturelles.',
            '<strong>Phase 2 — Mission d\'intérêt général :</strong> 84 heures de bénévolat dans une association, une collectivité ou un service de l\'État.',
            '<strong>Objectifs du SNU :</strong> Renforcer le lien entre jeunes de milieux différents, développer le sens civique et la culture de l\'engagement républicain.',
            '<strong>Majorité numérique à 15 ans :</strong> Depuis 2024, les mineurs de moins de 15 ans ne peuvent s\'inscrire seuls sur les réseaux sociaux — le consentement parental est obligatoire.',
            '<strong>Objectif :</strong> Protéger les enfants des risques liés à une utilisation précoce et non encadrée d\'internet et des réseaux sociaux.',
          ],
          en: [
            '<strong>SNU — Universal National Service:</strong> A national cohesion programme for young people aged 15–17, created in 2019.',
            '<strong>Phase 1 — Cohesion stay:</strong> 2 weeks in a residential setting with young people from across France. Sports, civic and cultural activities.',
            '<strong>Phase 2 — Public-interest mission:</strong> 84 hours of volunteering with an association, local authority or State service.',
            '<strong>SNU objectives:</strong> Strengthen bonds between young people from different backgrounds, develop civic awareness and a culture of republican engagement.',
            '<strong>Digital age of majority at 15:</strong> Since 2024, minors under 15 cannot register on social networks without parental consent — it is mandatory.',
            '<strong>Objective:</strong> Protect children from the risks of early, unsupervised internet and social media use.',
          ],
          zh: [
            '<strong>SNU——全国通用服务：</strong>2019年创建，面向15至17岁青少年的国家凝聚力项目。',
            '<strong>第一阶段——集结住宿：</strong>与来自全国各地的青少年共同住宿2周，开展体育、公民和文化活动。',
            '<strong>第二阶段——公益使命：</strong>在协会、地方当局或国家机构进行84小时志愿服务。',
            '<strong>SNU目标：</strong>加强不同背景青年之间的联系，培养公民意识和共和国参与文化。',
            '<strong>15岁数字成年年龄：</strong>自2024年起，15岁以下未成年人不得独自注册社交网络，必须获得家长同意。',
            '<strong>目标：</strong>保护儿童免受早期、无监管使用互联网和社交媒体的风险。',
          ],
          ar: [
            '<strong>SNU — الخدمة الوطنية الشاملة:</strong> برنامج تماسك وطني للشباب بين 15 و17 عاماً، أُنشئ عام 2019.',
            '<strong>المرحلة 1 — إقامة التماسك:</strong> أسبوعان في بيئة داخلية مع شباب من مختلف أنحاء فرنسا. أنشطة رياضية ومدنية وثقافية.',
            '<strong>المرحلة 2 — مهمة ذات منفعة عامة:</strong> 84 ساعة تطوعية في جمعية أو جماعة محلية أو مرفق حكومي.',
            '<strong>أهداف SNU:</strong> تعزيز الروابط بين شباب من خلفيات مختلفة، وتنمية الوعي المدني وثقافة الالتزام الجمهوري.',
            '<strong>سن الرشد الرقمي عند 15 عاماً:</strong> منذ 2024، لا يجوز للقاصرين دون 15 عاماً التسجيل في شبكات التواصل الاجتماعي دون موافقة الوالدين — وهي إلزامية.',
            '<strong>الهدف:</strong> حماية الأطفال من مخاطر الاستخدام المبكر وغير المراقب للإنترنت ووسائل التواصل الاجتماعي.',
          ],
          es: [
            '<strong>SNU — Servicio Nacional Universal:</strong> Programa de cohesión nacional para jóvenes de 15 a 17 años, creado en 2019.',
            '<strong>Fase 1 — Estancia de cohesión:</strong> 2 semanas en régimen de internado con jóvenes de toda Francia. Actividades deportivas, cívicas y culturales.',
            '<strong>Fase 2 — Misión de interés general:</strong> 84 horas de voluntariado en una asociación, entidad local o servicio del Estado.',
            '<strong>Objetivos del SNU:</strong> Reforzar los vínculos entre jóvenes de distintos orígenes, desarrollar el espíritu cívico y la cultura del compromiso republicano.',
            '<strong>Mayoría de edad digital a los 15 años:</strong> Desde 2024, los menores de 15 años no pueden registrarse en redes sociales sin el consentimiento de sus padres — es obligatorio.',
            '<strong>Objetivo:</strong> Proteger a los menores de los riesgos del uso temprano y sin supervisión de internet y las redes sociales.',
          ]
        }
      },
    ]
  },

  // ─── TOPIC 4 ─────────────────────────────────────────────────────────────────
  {
    id: 4,
    icon: 'map',
    sections: [
      {
        heading: { fr:'Chronologie des régimes politiques', en:'Chronology of political regimes', zh:'政治体制年表', ar:'تسلسل الأنظمة السياسية', es:'Cronología de los regímenes políticos' },
        content: {
          fr: [
            '<strong>Avant 1789 — Ancien Régime :</strong> Monarchie absolue. Société en 3 ordres : Clergé, Noblesse, Tiers État (paysans = 80%).',
            '<strong>1789 — Révolution française :</strong> Prise de la Bastille (14 juillet). DDHC (26 août). Fin de la monarchie absolue.',
            '<strong>1792-1804 — Ire République :</strong> Terreur (Robespierre), Directoire, Consulat (Napoléon).',
            '<strong>1804 — 1er Empire :</strong> Napoléon Ier Empereur. Code civil, préfets, Banque de France. Défaite de Waterloo (1815).',
            '<strong>1848 — IIe République :</strong> Suffrage universel masculin. Abolition de l\'esclavage (27 avril 1848).',
            '<strong>1870-1940 — IIIe République :</strong> Lois Jules Ferry (1881-1882). Séparation Église-État (1905). Guerre 14-18. Front populaire (1936).',
            '<strong>1940-1944 — Vichy :</strong> Maréchal Pétain. Collaboration avec l\'Allemagne nazie. Rafle du Vél d\'Hiv (16-17 juillet 1942).',
            '<strong>1958 → Ve République :</strong> Constitution du 4 octobre 1958. Président élu au suffrage universel direct depuis 1962. Toujours en vigueur.',
          ],
          en: [
            '<strong>Before 1789 — Ancien Régime:</strong> Absolute monarchy. Society divided into 3 orders: Clergy, Nobility, Third Estate (peasants = 80%).',
            '<strong>1789 — French Revolution:</strong> Storming of the Bastille (14 July). Declaration of Human Rights (26 August). End of absolute monarchy.',
            '<strong>1792-1804 — 1st Republic:</strong> The Terror (Robespierre), the Directory, the Consulate (Napoleon).',
            '<strong>1804 — 1st Empire:</strong> Napoleon I as Emperor. Civil Code, prefects, Bank of France. Defeat at Waterloo (1815).',
            '<strong>1848 — 2nd Republic:</strong> Male universal suffrage. Abolition of slavery (27 April 1848).',
            '<strong>1870-1940 — 3rd Republic:</strong> Jules Ferry laws (1881-1882). Church-State separation (1905). WWI. Popular Front (1936).',
            '<strong>1940-1944 — Vichy regime:</strong> Marshal Pétain. Collaboration with Nazi Germany. Vél d\'Hiv Roundup (16-17 July 1942).',
            '<strong>1958 → 5th Republic:</strong> Constitution of 4 October 1958. President elected by direct universal suffrage since 1962. Still in force.',
          ],
          zh: [
            '<strong>1789年以前——旧制度：</strong>绝对君主制。社会分为3个等级：神职人员、贵族、第三等级（农民占80%）。',
            '<strong>1789年——法国大革命：</strong>攻占巴士底狱（7月14日）。《人权宣言》（8月26日）。绝对君主制终结。',
            '<strong>1792-1804年——第一共和国：</strong>恐怖统治（罗伯斯庇尔）、督政府、执政府（拿破仑）。',
            '<strong>1804年——第一帝国：</strong>拿破仑一世称帝。《民法典》、省长制度、法兰西银行。滑铁卢惨败（1815年）。',
            '<strong>1848年——第二共和国：</strong>男性普选权。废除奴隶制（1848年4月27日）。',
            '<strong>1870-1940年——第三共和国：</strong>茹费理法律（1881-1882年）。政教分离（1905年）。一战。人民阵线（1936年）。',
            '<strong>1940-1944年——维希政权：</strong>贝当元帅。与纳粹德国合作。冬季自行车赛场大逮捕（1942年7月16-17日）。',
            '<strong>1958年至今——第五共和国：</strong>1958年10月4日宪法。总统自1962年起由直接普选产生。至今有效。',
          ],
          ar: [
            '<strong>قبل 1789 — النظام القديم:</strong> ملكية مطلقة. المجتمع مقسَّم إلى 3 طبقات: رجال الدين، النبلاء، الطبقة الثالثة (الفلاحون = 80%).',
            '<strong>1789 — الثورة الفرنسية:</strong> اقتحام الباستيل (14 يوليو). إعلان حقوق الإنسان (26 أغسطس). نهاية الملكية المطلقة.',
            '<strong>1792-1804 — الجمهورية الأولى:</strong> عهد الإرهاب (روبسبير)، الإدارة، القنصلية (نابليون).',
            '<strong>1804 — الإمبراطورية الأولى:</strong> نابليون الأول إمبراطوراً. القانون المدني، المحافظون، بنك فرنسا. هزيمة واترلو (1815).',
            '<strong>1848 — الجمهورية الثانية:</strong> الاقتراع العام للذكور. إلغاء العبودية (27 أبريل 1848).',
            '<strong>1870-1940 — الجمهورية الثالثة:</strong> قوانين جول فيري (1881-1882). الفصل بين الكنيسة والدولة (1905). الحرب العالمية الأولى. الجبهة الشعبية (1936).',
            '<strong>1940-1944 — نظام فيشي:</strong> المارشال بيتان. التعاون مع ألمانيا النازية. مداهمة Vél d\'Hiv (16-17 يوليو 1942).',
            '<strong>1958 ← الجمهورية الخامسة:</strong> دستور 4 أكتوبر 1958. انتخاب الرئيس بالاقتراع العام المباشر منذ 1962. لا يزال سارياً.',
          ],
          es: [
            '<strong>Antes de 1789 — Antiguo Régimen:</strong> Monarquía absoluta. Sociedad en 3 órdenes: Clero, Nobleza, Tercer Estado (campesinos = 80%).',
            '<strong>1789 — Revolución francesa:</strong> Toma de la Bastilla (14 de julio). Declaración de Derechos del Hombre (26 de agosto). Fin de la monarquía absoluta.',
            '<strong>1792-1804 — 1ª República:</strong> El Terror (Robespierre), el Directorio, el Consulado (Napoleón).',
            '<strong>1804 — 1er Imperio:</strong> Napoleón I como Emperador. Código Civil, prefectos, Banco de Francia. Derrota en Waterloo (1815).',
            '<strong>1848 — 2ª República:</strong> Sufragio universal masculino. Abolición de la esclavitud (27 de abril de 1848).',
            '<strong>1870-1940 — 3ª República:</strong> Leyes Jules Ferry (1881-1882). Separación Iglesia-Estado (1905). Primera Guerra Mundial. Frente Popular (1936).',
            '<strong>1940-1944 — Régimen de Vichy:</strong> Mariscal Pétain. Colaboración con la Alemania nazi. Redada del Vél d\'Hiv (16-17 de julio de 1942).',
            '<strong>1958 → 5ª República:</strong> Constitución del 4 de octubre de 1958. Presidente elegido por sufragio universal directo desde 1962. Todavía en vigor.',
          ]
        }
      },
      {
        heading: { fr:'La Ve République et les conflits mondiaux', en:'The Fifth Republic and the world wars', zh:'第五共和国与世界大战', ar:'الجمهورية الخامسة والحروب العالمية', es:'La Quinta República y los conflictos mundiales' },
        content: {
          fr: [
            '<strong>Présidents notables :</strong> de Gaulle (fondateur 1959-1969), Mitterrand (abolition peine de mort 1981), Hollande (mariage pour tous 2013), Macron (IVG dans la Constitution 2024).',
            '<strong>1ère Guerre mondiale (1914-1918) :</strong> Armistice le 11 novembre 1918. ~10 millions de soldats morts. La France récupère l\'Alsace-Lorraine.',
            '<strong>2ème Guerre mondiale (1939-1945) :</strong> Appel du 18 juin 1940 (de Gaulle à Londres). Débarquement en Normandie (6 juin 1944). Libération de Paris (25 août 1944). Capitulation de l\'Allemagne (8 mai 1945).',
            '<strong>La Shoah :</strong> Génocide de 6 millions de Juifs d\'Europe organisé par les nazis (1941-1945). La négation de la Shoah est un délit en France (loi Gayssot 1990).',
            '<strong>Jean Moulin :</strong> Figure emblématique de la Résistance française, mort sous la torture en 1943.',
          ],
          en: [
            '<strong>Notable presidents:</strong> de Gaulle (founder 1959-1969), Mitterrand (abolished death penalty 1981), Hollande (same-sex marriage 2013), Macron (abortion right in Constitution 2024).',
            '<strong>WWI (1914-1918):</strong> Armistice on 11 November 1918. ~10 million soldiers killed. France regained Alsace-Lorraine.',
            '<strong>WWII (1939-1945):</strong> De Gaulle\'s appeal of 18 June 1940 (from London). D-Day landing in Normandy (6 June 1944). Liberation of Paris (25 August 1944). German surrender (8 May 1945).',
            '<strong>The Holocaust (Shoah):</strong> Genocide of 6 million European Jews organised by the Nazis (1941-1945). Denying the Holocaust is a criminal offence in France (Gayssot law, 1990).',
            '<strong>Jean Moulin:</strong> Iconic figure of the French Resistance, died under torture in 1943.',
          ],
          zh: [
            '<strong>著名总统：</strong>戴高乐（创始人，1959-1969年）、密特朗（1981年废除死刑）、奥朗德（2013年同性婚姻）、马克龙（2024年堕胎权入宪）。',
            '<strong>一战（1914-1918年）：</strong>1918年11月11日停战。约1000万士兵牺牲。法国收回阿尔萨斯-洛林。',
            '<strong>二战（1939-1945年）：</strong>戴高乐1940年6月18日在伦敦发出呼吁。诺曼底登陆（1944年6月6日）。巴黎解放（1944年8月25日）。德国投降（1945年5月8日）。',
            '<strong>大屠杀（Shoah）：</strong>纳粹组织的对欧洲600万犹太人的种族灭绝（1941-1945年）。否认大屠杀在法国是刑事犯罪（1990年戈索法）。',
            '<strong>让·穆兰：</strong>法国抵抗运动的标志性人物，1943年在酷刑中牺牲。',
          ],
          ar: [
            '<strong>رؤساء بارزون:</strong> ديغول (المؤسس 1959-1969)، ميتران (إلغاء عقوبة الإعدام 1981)، هولاند (زواج المثليين 2013)، ماكرون (حق الإجهاض في الدستور 2024).',
            '<strong>الحرب العالمية الأولى (1914-1918):</strong> الهدنة في 11 نوفمبر 1918. نحو 10 ملايين جندي قتيل. استعادت فرنسا الألزاس واللورين.',
            '<strong>الحرب العالمية الثانية (1939-1945):</strong> نداء ديغول من لندن في 18 يونيو 1940. إنزال النورماندي (6 يونيو 1944). تحرير باريس (25 أغسطس 1944). استسلام ألمانيا (8 مايو 1945).',
            '<strong>المحرقة (الشواه):</strong> إبادة جماعية لـ6 ملايين يهودي أوروبي نظَّمها النازيون (1941-1945). إنكار المحرقة جريمة جنائية في فرنسا (قانون غاسو 1990).',
            '<strong>جان مولان:</strong> الرمز الأبرز للمقاومة الفرنسية، لقي حتفه تحت التعذيب عام 1943.',
          ],
          es: [
            '<strong>Presidentes destacados:</strong> de Gaulle (fundador 1959-1969), Mitterrand (abolición de la pena de muerte 1981), Hollande (matrimonio para todos 2013), Macron (derecho al aborto en la Constitución 2024).',
            '<strong>1ª Guerra Mundial (1914-1918):</strong> Armisticio el 11 de noviembre de 1918. ~10 millones de soldados muertos. Francia recupera Alsacia-Lorena.',
            '<strong>2ª Guerra Mundial (1939-1945):</strong> Llamada del 18 de junio de 1940 (de Gaulle desde Londres). Desembarco en Normandía (6 de junio de 1944). Liberación de París (25 de agosto de 1944). Capitulación de Alemania (8 de mayo de 1945).',
            '<strong>La Shoah:</strong> Genocidio de 6 millones de judíos europeos organizado por los nazis (1941-1945). Negar la Shoah es un delito en Francia (ley Gayssot 1990).',
            '<strong>Jean Moulin:</strong> Figura emblemática de la Resistencia francesa, muerto bajo tortura en 1943.',
          ]
        }
      },
      {
        heading: { fr:'Géographie et culture françaises', en:'French geography and culture', zh:'法国地理与文化', ar:'الجغرافيا والثقافة الفرنسية', es:'Geografía y cultura francesas' },
        content: {
          fr: [
            '<strong>France métropolitaine :</strong> 551 695 km² (3ème pays d\'Europe). ~68 millions d\'habitants. 13 régions métropolitaines + 5 DROM. 101 départements. ~35 000 communes.',
            '<strong>Frontières :</strong> 8 pays voisins (Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Espagne, Andorre). Manche (nord), Atlantique (ouest), Méditerranée (sud).',
            '<strong>5 grands fleuves :</strong> Loire (1 013 km), Seine (775 km, traverse Paris), Rhône (812 km), Garonne (650 km), Rhin (1 230 km).',
            '<strong>France dans le monde :</strong> 7ème puissance économique. 1er pays touristique (~90 M visiteurs/an). 2ème ZEE maritime. Membre permanent du Conseil de sécurité de l\'ONU.',
            '<strong>Culture :</strong> 52 sites UNESCO. Gastronomie classée UNESCO (2010). ~300 millions de francophones dans le monde. 5ème langue mondiale.',
          ],
          en: [
            '<strong>Metropolitan France:</strong> 551,695 km² (3rd country in Europe). ~68 million inhabitants. 13 metropolitan regions + 5 overseas regions (DROM). 101 departments. ~35,000 municipalities.',
            '<strong>Borders:</strong> 8 neighbouring countries (Belgium, Luxembourg, Germany, Switzerland, Italy, Monaco, Spain, Andorra). English Channel (north), Atlantic (west), Mediterranean (south).',
            '<strong>5 major rivers:</strong> Loire (1,013 km), Seine (775 km — flows through Paris), Rhône (812 km), Garonne (650 km), Rhine (1,230 km).',
            '<strong>France in the world:</strong> 7th economic power. 1st tourist destination (~90 M visitors/year). 2nd largest maritime EEZ. Permanent UN Security Council member.',
            '<strong>Culture:</strong> 52 UNESCO sites. Gastronomy listed by UNESCO (2010). ~300 million French speakers worldwide. 5th most spoken language.',
          ],
          zh: [
            '<strong>法国本土：</strong>551,695平方公里（欧洲第三大国）。约6800万居民。13个本土大区 + 5个海外省大区（DROM）。101个省。约35,000个市镇。',
            '<strong>边界：</strong>8个邻国（比利时、卢森堡、德国、瑞士、意大利、摩纳哥、西班牙、安道尔）。英吉利海峡（北）、大西洋（西）、地中海（南）。',
            '<strong>5条主要河流：</strong>卢瓦尔河（1,013公里）、塞纳河（775公里，流经巴黎）、罗讷河（812公里）、加伦河（650公里）、莱茵河（1,230公里）。',
            '<strong>法国在世界上：</strong>世界第七经济大国。第一旅游目的地（约9000万游客/年）。第二大海洋经济专属区。联合国安理会常任理事国。',
            '<strong>文化：</strong>52处联合国教科文组织遗址。美食被联合国教科文组织列为非物质文化遗产（2010年）。全球约3亿法语使用者。世界第五大语言。',
          ],
          ar: [
            '<strong>فرنسا الأوروبية:</strong> 551,695 كم² (ثالث دولة في أوروبا). نحو 68 مليون ساكن. 13 جهة أوروبية + 5 مناطق وأقسام ما وراء البحار. 101 قسم إداري. نحو 35,000 بلدية.',
            '<strong>الحدود:</strong> 8 دول مجاورة (بلجيكا، لوكسمبورغ، ألمانيا، سويسرا، إيطاليا، موناكو، إسبانيا، أندورا). القنال الإنجليزي (شمالاً)، المحيط الأطلسي (غرباً)، البحر الأبيض المتوسط (جنوباً).',
            '<strong>5 أنهار كبرى:</strong> اللوار (1,013 كم)، السين (775 كم — يخترق باريس)، الرون (812 كم)، الغارون (650 كم)، الراين (1,230 كم).',
            '<strong>فرنسا في العالم:</strong> القوة الاقتصادية السابعة. الوجهة السياحية الأولى (~90 مليون زائر/سنة). ثاني أكبر منطقة اقتصادية خالصة. عضو دائم في مجلس الأمن الأممي.',
            '<strong>الثقافة:</strong> 52 موقعاً مدرجاً في اليونسكو. المطبخ الفرنسي مصنَّف في اليونسكو (2010). نحو 300 مليون متحدث بالفرنسية في العالم. خامس لغة عالمياً.',
          ],
          es: [
            '<strong>Francia metropolitana:</strong> 551.695 km² (3er país de Europa). ~68 millones de habitantes. 13 regiones metropolitanas + 5 DROM. 101 departamentos. ~35.000 municipios.',
            '<strong>Fronteras:</strong> 8 países vecinos (Bélgica, Luxemburgo, Alemania, Suiza, Italia, Mónaco, España, Andorra). Canal de la Mancha (norte), Atlántico (oeste), Mediterráneo (sur).',
            '<strong>5 grandes ríos:</strong> Loira (1.013 km), Sena (775 km, atraviesa París), Ródano (812 km), Garona (650 km), Rin (1.230 km).',
            '<strong>Francia en el mundo:</strong> 7ª potencia económica. 1er destino turístico (~90 M de visitantes/año). 2ª ZEE marítima. Miembro permanente del Consejo de Seguridad de la ONU.',
            '<strong>Cultura:</strong> 52 sitios UNESCO. Gastronomía clasificada por la UNESCO (2010). ~300 millones de francoparlantes en el mundo. 5ª lengua mundial.',
          ]
        }
      },
    ]
  },

  // ─── TOPIC 5 ─────────────────────────────────────────────────────────────────
  {
    id: 5,
    icon: 'community',
    sections: [
      {
        heading: { fr:'Démarches administratives', en:'Administrative procedures', zh:'行政手续', ar:'الإجراءات الإدارية', es:'Trámites administrativos' },
        content: {
          fr: [
            '<strong>Compte bancaire :</strong> Indispensable pour recevoir son salaire. Si une banque refuse, le <strong>droit au compte</strong> permet de saisir la Banque de France — services de base gratuits.',
            '<strong>Permis de conduire :</strong> Permis UE → échange automatique. Hors UE avec accord → échange dans l\'année du titre de séjour. Sans accord → passer le permis français complet (40 questions — 35 bonnes réponses pour réussir).',
            '<strong>Assurances obligatoires :</strong> Assurance automobile (avant de conduire) et assurance habitation pour tout locataire.',
            '<strong>Impôts :</strong> Déclaration de revenus annuelle obligatoire (impots.gouv.fr, avril-juin). Prélèvement à la source depuis 2019. TVA : 20% (normal), 5,5% (alimentation), 10% (restaurant).',
            '<strong>Titre de séjour :</strong> Carte temporaire (1 an) → Carte pluriannuelle/CSP (2-4 ans) → Carte de résident (10 ans). Renouveler AVANT expiration.',
            '<strong>Naturalisation :</strong> 5 ans de résidence + niveau B1 en français + réussite de l\'examen civique + aucune condamnation grave. Double nationalité autorisée.',
          ],
          en: [
            '<strong>Bank account:</strong> Essential for receiving wages. If a bank refuses, the <strong>right to an account</strong> allows you to contact the Banque de France — basic services free of charge.',
            '<strong>Driving licence:</strong> EU licence → automatic exchange. Non-EU with bilateral agreement → exchange within one year of residence permit. Without agreement → must sit French driving test (40 questions — 35 correct to pass).',
            '<strong>Mandatory insurance:</strong> Car insurance (before driving) and home insurance for all tenants.',
            '<strong>Taxes:</strong> Annual income declaration mandatory (impots.gouv.fr, April–June). Tax deducted at source since 2019. VAT: 20% (standard), 5.5% (food), 10% (restaurants).',
            '<strong>Residence permit:</strong> Temporary card (1 year) → Multi-year/CSP (2-4 years) → Resident card (10 years). Renew BEFORE expiry.',
            '<strong>Naturalisation:</strong> 5 years\' residence + B1 French level + pass civic exam + no serious criminal record. Dual nationality permitted.',
          ],
          zh: [
            '<strong>银行账户：</strong>领取工资必不可少。如果银行拒绝，<strong>账户权</strong>允许您联系法兰西银行——基本服务免费。',
            '<strong>驾驶执照：</strong>欧盟驾照→自动兑换。与法国有双边协议的非欧盟驾照→在获得居留证一年内兑换。无协议→必须参加法国完整驾驶考试（40题——需答对35题）。',
            '<strong>强制保险：</strong>汽车保险（开车前必须购买）和房屋保险（所有租客必须购买）。',
            '<strong>税收：</strong>每年必须申报收入（impots.gouv.fr，4-6月）。2019年起实行预扣税。增值税：20%（标准）、5.5%（食品）、10%（餐厅）。',
            '<strong>居留证：</strong>临时证（1年）→多年/CSP证（2-4年）→居民证（10年）。必须在到期前续签。',
            '<strong>入籍：</strong>5年居住 + 法语B1水平 + 通过公民考试 + 无严重犯罪记录。允许双重国籍。',
          ],
          ar: [
            '<strong>الحساب البنكي:</strong> ضروري لاستلام الراتب. إذا رفض بنك فتح حساب، يتيح <strong>الحق في الحساب</strong> اللجوءَ إلى بنك فرنسا — الخدمات الأساسية مجانية.',
            '<strong>رخصة القيادة:</strong> رخصة الاتحاد الأوروبي → تبادل تلقائي. خارج الاتحاد الأوروبي مع اتفاقية → تبادل في غضون سنة من الحصول على تصريح الإقامة. بدون اتفاقية → اجتياز الاختبار الفرنسي الكامل (40 سؤالاً — يجب الإجابة الصحيحة عن 35 سؤالاً).',
            '<strong>التأمينات الإلزامية:</strong> تأمين السيارة (قبل القيادة) وتأمين المسكن لكل المستأجرين.',
            '<strong>الضرائب:</strong> التصريح السنوي بالدخل إلزامي (impots.gouv.fr، أبريل-يونيو). الاستقطاع من المصدر منذ 2019. ضريبة القيمة المضافة: 20% (عادي)، 5.5% (غذاء)، 10% (مطعم).',
            '<strong>تصريح الإقامة:</strong> بطاقة مؤقتة (سنة) → متعددة السنوات/CSP (2-4 سنوات) → بطاقة مقيم (10 سنوات). التجديد قبل انتهاء الصلاحية.',
            '<strong>التجنيس:</strong> 5 سنوات إقامة + مستوى B1 في الفرنسية + اجتياز الامتحان المدني + بدون سوابق جنائية خطيرة. الجنسية المزدوجة مسموح بها.',
          ],
          es: [
            '<strong>Cuenta bancaria:</strong> Indispensable para recibir el salario. Si un banco se niega, el <strong>derecho a una cuenta</strong> permite dirigirse al Banco de Francia — servicios básicos gratuitos.',
            '<strong>Permiso de conducir:</strong> Permiso de la UE → canje automático. Fuera de la UE con acuerdo → canje dentro del primer año del permiso de residencia. Sin acuerdo → superar el examen de conducir francés completo (40 preguntas — 35 respuestas correctas para aprobar).',
            '<strong>Seguros obligatorios:</strong> Seguro de automóvil (antes de conducir) y seguro de hogar para todo arrendatario.',
            '<strong>Impuestos:</strong> Declaración de la renta anual obligatoria (impots.gouv.fr, abril-junio). Retención en la fuente desde 2019. IVA: 20% (normal), 5,5% (alimentación), 10% (restaurante).',
            '<strong>Permiso de residencia:</strong> Tarjeta temporal (1 año) → Tarjeta plurianual/CSP (2-4 años) → Tarjeta de residente (10 años). Renovar ANTES de que caduque.',
            '<strong>Naturalización:</strong> 5 años de residencia + nivel B1 de francés + superar el examen cívico + ninguna condena grave. Doble nacionalidad autorizada.',
          ]
        }
      },
      {
        heading: { fr:'Santé', en:'Health', zh:'医疗卫生', ar:'الصحة', es:'Salud' },
        content: {
          fr: [
            '<strong>Médecin traitant :</strong> À déclarer sur ameli.fr. Premier recours pour tout problème de santé. Oriente vers les spécialistes. Sans médecin traitant → remboursements réduits.',
            '<strong>PUMa :</strong> Protection Universelle Maladie — accès aux soins pour toute personne résidant régulièrement en France. À demander à la CPAM.',
            '<strong>CSS :</strong> Complémentaire Santé Solidaire — complémentaire gratuite ou à faible coût pour les personnes à faibles revenus.',
            '<strong>AME :</strong> Aide Médicale d\'État — soins de base pour les étrangers en situation irrégulière (résidant depuis + 3 mois).',
            '<strong>Maternité :</strong> Suivi de grossesse pris en charge à 100%. Congé maternité : min. 16 semaines. Congé paternité : 25 jours (11 obligatoires).',
            '<strong>Santé mentale :</strong> 3114 (prévention suicide 24h/24). CMP (Centres Médico-Psychologiques — gratuits). Mon Soutien Psy = 12 séances remboursées.',
          ],
          en: [
            '<strong>GP/treating doctor:</strong> Must be declared on ameli.fr. First point of contact for health problems. Refers to specialists. Without a GP, reimbursements are reduced.',
            '<strong>PUMa:</strong> Universal Health Protection — healthcare access for all people legally residing in France. Apply at the CPAM.',
            '<strong>CSS:</strong> Solidarity Health Supplement — free or low-cost complementary health cover for people on low incomes.',
            '<strong>AME:</strong> State Medical Aid — basic healthcare for undocumented foreigners who have been in France for more than 3 months.',
            '<strong>Maternity:</strong> Pregnancy monitoring covered 100%. Maternity leave: min. 16 weeks. Paternity leave: 25 days (11 mandatory).',
            '<strong>Mental health:</strong> 3114 (suicide prevention 24/7). CMP (free psychiatric/psychological consultations). Mon Soutien Psy = 12 reimbursed psychology sessions.',
          ],
          zh: [
            '<strong>主治医生：</strong>必须在ameli.fr上登记。处理健康问题的第一联系人。转介专科医生。没有主治医生→报销减少。',
            '<strong>PUMa：</strong>全民医疗保障——为所有合法居住在法国的人提供医疗保障。向CPAM申请。',
            '<strong>CSS：</strong>团结医疗补充保险——为低收入人群提供免费或低成本的补充医疗保险。',
            '<strong>AME：</strong>国家医疗援助——为在法国居住超过3个月的无证外国人提供基本医疗服务。',
            '<strong>生育：</strong>产检100%报销。产假：最少16周。陪产假：25天（其中11天为强制性）。',
            '<strong>心理健康：</strong>3114（24小时自杀预防热线）。CMP（免费精神科/心理咨询）。心理支持项目 = 12次报销心理咨询。',
          ],
          ar: [
            '<strong>الطبيب المعالج:</strong> يجب التصريح به على ameli.fr. الجهة الأولى لأي مشكلة صحية. يُحيل إلى المختصين. بدون طبيب معالج → انخفاض في التعويضات.',
            '<strong>PUMa:</strong> الحماية الصحية الشاملة — تغطية صحية لكل شخص يقيم بصفة قانونية في فرنسا. الطلب يقدَّم إلى CPAM.',
            '<strong>CSS:</strong> التكملة الصحية التضامنية — تغطية صحية تكميلية مجانية أو منخفضة التكلفة للأشخاص ذوي الدخل المحدود.',
            '<strong>AME:</strong> المساعدة الطبية للدولة — رعاية صحية أساسية للأجانب في وضع غير نظامي (مقيمون منذ أكثر من 3 أشهر).',
            '<strong>الأمومة:</strong> متابعة الحمل مشمولة 100%. إجازة الأمومة: 16 أسبوعاً على الأقل. إجازة الأبوة: 25 يوماً (11 يوماً إلزامية).',
            '<strong>الصحة النفسية:</strong> 3114 (الوقاية من الانتحار 24ساعة/7أيام). CMP (استشارات نفسية مجانية). Mon Soutien Psy = 12 جلسة علاج نفسي مُعوَّض عنها.',
          ],
          es: [
            '<strong>Médico de cabecera:</strong> Debe declararse en ameli.fr. Primer recurso para cualquier problema de salud. Deriva a especialistas. Sin médico de cabecera → reembolsos reducidos.',
            '<strong>PUMa:</strong> Protección Universal de Enfermedad — acceso a la atención sanitaria para toda persona que resida regularmente en Francia. Solicitarlo en la CPAM.',
            '<strong>CSS:</strong> Complemento de Salud Solidario — complementario gratuito o de bajo coste para personas con bajos ingresos.',
            '<strong>AME:</strong> Ayuda Médica del Estado — atención sanitaria básica para extranjeros en situación irregular (residentes desde hace más de 3 meses).',
            '<strong>Maternidad:</strong> Seguimiento del embarazo cubierto al 100%. Baja por maternidad: mín. 16 semanas. Baja por paternidad: 25 días (11 obligatorios).',
            '<strong>Salud mental:</strong> 3114 (prevención del suicidio 24h/24). CMP (Centros Médico-Psicológicos — gratuitos). Mon Soutien Psy = 12 sesiones de psicología reembolsadas.',
          ]
        }
      },
      {
        heading: { fr:'Emploi et droits des salariés', en:'Employment and workers\' rights', zh:'就业与劳动者权利', ar:'التوظيف وحقوق العمال', es:'Empleo y derechos de los trabajadores' },
        content: {
          fr: [
            '<strong>France Travail :</strong> (ex-Pôle Emploi). Inscription en ligne sur francetravail.fr. Accompagnement personnalisé, offres d\'emploi, formations, allocations chômage.',
            '<strong>Types de contrats :</strong> CDI (sans date de fin — le plus protecteur) | CDD (max 18 mois, prime de précarité 10% à la fin) | Intérim (via une agence).',
            '<strong>SMIC 2025 :</strong> ~11,88 €/h brut = ~1 800 € brut/mois pour 35h/semaine. Revalorisé chaque 1er janvier.',
            '<strong>Durée légale :</strong> 35h/semaine. Congés payés : 5 semaines/an. Repos quotidien : 11h. Repos hebdomadaire : 24h.',
            '<strong>Allocation chômage (ARE) :</strong> Conditions : 6 mois de travail sur les 24 derniers mois + licenciement involontaire + inscrit à France Travail. Durée : 6 à 24 mois.',
            '<strong>Retraite :</strong> Âge minimum 64 ans depuis 2023. 172 trimestres (43 ans) pour le taux plein.',
          ],
          en: [
            '<strong>France Travail:</strong> (formerly Pôle Emploi). Register online at francetravail.fr. Personalised job-search support, job listings, training, unemployment benefits.',
            '<strong>Types of contract:</strong> CDI (open-ended — most protective) | CDD (max 18 months, 10% precariousness bonus at end) | Interim (through an agency).',
            '<strong>SMIC 2025:</strong> ~€11.88/h gross = ~€1,800 gross/month for a 35h week. Reviewed every 1 January.',
            '<strong>Legal working hours:</strong> 35h/week. Paid leave: 5 weeks/year. Daily rest: 11h. Weekly rest: 24h.',
            '<strong>Unemployment benefit (ARE):</strong> Conditions: 6 months worked in the last 24 months + involuntary redundancy + registered with France Travail. Duration: 6 to 24 months.',
            '<strong>Retirement:</strong> Minimum retirement age 64 since 2023. 172 quarters (43 years) for full pension.',
          ],
          zh: [
            '<strong>法国就业服务机构（France Travail）：</strong>（原法国就业局Pôle Emploi）。在francetravail.fr在线注册。个性化求职支持、职位列表、培训、失业金。',
            '<strong>合同类型：</strong>无固定期限合同CDI（无截止日期——最受保护）| 固定期限合同CDD（最长18个月，结束时有10%不稳定奖金）| 劳务派遣（通过中介机构）。',
            '<strong>2025年最低工资SMIC：</strong>约11.88欧元/小时毛工资 = 每周35小时约1,800欧元/月毛工资。每年1月1日调整。',
            '<strong>法定工作时间：</strong>每周35小时。带薪年假：5周/年。每日休息：11小时。每周休息：24小时。',
            '<strong>失业救济金（ARE）：</strong>条件：过去24个月内工作6个月 + 非自愿失业 + 在France Travail注册。期限：6至24个月。',
            '<strong>退休：</strong>自2023年起最低退休年龄为64岁。需缴纳172个季度（43年）才能获得全额养老金。',
          ],
          ar: [
            '<strong>France Travail:</strong> (سابقاً Pôle Emploi). التسجيل عبر الإنترنت على francetravail.fr. دعم شخصي للبحث عن عمل، عروض وظيفية، تدريب، تعويضات البطالة.',
            '<strong>أنواع العقود:</strong> CDI (غير محدد المدة — الأكثر حماية) | CDD (الحد الأقصى 18 شهراً، مكافأة هشاشة 10% عند الانتهاء) | عقد مؤقت عبر وكالة.',
            '<strong>الحد الأدنى للأجور 2025:</strong> نحو 11.88 يورو/ساعة إجمالي = نحو 1,800 يورو/شهر إجمالي لـ35 ساعة أسبوعياً. يُراجَع كل 1 يناير.',
            '<strong>ساعات العمل القانونية:</strong> 35 ساعة/أسبوع. إجازة مدفوعة الأجر: 5 أسابيع/سنة. راحة يومية: 11 ساعة. راحة أسبوعية: 24 ساعة.',
            '<strong>تعويض البطالة (ARE):</strong> الشروط: 6 أشهر عمل في آخر 24 شهراً + فصل غير إرادي + التسجيل في France Travail. المدة: 6 إلى 24 شهراً.',
            '<strong>التقاعد:</strong> سن التقاعد الأدنى 64 سنة منذ 2023. 172 ربعاً (43 سنة) للحصول على معاش كامل.',
          ],
          es: [
            '<strong>France Travail:</strong> (antes Pôle Emploi). Inscripción en línea en francetravail.fr. Acompañamiento personalizado, ofertas de empleo, formaciones, prestaciones por desempleo.',
            '<strong>Tipos de contratos:</strong> CDI (sin fecha de fin — el más protector) | CDD (máx. 18 meses, prima de precariedad del 10% al final) | Interinidad (a través de una agencia).',
            '<strong>SMIC 2025:</strong> ~11,88 €/h bruto = ~1.800 € bruto/mes para 35h/semana. Revalorizado cada 1 de enero.',
            '<strong>Duración legal:</strong> 35h/semana. Vacaciones pagadas: 5 semanas/año. Descanso diario: 11h. Descanso semanal: 24h.',
            '<strong>Prestación por desempleo (ARE):</strong> Condiciones: 6 meses trabajados en los últimos 24 meses + despido involuntario + inscrito en France Travail. Duración: 6 a 24 meses.',
            '<strong>Jubilación:</strong> Edad mínima de jubilación 64 años desde 2023. 172 trimestres (43 años) para la pensión completa.',
          ]
        }
      },
      {
        heading: { fr:'Parentalité et éducation', en:'Parenthood and education', zh:'育儿与教育', ar:'الأبوة والتعليم', es:'Parentalidad y educación' },
        content: {
          fr: [
            '<strong>CIDE :</strong> Convention internationale des droits de l\'enfant — signée par la France en 1990. Garantit : droit à l\'identité, à la santé, à l\'éducation, à la protection contre les abus.',
            '<strong>Scolarité obligatoire :</strong> De 3 à 16 ans pour TOUS les enfants résidant en France, quelle que soit la nationalité ou la situation des parents.',
            '<strong>Système éducatif :</strong> Maternelle (3-6) → Élémentaire (6-11) → Collège (11-15, brevet DNB) → Lycée (15-18, baccalauréat) → Enseignement supérieur.',
            '<strong>UPE2A :</strong> Cours intensifs de français pour les enfants non francophones. Intégration progressive en classe ordinaire.',
            '<strong>OEPRE :</strong> Cours de français gratuits dans les écoles pour les parents étrangers. Aborde aussi le fonctionnement de l\'école française et les valeurs républicaines.',
            '<strong>Modes de garde (0-3 ans) :</strong> Crèche, assistante maternelle (agréée), garde à domicile, micro-crèche. Aides CAF disponibles (PSU, CMG, crédit d\'impôt 50%).',
          ],
          en: [
            '<strong>UNCRC:</strong> UN Convention on the Rights of the Child — signed by France in 1990. Guarantees: right to identity, health, education, protection from abuse.',
            '<strong>Compulsory schooling:</strong> From age 3 to 16 for ALL children residing in France, regardless of nationality or parents\' situation.',
            '<strong>Education system:</strong> Nursery (3-6) → Primary (6-11) → Middle school (11-15, brevet DNB) → High school (15-18, baccalauréat) → Higher education.',
            '<strong>UPE2A:</strong> Intensive French classes for non-French-speaking children. Gradual integration into mainstream classes.',
            '<strong>OEPRE:</strong> Free French classes in schools for foreign parents. Also covers how the French school system works and republican values.',
            '<strong>Childcare (0-3 years):</strong> Nursery (crèche), registered childminder, home childcare, micro-nursery. CAF financial assistance available (PSU, CMG, 50% tax credit).',
          ],
          zh: [
            '<strong>联合国儿童权利公约（CIDE）：</strong>法国于1990年签署。保障：身份权、健康权、教育权、免受虐待保护权。',
            '<strong>义务教育：</strong>3至16岁，适用于所有居住在法国的儿童，不论国籍或父母情况。',
            '<strong>教育体系：</strong>幼儿园（3-6岁）→ 小学（6-11岁）→ 初中（11-15岁，结业证书DNB）→ 高中（15-18岁，高中毕业会考）→ 高等教育。',
            '<strong>UPE2A：</strong>为不会法语的儿童提供强化法语课程。逐步融入普通班级。',
            '<strong>OEPRE：</strong>在学校为外国父母提供免费法语课程。还涵盖法国学校体系的运作和共和国价值观。',
            '<strong>0-3岁托育方式：</strong>托儿所（crèche）、认证育儿保姆、家庭保姆、微型托儿所。CAF财政援助可申请（PSU、CMG、50%税收抵免）。',
          ],
          ar: [
            '<strong>اتفاقية حقوق الطفل (CIDE):</strong> وقَّعت عليها فرنسا عام 1990. تضمن: الحق في الهوية والصحة والتعليم والحماية من الإساءة.',
            '<strong>التعليم الإلزامي:</strong> من سن 3 إلى 16 لجميع الأطفال المقيمين في فرنسا، بصرف النظر عن الجنسية أو وضع الوالدين.',
            '<strong>النظام التعليمي:</strong> الروضة (3-6) → الابتدائي (6-11) → الإعدادي (11-15، شهادة DNB) → الثانوي (15-18، البكالوريا) → التعليم العالي.',
            '<strong>UPE2A:</strong> دروس مكثَّفة في الفرنسية للأطفال غير الناطقين بها. اندماج تدريجي في الفصول العادية.',
            '<strong>OEPRE:</strong> دروس فرنسية مجانية في المدارس للآباء الأجانب. تتناول أيضاً طريقة عمل المدرسة الفرنسية والقيم الجمهورية.',
            '<strong>رعاية الأطفال (0-3 سنوات):</strong> حضانة جماعية، مربية معتمَدة، جليسة أطفال في المنزل، حضانة صغيرة. مساعدات CAF متاحة (PSU، CMG، إعفاء ضريبي 50%).',
          ],
          es: [
            '<strong>CIDE:</strong> Convención Internacional sobre los Derechos del Niño — firmada por Francia en 1990. Garantiza: derecho a la identidad, a la salud, a la educación, a la protección contra los abusos.',
            '<strong>Escolaridad obligatoria:</strong> De 3 a 16 años para TODOS los niños que residan en Francia, independientemente de la nacionalidad o situación de los padres.',
            '<strong>Sistema educativo:</strong> Infantil (3-6) → Primaria (6-11) → Secundaria (11-15, brevet DNB) → Bachillerato (15-18, baccalauréat) → Educación superior.',
            '<strong>UPE2A:</strong> Clases intensivas de francés para niños no francófonos. Integración progresiva en clase ordinaria.',
            '<strong>OEPRE:</strong> Clases de francés gratuitas en las escuelas para padres extranjeros. También trata el funcionamiento del sistema escolar francés y los valores republicanos.',
            '<strong>Modalidades de cuidado (0-3 años):</strong> Guardería (crèche), asistente maternal (homologada), cuidado a domicilio, micro-guardería. Ayudas de la CAF disponibles (PSU, CMG, crédito fiscal del 50%).',
          ]
        }
      },
      {
        heading: {
          fr: 'Tabac et nouveautés santé 2026',
          en: 'Tobacco and 2026 health updates',
          zh: '烟草与2026年卫生新规',
          ar: 'التبغ ومستجدات الصحة 2026',
          es: 'Tabaco y novedades sanitarias 2026'
        },
        content: {
          fr: [
            '<strong>Extension de l\'interdiction de fumer (2026) :</strong> L\'interdiction de fumer est étendue aux abords immédiats des établissements scolaires, des hôpitaux et des parcs publics.',
            '<strong>Espaces sans tabac :</strong> En plus des lieux déjà protégés (lieux de travail fermés, transports, lieux publics couverts), de nouveaux espaces extérieurs sont désormais concernés.',
            '<strong>Interdictions existantes :</strong> Il est interdit de fumer dans tous les lieux de travail fermés et couverts, les transports en commun, les espaces scolaires, les hôpitaux et la plupart des lieux publics.',
            '<strong>Cigarette électronique :</strong> Soumise aux mêmes restrictions que la cigarette classique dans les lieux publics. Vente interdite aux mineurs.',
            '<strong>Aide à l\'arrêt :</strong> Tabac Info Service : 3989. Des substituts nicotiniques sont remboursés par l\'Assurance maladie sur prescription.',
            '<strong>Alcool :</strong> La vente d\'alcool est interdite aux mineurs de moins de 18 ans. La conduite avec un taux d\'alcoolémie ≥ 0,5 g/L (0,2 g/L pour les jeunes conducteurs) est un délit.',
          ],
          en: [
            '<strong>Extended smoking ban (2026):</strong> The smoking ban has been extended to the immediate surroundings of schools, hospitals and public parks.',
            '<strong>Smoke-free areas:</strong> In addition to already-protected spaces (enclosed workplaces, transport, covered public spaces), new outdoor areas are now included.',
            '<strong>Existing bans:</strong> Smoking is already banned in all enclosed workplaces, public transport, school premises, hospitals and most public indoor spaces.',
            '<strong>E-cigarettes:</strong> Subject to the same restrictions as regular cigarettes in public places. Sale to minors is prohibited.',
            '<strong>Quitting support:</strong> Tabac Info Service: 3989. Nicotine replacement therapies are reimbursed by health insurance on prescription.',
            '<strong>Alcohol:</strong> Sale of alcohol to under-18s is prohibited. Driving with a blood alcohol level ≥ 0.5 g/L (0.2 g/L for young drivers) is a criminal offence.',
          ],
          zh: [
            '<strong>扩大禁烟范围（2026年）：</strong>禁烟令扩展至学校、医院和公共公园的周边区域。',
            '<strong>无烟区域：</strong>除原有受保护场所（封闭工作场所、交通工具、有顶公共场所）外，新的户外区域现已纳入。',
            '<strong>现有禁令：</strong>在所有封闭工作场所、公共交通、校园、医院和大多数室内公共场所禁止吸烟。',
            '<strong>电子烟：</strong>在公共场所受到与普通香烟相同的限制，禁止向未成年人销售。',
            '<strong>戒烟帮助：</strong>烟草信息服务：3989。尼古丁替代品凭处方可由医疗保险报销。',
            '<strong>酒精：</strong>禁止向18岁以下未成年人销售酒精。血液酒精含量≥0.5 g/L（年轻驾驶员为0.2 g/L）属违法行为。',
          ],
          ar: [
            '<strong>توسيع حظر التدخين (2026):</strong> تم توسيع حظر التدخين ليشمل المناطق المجاورة مباشرة للمدارس والمستشفيات والحدائق العامة.',
            '<strong>المناطق الخالية من التبغ:</strong> إضافةً إلى الأماكن المحمية مسبقاً (أماكن العمل المغلقة، المواصلات، الأماكن العامة المسقوفة)، باتت مساحات خارجية جديدة مشمولة.',
            '<strong>الحظر القائم:</strong> يُحظر التدخين في جميع أماكن العمل المغلقة، ووسائل النقل العام، والمدارس، والمستشفيات، ومعظم الأماكن العامة الداخلية.',
            '<strong>السيجارة الإلكترونية:</strong> تخضع لنفس القيود المفروضة على السيجارة العادية في الأماكن العامة. يُحظر بيعها للقاصرين.',
            '<strong>المساعدة على الإقلاع:</strong> Tabac Info Service: 3989. يُعوَّض عن بدائل النيكوتين من التأمين الصحي بوصفة طبية.',
            '<strong>الكحول:</strong> يُحظر بيع الكحول لمن هم دون 18 سنة. قيادة السيارة بنسبة كحول ≥ 0.5 غ/ل (0.2 غ/ل للسائقين الشباب) تُعدّ جريمة.',
          ],
          es: [
            '<strong>Ampliación de la prohibición de fumar (2026):</strong> La prohibición de fumar se extiende a los alrededores inmediatos de centros escolares, hospitales y parques públicos.',
            '<strong>Espacios sin humo:</strong> Además de los ya protegidos (lugares de trabajo cerrados, transporte, espacios públicos cubiertos), se incluyen ahora nuevas áreas exteriores.',
            '<strong>Prohibiciones vigentes:</strong> Fumar está prohibido en todos los lugares de trabajo cerrados, transporte público, recintos escolares, hospitales y la mayoría de espacios públicos interiores.',
            '<strong>Cigarrillo electrónico:</strong> Sujeto a las mismas restricciones que el cigarrillo convencional en lugares públicos. Venta prohibida a menores.',
            '<strong>Ayuda para dejar de fumar:</strong> Tabac Info Service: 3989. Los sustitutos de nicotina son reembolsados por el seguro de salud con receta médica.',
            '<strong>Alcohol:</strong> La venta de alcohol a menores de 18 años está prohibida. Conducir con una tasa de alcoholemia ≥ 0,5 g/L (0,2 g/L para conductores jóvenes) es un delito.',
          ]
        }
      },
    ]
  }
];
