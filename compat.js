// Compatibilidades por elemento — Química interactiva
// COMPAT: entradas curadas (z → { con: [...], evita })
// CAT_COMPAT: plantillas por familia química para el resto de elementos

// eslint-disable-next-line no-unused-vars
const COMPAT = {
  1: { con: [
    'Con oxígeno → agua: 2 H2 + O2 → 2 H2O (combustión).',
    'Con cloro → ácido clorhídrico: H2 + Cl2 → 2 HCl.',
    'Con nitrógeno → amoniaco (síntesis de Haber): N2 + 3 H2 → 2 NH3.',
    'Con metales alcalinos → hidruros iónicos: 2 Na + H2 → 2 NaH.',
    'Con carbono → hidrocarburos: CH4, la base de la química orgánica.',
  ], evita: 'Las mezclas de H2 con aire son explosivas (4-75 %); con flúor y oxidantes fuertes reacciona con ignición espontánea.' },
  2: { con: [
    'Prácticamente inerte: se usa como atmósfera protectora y para criogenia (−269 °C, el punto de ebullición más bajo).',
  ], evita: null },
  6: { con: [
    'Con oxígeno → CO2 (combustión completa) o CO (incompleta).',
    'Con metales alcalinotérreos → carburos: CaC2 (carburo de calcio) que con agua da acetileno.',
    'Con hidrógeno → hidrocarburos: metano CH4 y, bajo presión y catalizador, toda la química del petróleo.',
    'Con hierro fundido → acero (aleación Fe-C de 0,05-2 % de carbono).',
  ], evita: 'El CO de las combustiones incompletas es letal; el carbón activado adsorbe fármacos orales (interacción clínica real).' },
  7: { con: [
    'Con hidrógeno → amoniaco: N2 + 3 H2 → 2 NH3 (síntesis de Haber, base de los fertilizantes).',
    'Con oxígeno a alta temperatura → NO y NO2 (combustión, relámpagos).',
    'Con litio y magnesio → nitruros: Li3N, Mg3N2.',
  ], evita: 'El NH3 + hipoclorito → cloraminas tóxicas; los óxidos de nitrógeno NOx son irritantes pulmonares.' },
  8: { con: [
    'Con casi todos los elementos → óxidos: H2O, CO2, Fe2O3, CaO, SiO2.',
    'Con metales alcalinos y alcalinotérreos → óxidos, peróxidos y superóxidos (Na2O2, KO2).',
    'En la respiración celular acepta los electrones de la glucosa: el oxidante universal de la vida.',
  ], evita: 'El O2 comprimido + grasas o aceites = explosión; nunca engrasar reguladores de oxígeno.' },
  9: { con: [
    'Con metales → fluoruros: NaF, CaF2, MgF2; con plata → AgF (soluble, a diferencia de los otros halogenuros de plata).',
    'Con agua → HF + O2 (reacción violenta, incluso en frío).',
    'Con xenón → XeF4: el único elemento que rompe la inercia de los gases nobles.',
  ], evita: 'Ataca el vidrio (HF), los tejidos y casi todo material; el contacto con la piel causa quemaduras profundas y difficiles de sentir al inicio.' },
  11: { con: [
    'Con cloro → cloruro de sodio: 2 Na + Cl2 → 2 NaCl (sal común, suero fisiológico 0,9 %).',
    'Con agua → hidróxido + hidrógeno: 2 Na + 2 H2O → 2 NaOH + H2 (reacción vigorosa).',
    'Con oxígeno → Na2O (y Na2O2, peróxido).',
    'Con amoniaco líquido → sodio disuelto (electrones libres, azul intenso).',
  ], evita: 'El agua y la humedad: el hidrógeno liberado se ignifica; guardar bajo aceite mineral seco.' },
  12: { con: [
    'Con oxígeno → MgO (luz blanca deslumbrante) y con nitrógeno → Mg3N2.',
    'Con agua caliente → Mg(OH)2, leche de magnesia (antiácido y laxante).',
    'Con ácidos → Mg2+ + H2; con cloro → MgCl2.',
  ], evita: 'El polvo fino de magnesio se inflama fácilmente; el Mg2+ precipita con fosfatos y carbonatos (incompatibilidad de formulación).' },
  13: { con: [
    'Con oxígeno → Al2O3: una capa pasiva ultrafina que protege al aluminio de la corrosión.',
    'Con cloro → AlCl3 (catalizador de Friedel-Crafts).',
    'Con ácidos y con bases → sales (anfótero): Al3+ con HCl; aluminato con NaOH.',
  ], evita: 'El polvo de Al en suspensión es inflamable; el Al(OH)3 precipita con fosfatos y arrastra fármacos adsorbidos.' },
  14: { con: [
    'Con oxígeno → SiO2: cuarzo, arena y vidrio.',
    'Con cloro y carbono → SiCl4 (base de las siliconas).',
    'Con magnesio → Mg2Si (siliciuro, da silanos con ácidos).',
  ], evita: 'El SiCl4 humea con la humedad liberando HCl; el polvo fino de silicio es inflamable.' },
  15: { con: [
    'Con oxígeno → P4O10 (P2O5), desecante potentísimo.',
    'Con cloro → PCl3 y PCl5.',
    'Con metales → fosfuros: los del pescado y el fosfeno (PH3, gas con olor a ajo).',
  ], evita: 'El fósforo blanco se inflama solo en el aire (se guarda bajo agua) y es altamente tóxico.' },
  16: { con: [
    'Con oxígeno → SO2 y SO3 (base del ácido sulfúrico).',
    'Con metales → sulfuros: FeS, ZnS, PbS (muchos insolubles y coloreados).',
    'Con hidrógeno → H2S (gas con olor a huevo podrido).',
  ], evita: 'Con oxidantes fuertes reacciona violentamente; los sulfuros + ácidos liberan H2S letal.' },
  17: { con: [
    'Con metales → cloruros: NaCl, KCl, CaCl2 (sales esenciales fisiológicas).',
    'Con hidrógeno → HCl (ácido clorhídrico, ácido del estómago diluido).',
    'Con agua → HCl + HClO (ácido hipocloroso): base de todos los desinfectantes con cloro.',
  ], evita: 'Con amoniaco → cloraminas tóxicas; con ácidos libera gas cloro: nunca mezclar blanqueadores.' },
  19: { con: [
    'Con cloro → KCl (cloruro de potasio: rehidratación y reponedor de potasio).',
    'Con oxígeno → KO2 (superóxido, usado en máscaras de oxígeno).',
    'Con agua → KOH + H2 (reacción que se incendia).',
  ], evita: 'El agua: la reacción es explosiva; guardar bajo aceite y lejos de humedad.' },
  20: { con: [
    'Con oxígeno → CaO (cal viva); CaO + H2O → Ca(OH)2 (lechada de cal).',
    'Con cloro → CaCl2 (deshidratante y antiheladas).',
    'Con agua → Ca(OH)2 + H2 (lento en frío).',
    'Con ácido carbónico del agua → CaCO3 (sarro, concreciones).',
  ], evita: 'Con fosfatos, carbonatos o sulfatos en sueros IV precipita (incompatibilidad clínica); el H2 con metales activos es inflamable.' },
  26: { con: [
    'Con oxígeno y humedad → óxidos de hierro (herrumbre): Fe2O3·xH2O.',
    'Con ácidos diluidos → sales ferrosas + H2: Fe + H2SO4 → FeSO4 + H2↑.',
    'Con cloro → cloruro férrico FeCl3 (oxidante).',
    'Con O2 puro en combustión → Fe3O4 (óxido ferroso-férrico).',
  ], evita: 'El Fe2+ con bases precipita verdoso (Fe(OH)2) y se torna rojizo (Fe(OH)3); oxidantes lo pasan a Fe3+.' },
  29: { con: [
    'Con oxígeno → CuO (negro) y Cu2O (rojo ladrillo).',
    'Con ácido nítrico → Cu(NO3)2 + NOx (el cobre no libera H2 con oxidantes).',
    'Con cloro → CuCl2; con amoniaco → complejo azul intenso [Cu(NH3)4]2+.',
    'Con plata en solución → desplazamiento: Cu + 2 Ag+ → Cu2+ + 2 Ag.',
  ], evita: 'El Cu2+ precipita con OH- (Cu(OH)2 azul) y con sulfuros (CuS negro); el polvo de cobre es irritante.' },
  30: { con: [
    'Con oxígeno → ZnO (protector dermatológico y base de cremas).',
    'Con ácidos → Zn2+ + H2; con cobre en solución → ZnSO4 + Cu (desplazamiento).',
    'Con NaOH → zincatos (comportamiento anfótero).',
  ], evita: 'El Zn2+ precipita con fosfatos, carbonatos y sulfuros; quelación con tetraciclinas (menor absorción oral).' },
  33: { con: [
    'Con oxígeno → As2O3 (arsénico blanco, el veneno clásico de las novelas).',
    'Con cloro → AsCl3; con fluor → AsF5.',
    'Con sulfuros → As2S3 (amarillo) y As2S2 (realgar, rojo).',
  ], evita: 'Todos sus compuestos son tóxicos; el arsina AsH3 es un gas letal de los procesos metalúrgicos.' },
  34: { con: [
    'Con oxígeno → SeO2 (olor a ajo rancio).',
    'Con metales → seleniuros: Na2Se, los más tóxicos de los aniones -uro.',
    'Con hidrógeno → H2Se (gas tóxico).',
  ], evita: 'El SeO2 y sus vapores son tóxicos; el exceso dietético causa selenosis (caída del cabello, uñas quebradizas).' },
  35: { con: [
    'Con metales → bromuros: KBr y NaBr (sedantes históricos del siglo XIX).',
    'Con alquenos → dibromuros (ensayo clásico de insaturación: descolora el bromo).',
    'Con plata → AgBr amarillo (fotografía, insoluble).',
  ], evita: 'El bromo líquido es muy corrosivo, volátil y de vapores irritantes; manejar con campana.' },
  38: { con: [
    'Con oxígeno → SrO (rojo carmesí en pirotecnia).',
    'Con agua → Sr(OH)2 (base, soluble a diferencia del Ca(OH)2).',
    'Con cloro → SrCl2 (rojo de fuegos artificiales).',
  ], evita: 'Las sales solubles de estroncio son tóxicas; su polvo fino es inflamable.' },
  47: { con: [
    'Con cloro → AgCl blanco insoluble (ensayo característico del ión cloruro).',
    'Con amoniaco → complejo [Ag(NH3)2]+, reactivo de Tollens (espejo de plata con aldehídos).',
    'Con sulfuros → Ag2S negro (ennegrece la plata esterlina).',
  ], evita: 'La luz: AgCl y AgBr son fotosensibles (se usan en película fotográfica y radiografías); los sulfuros la ennegrecen.' },
  50: { con: [
    'Con oxígeno → SnO2 (cerámicos, vidrios conductores).',
    'Con cloro → SnCl2 (reductor suave) y SnCl4.',
    'Con ácidos → Sn2+ + H2; forma aleaciones: bronce (Cu-Sn), soldadura (Sn-Pb).',
  ], evita: 'El Sn2+ se oxida a Sn4+ en soluciones al aire; las sales de estaño precipitan con sulfuros.' },
  53: { con: [
    'Con metales → yoduros: KI, NaI (expectorantes y protectores tiroideos).',
    'Con almidón → complejo azul intenso (ensayo clásico de almidón).',
    'Con plata → AgI amarillo (el menos soluble de los halogenuros de plata).',
    'Con cloro → ICl (yoduro de cloro).',
  ], evita: 'Los oxidantes fuertes lo liberan como I2 volátil; guardar los yoduros al abrigo del aire y la luz.' },
  55: { con: [
    'Con oxígeno → superóxidos explosivos (CsO2).',
    'Con agua → CsOH + H2 (la explosión más violenta de los alcalinos).',
  ], evita: 'El metal alcalino más reactivo: ignición espontánea con el aire y explosión con el agua.' },
  56: { con: [
    'Con sulfato → BaSO4 blanco insoluble: el contraste radiológico digestivo (seguro por insoluble).',
    'Con agua → Ba(OH)2 (base fuerte, soluble).',
    'Con oxígeno → BaO y BaO2 (peróxido).',
  ], evita: 'Las sales solubles de bario son tóxicas (bloquean K+ en músculo); solo el sulfato insoluble es inocuo.' },
  64: { con: [
    'Con oxígeno → Gd2O3.',
    'Con cloro → GdCl3; con EDTA → gadolinio quelado, base del contraste de resonancia magnética.',
  ], evita: 'El ion Gd3+ libre es tóxico: en los contrastes debe ir siempre quelado (DTPA).' },
  78: { con: [
    'Con agua regia (HNO3 + HCl) → H2PtCl6 (se disuelve).',
    'Cataliza hidrogenaciones (H2/PtO2, hidrogenación de dobles enlaces).',
    'Con cloro fundido → PtCl4.',
  ], evita: 'El platino elemental es noble e inerte, pero sus complejos como el cisplatino son citotóxicos: manipular con guantes.' },
  79: { con: [
    'Con agua regia → HAuCl4 (tetracloroaurato, disolución real).',
    'Con mercurio → amalgama de oro (dentistería histórica).',
    'Con cianuro sódico + oxígeno → [Au(CN)2]- (extracción minera de oro).',
  ], evita: 'El oro es muy noble: no reacciona con ácidos comunes ni con el aire, por eso no se corroe y se usa en implantes dentales.' },
  80: { con: [
    'Con azufre → HgS (cinabrio, insoluble): el antídoto clásico para derrames de mercurio elemental.',
    'Con cloro → HgCl2 (corrosivo) y Hg2Cl2 (calomelano, laxante histórico).',
    'Con metales nobles → amalgamas: Au, Ag, Sn (odontología).',
  ], evita: 'El calor: los vapores de mercurio son neurotóxicos; los yoduros y sulfuros precipitan sus sales (antagonismo útil en derrames).' },
  82: { con: [
    'Con oxígeno → PbO (litargirio) y PbO2 (ánodos).',
    'Con ácido nítrico → Pb(NO3)2 soluble.',
    'Con sulfuros → PbS negro insoluble.',
    'Con ácido acético de los alimentos → acetato de plomo (por eso los envases de plomo están prohibidos).',
  ], evita: 'Las sales solubles de plomo causan saturnismo (neurotoxicidad infantil); precipita con sulfatos y sulfuros.' },
  83: { con: [
    'Con oxígeno → Bi2O3; con cloro → BiCl3.',
    'Con ácido nítrico → Bi(NO3)3.',
    'Con subsalicilato de sodio → subsalicilato de bismuto (antihelicobacter y antiácido).',
  ], evita: 'El Bi3+ precipita con cloruros concentrados (BiOCl blanco) y con sulfuros: no mezclar en soluciones salinas concentradas.' },
  88: { con: [
    'Con cloro → RaCl2 (las pinturas luminiscentes históricas).',
    'Con oxígeno → óxidos radiactivos.',
    'Con sulfato → RaSO4 insoluble (se aísla como los otros alcalinotérreos).',
  ], evita: 'Emisor alfa intenso: toda manipulación requiere control radiológico y ventilación.' },
  92: { con: [
    'Con oxígeno → UO2 y U3O8; con flúor → UF6 (gas para enriquecimiento isotópico).',
    'Con ácidos → sales de uranilo UO2^2+.',
    'Con cloro → UCl4 y UCl6.',
  ], evita: 'El UF6 reacciona violentamente con el agua liberando HF tóxico; radiotóxico en polvo: control estricto.' },
};

