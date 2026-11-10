export const siteConfig = {
  name: 'Amphitheater Trier',
  siteName: 'Trier Amphitheater',
  url: 'https://www.trieramphitheater.com',
  officialUrl: 'https://www.zentrum-der-antike.de/monumente/amphitheater',
  mapsUrl: 'https://maps.app.goo.gl/gAbKMdixtoGtafc99',
  address: 'Olewiger Str. 25, 54295 Trier, Deutschland',
  postalAddress: {
    streetAddress: 'Olewiger Str. 25',
    postalCode: '54295',
    addressLocality: 'Trier',
    addressCountry: 'DE',
  },
  geo: {
    latitude: 49.747861,
    longitude: 6.6492099,
  },
  officialPhone: '+49 651 73010',
  ratingValue: 4.5,
  reviewCount: 7561,
  placeId: 'PJXX+4M Trier, Germany',
};

type OpeningPeriod = {
  label: string;
  months: number[];
  hours: string;
};

export const openingHoursSchedule: OpeningPeriod[] = [
  { label: 'Januar-Februar', months: [0, 1], hours: '09:00-16:00 Uhr' },
  { label: 'März', months: [2], hours: '09:00-17:00 Uhr' },
  { label: 'April-September', months: [3, 4, 5, 6, 7, 8], hours: '09:00-18:00 Uhr' },
  { label: 'Oktober', months: [9], hours: '09:00-17:00 Uhr' },
  { label: 'November-Dezember', months: [10, 11], hours: '09:00-16:00 Uhr' },
];

export function getOpeningHoursForDate(date = new Date()) {
  const month = Number(new Intl.DateTimeFormat('de-DE', { month: 'numeric', timeZone: 'Europe/Berlin' }).format(date)) - 1;
  return (
    openingHoursSchedule.find((period) => period.months.includes(month)) ??
    openingHoursSchedule[0]
  );
}

export function getTodayOpeningLabel() {
  return "Öffnungszeiten: saisonabhängig";
}

export const ticketPrices = [
  { label: 'Erwachsene', value: '6,00 EUR' },
  { label: 'Ermäßigt', value: '5,00 EUR' },
  { label: 'Kinder und Jugendliche (6-18 Jahre)', value: '3,00 EUR' },
  { label: 'Kinder unter 6 Jahren', value: 'frei' },
  { label: 'Familienkarte 1', value: '6,00 EUR' },
  { label: 'Familienkarte 2', value: '12,00 EUR' },
  { label: 'Gruppen ab 10 Personen', value: 'ab 3,00-5,00 EUR' },
];

export const ticketNotes = [
  'Ermäßigung gilt unter anderem für Schülerinnen und Schüler über 18 Jahre, Studierende, Auszubildende, FSJ-Leistende, Rentnerinnen und Rentner, Arbeitslose und Schwerbehinderte mit Nachweis.',
  'Gruppenkarten gelten ab 10 Personen und müssen gemeinsam durch eine verantwortliche Person gelöst werden.',
  'Die AntikenCard kann sich lohnen, wenn mehrere Trierer Römerbauten besucht werden sollen.',
  'Für Familien gibt es zwei offizielle Familientarife mit unterschiedlicher Erwachsenenzahl.',
];

export const pageLinks = [
  {
    href: '/oeffnungszeiten/',
    title: 'Öffnungszeiten 2026',
    description:
      'Aktuelle Monatszeiten, letzter Einlass, Feiertagshinweise und Eintrittspreise auf einen Blick.',
  },
  {
    href: '/eintrittspreise/',
    title: 'Eintrittspreise',
    description:
      'Erwachsene, Ermäßigung, Familienkarten, Gruppenpreise und Hinweise zur AntikenCard kompakt erklärt.',
  },
  {
    href: '/kapazitaet/',
    title: 'Kapazität',
    description:
      'Historische Zuschauerzahl, Plätze, Nutzung der Arena und Einordnung heutiger Veranstaltungen.',
  },
  {
    href: '/unterirdisch/',
    title: 'Unterirdisch',
    description:
      'Kellergeschoss, Käfige, Aufzüge und die Frage, was Besucher heute im Hypogäum sehen können.',
  },
  {
    href: '/parken/',
    title: 'Parken & Anfahrt',
    description:
      'Parkplätze vor Ort, Buslinien ab Hauptbahnhof, Busparkplätze und praktische Anreise-Tipps.',
  },
  {
    href: '/fotos/',
    title: 'Fotos',
    description:
      'Arena, gemauerte Zugänge und Hanglage mit aussagekräftigen Bildbeschreibungen.',
  },
  {
    href: '/geschichte/',
    title: 'Geschichte',
    description:
      'Bauzeit, Nutzung in der Römerzeit, spätere Veränderungen und Bedeutung als UNESCO-Welterbe.',
  },
];

