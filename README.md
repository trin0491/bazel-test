# bazel-test

## Caching

In order to clean everything with the exception of the cache directory and shudown daemon:

```shell script
npx bazel clean --expunge
```

## Unit tests

The following executes all the tests in parallel with a headless browser:

```shell script
npm test
```

The following watches source file for changes and then builds and runs tests in headless browser

```shell script
npm run watch:test
```

The following will launch browser in order to write and debug tests

```shell script
npx bazel run //packages/core:test
```