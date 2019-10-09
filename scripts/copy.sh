#!/usr/bin/env bash
readonly bazel_bin=$(npm bin)/bazel
readonly bin=$(${bazel_bin} info bazel-bin)

set -u -e -o pipefail

cd "$(dirname "$0")"
# basedir is the workspace root
readonly base_dir=$(pwd)/..
readonly dest_path="dist/install"

[[ -d "${base_dir}/${dest_path}" ]] || mkdir -p ${base_dir}/${dest_path}

for pkg in "core"
do
  src_dir="${bin}/packages/${pkg}/npm_package"
  dest_dir="${base_dir}/${dest_path}/${pkg}"
  if [[ -d ${src_dir} ]]
  then
    rm -rf ${dest_dir}
    cp -R ${src_dir} ${dest_dir}
    chmod -R u+w ${dest_dir}
  fi
done
