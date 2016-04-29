#GEO data

## What should go in here
geojson files (and some shapefiles too (but mainly geojson))

## Before you start
 * As the repository has large shape files you should install <a href="https://git-lfs.github.com/">git lfs</a>
 * check the licence under which the original data has been put into the world
 * if the geo-data has been created/ researched by us (the FT graphics team) decide upon an approprate licence. By publishing on a public github repo we must allow github users some rights "<a href="https://help.github.com/articles/open-source-licensing/">Specifically, you allow others to view and fork your repository within the GitHub site</a>"

Reference <a href="https://en.wikipedia.org/wiki/ONS_coding_system">GSS/ONS codes</a>

##UK

####Westminster Constituencies

 * geo data: westminster-constituencies.geojson
 * description: westminster constituencies for the UK. Used in the 2015 general election. The `id` of each feature is the ONS GSS Code for that constituency
 * source: Ordnance Survey (https://www.ordnancesurvey.co.uk/business-and-government/products/boundary-line.html) & FT research
 * licence: Open Government Licence v3 http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/

####District borough local authorities

 * geo data: small-local-authorities.topojson, medium-local-authorities.topojson
 * description: district borough and local authorities, fromt he OS boundary line product (October 2015) but trimmed to the coast line. the `id` of each feature is the ONS GSS Code for the local authority 
 * source: Ordnance survey (https://www.ordnancesurvey.co.uk/business-and-government/products/boundary-line.html) & diva-gis (http://www.diva-gis.org/)
 * licence: Open Government Licence v3 (http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/ )

###Northern Ireland

####Northern Ireland Coast

 * geo data: ni-coast.topojson, ni-coast.geojson
 * description: the coast of northern ireland, processed to include that lake in the middle
 * source: diva-gis (http://www.diva-gis.org/)

###London

####London wards 2014

 * geo data: London-wards-2014.geojson
 * description: London ward boundaries 2014 each ward geometry has these properties. (Note City of London is merged into a single shape )
 	* `gss_code_ward` the ONS GSS Code for the ward 
 	* `gss_code_borough` the ONS GSS Code for the containing London borough
 	* `ward` the ward name
 	* `borough` the borough name
 * source: London Data Store http://data.london.gov.uk/dataset/statistical-gis-boundary-files-london
 * licence: Open Government Licence v2 http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/

