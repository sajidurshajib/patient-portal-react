export const toMonthNameShort = (monthNumber) => {
    const date = new Date()
    date.setMonth(monthNumber - 1)

    return date.toLocaleString('en-US', {
        month: 'short',
    })
}

export const toMonthNameLong = (monthNumber) => {
    const date = new Date()
    date.setMonth(monthNumber - 1)

    return date.toLocaleString('en-US', {
        month: 'long',
    })
}

function twoDigits(num) {
    return num.toString().padStart(2, '0')
}
function formatDate(date) {
    return (
        [date.getFullYear(), twoDigits(date.getMonth() + 1), twoDigits(date.getDate())].join('-') +
        'T' +
        [twoDigits(date.getHours()), twoDigits(date.getMinutes())].join(':')
    )
}

export const dateTime = formatDate(new Date())
