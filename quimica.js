// Química inorgánica y orgánica — contenido del manual
// Cada módulo: { id, rama, tema, titulo, resumen, secciones: [{ t, items[] }] }

// eslint-disable-next-line no-unused-vars
const QMODS = [
  // ================= QUÍMICA INORGÁNICA =================
  {
    id: 1, rama: 'inorganica', tema: 'Fundamentos',
    titulo: 'Enlaces químicos: quién se junta con quién',
    resumen: 'Iónico, covalente y metálico: la primera regla para predecir qué se puede combinar.',
    secciones: [
      { t: 'Los tres enlaces', items: [
        'Enlace iónico: metal + no metal. El metal cede electrones y el no metal los gana (NaCl: Na+ y Cl-). Sólidos cristalinos, duros, que conducen corriente fundidos o en disolución.',
        'Enlace covalente: no metal + no metal. Comparten pares de electrones (H2O, CO2, O2). Forman moléculas discretas con puntos de fusión bajos.',
        'Enlace metálico: metal + metal. Los electrones forman un mar móvil alrededor de cationes: conductores, maleables y ductiles (aleaciones).',
      ]},
      { t: 'Regla rápida del mostrador', items: [
        'Metal + no metal → compuesto iónico (una sal).',
        'No metal + no metal → molécula covalente.',
        'Metal + metal → aleación (latón = Cu + Zn).',
      ]},
      { t: 'El enlace que sostiene la vida', items: [
        'Puente de hidrógeno: un H unido a N, O o F atrae a otro átomo de N, O o F de una molécula vecina.',
        'Explica el punto de ebullición anómalo del agua, la estructura del ADN y el plegamiento de proteínas.',
      ]},
    ],
  },
  {
    id: 2, rama: 'inorganica', tema: 'Fundamentos',
    titulo: 'Nomenclatura inorgánica IUPAC',
    resumen: 'Cationes, aniones, valencias y la regla del neutro para nombrar cualquier sal.',
    secciones: [
      { t: 'Cationes y aniones', items: [
        'Cationes: nombre del metal (Na+ = sodio). Si tiene varias valencias se indica con números romanos: hierro(II) Fe2+ y hierro(III) Fe3+.',
        'Aniones monoatómicos: terminación -uro: Cl- cloruro, S2- sulfuro, O2- óxido, N3- nitruro.',
        'Oxoaniones: -ato con más oxígenos, -ito con menos: nitrato NO3- / nitrito NO2-; sulfato SO42- / sulfito SO32-.',
        'Serie de los halógenos con oxígeno: perclorato ClO4- > clorato ClO3- > clorito ClO2- > hipoclorito ClO-.',
      ]},
      { t: 'La regla del neutro', items: [
        'En un compuesto iónico las cargas totales positivas y negativas deben cancelarse.',
        'Método del cruce: las valencias se intercambian como subíndices: Al3+ con O2- → Al2O3; Mg2+ con Cl- → MgCl2; Ca2+ con PO43- → Ca3(PO4)2.',
        'El subíndice se simplifica cuando se puede: Sn4+ con O2- → Sn2O4 → SnO2.',
      ]},
    ],
  },
  {
    id: 3, rama: 'inorganica', tema: 'Fundamentos',
    titulo: 'Óxidos, hidróxidos, ácidos y sales',
    resumen: 'Las cuatro grandes funciones inorgánicas y cómo se transforman unas en otras.',
    secciones: [
      { t: 'Cómo se forman', items: [
        'Óxidos básicos: metal + O2 (4 Na + O2 → 2 Na2O; 2 Ca + O2 → 2 CaO, cal viva).',
        'Óxidos ácidos u anhídridos: no metal + O2 (C + O2 → CO2; S + O2 → SO2).',
        'Hidróxidos: óxido básico + agua (Na2O + H2O → 2 NaOH).',
        'Oxoácidos: óxido ácido + agua (SO3 + H2O → H2SO4); hidrácidos: no metal + H2 (Cl2 + H2 → 2 HCl).',
        'Sales: ácido + base → sal + agua (HCl + NaOH → NaCl + H2O); o directamente metal + no metal (2 Na + Cl2 → 2 NaCl).',
      ]},
      { t: 'Cadena de transformación', items: [
        'Metal → óxido básico → hidróxido (base).',
        'No metal → óxido ácido → oxoácido → sal.',
        'Memorizar esta cadena es resolver el 80% de la estequiometría básica.',
      ]},
      { t: 'Ejemplos farmacéuticos', items: [
        'NaCl 0,9 % = suero fisiológico; Mg(OH)2 y CaCO3 = antiácidos; ZnO = protector dermatológico; NaHCO3 = bicarbonato antiácido.',
      ]},
    ],
  },
  {
    id: 4, rama: 'inorganica', tema: 'Reacciones',
    titulo: 'Los cinco tipos de reacción inorgánica',
    resumen: 'Síntesis, descomposición, desplazamiento, doble desplazamiento y combustión: clasificarlas de un vistazo.',
    secciones: [
      { t: 'Los cinco tipos', items: [
        'Síntesis o combinación: A + B → AB. Ej.: 2 Na + Cl2 → 2 NaCl.',
        'Descomposición: AB → A + B. Ej.: CaCO3 →(calor) CaO + CO2; 2 H2O2 → 2 H2O + O2.',
        'Desplazamiento simple: A + BC → AC + B. Ej.: Fe + CuSO4 → FeSO4 + Cu; Zn + 2 HCl → ZnCl2 + H2↑.',
        'Doble desplazamiento (metátesis): AB + CD → AD + CB. Ej.: AgNO3 + NaCl → AgCl↓ + NaNO3.',
        'Combustión: combustible + O2 → CO2 + H2O (combustión completa). Ej.: CH4 + 2 O2 → CO2 + 2 H2O.',
      ]},
      { t: 'Truco de identificación', items: [
        '1 reactivo → descomposición. 2 reactivos y 1 producto → síntesis. Un elemento suelto → desplazamiento. Dos compuestos intercambiando pares → doble desplazamiento. O2 como reactivo con CO2/H2O → combustión.',
      ]},
    ],
  },
  {
    id: 5, rama: 'inorganica', tema: 'Reacciones',
    titulo: 'Redox: oxidación, reducción y número de oxidación',
    resumen: 'La transferencia de electrones que mueve la corrosión, la respiración y los antídotos.',
    secciones: [
      { t: 'Conceptos clave', items: [
        'Oxidación: pérdida de electrones (aumenta el número de oxidación).',
        'Reducción: ganancia de electrones (disminuye el número de oxidación).',
        'Mnemotecnia OIL RIG: Oxidation Is Loss, Reduction Is Gain.',
        'El agente oxidante se reduce (roba electrones: KMnO4, K2Cr2O7, H2O2, O2, halógenos).',
        'El agente reductor se oxida (cede electrones: metales, H2, C, SnCl2, vitamina C).',
      ]},
      { t: 'Número de oxidación: reglas', items: [
        'Elemento en su estado libre: 0 (Na, O2, Fe).',
        'O casi siempre -2 (peróxidos -1); H casi siempre +1 (hidruros -1); F siempre -1.',
        'La suma de los números de oxidación debe igualar la carga total de la especie.',
        'Ejemplo: en KMnO4 el Mn es +7; en Fe2O3 el Fe es +3.',
      ]},
      { t: 'Ejemplos cotidianos', items: [
        'Corrosión del hierro: 4 Fe + 3 O2 → 2 Fe2O3 (el Fe se oxida, el O2 se reduce).',
        'Respiración celular: la glucosa se oxida y el O2 se reduce a agua.',
        'Valoración yodométrica y permanganométrica en control de calidad farmacéutico.',
      ]},
    ],
  },
  {
    id: 6, rama: 'inorganica', tema: 'Reacciones',
    titulo: 'Ácidos, bases, pH y amortiguadores',
    resumen: 'De la definición de Arrhenius al bicarbonato de la sangre: qué controla el pH.',
    secciones: [
      { t: 'Definiciones', items: [
        'Arrhenius: ácido libera H+ en agua; base libera OH-.',
        'Brønsted-Lowry: ácido dona protones; base acepta protones (más general).',
        'Fuerza: HCl, H2SO4, HNO3 son fuertes (se disocian por completo); acético y carbónico son débiles.',
      ]},
      { t: 'pH', items: [
        'pH = -log[H+]: < 7 ácido; 7 neutro; > 7 básico. Escala 0-14, cada unidad es ×10 en concentración.',
        'pH sangre 7,35-7,45: fuera de ese rango hay acidosis o alcalosis.',
        'Neutralización: ácido + base → sal + agua; se sigue con indicadores (fenolftaleína, tornasol) o pH-metría.',
      ]},
      { t: 'Amortiguadores (buffers)', items: [
        'Pares ácido/base débil que resisten cambios de pH: bicarbonato/H2CO3 en sangre y fosfato en orina.',
        'En formularios: buffers de citrato, fosfato y acetato para estabilizar fármacos sensibles al pH.',
      ]},
    ],
  },
  {
    id: 7, rama: 'inorganica', tema: 'Combinaciones',
    titulo: '¿Con qué se pueden juntar? Combinaciones que funcionan',
    resumen: 'Pares iónicos válidos, el cruce de valencias y las reacciones de formación más útiles.',
    secciones: [
      { t: 'Combinaciones iónicas correctas (regla del neutro)', items: [
        'Na+ con casi cualquier anión → sales solubles: NaCl, Na2CO3, Na3PO4.',
        'Mg2+ + Cl- → MgCl2; Al3+ + O2- → Al2O3; Ca2+ + OH- → Ca(OH)2; Fe3+ + SO42- → Fe2(SO4)3.',
        'NH4+ es un catión poliatómico que combina con la mayoría de aniones: NH4Cl, (NH4)2SO4.',
      ]},
      { t: 'Rutas de formación', items: [
        'Metal + no metal → sal (con transferencia de electrones, reacción redox).',
        'Metal + oxígeno → óxido básico; no metal + oxígeno → óxido ácido.',
        'Óxido básico + agua → hidróxido; óxido ácido + agua → oxoácido.',
        'Ácido + base → sal + agua: la combinación más usada en el laboratorio.',
        'Óxido ácido + base, y óxido básico + ácido, también dan sales.',
      ]},
      { t: 'Qué se forma al juntarse', items: [
        'Na + Cl2 → cloruro de sodio (sal común, iónica).',
        'CaO + H2O → hidróxido de calcio (lechada de cal, base fuerte).',
        'SO3 + H2O → ácido sulfúrico; NH3 + HCl → cloruro de amonio (sal volátil).',
      ]},
    ],
  },
  {
    id: 8, rama: 'inorganica', tema: 'Incompatibilidades',
    titulo: '¿Con qué NO se pueden juntar? Incompatibilidades peligrosas',
    resumen: 'Mezclas que liberan gases tóxicos, incendian o explosionan: y la química de por qué.',
    secciones: [
      { t: 'Nunca mezclar en casa ni en el laboratorio', items: [
        'Hipoclorito (cloro/blanqueador) + amoniaco o aminas → cloraminas, vapores tóxicos para los pulmones.',
        'Hipoclorito + ácidos (mismo inodoro, limpiadores distintos) → libera gas cloro, asfixiante.',
        'Cianuros o sulfuros + ácidos → ácido cianhídrico HCN y sulfuro de hidrógeno H2S: gases letales.',
        'Metales alcalinos (Na, K) + agua → hidrógeno H2 + mucho calor: ignición o explosión.',
        'H2O2 concentrado + materia orgánica o metales en polvo → descomposición violenta e incendio.',
        'Ácido nítrico concentrado + metales, madera o papel → óxidos de nitrógeno NOx tóxicos.',
      ]},
      { t: 'Por qué no se puede', items: [
        'Todas son reacciones redox o ácido-base con transferencia de electrones no controlada: se produce gas, calor y en corto tiempo ignición.',
        'Regla de oro: oxidante fuerte + reductor fuerte + confinamiento = mala idea.',
        'En la droguería: nunca reenvasar productos de limpieza a envases de bebida, y leer la etiqueta antes de mezclar.',
      ]},
    ],
  },
  {
    id: 9, rama: 'inorganica', tema: 'Laboratorio',
    titulo: 'Solubilidad: qué se disuelve y qué precipita',
    resumen: 'Las reglas prácticas de solubilidad y los precipitados clásicos de identificación.',
    secciones: [
      { t: 'Reglas rápidas de solubilidad en agua', items: [
        'Siempre solubles: sales de Na+, K+, NH4+ y todos los nitratos NO3-.',
        'Cl-, Br-, I- solubles, excepto con Ag+, Pb2+ y Hg2+.',
        'SO42- soluble, excepto con Ba2+ y Pb2+ (Ca2+ y Ag2+ parciales).',
        'CO32-, PO43-, S2- y OH- insolubles, excepto con Na+, K+ y NH4+.',
      ]},
      { t: 'Precipitados clásicos', items: [
        'AgCl: blanco lechoso (ensayo del cloruro).',
        'BaSO4: blanco (ensayo del sulfato).',
        'Fe(OH)3: rojizo parduzco. Cu(OH)2: azul celeste.',
        'CaCO3: blanco (tartaro, sarro).',
      ]},
      { t: 'Concepto Kps', items: [
        'Producto de solubilidad: cuantifica cuánta sal poco soluble se disuelve antes de saturar.',
        'Si el producto iónico supera el Kps → precipita.',
        'Base del análisis de aguas y de incompatibilidades IV (fosfato cálcico).',
      ]},
    ],
  },
  {
    id: 10, rama: 'inorganica', tema: 'Laboratorio',
    titulo: 'Reactivos de identificación inorgánica',
    resumen: 'Los ensayos clásicos del laboratorio de análisis de cationes y aniones.',
    secciones: [
      { t: 'Ensayos clásicos', items: [
        'Carbonatos/bicarbonatos + HCl → efervescencia de CO2 (apaga la llama de un fósforo encendido).',
        'Sulfatos + BaCl2 → BaSO4 blanco insoluble.',
        'Cloruros + AgNO3 → AgCl blanco, soluble en amoniaco.',
        'Fosfatos + molibdato de amonio en caliente → precipitado amarillo.',
        'Amonio + NaOH caliente → NH3: olor característico y tornasol azul que rosa.',
      ]},
      { t: 'Ensayo de llama', items: [
        'Na+: amarillo intenso. K+: violeta (se observa a través de vidrio azul).',
        'Ca: rojo ladrillo. Cu y B: verde.',
      ]},
      { t: 'Uso en control de calidad', items: [
        'Identificar iones en materias primas farmacéuticas y verificar la identidad de sales de formulación.',
      ]},
    ],
  },
  {
    id: 11, rama: 'inorganica', tema: 'Laboratorio',
    titulo: 'Soluciones y concentraciones: la matemática del químico',
    resumen: 'Molaridad, normalidad, porcentajes, diluciones e isotonicidad.',
    secciones: [
      { t: 'Unidades de concentración', items: [
        'Molaridad M = moles de soluto / litro de solución. Ej.: NaCl 0,9 % ≈ 0,154 M.',
        'Normalidad N = equivalentes / litro; N = M × valencia. HCl 1 N = 1 M; H2SO4 1 N = 0,5 M; Ca(OH)2 1 N = 0,5 M.',
        'Porcentajes: % p/v = g/100 mL; % p/p = g/100 g; % v/v = mL/100 mL.',
        'ppm: mg/L (trazas); usado en pureza de agua y residuos de metales pesados.',
      ]},
      { t: 'Operaciones de todos los días', items: [
        'Dilución: C1V1 = C2V2. Ej.: preparar 250 mL de NaCl 0,9 % desde uno al 10 %: V1 = (0,9×250)/10 = 22,5 mL.',
        'Mezcla de la misma sal: moles totales / volumen total.',
        'Factor gravimétrico y titulación: calcular pureza de una materia prima.',
      ]},
      { t: 'Para fórmulas farmacéuticas', items: [
        'Isotonicidad: el suero fisiológico es NaCl 0,9 % porque tiene la misma presión osmótica que la sangre.',
        'Electrolitos IV: Ringer lactato, soluciones de rehidratación oral (OMS: NaCl + KCl + citrato + glucosa).',
        'Cálculo de osmolaridad para evitar hemólisis en administración IV.',
      ]},
    ],
  },
  {
    id: 12, rama: 'inorganica', tema: 'Incompatibilidades',
    titulo: 'Incompatibilidades farmacéuticas en la droguería',
    resumen: 'Precipitados, efervescencias y quelaciones que arruinan una prescripción.',
    secciones: [
      { t: 'Incompatibilidades clásicas', items: [
        'Fosfatos, citratos o carbonatos de sodio IV + cloruro/gluconato de calcio → precipitados cálcicos (fosfato, citrato, carbonato): riesgo de embolia por cristales.',
        'Bicarbonato de sodio + ácidos (cítrico, ascórbico, tartárico) → CO2: deliberado en efervescentes, peligroso si es accidental (envases hinchados, dosis erradas).',
        'Tetraciclinas + Ca2+ o Mg2+ (leche, antiácidos, suplementos) → complejo quelado insoluble: absorción cae a la mitad.',
        'Fluoroquinolonas + antiácidos, hierro o calcio → quelación: separar la toma 2-4 horas.',
        'Penicilina G sódica + soluciones glucosadas prolongadas → degradación acelerada (preferir cloruro sódico).',
      ]},
      { t: 'Por qué ocurren', items: [
        'Cuatro mecanismos: precipitación (Kps), ácido-base con liberación de gas, quelación por cationes divalentes, y oxidación-reducción.',
        'Ante una incompatibilidad: cambiar la sal, cambiar el vehículo o separar las tomas.',
      ]},
    ],
  },

  // ================= QUÍMICA ORGÁNICA =================
  {
    id: 13, rama: 'organica', tema: 'Fundamentos',
    titulo: 'Grupos funcionales: el alfabeto de la química orgánica',
    resumen: 'Todos los grupos con nombre, sufijo IUPAC y ejemplo farmacéutico real.',
    secciones: [
      { t: 'Con carbono e hidrógeno', items: [
        'Alcanos (C-C, -ano), alquenos (C=C, -eno), alquinos (C≡C, -ino) y aromáticos (benceno).',
      ]},
      { t: 'Con oxígeno', items: [
        'Alcoholes R-OH (-ol): etanol; fenoles Ar-OH.',
        'Éteres R-O-R (oxi-): éter dietílico.',
        'Aldehídos R-CHO (-al): formaldehído. Cetonas R-CO-R (-ona): acetona.',
        'Ácidos carboxílicos R-COOH (-oico): ácido acético. Ésteres R-COO-R (oato de alquilo).',
      ]},
      { t: 'Con nitrógeno, halógenos y azufre', items: [
        'Aminas R-NH2 (-amina), amidas R-CONH2 (-amida), nitrilos R-C≡N (-nitrilo).',
        'Halogenuros de alquilo R-X; tioles R-SH (tiol), sulfuros R-S-R.',
      ]},
      { t: 'Prioridad IUPAC (de mayor a menor)', items: [
        'Ácido carboxílico > éster > amida > nitrilo > aldehído > cetona > alcohol > amina.',
        'El grupo de mayor prioridad da el sufijo; los demás van como prefijos.',
      ]},
      { t: 'Dónde aparecen en fármacos reales', items: [
        'Paracetamol: fenol + amida. Ibuprofeno: ácido carboxílico. Salbutamol: alcohol + amina secundaria.',
        'Captopril: ácido carboxílico + amida + tiol. Cafeína: anillos xánticos con 4 nitrógenos.',
      ]},
    ],
  },
  {
    id: 14, rama: 'organica', tema: 'Fundamentos',
    titulo: 'Nomenclatura orgánica IUPAC',
    resumen: 'Cadena principal, numeración y sustituyentes: nombrar cualquier compuesto paso a paso.',
    secciones: [
      { t: 'Los cuatro pasos', items: [
        '1. Cadena principal: la más larga que contenga el grupo de mayor prioridad.',
        '2. Numerar desde el extremo más cercano al grupo prioritario (menor localizador).',
        '3. Nombrar sustituyentes como prefijos con su localizador: 2-cloro, 3-metil.',
        '4. Orden alfabético; prefijos di-, tri- no ordenan (2,2-dimetil).',
      ]},
      { t: 'Casos frecuentes', items: [
        '3-metilpentano; 2-butanona; ácido 2-metilpropanoico.',
        'Alquenos: 2-penteno; indicar E/Z si hay isomería geométrica.',
        'Benceno: nitróbenzeno, clorobenceno; nombres retenidos: fenol, tolueno, anilina.',
        'Con halógenos y grupos oxigenados: 2-cloroetanol, ácido 2-hidroxipropanoico (ácido láctico).',
      ]},
    ],
  },
  {
    id: 15, rama: 'organica', tema: 'Fundamentos',
    titulo: 'Isomería: misma fórmula, moléculas distintas',
    resumen: 'Constitucional, geométrica y óptica: por qué un espejo puede ser otro fármaco.',
    secciones: [
      { t: 'Los tres tipos', items: [
        'Constitucional (de cadena o posición): 1-propanol vs 2-propanol: mismos átomos, distinta conexión.',
        'Geométrica E/Z o cis/trans: los sustituyentes a lados distintos del doble enlace (el doble no rota).',
        'Óptica: carbono quiral (con 4 sustituyentes distintos) → dos enantiómeros (R y S), imagen especular no superponible.',
      ]},
      { t: 'En el mundo farmacéutico', items: [
        'S-ibuprofeno: el enantiómero activo (el R apenas actúa).',
        'Esomeprazol = omeprazol en forma S: más estable y con menor variabilidad.',
        'Warfarina: el enantiómero S es 3-5 veces más anticoagulante que el R.',
        'Levodopa (L) es el fármaco; la D-dopa es inactiva/tóxica: por eso se administra con carbidopa.',
        'Los receptores son quirales: cada mano molecular encaja distinto.',
      ]},
    ],
  },
  {
    id: 16, rama: 'organica', tema: 'Mecanismos',
    titulo: 'SN2: sustitución nucleofílica bimolecular',
    resumen: 'Un solo paso, inversión de Walden y la guerra contra la estérica.',
    secciones: [
      { t: 'El mecanismo', items: [
        'Concertado en un paso: el nucleófilo ataca el carbono por detrás mientras sale el grupo saliente (backside attack).',
        'Resultado: inversión total de la configuración (inversión de Walden).',
        'Energía: una sola barrera; la velocidad depende de sustrato y nucleófilo: v = k[substrato][nucleófilo].',
      ]},
      { t: 'Con qué se juntan (factores que favorecen)', items: [
        'Sustrato metílico o primario (poco impedido); metilo > primario > secundario; terciario NO reacciona por SN2.',
        'Nucleófilo fuerte y poco voluminoso: OH-, CN-, N3-, metóxido.',
        'Disolvente aprotico polar: acetona, DMF, DMSO (no encapuchan al nucleófilo).',
        'Buen grupo saliente: I- > Br- > Cl- > F- (F es pésimo saliente).',
      ]},
      { t: 'Qué se forma', items: [
        'Bromuro de metilo + NaOH → metanol (inversión incluida).',
        'Uso en síntesis: metilaciones y alquilaciones de aminas y fenoles en síntesis medicinal.',
      ]},
    ],
  },
  {
    id: 17, rama: 'organica', tema: 'Mecanismos',
    titulo: 'SN1: sustitución vía carbocatión',
    resumen: 'Dos pasos, mezcla racémica y los peligros del rearranque.',
    secciones: [
      { t: 'El mecanismo', items: [
        'Paso 1 (lento): sale el grupo saliente → carbocatión.',
        'Paso 2 (rápido): el nucleófilo ataca el carbocatión plano por cualquier cara → mezcla racémica (50/50 R y S).',
        'La velocidad solo depende del sustrato: v = k[substrato].',
      ]},
      { t: 'Con qué se juntan', items: [
        'Sustratos terciarios o bencilicos: el carbocatión está estabilizado por efecto inductivo y resonancia.',
        'Disolvente protico polar: agua, etanol, metanol (estabilizan el carbocatión).',
        'Nucleófilo puede ser débil: incluso el agua basta.',
      ]},
      { t: 'Advertencias', items: [
        'Rearranques: el carbocatión se reorganiza (migración de hidruro o metilo) dando productos inesperados.',
        'Compite con la eliminación E1: calor y bases favorecen el alqueno.',
        'Ejemplo: 2-bromo-2-metilpropano + agua → 2-metil-2-propanol.',
      ]},
    ],
  },
  {
    id: 18, rama: 'organica', tema: 'Mecanismos',
    titulo: 'Eliminación E1 y E2: fabricar dobles enlaces',
    resumen: 'La regla de Zaitsev, la geometría antiperiplanar y cuándo usar cada vía.',
    secciones: [
      { t: 'E2: bimolecular', items: [
        'Un paso: la base arranca un H y sale el halogenuo simultáneamente.',
        'Requiere geometría antiperiplanar: H y X en planos opuestos (dibujado en zigzag).',
        'Base fuerte y voluminosa: KOH etanólico, t-BuOK.',
      ]},
      { t: 'E1: vía carbocatión', items: [
        'Igual que SN1 pero el carbocatión pierde un H+ en vez de captar nucleófilo.',
        'Base débil, disolvente protico y calor: etanol con H2SO4.',
        'Riesgo de rearranques como en SN1.',
      ]},
      { t: 'Regla de Zaitsev y excepción', items: [
        'Zaitsev: predomina el alqueno más sustituido (más estable).',
        'Bases muy voluminosas (t-BuOK) dan el producto de Hofmann: el menos sustituido.',
        'Ejemplos: 2-bromobutano + KOH/etanol → 2-buteno (mayor) + 1-buteno; alcohol + H2SO4 caliente → alqueno.',
      ]},
    ],
  },
  {
    id: 19, rama: 'organica', tema: 'Mecanismos',
    titulo: 'Adición electrofílica a alquenos',
    resumen: 'Markovnikov, carbocatión intermedio y las rutas anti-Markovnikov.',
    secciones: [
      { t: 'El mecanismo general', items: [
        'Paso 1: el π del doble enlace ataca al electrófilo (H+, X+, Hg2+) → carbocatión.',
        'Paso 2: el nucleófilo captura el carbocatión.',
        'La regla de Markovnikov: el H se une al carbono que ya tiene más H; el electrófilo al más sustituido, porque forma el carbocatión más estable.',
      ]},
      { t: 'Adiciones útiles', items: [
        'HX: HCl, HBr a alquenos → halogenuro de alquilo.',
        'Hidración (H2O/H+): alqueno → alcohol (Markovnikov).',
        'Halogenuros X2: adición anti (por anillo de bromonio) → dibromuro trans.',
        'Hidrogenación catalítica H2/Ni, Pt o Pd → alcano (usada para reducir dobles en síntesis).',
      ]},
      { t: 'Rutas especiales', items: [
        'Anti-Markovnikov: HBr + peróxidos (radicalares) → Br en el carbono menos sustituido.',
        'Hidroboración-oxidación (B2H6 luego H2O2/OH-): agua anti-Markovnikov sin rearranques.',
      ]},
    ],
  },
  {
    id: 20, rama: 'organica', tema: 'Mecanismos',
    titulo: 'Sustitución electrofílica aromática (SEA)',
    resumen: 'Nitración, halogenación, sulfonación y Friedel-Crafts sobre el benceno.',
    secciones: [
      { t: 'El mecanismo', items: [
        'Paso 1: el anillo rico en electrones ataca al electrófilo → complejo sigma (arenio) que rompe la aromaticidad.',
        'Paso 2: pierde H+ y se restaura el anillo aromático (aromaticidad como motor de la reacción).',
      ]},
      { t: 'Las cuatro reacciones', items: [
        'Nitración: HNO3/H2SO4 → nitroaril (intermedio de aminas, explosivos).',
        'Halogenación: Cl2 o Br2 con FeCl3/FeBr3 → halobenceno.',
        'Sulfonación: SO3/H2SO4 → ácido bencenosulfónico (reversible, útil como bloqueo).',
        'Friedel-Crafts: alquilación (RCl/AlCl3) y acilación (RCOCl/AlCl3) → cetonas arílicas.',
      ]},
      { t: 'Directores orto/para vs meta', items: [
        'Activantes orto/para: -OH, -NH2, -OR, alquilos (aumentan la densidad electrónica del anillo).',
        'Desactivantes meta: -NO2, -CN, -COOH, carbonilos, -SO3H.',
        'Friedel-Crafts NO funciona sobre anillos fuertemente desactivados ni sobre aminas (Las aminas complexan AlCl3).',
      ]},
    ],
  },
  {
    id: 21, rama: 'organica', tema: 'Grupos funcionales',
    titulo: 'Reactividad de los carbonilos',
    resumen: 'El carbono carbonílico como electrofílo: oxidaciones, reducciones y acetales.',
    secciones: [
      { t: 'Por qué reaccionan', items: [
        'El oxígeno tira del doble enlace: el carbono del carbonilo queda con carga parcial positiva → atacado por nucleófilos.',
        'Del mismo modo, el oxígeno atrae nucleófilos en el Cα.',
      ]},
      { t: 'Oxidación de alcoholes', items: [
        'Primario → aldehído → ácido carboxílico (KMnO4 o K2Cr2O7).',
        'Secundario → cetona. Terciario: no se oxida sin romper la cadena.',
        'Reactivo de Tollens (Ag+/NH3) oxida aldehídos (espejo de plata) pero no cetonas: ensayo de diferenciación.',
      ]},
      { t: 'Reducción', items: [
        'NaBH4: reduce aldehídos y cetonas a alcoholes (suave, en agua o alcohol).',
        'LiAlH4: reduce también ésteres, ácidos y amidas (drástico, anhídrico).',
      ]},
      { t: 'Acetales', items: [
        'Aldehído + 2 alcoholes ⇌ acetal (ácido catalítico).',
        'La glucosa es un hemiacetal cíclico: por eso reduce a Tollens (azúcar reductor).',
      ]},
    ],
  },
  {
    id: 22, rama: 'organica', tema: 'Grupos funcionales',
    titulo: 'Ésteres: formación, hidrólisis y fármacos',
    resumen: 'La ésterificación de Fischer, la saponificación y los ésteres en medicamentos.',
    secciones: [
      { t: 'Formación e hidrólisis', items: [
        'Ésterificación de Fischer: ácido + alcohol ⇌ éster + agua, con H2SO4 catalítico; el exceso de agua desplaza el equilibrio hacia atrás.',
        'Hidrólisis ácida: reversible. Hidrólisis básica (saponificación): irreversible, porque el ácido se consume formando carboxilato.',
        'Se hidrolizan fácil porque el carbonilo es electrofílico y el grupo alcohólico es buen saliente.',
      ]},
      { t: 'Ésteres en la farmacia', items: [
        'Aspirina = ácido acetilsalicílico (un éster que se hidroliza con la humedad: por eso huele a vinagre cuando envejece).',
        'Parabenos: ésteres del ácido p-hidroxibenzoico, conservantes de formularios.',
        'Ésteres de corticoides (propionato, valerato, dipropionato): ajustan la potencia y liposolubilidad tópica.',
        'Ésteres como prófármacos: enalapril se hidroliza a enalaprilato activo en el hígado.',
      ]},
    ],
  },
  {
    id: 23, rama: 'organica', tema: 'Grupos funcionales',
    titulo: 'Aminas y amidas: sales, basicidad y fármacos',
    resumen: 'Por qué los fármacos amínicos se venden como clorhidrato o maleato.',
    secciones: [
      { t: 'Aminas', items: [
        'Básicas: aceptan protones del medio → cation amonio (pKa del ácido conjugado 9-11, más básicas que el amoniaco).',
        'Qué se forma al juntarse con ácidos: sales amónicas cristalinas y muy solubles en agua.',
        'Por eso los fármacos amínicos (anfetamina, fluoxetina, amoxicilina) se formulan como clorhidrato, maleato, sulfato o besilato: mejora solubilidad y estabilidad.',
        'Amina + halogenuro de alquilo → amina alquilada (SN2, útil en síntesis; exceso de alquilante da aminas múltiples).',
      ]},
      { t: 'Amidas', items: [
        'El nitrógeno dona por resonancia al carbonilo: es mucho menos básico y menos nucleofílico que una amina.',
        'El enlace peptídico es una amida: de ahí la estabilidad de las proteínas.',
        'Paracetamol, penicilinas (β-lactama: amida en anillo de 4 miembros, tensionada y fácil de hidrolizar) y muchos fármacos llevan amida.',
        'Amidas se hidrolizan en ácido fuerte o base fuerte con calor → ácido + amina.',
      ]},
    ],
  },
  {
    id: 24, rama: 'organica', tema: 'Combinaciones',
    titulo: '¿Con qué se juntan los grupos funcionales?',
    resumen: 'El mapa de reactividad cruzada: nucleófilos contra electrófilos.',
    secciones: [
      { t: 'Combinaciones clásicas y productos', items: [
        'Alcohol + ácido carboxílico → éster (+ agua).',
        'Aldehído o cetona + alcohol → hemiacetal → acetal (+ agua).',
        'Alqueno + HX → halogenuro; + H2O/H+ → alcohol; + X2 → dibromuro; + H2/catalizador → alcano.',
        'Amina + ácido fuerte → sal amónica soluble; halogenuro de alquilo + amina → amina superior.',
        'Cloruro de ácido + alcohol → éster; + amina → amida (síntesis rápida, sin equilibrio).',
        'Aldehído + oxidante suave → ácido; cetona + NaBH4 → alcohol secundario.',
      ]},
      { t: 'La regla unificadora', items: [
        'Electrófilos: carbonilos, carbocationes, halogenuros de alquilo, anillos aromáticos activados.',
        'Nucleófilos: OH-, RO-, aminas, CN-, agua, enolatos.',
        'Todo mecanismo orgánico es un nucleófilo atacando un electrofílo.',
      ]},
    ],
  },
  {
    id: 25, rama: 'organica', tema: 'Incompatibilidades',
    titulo: 'Incompatibilidades orgánicas en formularios',
    resumen: 'Qué no mezclar en la fórmula magistral y por qué se degrada cada grupo.',
    secciones: [
      { t: 'Mezclas que se degrada', items: [
        'Fenoles (timol, resorcinol, ácido salicílico) + oxidantes o luz → coloración y pérdida de actividad.',
        'Ácido ascórbico + iones cobre o hierro (agua dura, envases metálicos) → oxidación acelerada: envasar en vidrio.',
        'Vitaminas A y D + luz y oxígeno → isomerización e inactivación: frascos ambar y sin burbuja de aire.',
        'Azúcares reductores (glucosa) + aminas o péptidos → reacción de Maillard: pardeamiento y pérdida de actividad.',
        'Aceites esenciales + plástico permeable o aire → peroxidación: usar vidrio ambar lleno hasta el borde.',
        'Formaldehído y glutaraldehído + proteínas → desnaturalización: no aplicar sobre tejidos vivos.',
      ]},
      { t: 'Por qué', items: [
        'Grupos vulnerables: dobles enlaces (oxidables), fenoles y catecoles (se oxidan fácil), sulfhidrilos (forman dímeros), carbonilos (reaccionan con aminas), ésteres y β-lactamas (se hidrolizan).',
        'Enemigos del formulario: O2, luz, calor, humedad, metales pesados y pH extremo.',
      ]},
    ],
  },
  {
    id: 26, rama: 'organica', tema: 'Formulación',
    titulo: 'Química medicinal: lo esencial para crear fármacos',
    resumen: 'pKa, logP, sales, regla de Lipinski, metabolismo y prófármacos para quien diseña medicamentos.',
    secciones: [
      { t: 'Ionización y absorción (Henderson-Hasselbalch)', items: [
        'Ácidos débiles (R-COOH): a pH > pKa se ionizan (cargados, no cruzan membranas).',
        'Bases débiles (RNH2): a pH < pKa se protonan y se ionizan: por eso las bases se absorben mejor en intestino (pH alto) que en estómago.',
        'Controlar el pH del formulario cambia la absorción y la estabilidad del fármaco.',
      ]},
      { t: 'Lipofilia y sales', items: [
        'logP: coeficiente octanol/agua; 1-3 suele ser óptimo para absorción oral; muy liposoluble = se acumula, muy hidrosoluble = no absorbe.',
        'Sales farmacéuticas (clorhidrato, maleato, besilato, sodio, potásico) modifican solubilidad, estabilidad y palatabilidad sin cambiar el principio activo.',
        'Regla de los cinco (Lipinski): peso molecular < 500, logP < 5, donadores de H < 5, aceptores < 10: predictores de buena biodisponibilidad oral.',
      ]},
      { t: 'Metabolismo y prófármacos', items: [
        'Fase I: oxidación (CYP450), reducción e hidrólisis: introduce o expone grupos reactivos.',
        'Fase II: conjugación (glucurónido, sulfato, glicina, glutatión): más hidrosoluble para excreción renal.',
        'Prófármacos: codeína → morfina (CYP2D6); clopidogrel se activa por CYP2C19; enalapril → enalaprilato.',
        'Interacciones: inductores e inhibidores de CYP modifican la activación de prófármacos.',
      ]},
      { t: 'Estabilidad que decide formulaciones', items: [
        'Penicilinas: la β-lactama se hidroliza con agua y acidez (penicilina G inestable en glucosa).',
        'Nitroprusiato: se fotodegrada en cianuro: proteger de la luz.',
        'Nitroglicerina: se adsorbe en PVC: aplicar con sets de polietileno o vidrio.',
        'Al diseñar: evitar o proteger fenoles, catecoles, sulfhidrilos y ésteres si el fármaco los lleva.',
      ]},
    ],
  },
];

// eslint-disable-next-line no-unused-vars
const QTEMAS = {
  inorganica: ['Fundamentos', 'Reacciones', 'Combinaciones', 'Incompatibilidades', 'Laboratorio'],
  organica: ['Fundamentos', 'Mecanismos', 'Grupos funcionales', 'Combinaciones', 'Incompatibilidades', 'Formulación'],
};
