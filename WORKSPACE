workspace(
    name = "bazel_test",
    managed_directories = {
        "@npm": ["node_modules"],
        "@npm_core": ["packages/core/node_modules"],
        "@npm_ui": ["packages/ui/node_modules"],
    },
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "ad4be2c6f40f5af70c7edf294955f9d9a0222c8e2756109731b25f79ea2ccea0",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.38.3/rules_nodejs-0.38.3.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "check_bazel_version", "node_repositories", "npm_install")

check_bazel_version(
    minimum_bazel_version = "0.29.0",
)

npm_install(
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json",
)

npm_install(
    name = "npm_core",
    package_json = "//packages/core:package.json",
    package_lock_json = "//packages/core:package-lock.json",
)

npm_install(
    name = "npm_ui",
    package_json = "//packages/ui:package.json",
    package_lock_json = "//packages/ui:package-lock.json",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

# Load karma dependencies
load("@npm_bazel_karma//:package.bzl", "npm_bazel_karma_dependencies")

npm_bazel_karma_dependencies()

# Setup the rules_webtesting toolchain
load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")

web_test_repositories()

load("@io_bazel_rules_webtesting//web/versioned:browsers-0.3.2.bzl", "browser_repositories")

browser_repositories(
    chromium = True,
)

# Setup the rules_typescript tooolchain
load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

ts_setup_workspace()
