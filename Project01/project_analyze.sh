#!/bin/bash
#./bash_tutor.sh
chmod a+x ./bash_tutor.sh

#PS3:The value of this parameter is used as a prompt for the select command used below
PS3=$'\n'">>> Enter the number to call corresponding function: "

cd ..

function bashtutor {
    # This function calls the bash_tutor.sh script
    ./Project01/bash_tutor.sh
}

function todo {

    # Function implements todo log by searching for files with "#TODO" using grep
    # Excludes project_analyze.sh(current file) and README.md

    rm -f todo.log
    touch todo.log
    grep -r --exclude=project_analyze.sh --exclude=README.md "#TODO" | while read -r line
    do
    echo "$line" >> todo.log
done
}

function deltempfile {

    # Function deletes untracked temporary files:
    #     Finds all untracked files and greps for ".tmp" extension

    git ls-files --exclude-standard --others | grep -E ".tmp$" | while read -r line
    do
    rm "$line"
done
}

function compile_errlog {

    # Function implements Compile Error Log feature

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


function filecount {

    # Function implements File Count feature

    #     Uses find to look for all files ending with the stated extension
    #     Corresponding output is piped count the lines == number of files

    html_count=$(find . -name "*.html" -type f | wc -l)
    js_count=$(find . -name "*.js" -type f | wc -l)
    css_count=$(find . -name "*.css" -type f | wc -l)
    py_count=$(find . -name "*.py" -type f | wc -l)
    hs_count=$(find . -name "*.hs" -type f | wc -l)
    sh_count=$(find . -name "*.sh" -type f | wc -l)

    echo "<<< HTML: $html_count"
    echo "<<< Javascript: $js_count"
    echo "<<< CSS: $css_count"
    echo "<<< Python: $py_count"
    echo "<<< Haskell: $hs_count"
    echo "<<< Bash: $sh_count"
}


echo "<<< --------"
echo "<<< You are currently running project_analyze.sh"
echo "<<< --------"

# Implementation of User Input via select-case statements

select answer in TODO_log Delete_temp_files Compile_error_log File_count Bash_tutor Exit
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
            git ls-files --exclude-standard --others | grep ".tmp$"
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
        File_count)
            echo ""
            echo "<<< --------"
            echo "<<< File count:"
            echo "<<< ----"
            filecount
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
        Bash_tutor)
            echo ""
            bashtutor
            echo "<<< ----"
            ;;
        *)
            echo ""
            echo "<<< --------"
            echo "<<< Error: Please try again"
            echo "<<< --------"
            ;;
    esac
done
