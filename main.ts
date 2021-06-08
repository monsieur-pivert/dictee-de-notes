let NombreNotesDictée = 5
let DuréePause = 100
let DuréeNote = 850
let IntervalleMaxi = 6
let NotesPossibles = [Note.C, Note.CSharp, Note.D, Note.Eb, Note.E, Note.F, Note.FSharp, Note.G, Note.GSharp, Note.A, Note.Bb, Note.B, Note.C5, Note.CSharp5, Note.D5, Note.Eb5, Note.E5, Note.F5, Note.FSharp5, Note.G5, Note.GSharp5]
let NomsNotesPossibles = ["Do", "Do#", "Re", "MiB", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "SiB", "Si", "Do5", "Do#5", "Re5", "MiB5", "Mi5", "Fa5", "Fa#5", "Sol5", "Sol#5"]
let NotesDictée = notesAuHasard(NotesPossibles)
function notesAuHasard(listeNotes: number[]): number[] {
    let indexNote: number;
    let intervalle: number;
    let notes : number[] = []
    let indexNotePrécédente = randint(0, NotesPossibles.length - 1)
    for (let i = 0; i < NombreNotesDictée; i++) {
        while (true) {
            indexNote = randint(0, NotesPossibles.length - 1)
            intervalle = Math.abs(indexNote - indexNotePrécédente)
            if (intervalle <= IntervalleMaxi) {
                break
            }
            
        }
        notes.push(indexNote)
        indexNotePrécédente = indexNote
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
