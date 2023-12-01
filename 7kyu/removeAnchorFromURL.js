/**
 * Remove anchor from URL
 * Complete the function/method so that it returns the url with anything 
 * after the anchor (#) removed.
 */

function removeUrlAnchor(url){
    let anchor = url.indexOf('#')
    return anchor < 0 ? url : url.slice(0, anchor)
  }