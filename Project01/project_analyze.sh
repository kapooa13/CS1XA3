#!/bin/bash

#PS3:The value of this parameter is used as a prompt for the select command used below
PS3=$'\n'">>> Enter the number to call corresponding function: "

cd ..


function todo {
    rm -f todo.log
    touch todo.log
    grep -r --exclude=project_analyze.sh --exclude=README.md "#TODO" | while read -r line
    do
    echo "$line" >> todo.log
done
}

function deltempfile {
    git ls-files --exclude-standard --others | grep ".tmp" | while read -r line
    do
    rm "$line"
done
}

echo "<<< --------"
echo "<<< You are currently running project_analyze.sh"
echo "<<< --------"

select answer in TODO_log Delete_temp_files Exit
do
    case $answer in
        TODO_log)
            echo ""
            echo "<<< --------"
            echo "<<< Function TODO log has been executed"
            echo "<<< --------"
            todo
            ;;
        Delete_temp_files)
            if git ls-files --exclude-standard --others | grep ".tmp"; then
            echo ""
            echo "<<< --------"
            echo "<<< Deleting all untracked temporary files"
            echo "<<< ----"
            echo "<<< The following file(s) have been deleted"
            echo ""
            git ls-files --exclude-standard --others | grep ".tmp"
            echo ""
            echo "<<< --------"
            deltempfile
            else
            echo ""
            echo "<<< --------"
            echo "<<< There are no untracked temporary files to be deleted"
            echo "<<< --------"
            fi
            ;;
        Exit)
            echo ""
            echo "<<< --------"
            echo "<<< Exiting the script"
            echo "<<< --------"
            echo ""
            exit 0
            ;;
        *)
            echo ""
            echo "<<< --------"
            echo "<<< Error: Please try again"
            echo "<<< --------"
            ;;
    esac
done
