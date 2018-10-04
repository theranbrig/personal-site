export default [
	{
		title: 'Wiki-What',
		technology: 'Express, Node, SQL',
		created: 'Summer 2018',
		description: 'RESTful Wiki collaboration site',
		slug: 'wiki-what',
		image: 'https://i.imgur.com/8tK8Q3O.png',
		extendedDescription:
			'Full RESTful API site for wiki collaboration.  Users are able to upgrade to premium features through Stripe payments.  There is full authentication and crediential checking for premium feature users.  The entire app has been unit and integration tested with Jasmine.  There are full CRUD capabilities for both users and Wikis.  It uses a markdown editor with uniform styling.  I also worked to make sure that the Wiki styling is both clean, modern and stylish; something that is often missing from most Wiki sites.  Though it is primarily meant to be used as a full desktop site, it is mobile responsive.  This was primarily an back-end project to build a complete REST app.  All back-end components are modular and separated for easy scaling and feature addition.  It uses PostgreSQL as a database for wikis and users, with validation that is handled by Passport',
		gitLink: 'https://github.com/theranbrig/wiki-what',
		deployLink: 'https://wikiwhat-theranbrig.herokuapp.com/',
		screenShot1: 'https://i.imgur.com/MKnPtcn.jpg',
		screenShot2: '',
		screenShot3: '',
		tech: [
			'devicon-javascript-plain',
			'devicon-express-original',
			'devicon-nodejs-plain',
			'devicon-css3-plain',
			'devicon-heroku-plain',
			'devicon-postgresql-plain',
			'devicon-jasmine-plain'
		]
	},
	{
		title: 'Vane',
		technology: 'React, Firebase, MaterialUI',
		created: 'Spring 2018',
		description: 'Mobile weather web app using Yahoo API',
		slug: 'vane',
		image: 'https://i.imgur.com/5lZjf3J.png?1',
		extendedDescription:
			'This quick and simple mobile app was built in order to solidify my foundation for ReactJS in my developer boot camp. I built this as an extra project on my own to make sure that I had a good handle on the basic concepts of ReactJS.  This was first built by fetching data from the Yahoo Weather API and using Axios to handle the API requests. Axios ensured that I can handle my API requests with each search that is performed, without further complicating my app life cycle. Components were then rendered out using ReactJS and Material UI. Material UI was used to help with a responsive UX and UI, and helped to maintain styling. I also added styling that that uses a color palette based on the temperature from hot to cold. Screenshots of the color palette in the app can be found here. Finally I have added Firebase in to allow for user authentication via Google. Users may save cities for quick access when signed in.',
		gitLink: 'https://github.com/theranbrig/weather-app',
		deployLink: 'https://vane.netlify.com',
		screenShot1: 'https://i.imgur.com/4h8vHuO.png?1',
		screenShot2: 'https://i.imgur.com/v2PDWLD.png?1',
		screenShot3: 'https://i.imgur.com/IyfkO05.png?2',
		tech: [
			'devicon-javascript-plain',
			'devicon-react-original',
			'devicon-css3-plain',
			'devicon-html5-plain'
		]
	},
	{
		title: 'Bloc Jams',
		technology: 'React, SemanticUI',
		created: 'Spring 2018',
		description: 'React Spotify Clone',
		slug: 'bloc-jams',
		image: 'https://i.imgur.com/QULfpDy.png?1',
		extendedDescription:
			'Bloc Jams is a my first React SPA that was built as part of my curriculum through Bloc. It is an SPA for albums and music that uses React Router to create a responsive page that works on mobile as well. I started out by building the basic routes with React Router. After that I built up the functionality of the library, album, and music player controls using React. The page was then finally styled through the use of Semantic UI - React. This was my first time working to build an SPA completely with React. It was a learning experience in managing state and props, while building a responsive webpage.',
		gitLink: 'https://github.com/theranbrig/bloc-jams',
		deployLink: 'https://bloc-jams-theran.netlify.com/',
		screenShot1: 'https://i.imgur.com/gQ4Hrit.png?1',
		screenShot2: 'https://i.imgur.com/p9Pd8c9.png?1',
		screenShot3: 'https://i.imgur.com/tsYxipW.png?1',
		tech: [
			'devicon-javascript-plain',
			'devicon-react-original',
			'devicon-css3-plain',
			'devicon-html5-plain'
		]
	},
	{
		title: 'Bloc Chat',
		technology: 'React, Firebase, MaterialUI',
		created: 'Spring 2018',
		description: 'Web chat with Firebase and React',
		slug: 'bloc-chat',
		image: 'https://i.imgur.com/2vTo5n2.png?1',
		extendedDescription:
			'Bloc Chat was built as my second project using React. This was part of my curriculum with Bloc.io and was a great experience in learning the concepts of how to build a React app. The app was first built by creating a list of chat rooms that dynamically updates when a user adds a new chat room. After that, displayed messages for each chat room were generated. In order to create messages as a registered user, Firebase was added for user authentication and to save messages for each user. All messages only display within the given chat room in which they were created. Messages and chat rooms may be deleted and edited when necessary. The page was styled using Material UI. It is mobile responsive, though it is best used on a desktop platform. This was my first time using a database with React and it was a good experience in further learning React and showing the power that it has when used with a dynamic database like Firebase.',
		gitLink: 'https://github.com/theranbrig/bloc-chat',
		deployLink: 'https://bloc-chat-theran.netlify.com',
		screenShot1: 'https://i.imgur.com/xTD2VWq.png?2',
		screenShot2: '',
		screenShot3: '',
		tech: [
			'devicon-javascript-plain',
			'devicon-react-original',
			'devicon-css3-plain',
			'devicon-html5-plain'
		]
	},
	{
		title: 'News Bites',
		technology: 'Vanilla Javascript, SemanticUI',
		created: 'April 2018',
		description: 'News app using vanilla javascript',
		slug: 'news-bites',
		image: 'https://i.imgur.com/QBqC7xv.png?1',
		extendedDescription:
			'The purpose of this assignment was to use an API for the first time and display it on a page. I used the fetch method to make AJAX requests and built the site using HTML, CSS, and Vanilla JavaScript. I used News API to get headlines from major news categories and the page can be updated and viewed easily. It was my first time using an API in conjunction with HTML. I plan on refactoring some of the code in the future, adding a search function, and making a few design tweeks along the way.',
		gitLink: 'https://github.com/theranbrig/api_news_bites',
		deployLink: 'https://news-bites.netlify.com',
		screenShot1: 'https://i.imgur.com/oBIjR9C.png?1',
		screenShot2: '',
		screenShot3: '',
		tech: [
			'devicon-javascript-plain',
			'devicon-react-original',
			'devicon-css3-plain',
			'devicon-html5-plain'
		]
	}
	// {
	// title: 'Yelp Camp',
	// technology: 'Express, Node, Mongo, EJS',
	// created: 'December 2017',
	// description: 'Camping Reviews using Express and EJS',
	// slug: 'yelp-camp',
	// image: 'https://i.imgur.com/D3yLLLX.png?1',
	// extendedDescription: "This page was builtinModules........",
	// gitLink: 'https://github.com/theranbrig/yelp-camp-project',
	// screenShot1: '',
	// screenShot2: '',
	// screenShot3: ''
	// },
	// {
	// title: 'Data Science',
	// technology: 'Vanilla Javascript, SQL',
	// created: 'Summer 2018',
	// description: 'Database and Algorithms for CS Fundamentals',
	// slug: 'data-science',
	// image: 'https://i.imgur.com/AJTuJqP.png?1',
	// extendedDescription: "This page was builtinModules........",
	// gitLink: 'https://github.com/theranbrig/cs-fundamentals',
	// screenShot1: '',
	// screenShot2: '',
	// screenShot3: ''
	// },
];
