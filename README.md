# my-shadow-is-my-best-friend
comics

To play the comics without sound, download or clone the repository and open index.html.

To play the comics with sound (on Mac) - download or clone the repository and navigate into the directory through the command line. See: http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line for an introduction to navigating using the command line. Inside the root directory (which contains all the project files and folders), start a server using the following Python command in the terminal (python comes pre-installed on every Mac).

```python
python -m SimpleHTTPServer
```

This will start a server serving HTTP files on the IP address 0.0.0.0, port 8000.
To visit the web page, open up a browser and type: 0.0.0.0:8000.

To play the comics with sound (on Windows) - follow the following guide for setting up an HTTP server - http://www.jhh.me/blog/2012/12/24/setting-up-http-server-on-windows-with-node-js/.

The reason why we need to start a server is because we are using the Web Audio API to fetch and play audio files. The Web Audio API also gives us more control (programmatically) over the playback of audio elements over the native HTML5 <audio> tag.

Read more about the Web Audio API: https://www.html5rocks.com/en/tutorials/webaudio/intro/

**Some basic implementation notes**

The basic layout for every scene is the following HTML code:
```html
	<!-- scene zero -->
		<div class="scene-container" id="scene-0">
			<div class="scene col-md-12" >
				<div class="panel" id="panel-0-1">
				<img id="oreo-0" src="images/0.png">
				</div>
			</div>
		</div>
```

Each scene has a .scene-container class which takes up 100% of the viewport screen as well as an id identifying the unique scene. A scene container then has a .scene class which represents the actual scene and is vertically aligned in the middle. Each scene also takes up 100% of the width of the parent container (through bootstrap's grid system and its .col-md-12 class). Each scene can have multiple panels, with each panel having a .panel class, which functions to add a border / frame to each panel. Two panels can be side-by-side each other by applying the correct bootstrap column classes (i.e. .col-md-6 to both). Finally, content inside each panel can be styled at discretion.
