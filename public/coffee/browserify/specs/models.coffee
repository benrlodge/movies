MovieModel = require '../models/MovieModel'

describe "Movie Model!", ->

	movieModel = new MovieModel({name: "The banana man"})
	name = movieModel.get("name")

	it "should be defined", ->
		expect(movieModel).toBeDefined()
	
	it "should get properties", ->
		expect(name).toEqual("The banana man")



