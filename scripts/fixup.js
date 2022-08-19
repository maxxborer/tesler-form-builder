const { execSync } = require("child_process");

execSync(`cat >dist/cjs/package.json <<!EOF
{
    "type": "commonjs"
}
!EOF

cat >dist/mjs/package.json <<!EOF
{
    "type": "module"
}
!EOF`, { stdio: "ignore" });
