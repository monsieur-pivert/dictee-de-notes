let NombreNotesDictée = 5
let DuréePause = 100
let DuréeNote = 850
let NotesPossibles = [Note.B3, Note.C, Note.D, Note.E, Note.F, Note.G, Note.A, Note.B, Note.C5, Note.D5, Note.E5, Note.F5, Note.G5]
let NomsNotesPossibles = ["Si3", "Do", "Re", "Mi", "Fa", "Sol", "La", "Si", "Do5", "Re5", "Mi5", "Fa5", "Sol5"]
let NotesDictée = notesAuHasard(NotesPossibles)
function notesAuHasard(listeNotes: number[]): number[] {
    let indexNote: number;
    let notes : number[] = []
    for (let i = 0; i < NombreNotesDictée; i++) {
        indexNote = randint(0, NotesPossibles.length - 1)
        notes.push(indexNote)
    }
    return notes
}

function afficherPremièreNote() {
    let indexPremièreNote = NotesDictée[0]
    let premièreNote = NomsNotesPossibles[indexPremièreNote]
    basic.showString(premièreNote)
}

input.onButtonPressed(Button.A, function jouerDictéeNote() {
    let noteAJouer: number;
    afficherPremièreNote()
    for (let note of NotesDictée) {
        noteAJouer = NotesPossibles[note]
        music.playTone(noteAJouer, DuréeNote)
        basic.pause(DuréePause)
    }
})
input.onButtonPressed(Button.B, function afficherDictéeNote() {
    for (let note of NotesDictée) {
        basic.showString(NomsNotesPossibles[note])
    }
})