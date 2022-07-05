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

function padTo2Digits(num) {
    return num.toString().padStart(2, '0')
}
function formatDate(date) {
    return (
        [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join('-') +
        'T' +
        [padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes())].join(':')
    )
}

export const dateTime = formatDate(new Date())
