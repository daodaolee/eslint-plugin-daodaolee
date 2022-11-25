# eslint-plugin-daodaolee

a lint for daodaolee

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-daodaolee`:

```sh
npm install eslint-plugin-daodaolee --save-dev
```

## Usage

Add `daodaolee` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "daodaolee/vue",
       // "daodaolee/react"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "daodaolee/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


