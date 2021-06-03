NombreNotesDictée   = 5
DuréePause          = 100
DuréeNote           = 850

NotesPossibles = [
    Note.C,
    Note.CSHARP,
    Note.D,
    Note.EB,
    Note.E,
    Note.F,
    Note.FSHARP,
    Note.G,
    Note.GSHARP,
    Note.A,
    Note.BB,
    Note.B,
    Note.C5,
    Note.CSHARP5,
    Note.D5,
    Note.EB5,
    Note.E5,
    Note.F5,
    Note.FSHARP5,
    Note.GSHARP5
    ]

NomsNotesPossibles = [
    "Do",
    "Re",
    "MiB",
    "Mi",
    "Fa",
    "Fa#",
    "Sol",
    "Sol#",
    "La",
    "SiB",
    "Si",
    "Do5",
    "Do#5",
    "Re5",
    "MiB5",
    "Mi5",
    "Fa5",
    "Fa#5",
    "Sol5",
    "Sol#5",
]

NotesDictée : List[number] = notesAuHasard(NotesPossibles)

def notesAuHasard(listeNotes):
    notes : List[number] = []
    for i in range(NombreNotesDictée):
        indexNote : number = randint(0, NotesPossibles.length - 1)
        notes.append(indexNote)
    return notes

def afficherDictéeNote() -> void :
    for note in NotesDictée:
        basic.show_string(NomsNotesPossibles[note])

def afficherPremièreNote():
    indexPremièreNote : Number = NotesDictée[0]
    premièreNote : String = NomsNotesPossibles[indexPremièreNote]
    basic.show_string(premièreNote)

def jouerDictéeNote() -> void :
    afficherPremièreNote()
    for note in NotesDictée:
        noteAJouer : Note = NotesPossibles[note]
        music.play_tone(noteAJouer, DuréeNote)
        basic.pause(DuréePause)

input.on_button_pressed(Button.A, jouerDictéeNote)
input.on_button_pressed(Button.B, afficherDictéeNote)
