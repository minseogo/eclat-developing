function visual_motion(a, b, c, d){
        
    const visual = document.querySelector(a);
    const bg = document.querySelector(b);
    const contents = document.querySelector(c);
    const nextContents = document.querySelector(d);
    
    if ( visual != "undefined" ) {
        imagesLoaded( visual, { background: bg }, function() {
            visual.classList.add('brandstory-visual--bg-loaded');
        });
        
        // bg zoom in/out
        gsap.fromTo(bg,{
            scale: 1,
        },{
            scale: 1.1,
            ease: "none",
            scrollTrigger : {
                trigger : visual,
                start: '10% 0%',
                end: '200% 50%',
                scrub : 1
            }
        });
        
        // txt fade in/out (visual)
        gsap.fromTo(contents,{
            opacity: 1,
        },{
            opacity: 0,
            ease: "none",
            scrollTrigger : {
                trigger : contents,
                start: '20% 0%',
                end: '100% 80%',
                scrub : 1
            }
        });
        
        // txt fade in/out (first section)
        gsap.fromTo(nextContents,{
            opacity: 0,
        },{
            opacity: 1,
            ease: "none",
            scrollTrigger : {
                trigger : nextContents,
                start: '0% 80%',
                end: '100% 75%',
                scrub : 1
            }
        });
    }
    
   
    
}