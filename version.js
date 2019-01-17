var e = require("child_process").exec;
var fs = require("fs");
const cmd1 = "git describe --tags";
const cmd2 = "git status --porcelain";

const data = {
    version: null,
    date: new Date().getTime()
};

e(cmd1, function (error, stdout1) {
    e(cmd2, function (error, stdout2) {
        if (stdout2.trim().length > 0) {
            var version = stdout1.trim();
            if (version.indexOf("-g") !== -1) {
                var withOutHash = version.substr(0, version.indexOf("-g"));
                var withOutCommitCount = withOutHash.substr(0, withOutHash.lastIndexOf("-") + 1);
                var commitCount = withOutHash.substr(withOutHash.lastIndexOf("-") + 1);
                data.version = withOutCommitCount + (Number.parseInt(commitCount) + 1) + "-SNAPSHOT"
            } else {
                data.version = version + "-1-SNAPSHOT";
            }
        } else {
            data.version = stdout1.trim();
        }
        console.log(data);
        fs.writeFileSync("./release-it/src/about.json", JSON.stringify(data));
        fs.writeFileSync("./functions/about.ts", "const data = " + JSON.stringify(data) + ";\nexport default data;");
    });
});
