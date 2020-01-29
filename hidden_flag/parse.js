/* ************************************************************************** */
/*                                                          LE - /            */
/*                                                              /             */
/*   parse.js                                         .::    .:/ .      .::   */
/*                                                 +:+:+   +:    +:  +:+:+    */
/*   By: gaennuye <gaennuye@student.le-101.fr>      +:+   +:    +:    +:+     */
/*                                                 #+#   #+    #+    #+#      */
/*   Created: 2020/01/29 15:13:56 by gaennuye     #+#   ##    ##    #+#       */
/*   Updated: 2020/01/29 15:41:17 by gaennuye    ###    #+. /#+    ###.fr     */
/*                                                         /                  */
/*                                                        /                   */
/* ************************************************************************** */


var fs = require('fs');

function getRelevantLines(str){
    msgs = [
        "Non ce n\'est toujours pas bon ...",
        "Demande à ton voisin",
        "Toujours pas tu vas craquer non ?",
        "http://",
        "Tu veux de l'aide"
    ]

    let ret = true

    msgs.forEach(msg => {
        if (str.includes(msg) || str == '')
            ret = false
    })

    return ret
}


function readTextFile()
{
    var textByLine = fs.readFileSync('hidden.txt').toString().split("\n");
    textByLine = textByLine.filter(getRelevantLines)
    console.log(textByLine)
}

readTextFile()