// Plantillas por familia química (elementos sin entrada curada)
// eslint-disable-next-line no-unused-vars
const CAT_COMPAT = {
  alcal: { con: [
    'Con halógenos (F, Cl, Br, I) → sales iónicas muy solubles: NaCl, KCl, KBr.',
    'Con oxígeno → óxidos: Na2O, K2O.',
    'Con agua → hidróxido + hidrógeno: 2 Na + 2 H2O → 2 NaOH + H2↑.',
    'Con hidrógeno → hidruros iónicos: NaH.',
  ], evita: 'El agua y la humedad: los metales más pesados del grupo (K, Rb, Cs, Fr) se incendian o explosionan; guardar bajo aceite o gas inerte.' },
  alcalinot: { con: [
    'Con halógenos → sales: MgCl2, CaCl2, BaCl2.',
    'Con oxígeno → óxidos: MgO, CaO (cal viva), BaO.',
    'Con agua (reacción lenta) → hidróxidos: Ca(OH)2, leche de cal.',
    'Con ácidos → sales + hidrógeno: Mg + H2SO4 → MgSO4 + H2↑.',
  ], evita: 'El berilio y sus compuestos son carcinógenos; el polvo fino de magnesio es inflamable.' },
  trans: { con: [
    'Con oxígeno → óxidos: Fe2O3 (herrumbre), CuO, ZnO, TiO2.',
    'Con azufre → sulfuros: FeS, ZnS, CuS.',
    'Con halógenos → halogenuros: TiCl4, FeCl3, CuCl2.',
    'Como cationes forman sales comunes: ZnSO4, CuSO4, NiCl2.',
  ], evita: 'Los polvos finos de metales activos se inflaman; los cationes de transición precipitan con bases y sulfuros.' },
  lant: { con: [
    'Con oxígeno → óxidos Ln2O3 (La2O3, Nd2O3); el cerio forma CeO2.',
    'Con halógenos → halogenuros: LaCl3, NdCl3.',
    'Con ácidos → sales + hidrógeno.',
  ], evita: 'Se oxidan con el aire: manipular lejos de la humedad; sus polvos son irritantes.' },
  act: { con: [
    'Con oxígeno → óxidos: UO2, ThO2.',
    'Con halógenos → halogenuros: ThCl4, UCl4.',
    'Con ácidos → sales de sus cationes +3 o +4.',
  ], evita: 'Radiotoxicidad: el manejo exige control radiológico; varios halogenuros humean con la humedad.' },
  post: { con: [
    'Con oxígeno → óxidos: Ga2O3, In2O3, Tl2O; el óxido de indio y estaño (ITO) conduce la electricidad: pantallas táctiles.',
    'Con halógenos → halogenuros: GaCl3, InCl3, TlCl.',
    'Con ácidos → sales + hidrógeno.',
  ], evita: 'Sales solubles de talio y plomo: muy tóxicas; el polvo de aluminio en suspensión es inflamable.' },
  metoid: { con: [
    'Con oxígeno → óxidos: GeO2, Sb2O3, TeO2.',
    'Con metales → germanuros, antimoniatos (semiconductores).',
    'Con halógenos → halogenuros covalentes: GeCl4, SbCl3.',
  ], evita: 'El arsénico y el antimonio son tóxicos; sus hidruros (AsH3, SbH3, H2Te) son gases letales.' },
  nomet: { con: [
    'Con hidrógeno → hidruros covalentes: H2Se, H2Te.',
    'Con oxígeno → óxidos: SeO2, TeO2.',
    'Con halógenos → halogenuros covalentes: SeCl2, TeCl4.',
  ], evita: 'Los hidruros son tóxicos; el teluro y el selenio en exceso son venenosos.' },
  halog: { con: [
    'Con metales → sales: fluoruros y cloruros de todos los metales.',
    'Con hidrógeno → hidrácidos: HF, HCl, HBr, HI.',
    'Con plata → halogenuros de plata insolubles (AgCl blanco, AgBr amarillo, AgI amarillo).',
  ], evita: 'Vapores tóxicos y corrosivos; el flúor ataca el vidrio y casi cualquier material.' },
  nobles: { con: [
    'Prácticamente inertes a temperatura ambiente: atmósferas protectoras, iluminación, criogenia.',
    'Solo el xenón y el kriptón forman compuestos, y solo con flúor y bajo condiciones extremas: XeF4, KrF2.',
  ], evita: null },
};
