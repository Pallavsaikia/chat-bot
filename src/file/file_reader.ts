import readline from 'readline'
import fs from 'fs'

export function readFileLineByLine(file: string, fn: (fileexist: boolean, line: string) => void) {
    if (fs.existsSync(file)) {
        var lineReader = readline.createInterface({
            input: fs.createReadStream(file)
        });

        lineReader.on('line', function (line) {
            fn(true, line)
        });

        lineReader.on('close', function () {
            
        });
        return true
    } else {
        fn(false, "")
    }


}
