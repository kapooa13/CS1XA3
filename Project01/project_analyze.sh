#!/bin/bash

#PS3:The value of this parameter is used as a prompt for the select command used below
PS3="Enter the number to call corresponding function: "

cd ..
if [ -e todo.log ]
then
    rm todo.log
    touch todo.log
else
    touch todo.log
fi

function todo {
    grep -r --exclude=project_analyze.sh "#TODO" | while read -r line
    do
    echo "$line" >> todo.log
done
}
echo "--------"
echo "You are currently running project_analyze.sh"
echo "--------"
select answer in TODO_log Exit
do
    case $answer in
        TODO_log)
            echo "--------"
            echo "Executing TODO log"
            echo "--------"
            todo
            ;;
        Exit)
            echo "--------"
            echo "Exiting the script"
            echo "--------"
            exit 0
            ;;
        *)
            echo "--------"
            echo "Error: Please try again"
            echo "--------"
            ;;
    esac
done
