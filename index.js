const fetch = (v) => {
    const C = 1000;
    if (v === 0) {
        return {
            v: 0,
            t: C * v
        }
    }
    return {
        v: v + 10,
        t: C * (v + 10)
    }
}

// F1-1: Feat1 第一段（pipeline 初始化）
const pipInit = () => ({ ready: true })

// F1-2: Feat1 第二段（pipeline 执行）
const pipRun = (v) => fetch(v)