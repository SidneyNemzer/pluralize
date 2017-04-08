const _ = require('underscore')

function pluralize(template, number, singluar, plural) {
  if (typeof template != 'string') {
    throw new Error("Invalid arguments ('template' should be a string)")
  }
  template = _.template(template, {
    interpolate: /{{([^}]+)}}/g
  })

  if (typeof number != 'number') {
    throw new Error("Invalid arguments ('number' should be a number)")
  }

  if (typeof singluar != 'string') {
    throw new Error("Invalid arguments ('singular' should be a string) )")
  }

  if (typeof plural != 'string') {
    plural = singluar + 's'
  }

  return template({
    is_are: number == 1 ? 'is' : 'are',
    number: number,
    word: number == 1 ? singluar : plural
  })
}

module.exports = pluralize