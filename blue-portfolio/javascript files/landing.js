   
            //  navbar
          window.addEventListener('scroll', function(){
            var navbar=document.getElementById('navbar');
          navbar.classList.toggle('sticky',window.scrollY > 0)
         })

      
        //  parallalex Effect

        // document.addEventListener('mousemove', parallax);
        // function parallax(e){
        //   this.querySelectorAll('.layers').forEach(layer => {
        //       const speed = layer.getAttribute('data-speed')

        //       const x =(window.innerWidth - e.pageX*speed)/100
        //       const y =(window.innerHeight - e.pageY*speed)/100

        //       layer.style.transform= `translateX(${x}px) translateY(${y}px)`

        //   });
        // }

      
         

    