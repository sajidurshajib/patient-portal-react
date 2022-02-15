export const PatGetStorage = (key) => {
    let data = localStorage.getItem(key)
    if (data) {
        return data
    } else {
        return false
    }
}

export const PatSetStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const PatDefStorage = (key, def) => {
    if (PatGetStorage(key) === false) {
        PatSetStorage(key, def)
    }
    return JSON.parse(PatGetStorage(key))
}
