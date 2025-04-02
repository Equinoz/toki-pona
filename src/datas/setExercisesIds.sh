#!/bin/bash

fileName="exercises.ts"
tmpFile="tmp.txt"

if [ -e $tmpFile ]
then
  rm $tmpFile
fi

oldIFS=$IFS
IFS=$'\n'
pattern='( \{ id: )[0-9]+(, .*)'

i=0
for line in $(<$fileName)
do
  if [[ $line =~ $pattern ]]
  then
    ((i++))
    echo ${BASH_REMATCH[1]}$i${BASH_REMATCH[2]} >> $tmpFile
  else
    echo $line >> $tmpFile
  fi
done

IFS=$oldIFS

mv $tmpFile $fileName
