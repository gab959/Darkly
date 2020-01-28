/* ************************************************************************** */
/*                                                          LE - /            */
/*                                                              /             */
/*   hidden.js                                        .::    .:/ .      .::   */
/*                                                 +:+:+   +:    +:  +:+:+    */
/*   By: gaennuye <gaennuye@student.le-101.fr>      +:+   +:    +:    +:+     */
/*                                                 #+#   #+    #+    #+#      */
/*   Created: 2020/01/28 11:52:14 by gaennuye     #+#   ##    ##    #+#       */
/*   Updated: 2020/01/28 17:09:36 by gaennuye    ###    #+. /#+    ###.fr     */
/*                                                         /                  */
/*                                                        /                   */
/* ************************************************************************** */

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


function checkIfHref(str){
    return str.startsWith("<a href")
}


function getOnlyDir(url){

    let index = httpGet(url);
    let dirs = []

    if (url.includes("README")) {
        console.log(index);
        return
    }

    index = index.split("\n")

    index = index.filter(checkIfHref)
    
    index.forEach(dir =>{
        de_html = dir.replace(/<[^>]+>/g, '')
        plain_dir = de_html.split(" ")[0]
        dirs.push(plain_dir)
    })

    return dirs
}


const base_url = "http://10.2.8.36/.hidden/"

dirs = getOnlyDir(base_url)

let iterations = 0;

for (dir of dirs) {
    const url1 = base_url + dir
    // console.log("\n\n\n" + base_url + dir + "\n")
    iterations++;
    getDirs = getOnlyDir(url1)
    if (getDirs)
        dirs = getDirs
    else
        break;    

    for (dir of dirs) {
        const url2 = url1 + dir
        // console.log("\n\nloop2\n" + url2 + "\n")
        iterations++;

        getDirs = getOnlyDir(url2)
        if (getDirs)
            dirs = getDirs
        else
            break;
        
        for (dir of dirs) {
            const url3 = url2 + dir
            // console.log("\n\nloop3\n" + url3 + "\n")
            iterations++;
            // console.log(iterations)

            getDirs = getOnlyDir(url3)
            if (getDirs)
                dirs = getDirs
            else
                break;
            
            for (dir of dirs) {
                const url4 = url3 + dir
                console.log("\n\nloop3\n" + url4 + "\n")
                iterations++;
                console.log(iterations)
                getOnlyDir(url4)
            }
        }

    }
}