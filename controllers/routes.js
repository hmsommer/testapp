module.exports = function(app) {
  
  /* Optionally include this to use this alternative template when wanting to create your own header and footer
  app.set("view options", {
    layout: "layout/layout-skills"
  });
  */
  
  app.get('/page2', function(req, res){
    res.render("page2",{
      mymsg:"Hello World!", 
      mysign:"Aries", 
      mycontact:{first:"John",last:"Smith", cell:"123.456.7890"},
      mychildren:["Betty", "Bob", "Billy", "Brenda"]
      });

  });

  app.get('/name', function(req, res){
    res.render("name",{name:"Heidi"});

  });

  app.get('/:page', function(req, res){
    res.render(req.params.page, {});
  });

  app.get('/', function(req, res){
    res.render("index", {mymsg:"Hello World!"});
  });
}
