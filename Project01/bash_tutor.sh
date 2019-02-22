#!/bin/bash

echo -e "\n============================================================"
echo "                  Welcome to the Bash Tutor"
echo "============================================================"

cd ~/
rm -rf bash_tutor
mkdir -p bash_tutor
cd bash_tutor
touch sample.txt
echo 'its 2:24 am and I just wanna finish this project' >> sample.txt
cd ..

echo ""
echo "    Bash is a Unix shell and command language written"
echo "    by Brian Fox for the GNU Project as a free software"
echo "    replacement for the Bourne shell. It has been widely"
echo -e "    as the default login shell for most Linux distributions.\n"

echo "    This tutor will guide you through the most commonly"
echo -e "    used commands in bash. Let us begin!\n"


echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo -e "                       Lesson 1.0\n"
echo -e "    NAME\n    ls - list directory contents\n"
echo -e "    DESCRIPTION\n    List information about the FILEs (the current directory by default)\n"
echo -e "    INSTRUCTIONS\n    Try typing in the command to figure out what it does.\n    Once you're done figuring it out, type 'next_lesson' to move on to the next lesson.\n"

tur="turing@machine:"
dolla="$"
dirvar="$tur$(pwd)$dolla "
while read -p "$dirvar" cmd
do
    case "$cmd" in
        ls)
            ls
            ;;
        next_lesson)
            break
            ;;
        exit)
            echo "Thank you for using bash tutor."
            exit
            ;;
        *)
            echo "Please enter a valid input. (Hint: try 'ls')"
            ;;
    esac
done

echo -e "\nThat listed all the files in the current directory(home).\n"

echo -e "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo -e "                       Lesson 2.0\n"
echo -e "    NAME\n    cd <DIR> - changes the shell working directory\n"
echo -e "    DESCRIPTION\n    Changes the current directory to DIR.\n    The default DIR value is the HOME shell variable.\n"
echo -e "    INSTRUCTIONS\n    cd into the bash_tutor directory.\n"    
echo -e "    NOTE\n    You can also use 'cd ~' to cd to home \n    or 'cd ..' to cd to parent directory\n    and previous commands like 'ls' can also be used\n"


while read -p "$dirvar" cmd
do
    case "$cmd" in
        ls)
            ls
            ;;
        "cd ~")
            cd ~
            dirvar="$tur$(pwd)$dolla "
            ;;
        "cd ..")
            cd ..
            dirvar="$tur$(pwd)$dolla "
            ;;
        "cd /")
            echo "### Do not attempt to access root ###"
            ;;
        cd*)
            $cmd
            dirvar="$tur$(pwd)$dolla "
            ;;
        next_lesson)
            dir=$(pwd)
            if [ $dir == ~/bash_tutor ]; then            
                echo ""
                break
            else
                echo -e "\nPlease cd into bash_tutor before moving onto next lesson\n"
            fi
            ;;
        exit)
            echo "Thank you for using bash tutor."
            exit
            ;;
        *)
            echo "Please enter a valid input. (Hint: the syntax is cd <DIR>)"
            ;;
    esac
done

echo -e "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo -e "                       Lesson 3.0\n"
echo -e "    NAME\n    mkdir <DIR> - make directories\n"
echo -e "    DESCRIPTION\n    Create DIRECTORY(ies), if they do not already exist.\n"
echo -e "    INSTRUCTIONS\n    make a directory called somedir and cd into it\n"    
echo -e "    NOTE\n    You can continue to use previously learned commands\n"


while read -p "$dirvar" cmd
do
    case "$cmd" in
        ls)
            ls
            ;;
        cd*)
            $cmd
            dirvar="$tur$(pwd)$dolla "
            ;;
        mkdir*)
            $cmd
            echo -e "\nYou've created a directory! Use 'ls' too see what you created.\n"
            ;;
        next_lesson)
            dir=$(pwd)
            if [ $dir == ~/bash_tutor/somedir ]; then 
                echo ""
                break
            else
                echo -e "\nPlease cd into bash_tutor/somedir before moving onto next lesson\n"
            fi
            ;;
        exit)
            echo "Thank you for using bash tutor."
            exit
            ;;
        *)
            echo "Please enter a valid input. (Hint: the syntax is mkdir <DIR>)"
            ;;
    esac
done

echo -e "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo -e "                       Lesson 4.0\n"
echo -e "    NAME\n    touch <FILE> - create FILEs\n"
echo -e "    DESCRIPTION\n    Update the access and modification times of each FILE to current time\n    A FILE arg that does not exist is created empty.\n"
echo -e "    INSTRUCTIONS\n    create a 'journal.txt' in ~/bash_tutor/somedir\n    and a 'hack.py' script in ~/bash_tutor\n"    
echo -e "    NOTE\n    You can continue to use previously learned commands\n"


