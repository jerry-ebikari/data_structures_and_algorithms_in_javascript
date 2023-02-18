



function getInitials(name) {
    return name
            .trim()
            .replace(/\s+/g, " ")
            .replace(/(?<=[^\s])./g, "")
            .toUpperCase()
            .replace(/(.)(?=.)/g, "$1.");
}

console.log(getInitials(" jerry  ebikari needam"));
console.log(getInitials("tari odubo"));