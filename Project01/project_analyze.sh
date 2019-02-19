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
    git ls-files --exclude-standard --others | grep -E ".tmp$" | while read -r line
    do
    rm "$line"
done
}

function compile_errlog {
    rm -f compile_fail.log
    touch compile_fail.log

    touch haskell_fail.hslog

    touch python_fail.pylog
    c="c"
    #the above line is to help in deleting the pyc file created when py_compile runs

    #Haskell Files
    find . -name "*.hs" -type f -print0 | while IFS= read -d $'\0' file
    do
    if ghc -v "$file" |& grep -q "not linking"; then
    echo "$file" >> haskell_fail.hslog
    fi
done
    if grep -q "" haskell_fail.hslog; then
    echo "The following haskell file(s) failed to compile:" >> compile_fail.log
    cat haskell_fail.hslog >> compile_fail.log
    fi
    rm -f haskell_fail.hslog

    #Python Files
    find . -name "*.py" -type f -print0 | while IFS= read -d $'\0' file
    do
    if python -m py_compile "$file" |& grep -q ""; then
    echo "$file" >> python_fail.pylog
    else
    rm "$file$c"
    fi
done
    if grep -q "" python_fail.pylog; then
    echo "The following python file(s) failed to compile:" >> compile_fail.log
    cat python_fail.pylog >> compile_fail.log
    fi
    rm -f python_fail.pylog
}



echo "<<< --------"
echo "<<< You are currently running project_analyze.sh"
echo "<<< --------"

select answer in TODO_log Delete_temp_files Compile_error_log Exit
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
            if git ls-files --exclude-standard --others | grep -E ".tmp$"; then
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
        Compile_error_log)
            compile_errlog
            echo ""
            echo "<<< --------"
            echo "<<< Compile error log has been executed"
            echo "<<< --------"
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
