// JavaScript Document

/*
 * jquery.bigLink.js
 * Author: James Player - Springload (www.springload.co.nz) 2011
 * 
 */

(function($) {
    $.fn.bigLink = function(options) {
        var settings = {
            target    : 'a',
            avoid     : 'a'
        };
        
        return this.each(function(){
            if (options){
                $.extend(settings, options);
            }
            
            var stop = false;
            
            $(this).addClass('bigLink');
            
            $(this).find(settings.avoid).click(function(e){
                stop = true;
            });          
            
            $(this).click(function(e){
                        
                var url = $(this).find(settings.target).attr('href');     
                
                if (typeof(url) != 'undefined' && !stop){
                    if (e.metaKey){
                        window.open(url);
                    } else {
                        window.location = url; 
                    }
                }
            });
            
            
            
        });
    };
})( jQuery );
