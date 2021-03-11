import { JsonDecoder } from 'ts.data.json'

export type Expect<msg> = {
  type: 'json'
  toMsg: (a: any) => msg
  decoder: JsonDecoder.Decoder<any>
}

export const expectJson = <msg, a>(
  toMsg: (a: a) => msg,
  decoder: JsonDecoder.Decoder<a>
): Expect<msg> => {
  return { type: 'json', toMsg, decoder }
}
