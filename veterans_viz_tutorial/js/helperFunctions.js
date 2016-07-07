/*-------------------------------------------------------------*/
/* Helper functions for our veteran visualizations             */
/*-------------------------------------------------------------*/
/*------------------------------------------------------------*/
/* State codes                                                */
/*------------------------------------------------------------*/
var codes = [
    ["texas", "Texas", "geo/04000US48.jpg", "https://flic.kr/p/brgaa9", "040", "A Texas longhorn in Latexo, Texas", "Corbet Ratcliff", "Texas", "04000US48", "Texas"],
    ["pennsylvania", "Pennsylvania", "geo/04000US42.jpg", "https://flic.kr/p/8MY3vg", "040", "Farm, hills and grasslands in rural Pennsylvania.", "Alex", "Pennsylvania", "04000US42", "Pennsylvania"],
    ["south-carolina", "South Carolina", "geo/04000US45.jpg", "https://flic.kr/p/7pK9Xt", "040", "Sunset over The Battery and a row of Palmetto Trees, Charleston, South Carolina.", "Alacrity1980", "South Carolina", "04000US45", "South Carolina"],
    ["new-hampshire", "New Hampshire", "geo/04000US33.jpg", "https://flic.kr/p/e4P4bv", "040", "Mt Washington, part of the presidential range in Conway, NH is the highest mountain in the northeast United States at almost 6,300 feet.", "Nicholas Erwin", "New Hampshire", "04000US33", "New Hampshire"],
    ["hawaii", "Hawaii", "geo/04000US15.jpg", "https://flic.kr/p/eKX79Q", "040", null, "Christian Arballo", "Hawaii", "04000US15", "Hawaii"],
    ["idaho", "Idaho", "geo/04000US16.jpg", "https://flic.kr/p/p3vQ8k", "040", null, "Thomas Hawk", "Idaho", "04000US16", "Idaho"],
    ["montana", "Montana", "geo/04000US30.jpg", "https://flic.kr/p/fAr6Ga", "040", null, "Jeff Krause", "Montana", "04000US30", "Montana"],
    ["new-mexico", "New Mexico", "geo/04000US35.jpg", "https://flic.kr/p/xtWznE", "040", null, "John Fowler", "New Mexico", "04000US35", "New Mexico"],
    ["new-york", "New York", "geo/04000US36.jpg", "https://flic.kr/p/q7hE7", "040", null, "Grufnik", "New York", "04000US36", "New York"],
    ["north-dakota", "North Dakota", "geo/04000US38.jpg", "https://flic.kr/p/n97ofi", "040", null, "Jasperdo", "North Dakota", "04000US38", "North Dakota"],
    ["oregon", "Oregon", "geo/04000US41.jpg", "https://flic.kr/p/51Chx1", "040", null, "Andrew E. Larsen", "Oregon", "04000US41", "Oregon"],
    ["michigan", "Michigan", "geo/04000US26.jpg", "https://flic.kr/p/89qh2s", "040", null, "Andrew Langdal", "Michigan", "04000US26", "Michigan"],
    ["ohio", "Ohio", "geo/04000US39.jpg", "https://flic.kr/p/53Bo75", "040", null, "Cathy", "Ohio", "04000US39", "Ohio"],
    ["georgia", "Georgia", "geo/04000US13.jpg", "https://flic.kr/p/6prkaY", "040", null, "Tony Crescibene", "Georgia", "04000US13", "Georgia"],
    ["colorado", "Colorado", "geo/04000US08.jpg", "https://flic.kr/p/cWTUp5", "040", null, "John B. Kalla", "Colorado", "04000US08", "Colorado"],
    ["florida", "Florida", "geo/04000US12.jpg", "https://flic.kr/p/egXqGY", "040", null, "Jeff Krause", "Florida", "04000US12", "Florida"],
    ["maryland", "Maryland", "geo/04000US24.jpg", "https://flic.kr/p/nchBrq", "040", null, "Eric B. Walker", "Maryland", "04000US24", "Maryland"],
    ["vermont", "Vermont", "geo/04000US50.jpg", "https://flic.kr/p/boVkyx", "040", null, "James Walsh", "Vermont", "04000US50", "Vermont"],
    ["washington", "Washington", "geo/04000US53.jpg", "https://flic.kr/p/HM7FW", "040", null, "David Herrera", "Washington", "04000US53", "Washington"],
    ["arizona", "Arizona", "geo/04000US04.jpg", "https://flic.kr/p/wvddo9", "040", null, "Scott Taylor", "Arizona", "04000US04", "Arizona"],
    ["indiana", "Indiana", "geo/04000US18.jpg", "https://flic.kr/p/ccVcQ5", "040", null, "David Cornwell", "Indiana", "04000US18", "Indiana"],
    ["iowa", "Iowa", "geo/04000US19.jpg", "https://flic.kr/p/9j63gG", "040", null, "Jason Mrachina", "Iowa", "04000US19", "Iowa"],
    ["kansas", "Kansas", "geo/04000US20.jpg", "https://flic.kr/p/b2DTAn", "040", null, "Garett Gabriel", "Kansas", "04000US20", "Kansas"],
    ["kentucky", "Kentucky", "geo/04000US21.jpg", "https://flic.kr/p/nwDDsC", "040", null, "Bill Brine", "Kentucky", "04000US21", "Kentucky"],
    ["louisiana", "Louisiana", "geo/04000US22.jpg", "https://flic.kr/p/jt23Ga", "040", null, "Ka!zen", "Louisiana", "04000US22", "Louisiana"],
    ["maine", "Maine", "geo/04000US23.jpg", "https://flic.kr/p/6zWbkt", "040", null, "Raging Wire", "Maine", "04000US23", "Maine"],
    ["minnesota", "Minnesota", "geo/04000US27.jpg", "https://flic.kr/p/zwjkVh", "040", null, "imagenusphoto", "Minnesota", "04000US27", "Minnesota"],
    ["missouri", "Missouri", "geo/04000US29.jpg", "https://flic.kr/p/cqPYaY", "040", null, "Thomas Hawk", "Missouri", "04000US29", "Missouri"],
    ["nebraska", "Nebraska", "geo/04000US31.jpg", "https://flic.kr/p/gagmb2", "040", null, "Rich", "Nebraska", "04000US31", "Nebraska"],
    ["rhode-island", "Rhode Island", "geo/04000US44.jpg", "https://flic.kr/p/8hZqVu", "040", null, "Julian Colton", "Rhode Island", "04000US44", "Rhode Island"],
    ["tennessee", "Tennessee", "geo/04000US47.jpg", "https://flic.kr/p/A3GhG", "040", null, "Brent Moore", "Tennessee", "04000US47", "Tennessee"],
    ["virginia", "Virginia", "geo/04000US51.jpg", "https://flic.kr/p/cvC7h", "040", null, "Bob Travis", "Virginia", "04000US51", "Virginia"],
    ["wisconsin", "Wisconsin", "geo/04000US55.jpg", "https://flic.kr/p/ktVrb", "040", null, "Randen Pederson", "Wisconsin", "04000US55", "Wisconsin"],
    ["wyoming", "Wyoming", "geo/04000US56.jpg", "https://flic.kr/p/pdw825", "040", null, "Don Graham", "Wyoming", "04000US56", "Wyoming"],
    ["puerto-rico", "Puerto Rico", "geo/04000US72.jpg", "https://flic.kr/p/9nfWhJ", "040", null, "Breezy Baldwin", "Puerto Rico", "04000US72", "Puerto Rico"],
    ["oklahoma", "Oklahoma", "geo/04000US40.jpg", "https://flic.kr/p/rxb1xh", "040", null, "Toby", "Oklahoma", "04000US40", "Oklahoma"],
    ["alaska", "Alaska", "geo/04000US02.jpg", "https://flic.kr/p/ysE4zN", "040", "Approaching Sawyer Glacier in the Tracy Arm Fjord valley of mountains and waterfalls.", "Ian D. Keating", "Alaska", "04000US02", "Alaska"],
    ["delaware", "Delaware", "geo/04000US10.jpg", "https://flic.kr/p/oaX97g", "040", null, "Eric B. Walker", "Delaware", "04000US10", "Delaware"],
    ["nevada", "Nevada", "geo/04000US32.jpg", "https://flic.kr/p/EfAfDq", "040", "View from Red Rock Canyon, Spring Mts., Nevada", "Thomas Hawk", "Nevada", "04000US32", "Nevada"],
    ["arkansas", "Arkansas", "geo/04000US05.jpg", "https://flic.kr/p/tVkBh2", "040", null, "Jack Gray", "Arkansas", "04000US05", "Arkansas"],
    ["illinois", "Illinois", "geo/04000US17.jpg", "https://flic.kr/p/dG9ffs", "040", null, "Jason Mrachina", "Illinois", "04000US17", "Illinois"],
    ["california", "California", "geo/04000US06.jpg", "https://flic.kr/p/kycGzp", "040", null, "Thomas Hawk", "California", "04000US06", "California"],
    ["district-of-columbia", "District of Columbia", "geo/04000US11.jpg", "https://flic.kr/p/6zNWe8", "040", null, "Wally Gobetz", "District of Columbia", "04000US11", "District of Columbia"],
    ["connecticut", "Connecticut", "geo/04000US09.jpg", "https://flic.kr/p/8Dw7Ax", "040", null, "Steve", "Connecticut", "04000US09", "Connecticut"],
    ["north-carolina", "North Carolina", "geo/04000US37.jpg", "https://flic.kr/p/pLh4Y6", "040", null, "Jeremy Taylor", "North Carolina", "04000US37", "North Carolina"],
    ["massachusetts", "Massachusetts", "geo/04000US25.jpg", "https://flic.kr/p/bQgdh4", "040", null, "Massachusetts Office of Travel & Tourism", "Massachusetts", "04000US25", "Massachusetts"],
    ["west-virginia", "West Virginia", "geo/04000US54.jpg", "https://flic.kr/p/p8oCU2", "040", "Train near Ada. WV", "Bob Wilcox", "West Virginia", "04000US54", "West Virginia"],
    ["utah", "Utah", "geo/04000US49.jpg", "https://flic.kr/p/ezd1dw", "040", null, "Jeff Krause", "Utah", "04000US49", "Utah"],
    ["alabama", "Alabama", "geo/04000US01.jpg", "https://flic.kr/p/jGfRWK", "040", "Vulcan's View, Birmingham, Alabama", "Trish Hartmann", "Alabama", "04000US01", "Alabama"],
    ["south-dakota", "South Dakota", "geo/04000US46.jpg", "https://flic.kr/p/frLU3R", "040", "Abandoned farmstead, at the junction of SD Highways 26 & 41, north of Miller, SD", "Keith Ewing", "South Dakota", "04000US46", "South Dakota"],
    ["mississippi", "Mississippi", "geo/04000US28.jpg", "https://flic.kr/p/7tRi59", "040", "Mississippi State Capitol Jackson Mississippi", "Stuart Seeger", "Mississippi", "04000US28", "Mississippi"],
    ["new-jersey", "New Jersey", "geo/04000US34.jpg", "https://flic.kr/p/dL4YQS", "040", "State Capitol Rotunda, Trenton, NJ", "Peter Miller", "New Jersey", "04000US34", "New Jersey"]
];

