import { Sandbox, sandbox } from '../browser'
import { Html, button, div, h1, p, span, text } from '../html'
import { classNames, onClick } from '../html/attributes'

type Msg = 'increment' | 'decrement'
type Model = number

const init = () => 0

const update = (model: Model, msg: Msg) => {
  switch (msg) {
    case 'increment':
      return model + 1
    case 'decrement':
      return model - 1
  }
}

const view = (model: Model): Html<Msg> =>
  div(
    [classNames('container')],
    [
      h1([], [text('Count stuff with Maple!')]),
      div([], [p([], [text('Count: '), span([], [text(model.toString())])])]),
      div(
        [],
        [
          button([onClick('decrement')], [text('Decrement')]),
          button([onClick('increment')], [text('Increment')])
        ]
      )
    ]
  )

export default sandbox({
  init: init,
  update: update,
  view: view
})
