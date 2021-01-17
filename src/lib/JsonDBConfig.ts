import * as path from "path";
import * as FS from 'fs'

export interface JsonDBConfig {
  filename: string,
  saveOnPush: boolean,
  humanReadable: boolean,
  separator: string,
  saveFn : Function
}

export class Config implements JsonDBConfig {
  filename: string
  humanReadable: boolean
  saveOnPush: boolean
  separator: string
  saveFn : Function


  constructor(filename: string, saveOnPush: boolean = true, humanReadable: boolean = false, separator: string = '/', saveFn: Function = (fn: string, data: string) => FS.writeFileSync(fn, data, 'utf8') ) {
    this.filename = filename

    // Force json if no extension
    if (path.extname(filename) === "") {
      this.filename += ".json"
    }

    this.humanReadable = humanReadable
    this.saveOnPush = saveOnPush
    this.separator = separator
    this.saveFn = saveFn;
  }
}