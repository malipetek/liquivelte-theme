 
<script>
    {% liquid 
        assign all_colors = ''
        assign all_sizes = ''
        for product in collection.products
          for option in product.options
            assign option_index = 'option' | append: forloop.index
            for variant in product.variants
              if option contains 'Color'
                unless all_colors contains variant[option_index]
                  assign all_colors = all_colors | append: variant[option_index] | append: ', '
                endunless
              endif
              if option contains 'Size'
                unless all_sizes contains variant[option_index]
                  assign all_sizes = all_sizes | append: variant[option_index] | append: ', '
                endunless
              endif
            endfor
          endfor
        endfor
        assign all_colors = all_colors | split: ', '
        assign all_sizes = all_sizes | split: ', '
    %}
        import liquid from '../liquivelte-liquid.js';
    
          import { quintOut } from 'svelte/easing';
        import { fly, fade, scale, slide } from 'svelte/transition';
        import { flip } from 'svelte/animate';
        
        import Expandable from '../components/Expandable.svelte';
        import FilterColor from '../components/FilterColor.svelte';
    
        import collection from 'theme';
        collection.title = collection.title || 'Products'
        import collection.products from 'theme';
        import collection.all_tags from 'theme';
        const shop = {
          metafields: { 
            angapp: {} 
          }
        };
        import shop.metafields.angapp.color_families from 'theme';
    
        collection.all_tags = collection.all_tags.filter(t => /col:/.test(t) || /fab:/.test(t));
        console.log('allTags', collection.all_tags);
        const paginate = {};
        import paginate.pages from 'theme';
        const section = {};
        import all_sizes from 'theme';
        import all_colors from 'theme'; 
    
        let limit = 10;
        let products_cache = collection.products;
        let products_to_render = products_cache.slice(0, limit);
    
        console.log('collection', collection);
        console.log('all_sizes, all_colors ', all_sizes, all_colors);
    
        let colors_selection = [];
        let sizes_selection = [];
        let lastPage = 2;
        async function extendCache () {
          let url = new URL(window.location);
          url.searchParams.set('view', 'json');
          url.searchParams.set('limit', 100);
          url.searchParams.set('page', lastPage);
    
          const res = await fetch(url);
          const products = await res.json();
          if(products.length) {
            lastPage++;
            products_cache = products_cache.concat(products);
            products_to_render = products_to_render;
          }
        }
    
        let colors_selection_color_variants = [];
        $: colors_selection_color_variants = colors_selection.map(selection => shop.metafields.angapp.color_families.families.find(f => f.title == selection).children.map(c => c.title)).reduce((c, a) => c.concat(a), []);
    
        $: if (colors_selection_color_variants.length || sizes_selection.length) {
          products_to_render = products_cache.filter(prod => {
            let [ option1, option2, option3 ] = prod.options;
            return prod.variants.some(variant => {
              let options = {};
              let [ value1, value2, value3 ] = variant.options;
              options[option1] = value1;
              options[option2] = value2;
              options[option3] = value3;
              return ((!colors_selection.length) || (colors_selection_color_variants.indexOf(options['Color'])) != -1) && ((!sizes_selection.length) || sizes_selection.indexOf(options['Size']) != -1);
            });
          });
          if(products_to_render.length < limit) {
            extendCache()
            console.log('extending cache');
          }
        } else {
          products_to_render = products_cache.slice(0, limit);
        }
    
        $: console.log('products_to_render.length, products_cache.length ', products_to_render.length, products_cache.length)
        $: products_to_render = products_to_render.map(prod => { prod.url = `/products/${prod.handle}`; return prod;});
    
        const item_count = `{{ 'collections.general.items_with_count' | t: count: collection.products_count }}`;
        
        let new_url = '';
        let tag_type = '';
        let tag_name = '';
    </script>
    <div>
    
    {% assign limit = 10 %}
    {% paginate collection.products by limit %}
    
      {% assign products_to_render = collection.products %}
      <div class="collection-container page-width" id="Collection">
        <div class="collection-left">
        <header class="collection-header">
          <div class="f-26 text-black simplon"> {{- collection.title -}} </div>
          <div class="f-12 text-black"> {{- collection.html | default: '' -}} </div>
         </header>
        <div class="collection-filters">
          <Expandable label="Filters">
            <div class="collection-filters__filter collection-filters__colors">
              <div> Color Family </div><br>
                <FilterColor bind:colors_selection={colors_selection} color_families="{shop.metafields.angapp.color_families.families}" />
              <ul>
              </ul>
            </div>
            <div class="collection-filters__filter collection-filters__sizes">
              <div> Size </div><br>
              <ul>
              {% for size in all_sizes %}
                {% if size != '' %}
                <li>
                <!-- {% assign index = forloop.index0 %} -->
                  <input bind:group={sizes_selection} id="size-{{- index -}}" name="filter-size" type="checkbox" value="{{- size -}}" /> 
                  <label for="size-{{- index -}}" class="text-black"> {{- size -}} </label>  
                </li>
                {% endif %}
              {% endfor %}
              </ul> 
            </div> 
            <div class="collection-filters__filter collection-filters__tags">
              <div> Fabric </div><br>
              <ul>
                {% for tag in collection.all_tags %}
                {% capture tag_type %}{{- tag | split: ':' | first -}}{% endcapture %}
                  {% if tag_type == 'fab' %}
                    <li class="text-black" value="{{- new_url -}}">{{- tag | split: ':' | last -}}</li>
                  {% endif %}
                {% endfor %}
              </ul> 
            </div> 
            <div class="collection-filters__filter collection-filters__tags">
              <div> Collection </div><br>
              <ul>
                {% for tag in collection.all_tags %}
                  {% capture tag_type %}{{- tag | split: ':' | first -}}{% endcapture %}
                  {% if tag_type == 'col' %}
                      <li class="text-black" value="{{- tag -}}">{{- tag | split: ':' | last -}}</li>
                  {% endif %}
                {% endfor %}
              </ul> 
            </div> 
          </Expandable>
        </div>
      </div>
        <div class="collection-products">
        {% for product (product.id) in products_to_render %}
        <div class="collection-product" transition:scale >
          <a href="{{- product.url | within: collection -}}" target="_blank" >
            <div class="image-container">
              {% if product.media %}
                  <img 
                  id="{{- product.media[0].id -}}"
                  class="feature-row__image lazyload lazypreload"
                  data-src="{{- product.media[0] | img_url: 'x300' -}}"
                  data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                  data-aspectratio="{{- product.media[0].preview_image.aspect_ratio -}}"
                  data-sizes="auto"
                  alt="{{- product.media[0].alt | escape -}}"
                  />
                {% else %}
                  <img 
                  id=""
                  class="feature-row__image lazyload lazypreload"
                  data-src="{{- '' | img_url: 'x300' -}}"
                  data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                  data-aspectratio=""
                  data-sizes="auto"
                  alt=""
                  />
                {% endif %}
              </div>
              <div class="collection-product__title"> {{- product.title -}} </div>
              <div class="collection-product__price"> {{- product.price | money -}} </div>
            </a>
          </div>
        {%- endfor -%}
        </div>
        {%- if paginate.pages > 1 -%}
           {% rawinclude 'pagination', paginate: paginate %}
        {%- endif -%}
      </div>
       {% endpaginate %}
    </div>
    
    <style>
      
      .collection-container {
        display: flex;
      }
    
      .collection-left {
        flex: 1 1 30%;
      }
    
      .collection-products {
        flex: 1 1 70%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: max-content;
        grid-gap: 30px;
      }
    
      .collection-product {
        flex: 1 1 calc(30% - 40px);
        margin: 20px;
      }
    
      .collection-product a {
        display: block;
      }
    
      .collection-product img {
        width: 100%;
      }
    
      .collection-filters__filter li {
        display: flex;
      }
    
    </style>