const numberArray: number[] = [1, 1, 2, 3]

const numberArray2: Array<number>= [1, 2, 4]

const contact: [string, number] = ['Yura', 1234]

function sayMyName(name: string): void{
    console.log(name)
}

sayMyName(contact[0])

function throwError(message: string): never{    
            throw new Error(message)    
}

type Login = string
const login: Login = 'admin'
