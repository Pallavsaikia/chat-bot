# Zitti-chatbot

Zitti has designed with extensbility in mind in nodejs 18
## Features

- Add custom Behaviour that would trigger based on particular instruction input.
- Add Memory at behaviour or global level to keep track of past data
- Add custom process i.e how the bot responds to particular instruction
- Can extend the core bot feature with custom attributes to create your own flavour of zitti or any other bot.


## Installation

Has only been tested in nodejs v 18.12.1. You would need to install nodejs on your system from the link  https://nodejs.org/en/download
After installing nodejs cd into root dir of the project
```sh
cd ZITTI
```
Install all dependency with the following command
```nodejs
npm install
```

## How to run
Run it using the prod command
```nodejs
npm run prod
```
After that you can either run it conversation mode or select a file to run put instructions all together.
> Note: Each `instruction` on file should be a `new line`.

## Memory
You can create your own memory for each behaviour set with the following LOC
```typescript
export interface GreetingsMemory extends Memory {
    data: string[]
}
```
Here the interface is extending inbuilt Memory interface.
> Note: Data can be of `any type` as you 

## Behaviour
You can create your own set of behaviour for the bot ti give it your own flavour.
> Note: Each `Behaviour` will have their own `regular-expression` that matches the instruction input

```typescript
export class GreetingsBehaviour implements Behaviour<GreetingsMemory> {
    memory: string[];
    regex: RegExp
    constructor() {
        this.memory = []
        this.regex = /Hey.*? How are you/i
    }

    processInstruction(instruction: string): string {
        return "Hello, I am doing great."
    }
}

```
Each Behaviour can have their own memory type or they can share a single memory
```typescript
const greetingsList: string[] = []
const  greetingsListMemory: GreetingsMemory = {
    data: greetingsList
}
new GreetingsBehaviour(greetingsListMemory)
new WaveBehaviour(greetingsListMemory)
```
you can then assign the memory to the extended behaviour class
```typescript
constructor(greetingsListMemory: GreetingsMemory) {
        this.memory = greetingsListMemory.data
}
```
## Zitti
To use zitti you have to initialize it with behaviours pushed into it
```typescript
export const custombehaviour = [
    new GreetingsBehaviour(),
    new WeatherBehaviour(),
    new RoomCleanBehaviour(),
    new FetchNewsBehaviour(),
    new ShoppingListBehaviour(shoppingListMemory),
    new ReadShoppingListBehaviour(shoppingListMemory)
]

const behaviour: Behaviour<Memory>[] = []
const zitti = new Zitti(behaviour)
zitti.pushBehaviour(...custombehaviour)
}
```
After initializing the zitti you have two more steps to get it to respond

Decode instruction:
```typescript
const decodedInstruction = zitti.decodeInstruction(instruction)
```
Decode instruction breaks the inputted instruction and tries to match with the appropriate behaviour

Process instruction:
```typescript
const response = zitti.processInstruction(decodedInstruction)
```
Process instruction executes the necessary steps assigned to the decoded behaviour
> Note: If zitti is unable to decode an instruction set it will return a `default behaviour` set where it responds with "hmm.. i dont know"

## Extensibility
You can extend the core Bot Feature and create your own flavour of zitti using the following
```typescript
export class Billy extends Bot {
    behaviour: Behaviour<Memory>[];
    constructor(behaviour: Behaviour<Memory>[]) {
        super()
        this.behaviour = behaviour
    }

}
```


## License

MIT


