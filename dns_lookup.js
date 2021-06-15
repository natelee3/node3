const dns = require('dns');
const readline = require('readline');



rl.question("Domain: ", (url => {
    dns.lookup(url, (err, family) => {
        if (err) {
            console.error(err)
            return
        }
        console.log("IP Address:", family)
        rl.close()
    });
}))

