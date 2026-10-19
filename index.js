const fetch = (v) => {
    const C = 1000;
    if (v === 0) {
        return {
            v: 0,
            t: (C /100) * v
        }
    }
    return {
        v: v + 10,
        t: C * (v + 10)
    }
}