var headers = ["url_name", "display_name", "image_path", "image_link", "sumlevel", "image_meta", "image_author", "name_long", "id", "name"];


/*--------------------------------------------------*/
/* Get information from a URL                       */
/* From Haverbeke pg 308                            */
/*--------------------------------------------------*/
function get(url) {
    return new Promise(function(succeed, fail) {
      	var req = new XMLHttpRequest();
      	req.open("GET", url, true);
      	req.addEventListener("load", function() {
    	    if (req.status < 400)
        		succeed(req.responseText);
    	    else
        		fail(new Error("Request failed: " + req.statusText));
      	});
      	req.addEventListener("error", function() {
    	    fail(new Error("Network error"));
      	});
      	req.send(null);
    });
}
/*------------------------------------------------------------*/
/* Return a promise whose result is the content of the url    */
/* parsed as JSON                                             */
/* Haverbeke pg. 309                                          */
/*------------------------------------------------------------*/
function getJSON(url) {
    return get(url).then(JSON.parse);
}

/*------------------------------------------------------------*/
/* Transform data into array of objects                       */
/*------------------------------------------------------------*/
function objectify(inputData) {

    //Construct new empty array for outputs
    var outputData = [];

    //temporary copies of data and headers to save typing
    var data = inputData.data;
    var headers = inputData.headers;

    //Loop through all rows of input data and fold in headers
    for (var i = 0; i < data.length; i++) {
	var newObject = {};
	for (var j = 0; j < headers.length; j++) {
	    newObject[headers[j]] = data[i][j];
	}
	outputData.push(newObject);
    }
    return outputData;
}
/*------------------------------------------------------------*/
/* Add state names where geo matches                          */
/*------------------------------------------------------------*/
function addStateNames(inputData) {
    //Empty array for copy of data
    var outputData = [];

    //Loop through rows of input data
    for (var i = 0; i < inputData.length; i++) {
	var newObject = inputData[i];

	//Check whether geo matches codes, and if so, copy state name
	for (var j = 0; j < codes.length; j++) {
	    if (newObject.geo == codes[j][8]) {
		newObject.state = codes[j][9];
		break;
	    }
	}
	outputData.push(newObject);
    }
    return outputData;
}

