const fetch = (v) => {
    const C = 1000;
    if (v === 0) {
        return {
            v: 0,
<<<<<<< HEAD
            t: C * (v* 55 + 1)
=======
            t: C * (v * 5 + 10)
>>>>>>> 14e25c1 (feat: add feat1 -- AAAA feat)
        }
    }
    return {
        v: v + 10,
        t: C * (v + 10)
    }
}