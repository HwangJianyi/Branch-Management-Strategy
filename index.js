const fetch = (v) => {
    const C = 1000;
    if (v === 0) {
        return {
            v: v, // BF1: BUG1 fix - 零值分支应返回原值
            t: 0
        }
    }
    return {
        v: v + 10,
        t: C * (v + 10)
    }
}