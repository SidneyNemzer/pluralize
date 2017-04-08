# pluralize
Simple Javascript library that helps write english sentences with conditional plural nouns

## Installation

```bash
git clone https://github.com/SidneyNemzer/pluralize.git && cd pluralize && npm install && cd ..
```

You should run this command while you're in your project's root directory

The command copies the files from this repo, opens the directory it just created, then uses NPM to install this repo's dependencies.

(If there's enough demand I'll add this to NPM as a package)

## Examples

```javascript
// Import with Node's `require`
const pluralize = require('./pluralize')

pluralize('I have {{ number }} {{ word }}', 1000, 'repository', 'repositories')
// -> "I have 1000 repositories"

pluralize('There {{ is_are }} {{ number }} CSS {{ word }}', 1, 'file')
// -> "There is 1 CSS file"
```

## Usage

### `pluralize(template, number, word, pluralWord)`

#### `template` (string)

The scentence to embed the number and word into. Use curly brackets to tell pluralize where to put the number, word, and an "is" or "are". All of these are optional (although this argument itself is *not* optional).

Example: `'There {{ is_are }} {{ number }} CSS {{ word }}'`

#### `number` (number)

This is the number that will be used to determine if the singular or plural word should be used

#### `word` (string)

The singular version of the word

#### `pluarlWord` (string) (optional)

The plural version of the word. If not provided, then `word` is automatically pluralized by adding an `"s"` to the end.
