workspace(
    name = "bazel_test",
    managed_directories = {
        "@npm": ["node_modules"],
        "@npm_subproject": ["subproject/node_modules"],
    },
)

# RAP https://github.com/bazelbuild/rules_nodejs
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "bc180118b9e1c7f2b74dc76a8f798d706fe9fc53470ef9296728267b4cd29441",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.30.2/rules_nodejs-0.30.2.tar.gz"],
)

http_archive(
    name = "io_bazel_rules_webtesting",
    sha256 = "f89ca8e91ac53b3c61da356c685bf03e927f23b97b086cc593db8edc088c143f",
    urls = ["http://localhost:3000/rules_webtesting-0.3.1.tar.gz"],
)

http_archive(
    name = "bazel_skylib",
    sha256 = "2c62d8cd4ab1e65c08647eb4afe38f51591f43f7f0885e7769832fa137633dcb",
    strip_prefix = "bazel-skylib-0.7.0",
    urls = ["http://localhost:3000/bazel-skylib-0.7.0.tar.gz"],
)

# see jdk.WORKSPACE
http_archive(
    name = "remote_java_tools_darwin",
    sha256 = "83abe9bbc2ed450410a32368ce18d6ba6713aa0626c7bff0436799108f2a8ce3",
    urls = [
        "http://localhost:3000/java_tools_javac11_darwin-v1.0.zip",
    ],
)

# see coverage.WORKSPACE
http_archive(
    name = "remote_coverage_tools",
    sha256 = "cc470e529fafb6165b5be3929ff2d99b38429b386ac100878687416603a67889",
    urls = [
        "http://localhost:3000/coverage_output_generator-v1.0.zip",
    ],
)

load("@build_bazel_rules_nodejs//:defs.bzl", "check_bazel_version", "node_repositories", "npm_install")

check_bazel_version(
    minimum_bazel_version = "0.26.0",
)

npm_install(
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json",
)

npm_install(
    name = "npm_subproject",
    package_json = "//subproject:package.json",
    package_lock_json = "//subproject:package-lock.json",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

# Load karma dependencies
load("@npm_bazel_karma//:package.bzl", "rules_karma_dependencies")

rules_karma_dependencies()

# Setup the rules_webtesting toolchain
load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")

web_test_repositories()

# Temporary work-around for https://github.com/angular/angular/issues/28681
# TODO(gregmagolan): go back to @io_bazel_rules_webtesting browser_repositories
load("//:browser_repositories.bzl", "browser_repositories")

browser_repositories()

# Setup the rules_typescript tooolchain
load("@npm_bazel_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()
