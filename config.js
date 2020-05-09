/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out or empty, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		
		
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "c96d6b51cb223ab4b8c78917d20a7c25"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "c96d6b51cb223ab4b8c78917d20a7c25"
			}
		},
		
		{
		  module: "MMM-NowPlayingOnSpotify",
		  position: "bottom_left",

		  config: {
		    clientID: "339994b3b9b140f2b221dab513c94783",
		    clientSecret: "e3b1e2f2598948149ce08b6662efc023",
		    accessToken: "BQD_LsAfk5gpPIfzyL83n-Q4vIKknsREIwvCWRmG05UWCzI1xgAL-WyFwoZHmx7KPEhro858tZvqKd0FMss7q7-kc5FytlxV_--5Hl6GtE9ecLtQ7EFf0jksGN8Kfdv7D25WcrCypmoqc30Eg0D77A",
		    refreshToken: "AQBlvOM2uSTSTyF_t_leiBCc85TmrOjk1jlgqdVNcBX3LXqbni3ytaJpjm_Ubk3XWuB_mRh2et_CCY3WTwOG4wePweHuuiy8Y6BIwht9XJkK7jRW5iu7DHgn0D2Gy5p2IHo"
		  }
		},

		{
		  module: "MMM-MyScoreboard",
		  position: "bottom_right",
		  classes: "default everyone",
		  header: "My Scoreboard",
		  config: {
		    showLeagueSeparators: true,
		    colored: true,
		    viewStyle: "mediumLogos",
		    sports: [
		      
		      {
			league: "MLB",
			groups: ["NL West"]
		      },
		      {
			league: "NFL",
			teams: ["NE"]
		      },
		      {
			league: "NCAAM",
			teams: ["SYR"]
		      },
                      {
			league: "NCAAF",
			teams: ["SYR"]
		      }
                      {
			league: "NBA",
			teams: ["TOR"],
			groups: ["Pacific", "Central"]
		      }


		    ]

		  }
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
