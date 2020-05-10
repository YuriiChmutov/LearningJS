class Typescript {
    version: string

    constructor(version: string){
        this.version = version
    }

    info(name: string){
        return `[${name}]: version is ${this.version}`
    }
}

const t = new Typescript('111')

console.log(t.info('11'))
