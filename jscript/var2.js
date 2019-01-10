var journal = [];


function addEntry(squirrel) {
    var entry = {events: [], squirrel: squirrel};
    for (var i = 1; i < arguments.lenght; i++)
        entry.events.push(arguments[i]);
    journal.push(entry);
}
addEntry(true, "work", "tree", "pizza", "walk", "TV");

console.log(journal.length);