convertJsFilesToMjsFiles()
{
  find ./dist -name "*.js" -exec bash -c 'mv "$1" "${1%.js}".mjs' - '{}' \;
}

getAllMjsFiles()
{
  find ./dist -name *.mjs -type f
}

replaceImportsWithMjsImports()
{
  # find ./dist -name *.mjs -type f | xargs perl -i -p -e "s/from ['\"]\.\/([\w\/\-\_]+)['\"];/from '.\/\1.mjs';/gm"

  importFilePathRegex="from ['\"]\.\/([\w\/\-\_]+)['\"];"
  addMjsExtensionReplace="from '.\/\1.mjs';"

  perlReplaceArg="s/$importFilePathRegex/$addMjsExtensionReplace/gm"

  xargs perl -i -p -e "$perlReplaceArg"
}

convertProjectToMjs()
{
  convertJsFilesToMjsFiles && getAllMjsFiles | replaceImportsWithMjsImports
}

convertProjectToMjs
