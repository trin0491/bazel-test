#!/usr/bin/env bash
readonly bazel_bin=$(npm bin)/bazel
readonly bin=$(${bazel_bin} info bazel-bin)
readonly testlogs=$(${bazel_bin} info bazel-testlogs)

set -u -e -o pipefail

cd "$(dirname "$0")"
# basedir is the workspace root
readonly base_dir=$(pwd)/..
readonly dest_path="dist/install"

[[ -d "${base_dir}/${dest_path}" ]] || mkdir -p ${base_dir}/${dest_path}

for pkg in "core"
do
  pkg_dir="${bin}/packages/${pkg}/npm_package"
  dest_dir="${base_dir}/${dest_path}/${pkg}"
  if [[ -d ${pkg_dir} ]]
  then
    rm -rf ${dest_dir}
    cp -R ${pkg_dir} ${dest_dir}
    chmod -R u+w ${dest_dir}
  fi

  test_dir="${testlogs}/packages/${pkg}/src/a/test_chromium-local/test.outputs"
  dest_dir="${base_dir}/${dest_path}"
  if [[ -d ${test_dir} ]]
  then
    cp -R ${test_dir} ${dest_dir}
    chmod -R u+w ${dest_dir}
  fi
done