export const quickFacts = [
  {
    title: 'Bewertung',
    value: '4,5 von 5',
    text: 'Basierend auf 7.561 Google-Bewertungen, abgelesen am 10. November 2026.',
  },
  {
    title: 'Kapazität',
    value: 'rund 18.000',
    text: 'Historische Zuschauerzahl laut Zentrum der Antike.',
  },
  {
    title: 'Öffnungszeiten',
    value: 'monatlich wechselnd',
    text: 'Saisonzeiten laut Trier Tourismus; letzter Einlass 30 Minuten vorher.',
  },
  {
    title: 'Parken',
    value: 'begrenzt vor Ort',
    text: 'Direkt vor dem Amphitheater stehen nur begrenzt Stellplätze zur Verfügung.',
  },
];

export const homeHighlights = [
  'Römisches Amphitheater am Hang des Petrisbergs',
  'UNESCO-Welterbe als Teil der Trierer Römerbauten',
  'Besuchbar mit Arena, Rängen und unterirdischem Kellergeschoss',
  'Offizielle Öffnungszeiten nach Saison statt pauschaler Jahresangabe',
];

export const homeSections = {
  intro:
    'Das Amphitheater Trier gehört zu den eindrucksvollsten römischen Monumenten Deutschlands. Für Besucherinnen und Besucher sind heute die Arena, Teile der Zuschauerränge und das Kellergeschoss zugänglich. Diese Seite bündelt die wichtigsten Besuchsinformationen in deutscher Sprache: Öffnungszeiten, Eintritt, Kapazität, unterirdische Räume, Parken und Fotos.',
  history:
    'Errichtet wurde das Amphitheater gegen Ende des 2. Jahrhunderts. Seine Einbettung in den Hang des Petrisbergs ist bis heute gut zu erkennen und macht die Anlage besonders anschaulich. Die Ränge waren etwa 22 Meter hoch und boten laut Zentrum der Antike Platz für bis zu 18.000 Zuschauerinnen und Zuschauer.',
  underground:
    'Besonders markant ist das unterirdische Kellergeschoss unter der Arena. Dort warteten Kämpfer und Tiere auf ihren Auftritt; außerdem sind Reste der damaligen Bühnentechnik und der Funktionsräume nachvollziehbar.',
};

export const historySections = [
  {
    title: 'Bau und Lage',
    text:
      'Das Amphitheater entstand gegen Ende des 2. Jahrhunderts und wurde in den Hang des Petrisbergs eingebettet. Dadurch ließen sich Teile der Zuschauerränge direkt an das natürliche Gelände anlehnen.',
  },
  {
    title: 'Nutzung in der Römerzeit',
    text:
      'In der römischen Kaiserzeit diente die Anlage als Ort der Massenunterhaltung. Zu den typischen Darbietungen gehörten Kämpfe zwischen Menschen oder Tieren, öffentliche Inszenierungen sowie weitere Veranstaltungen vor großem Publikum.',
  },
  {
    title: 'Kellergeschoss und Bühnentechnik',
    text:
      'Unter der Arena befanden sich Funktionsräume, Käfige und Wege für den Ablauf der Spiele. Gerade dieses unterirdische System macht das Monument heute besonders anschaulich.',
  },
  {
    title: 'Spätere Jahrhunderte',
    text:
      'Nach dem Ende der antiken Nutzung verlor das Amphitheater seine ursprüngliche Funktion. Teile wurden als Steinbruch und Materiallager verwendet; später nutzte man die bewachsenen Hänge sogar für den Weinbau.',
  },
  {
    title: 'Wiederentdeckung und Welterbe',
    text:
      'Die ersten archäologischen Grabungen begannen im 19. Jahrhundert, um 1908 wurde der Arenakeller freigelegt. Seit 1986 gehört das Amphitheater als Teil der Trierer Römerbauten zum UNESCO-Welterbe.',
  },
];

export const capacityFacts = [
  'Historisch bot das Amphitheater Trier rund 18.000 Zuschauerinnen und Zuschauern Platz.',
  'Die Gesamtanlage misst etwa 120 x 145 Meter und zählt damit zu den größten erhaltenen römischen Amphitheatern.',
  'Für heutige Veranstaltungen hängt die nutzbare Kapazität von Sicherheitszonen, Bühnenaufbauten und Wegeführung ab.',
  'Die historische Zuschauerzahl ist keine feste heutige Konzertkapazität.',
];

export const undergroundFacts = [
  'Unter der Arena liegt ein Kellergeschoss mit Funktionsräumen, Käfigen und Wegen für Inszenierungen.',
  'Besucher können heute die unterirdischen Bereiche besichtigen und den räumlichen Ablauf antiker Veranstaltungen besser verstehen.',
  'Treppen und historischer Bodenbelag machen den Bereich atmosphärisch, aber nicht vollständig barrierefrei.',
];

