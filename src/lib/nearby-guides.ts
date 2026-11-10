export type NearbyGuide = {
  slug: string; name: string; title: string; description: string; tagline: string;
  intro: string; tips: string[]; highlights: string[]; about: string;
  address: string; type: string; hours: string; admission: string;
  transport: string; appeal: { title: string; text: string }[];
  route: string[]; notices: string[]; photos: string; stay: string;
  faq: { question: string; answer: string }[];
  sources: { label: string; url: string }[]; related: string[];
};

export const nearbyGuides: NearbyGuide[] = [
  {
    slug: 'kaiserthermen', name: 'Kaiserthermen',
    title: 'Kaiserthermen Trier: Dienstgänge, Eintritt & Besuchsplanung',
    description: 'Kaiserthermen oder Amphitheater? Was die unterirdischen Dienstgänge zeigen, Saisonzeiten, Eintritt und Tipps für einen kombinierten Besuch in Trier.',
    tagline: 'Römische Badetechnik über und unter der Erde',
    intro: 'Nach dem Arenakeller des Amphitheaters bieten die Kaiserthermen einen anderen Blick unter das römische Trier: Hier geht es um Dienstwege und die Infrastruktur einer geplanten Badeanlage. Wer besonders an Bau- und Versorgungstechnik interessiert ist, findet damit eine sinnvolle Ergänzung zum Spielbetrieb der Arena.',
    tips: ['Vergleichen Sie vorab die Eintrittsoptionen für mehrere Römerbauten, statt eine Ersparnis durch ein Kombiticket vorauszusetzen.', 'Legen Sie den Rundgang durch die Dienstgänge in ein gesichertes Einlassfenster. Planen Sie den Weg vom Amphitheater separat im Routenplaner.', 'Klären Sie Stufen und aktuelle Zugänglichkeit vorab mit dem Betreiber, wenn Ihre Gruppe auf einen stufenlosen Weg angewiesen ist.'],
    highlights: ['Unterirdische Dienstgänge statt Arenakeller', 'Erhaltene Entwässerung und ältere Hausreste', 'Monumentale Fensterarkaden als Orientierung im oberirdischen Bau'],
    about: 'Die Kaiserthermen gehören zu Triers römischen Monumenten. Das große Badeprojekt wurde in seiner ursprünglichen Form nicht fertiggestellt. Deshalb lohnt es sich, zwischen dem geplanten Badeablauf und den heute erhaltenen Bauteilen zu unterscheiden.',
    address: 'Weberbach 41, 54290 Trier', type: 'Römische Thermenruine',
    hours: 'Laut Trier Tourismus: November–Februar 9–16 Uhr, März und Oktober 9–17 Uhr, April–September 9–18 Uhr; täglich. Letzter Einlass 30 Minuten vorher. Sonderregelungen vor der Anreise prüfen.',
    admission: 'Trier Tourismus nennt 6 € für Erwachsene, 5 € ermäßigt und 3 € für 6–18-Jährige; unter 6 Jahren frei. Familien- und Kombikarten haben eigene Bedingungen. Stand der Prüfung: 10.11.2026.',
    transport: 'Für Bus und Bahn auf der offiziellen Besucher-Seite „Trier, Kaiserthermen“ als Ziel verwenden. Bei Anreise mit dem Auto eine zulässige Parkfläche auswählen und den Zugang zur Weberbach prüfen; der Monument-Eintritt ersetzt keine Parkberechtigung.',
    appeal: [
      { title: 'Den technischen Betrieb mitdenken', text: 'Die erhaltenen Dienstgänge und Entwässerungsreste erklären, welche Infrastruktur ein so großes Bad benötigt hätte. Lesen Sie zunächst den Grundriss oben und vergleichen Sie ihn danach mit den Gängen unten. So bleiben die einzelnen Räume besser einzuordnen.' },
      { title: 'Der Unterschied zum Amphitheater', text: 'Unter beiden Anlagen liegen Funktionsräume. Im Amphitheater dienen sie dem Verständnis des Arenabetriebs; hier steht die Versorgung der Thermen im Mittelpunkt. Wählen Sie beide Besuche, wenn genau dieser Vergleich Ihr Interesse trifft, und nur einen, wenn Sie lieber mehr Zeit an einem Ort verbringen möchten.' }
    ],
    route: ['Am Eingang Zugang, letzte Einlasszeit und Ticketoptionen bestätigen.', 'Oberirdisch den Plan lesen und die großen Fensterarkaden als Bezugspunkt wählen.', 'Die freigegebenen Dienstgänge mit dem oberirdischen Grundriss vergleichen.', 'Vor dem Weiterweg zum Amphitheater oder Museum das nächste Einlassfenster prüfen.'],
    notices: ['Nur freigegebene Wege nutzen; erhaltene Mauern sind keine Kletterflächen.', 'Die unterirdische Anlage ist kein Ersatz für eine individuelle Prüfung der Zugänglichkeit.'],
    photos: 'Für die Bildgestaltung bieten die Fensterarkaden einen nachvollziehbaren baulichen Bezug. In den Dienstgängen zuerst den sicheren Durchgang freihalten; Fotoregeln am Eingang beachten.',
    stay: 'Wenn Kaiserthermen und Amphitheater Schwerpunkte der Reise sind, vergleichen Sie Unterkünfte anhand beider Adressen und der tatsächlichen Anreise. Für einen späten Check-in die Verkehrsverbindung unabhängig von den Monument-Öffnungszeiten prüfen.',
    faq: [{ question: 'Sind Kaiserthermen und Barbarathermen dieselbe Anlage?', answer: 'Nein. Die Kaiserthermen liegen an der Weberbach; die Barbarathermen an der Südallee. Beide haben eigene Zugänge und Besucherbedingungen.' }, { question: 'Was unterscheidet die Gänge vom Arenakeller?', answer: 'Die Dienstgänge gehören zur Infrastruktur des Thermenprojekts. Der Keller des Amphitheaters gehört zum Ablauf der Spiele unter der Arena.' }],
    sources: [{ label: 'Trier Tourismus: Kaiserthermen – Bau, Besuch und Tarife', url: 'https://www.trier-info.de/sehenswuerdigkeiten/kaiserthermen' }],
    related: ['barbarathermen', 'rheinisches-landesmuseum']
  },
  {
    slug: 'porta-nigra', name: 'Porta Nigra',
    title: 'Porta Nigra Trier: Innenbesuch, Restaurierung & Aussicht',
    description: 'Die Porta Nigra von innen besuchen: Ebenen und Innenhof, aktuelle Restaurierungshinweise, Saisonzeiten, Eintritt und der Unterschied zum Amphitheater.',
    tagline: 'Ein Stadttor von innen und aus mehreren Ebenen erleben',
    intro: 'Die Porta Nigra ergänzt das Amphitheater um ein anderes römisches Bauwerk: ein Stadttor mit Innenhof, Gängen und oberen Ebenen. Für die Besuchsplanung ist entscheidend, ob Sie nur die Fassade ansehen oder auch ins Innere gehen möchten. Der Innenbesuch braucht ein eigenes Ticket- und Einlassfenster.',
    tips: ['Außenansicht und Innenbesuch getrennt planen: Ein Foto vom Vorplatz ersetzt den Rundgang durch das Tor nicht.', 'Vor dem Besuch den aktuellen Restaurierungshinweis lesen, besonders wenn eine bestimmte Ansicht wichtig ist.', 'Wer mehrere Römerbauten besuchen möchte, sollte die Bedingungen der AntikenCard mit den Einzeltickets vergleichen.'],
    highlights: ['Römisches Stadttor mit Innenhof', 'Gänge und Ausblicke von verschiedenen Ebenen', 'Antike Steinblöcke und Spuren späterer Nutzung'],
    about: 'Trier Tourismus datiert den Baubeginn auf 170 n. Chr. Das Tor gehört seit 1986 zum Trierer UNESCO-Welterbe. Der heutige Name und spätere bauliche Spuren gehören ebenso zu seiner Geschichte wie der römische Ursprung.',
    address: 'Simeonstraße 60, 54290 Trier', type: 'Römisches Stadttor',
    hours: 'Laut Trier Tourismus täglich: November–Februar 9–16 Uhr, März und Oktober 9–17 Uhr, April–September 9–18 Uhr. Letzter Einlass 30 Minuten vorher. Teile sind laut Hinweis vom 10.11.2026 eingerüstet; der Innenbesuch bleibt grundsätzlich möglich. Aktuellen Stand prüfen.',
    admission: 'Am 10.11.2026 nennt Trier Tourismus 6 € für Erwachsene, 5 € ermäßigt und 3 € für 6–18-Jährige; unter 6 Jahren frei. Familien-, Gruppen- und Kombikarten gesondert prüfen.',
    transport: 'Die offizielle Besucher-Seite bietet eine Verbindungssuche mit dem Ziel „Trier, Porta Nigra“. Für den Weg vom Amphitheater die vollständige Zieladresse wählen. Eine Reihenfolge der Monumente ist erst sinnvoll, wenn Sie Ihre Ankunftszeit und Einlassgrenzen kennen.',
    appeal: [
      { title: 'Fassade und Innenraum verbinden', text: 'Beginnen Sie mit der Form des Tores von außen. Im Innenhof lässt sich anschließend nachvollziehen, wie die seitlichen Bauteile zusammenhängen. Nehmen Sie einen markanten Bauteil als Bezugspunkt, statt nur möglichst schnell die höchste Ebene zu erreichen.' },
      { title: 'Mehrere Blickrichtungen', text: 'Der Rundgang bietet andere Perspektiven als das offene Arenarund des Amphitheaters. Vergleichen Sie den Blick durch einen Gang, den Blick in den Innenhof und den Blick zur Altstadt. Die Restaurierung kann einzelne Ansichten verändern; eine gerüstfreie Aufnahme lässt sich nicht zusagen.' }
    ],
    route: ['Zuerst die Außenform betrachten und den aktuellen Zugang finden.', 'Ticket und freigegebene Ebenen am Eingang prüfen.', 'Innenhof und Gänge als zusammenhängendes Torbauwerk lesen.', 'Danach einen weiteren Römerbau auswählen, statt alle Stationen unter Zeitdruck anzuhängen.'],
    notices: ['Gerüste sind kein Beleg für eine vollständige Schließung; maßgeblich ist der aktuelle Betreiberhinweis.', 'Die oberen Ebenen nicht als stufenlosen Aussichtspunkt einplanen, ohne die Zugänglichkeit zuvor zu prüfen.'],
    photos: 'Eine Außenaufnahme und eine Aufnahme der Innenhof-Perspektive erzählen unterschiedliche Dinge. Achten Sie auf andere Besucher in engen Gängen und halten Sie Durchgänge frei. Restaurierungsgerüste können Teil des aktuellen Bildes sein.',
    stay: 'Für eine Reise mit Porta Nigra als Startpunkt kann eine Unterkunft mit gutem Zugang zur nördlichen Altstadt praktisch sein. Prüfen Sie zusätzlich den Weg zum Amphitheater, Gepäckzugang und Parkregeln des konkreten Hauses.',
    faq: [{ question: 'Ist die Porta Nigra während der Restaurierung geschlossen?', answer: 'Der am 10.11.2026 geprüfte Hinweis von Trier Tourismus sagt, dass das Tor trotz teilweiser Einrüstung für Gäste geöffnet bleibt. Prüfen Sie vor der Anreise die aktuelle Meldung.' }, { question: 'Reicht eine Außenbesichtigung?', answer: 'Für einen Überblick über die Fassade kann sie genügen. Wer Innenhof, Gänge und Ebenen sehen möchte, muss den Innenbesuch innerhalb der Öffnungszeiten einplanen.' }],
    sources: [{ label: 'Trier Tourismus: Porta Nigra – Innenbesuch und Restaurierung', url: 'https://www.trier-info.de/sehenswuerdigkeiten/porta-nigra' }],
    related: ['konstantinbasilika', 'kaiserthermen']
  },
  {
    slug: 'konstantinbasilika', name: 'Konstantinbasilika',
    title: 'Konstantinbasilika Trier: Besuchszeiten, Kirche & Kaisersaal',
    description: 'Die Konstantinbasilika besuchen: antike Aula Palatina, heutige Kirche, saisonale Besuchsfenster und Hinweise zu Gottesdiensten, Konzerten und freiem Eintritt.',
    tagline: 'Vom kaiserlichen Repräsentationsraum zur heutigen Kirche',
    intro: 'Nach der offenen Arena zeigt die Konstantinbasilika eine andere Form römischer Größe: einen monumentalen Hallenraum. Heute ist sie eine evangelische Kirche. Ein Besuch hängt daher nicht nur von saisonalen Zeiten ab, sondern auch von Gottesdiensten, Proben und Veranstaltungen.',
    tips: ['Den Innenbesuch außerhalb von Gottesdiensten planen; ein reguläres Besuchsfenster ist keine Garantie für Zugang bei einer Veranstaltung.', 'Bei einer Winterreise die Mittagspause beachten und den Weg erst nach Prüfung des Zeitfensters festlegen.', 'Ein Konzert und eine touristische Besichtigung sind unterschiedliche Besuche mit eigenen Bedingungen.'],
    highlights: ['Antike Aula Palatina aus der Zeit um 310', 'Großer säulenloser Hallenraum', 'Weitergenutztes Kirchengebäude statt einer reinen Ruine'],
    about: 'Die um 310 errichtete Aula Palatina diente der kaiserlichen Repräsentation. Seit der Mitte des 19. Jahrhunderts wird der Raum evangelisch genutzt. Die heutige zurückhaltende Ausstattung entspricht nicht der antiken Innenausstattung; beide Zeitschichten sollten beim Besuch auseinandergehalten werden.',
    address: 'Konstantinplatz 10, 54290 Trier', type: 'Römische Palastaula und evangelische Kirche',
    hours: 'Geprüft am 10.11.2026, laut Trier Tourismus: April–Oktober Mo–Sa 10–18, So 14–18 Uhr. November sowie Januar–März Di–Sa 10–12 und 14–16, So 14–16 Uhr. Dezember Mo–Sa 10–12 und 14–16, So 14–16 Uhr. Kurzfristige Schließungen durch Gottesdienste, Veranstaltungen oder Proben möglich.',
    admission: 'Die reguläre Besichtigung ist laut Trier Tourismus kostenlos; Konzerte sind ausgenommen. Führungen und besondere Programme nicht mit dem freien Kircheneintritt gleichsetzen.',
    transport: 'In der Verbindungssuche auf der offiziellen Besucher-Seite heißt das Ziel „Trier, Konstantin Basilika“. Für den Weiterweg zwischen Amphitheater, Kaiserthermen und Basilika die aktuellen Fußwege separat abrufen; hier wird keine feste Gehzeit zugesagt.',
    appeal: [
      { title: 'Den Raum wirken lassen', text: 'Betrachten Sie zuerst die Längsachse und die Raumhöhe. Der Vergleich mit dem Amphitheater funktioniert über die Wirkung großer Bauvolumen: Dort bestimmt die offene Arena den Eindruck, hier ein zusammenhängender Innenraum. Ein stiller Moment kann mehr vermitteln als ein schneller Fotostopp.' },
      { title: 'Antike und heutige Nutzung trennen', text: 'Die heutige Kirche ist ein lebendiger Nutzungsraum. Lesen Sie historische Erklärungen mit Blick auf das antike Bauwerk, ohne jedes sichtbare Detail dieser Zeit zuzuordnen. Für eine Vertiefung bietet sich danach das Landesmuseum mit seinen archäologischen Sammlungen an.' }
    ],
    route: ['Vor dem Betreten den aktuellen Veranstaltungshinweis prüfen.', 'Im freigegebenen Bereich den Hallenraum entlang seiner Hauptachse betrachten.', 'Historische Informationen mit der heutigen kirchlichen Einrichtung vergleichen.', 'Die Besichtigung beenden, wenn ein Gottesdienst oder eine Probe vorbereitet wird.'],
    notices: ['Gottesdienste und kirchliche Nutzung haben Vorrang vor touristischen Plänen.', 'Rücksichtsvoll sprechen und vor Aufnahmen die örtlichen Fotohinweise beachten.'],
    photos: 'Die Raumachse und Außenansicht sind unterschiedliche Motive. Verzichten Sie während religiöser Handlungen auf störende Aufnahmen; eine Konzertkarte ist keine pauschale Fotoerlaubnis.',
    stay: 'Wenn Sie einen Konzertabend planen, prüfen Sie die späte Rückfahrt oder den tatsächlichen Weg zur Unterkunft. Ein Hotelvergleich nach dem Konzertort ist für diesen Fall hilfreicher als allein die Nähe zum Amphitheater.',
    faq: [{ question: 'Ist die Konstantinbasilika ein Museum?', answer: 'Nein. Der antike Hallenbau wird heute als evangelische Kirche genutzt. Touristischer Zugang ist an den kirchlichen Betrieb gebunden.' }, { question: 'Kann ich in der Mittagspause hinein?', answer: 'Die geprüften Winterzeiten enthalten eine Pause von 12 bis 14 Uhr. Planen Sie deshalb ein bestätigtes Besuchsfenster und prüfen Sie den aktuellen Hinweis.' }],
    sources: [{ label: 'Trier Tourismus: Konstantin-Basilika – Geschichte und Besuchsbedingungen', url: 'https://www.trier-info.de/sehenswuerdigkeiten/konstantin-basilika' }],
    related: ['porta-nigra', 'rheinisches-landesmuseum']
  },
  {
    slug: 'rheinisches-landesmuseum', name: 'Rheinisches Landesmuseum',
    title: 'Rheinisches Landesmuseum Trier: römische Funde zum Ruinenbesuch',
    description: 'Welche römischen Funde ergänzen Amphitheater und Thermen? Mosaiken, Neumagener Weinschiff und Goldschatz im Rheinischen Landesmuseum Trier richtig einplanen.',
    tagline: 'Die Funde hinter den römischen Monumenten entdecken',
    intro: 'Im Amphitheater erleben Sie einen Ort und seine Geländeform. Im Rheinischen Landesmuseum stehen bewegliche Funde und ihre Zusammenhänge im Mittelpunkt. Der Museumsbesuch ergänzt eine Ruinenreise besonders dann, wenn Sie wissen möchten, wie Bildwerke, Alltagsgegenstände und Architektur zusammengehören.',
    tips: ['Wählen Sie zunächst einen Sammlungsschwerpunkt, statt zwischen allen Epochen zu wechseln.', 'Öffnungszeiten, aktuelle Eintrittstarife und Sonderausstellungen direkt beim Museum prüfen; hier wird kein unbestätigter Tagesstatus angezeigt.', 'Für das Medientheater ein eigenes Vorstellungsfenster bestätigen. Der allgemeine Museumseintritt sagt noch nichts über einen gewünschten Termin aus.'],
    highlights: ['Römische Mosaiken als Ergänzung zu den Bauwerken', 'Neumagener Weinschiff und römischer Goldmünzenschatz', 'Fundstücke mit Bezug zu den Barbarathermen'],
    about: 'Das Museum präsentiert archäologische Sammlungen über mehrere Epochen. Die Tourist-Information hebt unter anderem Mosaiken, das Neumagener Weinschiff und den römischen Goldschatz hervor. Skulpturen der Barbarathermen werden ebenfalls im Landesmuseum aufbewahrt; deshalb lassen sich Fundort und Sammlung hier sinnvoll zusammendenken.',
    address: 'Weimarer Allee 1, 54290 Trier', type: 'Archäologisches Museum',
    hours: 'Aktuelle Besuchszeiten und mögliche Schließtage vorab auf der Museums-Website bestätigen. Bei der Prüfung am 10.11.2026 ließ sich deren aktuelle Betriebsinformation nicht zuverlässig abrufen; deshalb wird hier keine feste Öffnungszeit versprochen.',
    admission: 'Aktuellen Tarif beim Museum nachlesen. Sonderausstellungen, Medientheater und Kombikarten können unterschiedliche Bedingungen haben. Keine Preisangabe aus einer älteren Ausstellung für den heutigen Besuch übernehmen.',
    transport: 'Für die Navigation die Weimarer Allee 1 verwenden und auf der Museums-Website den aktuellen Eingang prüfen. Planen Sie einen möglichen Fußweg vom Amphitheater erst nach Festlegung des Museumseinlasses. Ein Museumstag braucht ebenso eine Anreiseplanung wie ein Außenmonument.',
    appeal: [
      { title: 'Einen Fund genauer lesen', text: 'Wählen Sie etwa ein Mosaik und betrachten Sie erst Motiv, Material und Beschriftung. Fragen Sie danach, aus welchem Zusammenhang es stammt. Diese Reihenfolge verhindert, dass ein eindrucksvolles Einzelobjekt mit dem gesamten römischen Stadtleben gleichgesetzt wird.' },
      { title: 'Fundort und Sammlung verbinden', text: 'Bei einer Kombination mit den Barbarathermen lohnt die Frage, was am Ausgrabungsort erhalten ist und was im Museum erklärt wird. Das sind zwei unterschiedliche Erfahrungen: ein Grundriss im Gelände und einzelne Objekte im Ausstellungszusammenhang. Der eine Besuch ersetzt den anderen deshalb nur teilweise.' }
    ],
    route: ['Betriebszeiten, Ticketumfang und gegebenenfalls Vorstellungszeit bestätigen.', 'Einen Schwerpunkt aus den römischen Sammlungen auswählen.', 'Bei wichtigen Objekten die Herkunft lesen und mit dem Monumentbesuch vergleichen.', 'Weitere Epochen nur ergänzen, wenn genug Zeit bleibt; einen Folgebesuch nicht am letzten Einlass scheitern lassen.'],
    notices: ['Die Innenräume sind eine Alternative zu einem weiteren Außenmonument, aber kein garantierter spontaner Zugang an jedem Wochentag.', 'Bei Medientheater und Sonderausstellungen aktuelle Sprache, Termin und Ticketbedingungen prüfen.'],
    photos: 'Vor Aufnahmen die Regeln der jeweiligen Ausstellung beachten. Für einen Vergleich von Fund und Ruine sind eigene Notizen zu Objekt und Fundort oft hilfreicher als viele unbeschriftete Bilder.',
    stay: 'Bei einer Reise mit Museums- und Außenbesuchen hilft eine Unterkunft, deren Gepäckregeln zum An- und Abreisetag passen. Vergleichen Sie den tatsächlichen Weg zum Museum und zum Amphitheater; eine allgemeine Innenstadtlage garantiert keinen passenden Tagesablauf.',
    faq: [{ question: 'Ersetzt das Museum den Amphitheater-Besuch?', answer: 'Nein. Das Museum erklärt Funde im Ausstellungszusammenhang; die Arena vermittelt den Ort und seine räumliche Wirkung. Die beiden Schwerpunkte ergänzen sich.' }, { question: 'Sind die Zeiten des Medientheaters identisch mit den Museumszeiten?', answer: 'Nicht automatisch. Prüfen Sie eine konkrete Vorstellung und deren Ticketbedingungen separat auf der Museums-Website.' }],
    sources: [{ label: 'Trier Tourismus: Rheinisches Landesmuseum – Sammlungen', url: 'https://www.trier-info.de/en/museums/rhineland-federal-state-museum-rheinisches-landesmuseum-trier' }, { label: 'Rheinisches Landesmuseum – aktuelle Besucherinformationen', url: 'https://www.landesmuseum-trier.de/' }, { label: 'Trier Tourismus: Barbarathermen und ihre Funde', url: 'https://www.trier-info.de/sehenswuerdigkeiten/barbarathermen' }],
    related: ['barbarathermen', 'kaiserthermen']
  },
  {
    slug: 'barbarathermen', name: 'Barbarathermen',
    title: 'Barbarathermen Trier: kostenloser Besuchersteg & erhaltene Ruinen',
    description: 'Was sieht man an den Barbarathermen noch? Besuchersteg, Rekonstruktionen, kostenloser Eintritt, Saisonzeiten und Vergleich mit den Kaiserthermen.',
    tagline: 'Einen großen Thermengrundriss vom Besuchersteg verstehen',
    intro: 'Die Barbarathermen sind eine gute Ergänzung, wenn Sie nach dem Amphitheater einen weiteren römischen Ort mit ehrlicher Erwartung besuchen möchten: Hier steht kein vollständiges Badehaus. Der Besuchersteg hilft, erhaltene Reste und Rekonstruktionen zu einer Vorstellung der früheren Anlage zusammenzusetzen.',
    tips: ['Die Größe der einstigen Anlage nicht mit der heute sichtbaren Ausgrabungsfläche verwechseln.', 'Für einen kurzen Besuch zuerst die Rekonstruktionen lesen; einzelne niedrige Mauerzüge werden dadurch verständlicher.', 'Kostenlos bedeutet Zugang innerhalb der Öffnungszeiten, nicht rund um die Uhr.'],
    highlights: ['Kostenloser Besuchersteg mit Erklärungen', 'Rekonstruktionen des Badeablaufs', 'Kontrast zwischen großer ursprünglicher Anlage und heutigen Resten'],
    about: 'Die Thermen entstanden in der zweiten Hälfte des 2. Jahrhunderts. Trier Tourismus nennt etwa 42.000 Quadratmeter ursprüngliche Fläche und erklärt, dass nur rund ein Drittel ausgegraben ist. Spätere Steinbruchnutzung gehört zur Geschichte des Ortes. Ein Teil der Bildwerke befindet sich heute im Rheinischen Landesmuseum.',
    address: 'Südallee, 54290 Trier', type: 'Archäologisches Thermengelände mit Besuchersteg',
    hours: 'Laut Trier Tourismus täglich: November–Februar 10–16 Uhr, März und Oktober 10–17 Uhr, April–September 10–18 Uhr. Letzter Einlass 30 Minuten vorher. Stand der Prüfung: 10.11.2026; kurzfristige Änderungen vor dem Besuch prüfen.',
    admission: 'Der Besuchersteg ist laut Tourist-Information während der Öffnungszeiten ohne Eintrittspreis zugänglich. Führungen oder andere Programme nicht automatisch als eingeschlossen ansehen.',
    transport: 'Die offizielle Besucher-Seite nennt „Trier, Südallee“ als Ziel der Verbindungssuche. Für den Fußweg vom Amphitheater oder von den Kaiserthermen den aktuellen Routenplan nutzen und einen nutzbaren Eingang wählen. Eine Luftliniennähe ist keine verlässliche Gehzeit.',
    appeal: [
      { title: 'Rekonstruktion und Original unterscheiden', text: 'Lesen Sie zuerst, welche Teile noch erhalten sind und welche eine Zeichnung ergänzt. Erst danach lohnt der Blick über das Gelände. So müssen niedrige Reste nicht wie ein enttäuschend kleines Gebäude wirken, und eine Rekonstruktion wird nicht mit dem heutigen Zustand verwechselt.' },
      { title: 'Welcher Thermenbesuch passt?', text: 'Die Kaiserthermen bieten unterirdische Dienstgänge. Bei den Barbarathermen steht das Lesen des Geländes vom Steg aus im Vordergrund. Wenn Sie nur einen weiteren Römerbau wählen können, entscheiden Sie nach dieser Erfahrung, statt beide Anlagen für austauschbar zu halten.' }
    ],
    route: ['Öffnung und Zugang zum Besuchersteg prüfen.', 'Mit der Übersicht und Rekonstruktion der Gesamtanlage beginnen.', 'Die erklärten Reste im Gelände wiederfinden und mit dem Plan vergleichen.', 'Für einen zweiten Blick die Sammlung im Landesmuseum oder die Dienstgänge der Kaiserthermen wählen.'],
    notices: ['Auf dem Besuchersteg bleiben und Ausgrabungs- oder Restaurierungsflächen respektieren.', 'Mit einem Außenbesuch planen; aktuelle Wege- und Wetterbedingungen individuell berücksichtigen.'],
    photos: 'Eine Aufnahme mit erklärtem Grundriss oder Stegperspektive vermittelt den Ort besser als eine isolierte Mauer. Den Steg für andere Besucher frei halten und nicht für einen besseren Winkel in die Grabungsfläche treten.',
    stay: 'Wenn Barbarathermen und Amphitheater beide Teil der Reise sind, prüfen Sie die Verbindung zwischen Unterkunft und beiden Eingängen. Für einen frühen Start ist ein passender Frühstücks- und Gepäckablauf oft hilfreicher als eine unbestätigte Entfernungsangabe.',
    faq: [{ question: 'Kann ich die Barbarathermen kostenlos besuchen?', answer: 'Laut Trier Tourismus ja, über den Besuchersteg während der Öffnungszeiten. Das ist keine Aussage über den Preis einer separat gebuchten Führung.' }, { question: 'Kann ich dort durch unterirdische Dienstgänge gehen?', answer: 'Dieser Führer beschreibt den Besuchersteg der Barbarathermen. Für einen Rundgang durch erhaltene unterirdische Dienstgänge sind die Kaiserthermen der passende Vergleich.' }],
    sources: [{ label: 'Trier Tourismus: Barbarathermen – Besuchersteg und Zugang', url: 'https://www.trier-info.de/sehenswuerdigkeiten/barbarathermen' }],
    related: ['kaiserthermen', 'rheinisches-landesmuseum']
  }
];

export function guidePath(slug: string) { return `/umgebung/${slug}/`; }
