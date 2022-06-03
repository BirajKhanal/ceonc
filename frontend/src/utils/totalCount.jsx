export const totalCount = (data, type) => {
    let send = 0
    data.map((items) => {
        if (type === "bc") {
            send = items["No of Onsite Clinical Coaching Mentoring Conducted(BC/BEONC)"] + send
        } else if (type === "ceonc") {
            send = items["No of Onsite Clinical Coaching Mentoring Conducted(CEONC)"] + send
        }
        return null
    })
    return send
}