export const parkingFacts = [
  'Direkt vor dem Amphitheater gibt es Parkplätze in begrenzter Zahl.',
  'Für Reisebusse die aktuelle Abstellmöglichkeit vorab bei Trier Tourismus erfragen.',
  'Ab Trier Hauptbahnhof die aktuelle Verbindung und passende Haltestelle im Fahrplan der Stadtwerke Trier prüfen.',
  'Wer sicherer planen möchte, nutzt den ÖPNV oder kommt früh am Tag an.',
];

export const visitorTips = [
  'Letzter Einlass ist jeweils 30 Minuten vor Schließung.',
  'Im Kellergeschoss und auf den Rängen gibt es Stufen; die Arena ist stufenlos erreichbar.',
  'Witterung und einzelne Feiertage können zu kurzfristigen Änderungen führen.',
  'Für die verbindlichsten Besuchsinfos sollte immer auch die offizielle Seite geprüft werden.',
];

export const reviews = [
  {
    name: 'Thomas M.',
    date: 'März 2026',
    text: 'Beeindruckende römische Ruinen, besonders die unterirdischen Räume. Man bekommt ein gutes Gefühl dafür, wie die Arena damals funktioniert hat.',
  },
  {
    name: 'Sabine K.',
    date: 'Februar 2026',
    text: 'Sehr gut erhalten und absolut sehenswert. Die Kombination aus Geschichte, Blick über Trier und den Kellerräumen macht den Besuch besonders spannend.',
  },
  {
    name: 'Andreas H.',
    date: 'September 2025',
    text: 'Ein Muss in Trier. Die Arena wirkt größer als erwartet, und gerade der unterirdische Bereich bleibt im Gedächtnis.',
  },
];

export const references = [
  {
    label: 'Zentrum der Antike Trier',
    href: siteConfig.officialUrl,
    text: 'Offizielle Öffnungszeiten, Eintrittspreise, Kontakt, Barrierefreiheit und Parkinformationen.',
  },
  {
    label: 'Trier Tourismus und Marketing',
    href: 'https://www.trier-info.de/sehenswuerdigkeiten/amphitheater',
    text: 'Zusätzliche Besucherinfos, Tagesstatus und Größenangaben zur Anlage.',
  },
  {
    label: 'Google Maps',
    href: siteConfig.mapsUrl,
    text: 'Bewertungen, Routenplanung und aktuelle Besucherfotos.',
  },
];

export const galleryImages = [
  {
    "src": "/gallery/amphitheater-trier-arena-overview.jpg",
    "alt": "Blick über das Arenarund und die begrünten Hänge",
    "width": 4032,
    "height": 3024,
    "caption": "Arena des Amphitheaters mit den umliegenden Hängen"
  },
  {
    "src": "/gallery/trier-amphitheater-17.jpg",
    "alt": "Gemauerter Durchgang am Amphitheater",
    "width": 2400,
    "height": 1800,
    "caption": "Gemauerter Durchgang und Mauerwerk am Arenarand"
  },
  {
    "src": "/gallery/trier-amphitheater-10.jpg",
    "alt": "Gewölbter Zugang im begrünten Hang",
    "width": 1800,
    "height": 2400,
    "caption": "Gewölbter Zugang zwischen den begrünten Hängen"
  },
  {
    "src": "/gallery/trier-amphitheater-16.jpg",
    "alt": "Blick entlang der Arena auf Mauerreste und Hang",
    "width": 3840,
    "height": 2160,
    "caption": "Arena, Mauerreste und Hanglage in einer Ansicht"
  },
  {
    "src": "/gallery/trier-amphitheater-15.jpg",
    "alt": "Heutiger Eingang mit Schild Amphitheater",
    "width": 2400,
    "height": 1802,
    "caption": "Heutiger Eingang zum Amphitheater"
  },
  {
    "src": "/gallery/trier-amphitheater-11.jpg",
    "alt": "Gemauerter Gewölbegang mit hellem Ausgang",
    "width": 3024,
    "height": 4032,
    "caption": "Gewölbegang mit Blick zum Ausgang"
  },
  {
    "src": "/gallery/trier-amphitheater-18.jpg",
    "alt": "Blick vom Boden der Arena auf die begrünten Ränge",
    "width": 2400,
    "height": 1800,
    "caption": "Blick vom Arenaboden zu den begrünten Hängen"
  },
  {
    "src": "/gallery/amphitheater-trier-evening-light.jpg",
    "alt": "Schmaler gewölbter Gang mit seitlichem Tageslicht",
    "width": 3472,
    "height": 4624,
    "caption": "Gewölbter Gang – bestehende Aufnahme; genauer Aufnahmepunkt nicht belegt"
  }
];
