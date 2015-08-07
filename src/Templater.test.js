describe("Templater", function() {
  var templater

  beforeEach(function() {
    templater = require('./Templater.js')
  })

  it("should render the template with the provided data", function() {
    expect(
      templater.render('{foo}',{foo:'bar'})
    ).toEqual(
      'bar'
    )

    expect(
      templater.render('<a href="{url}">url</a>',{url:'http://google.com'})
    ).toEqual(
      '<a href="http://google.com">url</a>'
    )
  })

  it("should replace not found properties with the original pattern", function() {
    var template = '{foo}'
    expect(
      templater.render(template,{x:'bar'})
    ).toEqual(
      template
    )
  })

  it("should allow custom patterns to be set", function() {
    templater.setOptions({
      templatePattern:/\{\{(.*?)\}\}/g
    })
    expect(
      templater.render('{{foo}}',{foo:'bar'})
    ).toEqual(
      'bar'
    )
  })
})