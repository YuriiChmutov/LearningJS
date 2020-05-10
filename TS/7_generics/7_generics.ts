const arrayOfNumbers: Array<number> = [1, 1 ,1 ]

function reverse<T>(array: T[]): T[]{
    return array.reverse()
}