/* ************************************************************************** */
/*                                                          LE - /            */
/*                                                              /             */
/*   hidden.js                                        .::    .:/ .      .::   */
/*                                                 +:+:+   +:    +:  +:+:+    */
/*   By: gaennuye <gaennuye@student.le-101.fr>      +:+   +:    +:    +:+     */
/*                                                 #+#   #+    #+    #+#      */
/*   Created: 2020/01/28 11:52:14 by gaennuye     #+#   ##    ##    #+#       */
/*   Updated: 2020/01/29 10:07:44 by gaennuye    ###    #+. /#+    ###.fr     */
/*                                                         /                  */
/*                                                        /                   */
/* ************************************************************************** */

var fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(theUrl) {

    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            //   console.log("Http start")
            var xmlHttp = new XMLHttpRequest();
            //   console.log("Http after req")
            xmlHttp.open("GET", theUrl, false); // false for synchronous request
            //   console.log("HTTP Post open")
            xmlHttp.send(null);
            // console.log("Http before Ret")
            resolve(xmlHttp.responseText);
        }, 200);
    });
    return promise;
}


function checkIfHref(str) {
    return str.startsWith("<a href")
}


async function getOnlyDir(url) {

    let index = await httpGet(url);
    let dirs = []

    if (url.includes("README")) {
        var logStream = fs.createWriteStream('hidden.txt', {flags: 'a'});
        logStream.write(url + " : \n" + index + "\n\n");
        logStream.end();
        // console.log(index);
        return
    }

    index = index.split("\n")

    index = index.filter(checkIfHref)

    index.forEach(dir => {
        de_html = dir.replace(/<[^>]+>/g, '')
        plain_dir = de_html.split(" ")[0]
        dirs.push(plain_dir)
    })

    return dirs
}

async function main() {
    const base_url = "http://192.168.1.3/.hidden/"

    dirs = await getOnlyDir(base_url)

    let iterations = 0;

    for (dir of dirs) {
        const url1 = base_url + dir
        // console.log("\n\n\n" + base_url + dir + "\n")
        iterations++;
        getDirs = await getOnlyDir(url1)
        if (getDirs)
            dirs = getDirs
        else
            break;

        for (dir of dirs) {
            const url2 = url1 + dir
            // console.log("\n\nloop2\n" + url2 + "\n")
            iterations++;

            getDirs = await getOnlyDir(url2)
            if (getDirs)
                dirs = getDirs
            else
                break;

            for (dir of dirs) {
                const url3 = url2 + dir
                // console.log("\n\nloop3\n" + url3 + "\n")
                iterations++;
                // console.log(iterations)

                getDirs = await getOnlyDir(url3)
                if (getDirs)
                    dirs = getDirs
                else
                    break;

                var promise = new Promise(function (resolve, reject) {
                    setTimeout(async function () {

                        for (dir of dirs) {
                            const url4 = url3 + dir
                            // console.log("\n\nloop3\n" + url4 + "\n")
                            iterations++;
                            console.log(iterations)
                            await getOnlyDir(url4)
                        }
                    }, 200);
                });
                promise;
            }

        }
    }
}

main()