#!/bin/bash

# Get the list of changed files
changed_files=$(git diff --name-only HEAD~1..HEAD)

# Declare an array to track unique block names
declare -A block_names

# Loop through the changed files
for file in $changed_files; do
  # Check if the file is inside the 'src/app/block/' directory
  if [[ $file =~ ^src/app/block/ ]]; then
    # Extract the block name (folder name under block directory)
    block_name=$(basename $(dirname $file))

    # If block name is not already in the array, add it and echo a message
    if [[ -z "${block_names[$block_name]}" ]]; then
      block_names[$block_name]=1
      echo "🚀 A new block/component has been added or modified: $block_name"
    fi
  fi
done
