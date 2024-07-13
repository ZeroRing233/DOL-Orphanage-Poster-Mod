function robinRoomNoteContion() {
    let noteList = ['school', 'sleep', 'beach', 'park']
    return V.robinmissing === 0 && V.christmas_robin_lewd !== 1 &&
        noteList.includes(T.robin_location) && V.options.robinNote
}
window.robinRoomNoteContion = robinRoomNoteContion;