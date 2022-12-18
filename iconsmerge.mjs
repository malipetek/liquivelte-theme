import fs, { readFileSync } from 'fs';

let icons = fs.readdirSync('./icons');

icons = icons.map(icon => {
  const contents = readFileSync(`./icons/${icon}`);
  return [icon, contents];
});
console.log('icons ', icons);

fs.writeFileSync('./icon.liquivelte',
`{% case name %}
  ${icons.reduce((c, [icon, content]) => `${c}
  {% when '${icon}' %}
    ${content}
  `, '')}
  {% endcase %}
`);;