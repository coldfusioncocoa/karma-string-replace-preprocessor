# karma-string-replace-preprocessor
> A preprocessor for Karma that does string replacement on module content on the fly.

## Installation

The easiest way is to keep `karma-string-replace-preprocessor` as a devDependency.
You can simple do it by:
```bash
npm install karma-string-replace-preprocessor --save-dev
```

## Configuration

Following code shows the default configuration

```js
// karma.conf.js
module.exports = function(config) {
  config.set({

    preprocessors: {
      'src/**/*.js': [ 'stringreplace' ]
    },

	stringReplacePreprocessor: {
		patterns: [
			{ match: 'stringToReplaceOne', replacement: 'This string has been replace with number one.' },
			{ match: 'stringToReplaceTwo', replacement: 'This string has been replace with number two.' }
		]
	},

	...

  })
}
```

----

## Karma Plugins

See the [Karma Documentation] for additional details on custom - in this case, preprocessor - plugin development.

[Karma Documentation]: https://karma-runner.github.io/latest/dev/plugins.html

## Dependency Injection in Karma

Dependency Injection in Karma is handled by [Node-DI], but that library is deprecated. See the author's readme notes in the repo. Just something to be aware of as this dependency may change in Karma in the future. And, it defines `$inject`, which is something on which this plugin relies.

[Node-DI]: https://github.com/vojtajina/node-di

## Logger

Logger is another dependency of Karma. See [log4js]

[log4js]: https://github.com/log4js-node/log4js-node

----

## License Info
[MIT License](./LICENSE)
