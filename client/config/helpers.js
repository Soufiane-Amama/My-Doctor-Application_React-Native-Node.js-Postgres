export const transformName = name => {
    const userName = name.split(" ")
    return userName.map(letter => {
        letter.toUpperCase()
        return letter[0]
    }).join(" ");
}