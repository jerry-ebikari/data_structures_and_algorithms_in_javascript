const getInitials = (name) => (
    name
      .trim()
      .replace(/\s+/, " ")
      .split(" ")
      .map(word => word[0].toUpperCase())
      .join(".")
)

console.log(getInitials(" jerry  ebikari needam"));
console.log(getInitials("tari odubo"));