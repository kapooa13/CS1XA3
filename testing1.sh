#!/bin/bash
#TODO something blah blah in testing1.sh
#this is a test file
if [ -e ~/new_csv/html ] && [ -e ~/new_csv/rst ] && [ -e ~/new_csv/csv ]
then
rm -r ~/new_csv/
else
echo "sad face"
fi

mkdir -p ~/new_csv/csv
mkdir -p ~/new_csv/html   #TODO making directory for html
mkdir -p ~/new_csv/rst

if [ $# -eq 0 ]
then
echo "No Inputs!"
else
  for item in $@
  do
    find /Rdatasets -iname "$item*" -type f -print0 | while IFS= read -d $'\0' file
    do
      if grep -iq "income" "$file"
      then
        if [[ $file = *".csv" ]]
        then
        cp $file ~/new_csv/csv/
        elif [[ $file = *".rst" ]]
        then
        cp $file ~/new_csv/rst/
        elif [[ $file = *".html" ]]
        then
        cp $file ~/new_csv/html/
        else
        echo "not html or csv or rst"
        fi
      fi 
    done
  done
fi    #TODO closing if loop

