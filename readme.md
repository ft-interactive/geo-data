#GEO data

geojson files (and some shapefiles too (but mainly geojson))

Reference <a href="https://en.wikipedia.org/wiki/ONS_coding_system">GSS/ONS codes</a>

##UK

####Westminster Constituencies

 * geo data: westminster-constituencies.geojson
 * description: westminster constituencies for the UK. Used in the 2015 general election. The `id` of each feature is the ONS GSS Code for that constituency
 * source: Ordnance Survey (https://www.ordnancesurvey.co.uk/business-and-government/products/boundary-line.html) & FT research
 * licence: Open Government Licence v3 http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/

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

