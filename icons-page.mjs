import fs, { readFileSync } from 'fs';

let contents = fs.readFileSync('./src/snippets/icon.liquivelte', 'utf-8');

// Extract the template name from the contents
let nameMatch = [...contents.match(/name == '(.*?)'/gi).map(c => c.replace(/name == '(.*?)'/, '$1'))];

const iconsSection = `
{% liquid 
  assign icons = '${nameMatch.join(',')}' | split: ','
  %}
<script>
  import Icon from '../snippets/icon.liquivelte';
  import icons from 'theme';
</script>

<div class="grid grid-cols-8">
  {% for icon in icons %}
  <div>
    <h3> {{- icon -}} </h3>
    <div class="w-8">
      <Icon name="{{- icon -}}" ></Icon>
    </div>
  </div>
  {% endfor %}
</div>
`;

fs.writeFileSync('./src/sections/icons-gallery.liquivelte', iconsSection);