while read -p "$dirvar" cmd
do
    case "$cmd" in
        ls)
            ls
            ;;
        cd*)
            $cmd
            dirvar="$tur$(pwd)$dolla "
            ;;
        mkdir*)
            $cmd
            ;;
        touch*)
            $cmd
            ;;
        next_lesson)
            dir=$(pwd)
            if [[ -f ~/bash_tutor/somedir/journal.txt && -f ~/bash_tutor/hack.py ]]; then 
                echo ""
                break
            else
                echo -e "\nPlease follow the required instructions before attempting to move to next lesson.\n"
            fi
            ;;
        exit)
            echo "Thank you for using bash tutor."
            exit
            ;;
        *)
            echo "Please enter a valid input. (Hint: the syntax is touch <FILE>)"
            ;;
    esac
done

echo -e "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo -e "                       Lesson 5.0\n"
echo -e "    NAME\n    cat <FILE> - concatenate files and print on the standard output\n"
echo -e "    DESCRIPTION\n    Concatenate FILE(s) to standard output\n    With no FILE, or when FILE is -, read standard input.\n"
echo -e "    INSTRUCTIONS\n    perform cat on sample.txt in ~/bash_tutor\n"    
echo -e "    NOTE\n    You can continue to use previously learned commands\n"

flag=0
while read -p "$dirvar" cmd
do
    case "$cmd" in
        ls)
            ls
            ;;
        cd*)
            $cmd
            dirvar="$tur$(pwd)$dolla "
            ;;
        mkdir*)
            $cmd
            ;;
        touch*)
            $cmd
            ;;
        "cat sample.txt")
            $cmd
            flag=1
            ;;
        cat*)
            $cmd
            ;;
        next_lesson)
            dir=$(pwd)
            if [[ $flag -eq 1 ]]; then 
                echo ""
                break
            else
                echo -e "\nPlease follow the required instructions before attempting to move to next lesson.\n"
            fi
            ;;
        exit)
            echo "Thank you for using bash tutor."
            exit
            ;;
        *)
            echo "Please enter a valid input. (Hint: the syntax is cat <FILE>)"
            ;;
    esac
done

echo -e "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo -e "                       Lesson 6.0\n"
echo -e "    NAME\n    mv <SOURCE> <DEST> - move (rename) files\n"
echo -e "    DESCRIPTION\n    Rename SOURCE to DEST, or\n    move SOURCE(s) to DIRECTORY\n"
echo -e "    INSTRUCTIONS\n    rename sample.txt in ~/bash_tutor to bambie.mov\n"    
echo -e "    NOTE\n    You can continue to use previously learned commands\n"

while read -p "$dirvar" cmd
do
    case "$cmd" in
        ls)
            ls
            ;;
        cd*)
            $cmd
            dirvar="$tur$(pwd)$dolla "
            ;;
        mkdir*)
            $cmd
            ;;
        touch*)
            $cmd
            ;;
        cat*)
            $cmd
            ;;
        mv*)
            $cmd
            ;;
        next_lesson)
            dir=$(pwd)
            if [[ -f ~/bash_tutor/bambie.mov && !(-f ~/bash_tutor/sample.txt) ]]; then 
                echo ""
                break
            else
                echo -e "\nPlease follow the required instructions before attempting to move to next lesson.\n"
            fi
            ;;
        exit)
            echo "Thank you for using bash tutor."
            exit
            ;;
        *)
            echo "Please enter a valid input. (Hint: the syntax is mv <SOURCE> <DEST>)"
            ;;
    esac
done

echo -e "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo -e "                       Lesson 7.0\n"
echo -e "    NAME\n    cp <SOURCE> <DEST> - copy files and directories\n"
echo -e "    DESCRIPTION\n    Copy SOURCE to DEST, or\n    multiple SOURCE(s) to DIRECTORY\n"
echo -e "    INSTRUCTIONS\n    copy ~/bash_tutor/bambie.mov to ~/bash_tutor/somedir/\n"    
echo -e "    NOTE\n    You can continue to use previously learned commands\n"

while read -p "$dirvar" cmd
do
    case "$cmd" in
        ls)
            ls
            ;;
        cd*)
            $cmd
            dirvar="$tur$(pwd)$dolla "
            ;;
        mkdir*)
            $cmd
            ;;
        touch*)
            $cmd
            ;;
        cat*)
            $cmd
            ;;
        mv*)
            $cmd
            ;;
        next_lesson)
            dir=$(pwd)
            if [[ -f ~/bash_tutor/somedir/bambie.mov ]]; then 
                echo ""
                break
            else
                echo -e "\nPlease follow the required instructions before attempting to move to next lesson.\n"
            fi
            ;;
        exit)
            echo "Thank you for using bash tutor."
            exit
            ;;
        *)
            echo "Please enter a valid input. (Hint: the syntax is cp <SOURCE> <DEST>)"
            ;;
    esac
done