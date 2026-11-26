GRID SPEC — Estilo de Jose (web)
Contexto       : web, una página larga de guía personal; contenido mixto (texto corto, fichas, tablas, color); expresividad editorial
Tipografía     : cuerpo Inter (xh 0.546, cw 0.477em es) · 17px / 1.647 · medida 60 car. reales = 30.4em (uso scanning)
                 titulares Syne Medium (0.469 em/car., cifras 0.534; Bold era 0.543 y 0.649: Syne se ensancha con el peso) en escala 1.333
                 títulos de ficha (15–22rem de ancho) en Inter SemiBold · datos y etiquetas DM Mono
Densidad       : uso scanning · densidad spacious · razón de cadena 1.618
Cadena         : micro 8 · inner 14 · padding 22 · gutter 24→36 · margen 24→72 · sección 56→112 (2u→4u)
                 (suelo del gutter subido de 18 a 24 px para cumplir padding < gutter ≤ margen)
Retícula base  : 12 columnas · gutter clamp(1.5rem, 1.25rem + 1.1111vw, 2.25rem) · margen clamp(1.5rem, 0.5rem + 4.4444vw, 4.5rem) · máx. 80rem
Escala de tipo : h1 +3→+5 (40→72px) · h2 +2→+4 (30→54) · h3 +1→+2 · h4 0→+1 · cuerpo 17
Operadores     : O3 desplazamiento + O14 vacío activo en cabeceras (título 1–7, entradilla 9–12 desde 80em)
Ruptura        : la tira de la paleta en portada sale a sangre (110 % del ancho), anclada al borde de la banda
Cifras         : columnas con suelo de 15.5rem (la cifra más larga, 8 car. a 64px, cabe sin pisarse); en portada, cifras a escala +2
Invariantes    : orden del DOM = orden de lectura; prosa ≤ 30.4em; tarjetas con suelo dinámico (RAM), sin media queries de tamaño
Comandos       : gridcalc.py font Inter-Regular.woff2 --lang es · compose --use scanning --density spacious --body 17 --type-ratio 1.333 · clamp
Movimiento     : perfil gsap+lenis (movimiento.perfil) · auditar_proyecto.py: 0 bloqueantes, 0 avisos
