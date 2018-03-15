// buildConstantEnum
//
// Takes an array of strings, transforms it into an object with identical keys
// and values. Then uses new Proxy(target, handler) to wrap it into throwing
// TypeError for unknown property access.
//
// No wrapping happens if Proxy is not available.
//
// # Examples
//
//     node> var states = buildConstantEnum('FOO', 'BAR')
//     node> states.FOO
//       'FOO'
//     node> states.BAR
//       'BAR'
//     node> states.BAZ
//       TypeError: No such value BAZ in {FOO, BAR} enum
//
const root = this || global

function buildActionConstantHandler (values) {
  return {
    get (target, name) {
      if (name in target) {
        return target[name]
      }
      if (typeof name === 'symbol') {
        return
      }
      switch (name) {
        case 'inspect':
          return
      }
      throw new TypeError(`No such property ${name} in ${this.valueOf()} enum`)
    },
    toString () {
      return `{${values.join(', ')}}`
    },
    valueOf () {
      return this.toString()
    }
  }
}

export function buildConstant (target) {
  if (root.Proxy) {
    return new Proxy(target, buildActionConstantHandler(Object.keys(target)))
  }
  return target
}

export function stringArrayToStringObject (...values) {
  const target = {}
  values.forEach(val => (target[val] = val))
  return target
}

export function buildNamespacedActions (namespacedAction) {
  return names => buildConstant(
    names.reduce((acc, name) => ({
      ...acc,
      [name]: namespacedAction(name)
    }), {})
  )
}
