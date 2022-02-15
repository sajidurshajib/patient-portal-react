export const statusCheck = (res, list = []) => {
    const sts = res.status
    const msg = res.statusText

    let reply = { sts: 0, msg: '' }

    if (list.length !== 0) {
        list.forEach((item) => {
            if (item.sts === sts) {
                reply = { ...item }
            } else if (item.sts !== sts) {
                reply = { sts, msg }
            }
        })
    } else {
        reply = { sts, msg }
    }

    return reply
}
