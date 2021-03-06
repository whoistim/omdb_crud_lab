#OMDB API Lab

We'll be continuing our Movie app from this morning. At first, you
created a 2 routes, one for a search form, and one to show movie
search results.

The next steps are to:

- create a movie detail page, and
- add the ability to save a movie for a *Watch later list*.

##Requirements
1. User goes to home page that has a search form for a movie.
2. The search form will take the user to a search results page of movie listings.
3. Each movie link should click into a view with detailed information about the movie.
4. On the movie detail page, have an option to save a movie for a watch later list.

##How to get Started
1. We left you off this morning showing the search results from the
   api provided at OMDBapi using a url like
   `http://www.omdbapi.com/?s=matrix`. The next step is to turn the
   movie results into links that will go to a new route, and make an
   additional API Request for additional movie details.

2. From the search results page, we notice along with every movie
   entry there is a imdbID. Have each movie link to a route like
   `/movie/tt234323`. Take the parameter from that url and make an
   additional API call to retrieve movie details related to that
   `imdbID`.

3. The final part of this project is add some kind of "save" or "watch
   later" functionality. This can be in the form of a button or link.
   It should make a post request to a route that will store
   information about the movies you want to watch later. **Hint: Use
   an object or array to store this information**

4. Provide a watch later route, which list the movies you have saved.
   Each link should also take me back to a movie detail page using the
   above route.


##Bonus
* Have an option to remove the movie from the watch later list.
* Style it! Incorporate Bootstrap or Foundation to utilize some of
  their components or css grids.
