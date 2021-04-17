export function delay(time: number): Promise<void> {
    return new Promise<void>((res, _) => {
        setTimeout(() => { res() }, time)
    })
}