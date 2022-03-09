export const statusCheck = (res, list = []) => {
    const sts = res.status
    const msg = res.statusText

    let reply = { sts: 0, msg: '' }

    if (list.length !== 0) {
        list.every((item) => {
            if (item.sts === sts) {
                reply = { ...item }
                return false
            } else if (item.sts !== sts) {
                reply = { sts, msg }
                return true
            }
            return true
        })
    } else {
        reply = { sts, msg }
    }

    return reply
}
