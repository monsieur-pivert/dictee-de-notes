NombreNotesDictée   = 5
DuréePause          = 100
DuréeNote           = 850

NotesPossibles = [
    Note.C, 
    Note.D, 
    Note.E, 
    Note.F, 
    Note.G, 
    Note.A, 
    Note.B,
    Note.C5,
    Note.D5,
    Note.E5,
    Note.F5,
    Note.G5,
    ]

NomsNotesPossibles = [
    "Do",
    "Re",
    "Mi",
    "Fa",
    "Sol",
    "La",
    "Si",
    "Do5",
    "Re5",
    "Mi5",
    "Fa5",
    "Sol5"
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
