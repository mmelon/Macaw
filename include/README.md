# \#include for Macaw

Until the team adds an include functionality, i'm sharing with you this trick which will allow you to include several pages (or elements) into another one.  
Include means you only care block after block, focus only on one point not the whole page, and when you change one parameter... it changes everywhere. Welcome to Macaw 2.0 ;)  

### the Code  

```
(function ($) {
  $.include = function (options) {
    $.ajax({
      url: options.url,
      async: false, //!important
      success: function (result) {
        result = $(result).filter("#include").html();
        if (options.prependResult) {
          $("body").prepend(result);
        } else {
          $("body").append(result);
        }
      }
    });
  };
}(jQuery));
```

> **Notes:**  
> \#include: contains the element that you want to load 
> /!\ #include element itself will be dismissed  
> body: where you'll load those elements (you can also target an "#ID" or ".style" ()but careful with this last one)).  

### Function invocation  
```
$.include({url: '_header.html', prependResult: true});
$.include({url: '_footer.html', prependResult: false});
```

> **Notes**  
> prepend=true => load before  
> prepend=false => load after  
> /!\ order is important !  
> /!\ “Consolidate Page Styles” must be checked.  

**the negatives points:**  
- Macaw will export full pages, it means you'll have all metadata, styles and scripts links. You'll need to erase those and use some front-end dev tools before building the final page.  
Example of front-dev tool: Hammer (http://hammerformac.com/), Prepros (http://alphapixels.com/prepros/), Mixture (http://mixture.io/), Codekit (https://incident57.com/codekit/index.html) or a build system like Grunt, Gulp or npm.  

**For all javascript junkies, don't hesitate to tweak this code and share ;)**  

### Have fun with Macaw !  
