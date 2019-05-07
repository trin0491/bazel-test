workspace(name = "bazel_test")

# RAP https://github.com/bazelbuild/rules_nodejs
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "4c702ffeeab2d24dd4101601b6d27cf582d2e0d4cdc3abefddd4834664669b6b",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.28.0/rules_nodejs-0.28.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:defs.bzl", "check_bazel_version", "npm_install")

check_bazel_version("0.24.1")

npm_install(
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

# Setup TypeScript toolchain
# RAP https://www.npmjs.com/package/@bazel/typescript
load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

ts_setup_workspace()

#RAP https://www.npmjs.com/package/@bazel/karma
load("@npm_bazel_karma//:package.bzl", "rules_karma_dependencies")

rules_karma_dependencies()

# Setup web testing, choose browsers we can test on
load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")

web_test_repositories()

# Temporary work-around for https://github.com/angular/angular/issues/28681
# TODO(gregmagolan): go back to @io_bazel_rules_webtesting browser_repositories
load("@npm_bazel_karma//:browser_repositories.bzl", "browser_repositories")

browser_repositories()
