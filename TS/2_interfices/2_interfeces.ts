interface Rect{
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: 'ccc'
}

const rect3 = {} as Rect

interface RectWithArea extends Rect{
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '1',
    size: {
        width: 12,
        height: 12
    },
    getArea(): number{
        return this.size.width * this.size.height
    }
}

console.log(rect5.getArea())

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date()
    setTime(date: Date): void{
        this.time = date
    }
}

interface Styles {
    [hey: string]: string
    border: string
}

const css: Styles = {
    border: '1 px',
    marginTop: '2 px'
}