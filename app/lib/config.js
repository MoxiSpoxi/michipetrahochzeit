// Default configuration for the wedding website
// This can be edited via the admin dashboard

export const defaultConfig = {
  hero: {
    title: "Wir trauen uns!",
    name1: "Petra",
    name2: "Michi",
    date: "22. August 2026",
    backgroundImage: "/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.39.jpeg",
    fontSize: {
      title: "text-3xl",
      names: "text-6xl",
      date: "text-2xl"
    }
  },
  countdown: {
    weddingDate: "2026-08-22T14:00:00",
    title: "Der große Tag kommt näher",
    subtitle: "Wir können es kaum erwarten, mit euch zu feiern!",
    fontSize: {
      title: "text-4xl",
      subtitle: "text-lg"
    }
  },
  details: {
    introTitle: "Wir trauen uns - jetzt passiert's,\nam 22. August 2026 eskaliert's (sowieso)\nWir laden euch ganz herzlich ein,\nVollgas dabei zu sein! 🎉🥳🥂",
    introText: "",
    events: [
      {
        icon: "📍",
        title: "ES GEHT LOS!",
        time: "11:00 Uhr",
        location: "Pfarrkirche Mariä Himmelfahrt Terlan",
        address: "",
        description: "Liebe Gäste, bitte findet euch um 10:30 Uhr beim Dorfplatz vor der Pfarrkirche Mariä Himmelfahrt in Terlan ein. Ankunft der Braut geplant für...ja, wenn Petra dann halt soweit ist. 😉 Oje, ihr Weg führt direkt am Wieterer vorbei, d.h. es kann - sagen wir mal - sich etwas verzögern..., aber für einen letzten Monte al volo als unverheiratete Frau muss auf jeden Fall Zeit sein ;) "
      },
      {
        icon: "🍽️",
        title: "Essen & Trinken",
        time: "ab 18:00 Uhr",
        location: "Schloss Rosenblüte",
        address: "Schlossweg 45, 12345 Musterstadt",
        description: "Es wird ein köstliches Buffet geben, das keine Wünsche offen lässt."
      },
      {
        icon: "",
        title: "Kirchliche Trauung",
        time: "???",
        location: "???",
        address: "???",
        description: "Michi hat sich nach dem 'First Look' wieder ein wenig gesammelt und zieht nun gemeinsam mit den Gästen feierlich in die Kirche ein – ein aufregender Moment zwischen Vorfreude und Herzklopfen. \n\nPetra wird – ganz nach ihrem Herzenswunsch – von ihrem Tata in die Kirche geführt. Ein berührender Augenblick voller Stolz & Verbundenheit, der mehr als 1000 Worte. \n\nBlumenkinder bereiten den Weg mit zarten Blüten für das, was nun beginnt: ein gemeinsames Kapitel voller Glück! \n\nLiebe Gäste, um diese unvergesslichen Augenblicke ganz bewusst und ungestört genießen zu können, wird ein Fotograf alle Emotionen für uns und euch festhalten. Eure Handys und Kameras dürfen getrost in der Tasche bleiben, sodass eure Hände frei sind – sei es für ein Taschentuch 😉 oder um nach dem First Kiss zu applaudieren."
      }
    ],
    footerText: "💍 Wir freuen uns auf euch! 💍",
    fontSize: {
      introTitle: "text-2xl",
      introText: "text-lg",
      eventTitle: "text-2xl",
      eventTime: "text-lg",
      eventDescription: "text-base",
      footerText: "text-lg"
    }
  },
  gallery: {
    title: "Unsere Galerie",
    subtitle: "Momente, die wir für immer in unseren Herzen tragen",
    footerText: "♥ Mehr Bilder folgen nach dem großen Tag ♥",
    images: [
      { id: 1, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.38.jpeg', alt: 'Bild 1' },
      { id: 2, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.39.jpeg', alt: 'Bild 2' },
      { id: 3, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.40.jpeg', alt: 'Bild 3' },
      { id: 4, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.41.jpeg', alt: 'Bild 4' },
      { id: 5, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.42.jpeg', alt: 'Bild 5' },
      { id: 6, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.43.jpeg', alt: 'Bild 6' },
      { id: 7, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.44.jpeg', alt: 'Bild 7' },
      { id: 8, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.45.jpeg', alt: 'Bild 8' },
      { id: 9, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.46.jpeg', alt: 'Bild 9' },
      { id: 10, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.47.jpeg', alt: 'Bild 10' },
      { id: 11, src: '/imagespetramichi/WhatsApp Image 2026-02-20 at 13.11.48.jpeg', alt: 'Bild 11' }
    ],
    fontSize: {
      title: "text-4xl",
      subtitle: "text-lg",
      footerText: "text-2xl"
    }
  },
  footer: {
    names: "Petra & Michi",
    mainText: "Wir freuen uns auf diesen besonderen Tag mit euch!",
    subText: "...und auf's Feiern",
    copyright: "© 2026 Petra & Michi. Alle Rechte vorbehalten.",
    fontSize: {
      names: "text-4xl",
      mainText: "text-lg",
      subText: "text-sm",
      copyright: "text-xs"
    }
  },
  story: {
    title: "Unsere Story",
    subtitle: "oder besser gesagt: Sie kam - er sah - sie siegte!",
    introText: "Wir machen uns nichts vor: Der Anfang dieser Geschichte war vielleicht nicht ganz wie im Märchenbuch. Vor knapp 20 Jahren war Petra in Michis damaligem Lokal „Treffpunkt“ öfter zu Gast. Doch Damen, die rauchen, waren für ihn schon immer ein No-Go – und für Petra entsprach der „Schnösel“ Michi so gar nicht ihrem Beuteschema. Liebe auf den ersten Blick? Eher nicht.\n\nAls Michi dann Jahre im Algo Petra auf der Rolltreppe wiederentdeckte, war sein erster Gedanke – nun ja, sagen wir es dezent – nicht unbedingt Gentleman-like. Aber was soll man machen, wenn es einen plötzlich einfach erwischt? Und sind wir ehrlich: Bei Petra kann man schon mal den Kopf verlieren!\n\nWie praktisch, dass Petra mittlerweile bei Athesia, gleich gegenüber vom Come In, arbeitete. Und ganz nebenbei hatte sie in den letzten Jahren die Zigaretten gegen ihre kleine Sophia eingetauscht.\n\nNach wenigen Wochen – und einigen „zufälligen“ Treffen bei den Kartonmülltonnen – war klar: Das war mehr als nur ein Flirt. Es begann eine aufregende Zeit voller Leichtigkeit, Spontaneität und diesem besonderen Gefühl, einfach lebendig zu sein, ohne viel Schlaf zu brauchen. Spontane Motorradausflüge zum Gardasee, den Alltag auch mal ausblenden und stattdessen einfach den Moment genießen.\n\nPetra hatte weiß Gott keine einfache Zeit hinter sich. Umso schöner war es, zu sehen, wie sie Schritt für Schritt wieder aufblühte.\n\nUnd Michi? Der redete sich anfangs noch ein, man könne das Ganze ja langsam angehen. Ganz sicher würde er sich diesmal nicht Hals über Kopf in die nächste Beziehung stürzen…\nAber soll man sich wirklich gegen etwas wehren, das sich so verdammt richtig anfühlt?\n\nUnd als Michi schließlich Sophia kennenlernen durfte, wurde alles nur noch eindeutiger: Nicht nur Petra hatte ihm den Kopf verdreht – die kleine Maus hatte sein Herz im Sturm erobert. Spätestens als Sami irgendwann sagte: „So glücklich habe ich den Papi noch nie erlebt“, war klar, wohin die Reise geht. Und so öffnete Michi nicht nur sein Herz, sondern auch seine Haustür ganz weit – und Petra nistete sich nach und nach in Obermais ein.\n\nJa, apropos „einnisten“ …\n\nMachen wir einen kleinen Sprung in den Dezember 2022. Man spricht über dies und das, auch über Zukunftspläne. Auf die konkrete Frage, ob sich Michi noch Kinder wünsche, lautete seine Antwort damals ganz klar: „Naja, jetzt sofort sicher nicht. Schauen wir mal …“\nGut, dass so eine Schwangerschaft ja bekanntlich neun Monate dauert!\n\nEinige Schwangerschaftstests später – und Gott sei Dank des Ignorierens einer doch eher fragwürdigen Frauenärztin – war kurz vor dem Abflug nach Bali klar: Da fliegt ein blinder Passagier mit. Still und leise hatte er sich eingenistet. Und wir groß war die Überraschung, als sich nach der Rückkehr herausstellte, dass es nicht nur bei einem geblieben ist.\n\nTja, Michi war schon immer sehr effizient: Ein Schuss – zwei Treffer. 😄\n\nSeit 2023 ist die junge Familie komplett und Lara und Marie als im November 2024 Michi's Antrag folgte, ❤️",
    mainText: "Diese Seite kann mit persönlichen Erinnerungen, Fotos und Meilensteinen eurer gemeinsamen Reise gefüllt werden.",
    quote: "Schreiben Sie Ihre Geschichte - eine Geschichte of Liebe, Lachen und Abenteuer",
    backButtonText: "Zurück zur Startseite",
    fontSize: {
      title: "text-5xl",
      subtitle: "text-lg",
      introText: "text-lg",
      mainText: "text-base",
      quote: "text-lg",
      backButton: "text-lg"
    }
  }
}

