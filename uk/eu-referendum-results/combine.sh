mkdir output
mapshaper -i ni.geojson gb.geojson -filter-islands min-area=100000000 -o output/ format=geojson
topojson -o output/combined.topojson -e gss-code-reference.csv -p region=region,name=name --simplify-proportion 0.3 -- output/ni.json output/gb.json