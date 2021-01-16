 // When the user scrolls down 20px from the top of the document, slide down the navbar
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.querySelector("#header").classList.add("scrollHeader");
                document.querySelector("#header").classList.remove("header");
                document.querySelector("#cim").classList.add("cimScroll");
                document.querySelector("#cim").classList.remove("cim");
                document.querySelector(".nav-link1").classList.add("scroll-nav-link");
                document.querySelector(".nav-link1").classList.remove("nav-link");
                document.querySelector(".nav-link2").classList.add("scroll-nav-link");
                document.querySelector(".nav-link2").classList.remove("nav-link");
                document.querySelector(".nav-link3").classList.add("scroll-nav-link");
                document.querySelector(".nav-link3").classList.remove("nav-link");

            } else {
                document.querySelector("#header").classList.add("header");
                document.querySelector("#header").classList.remove("scrollHeader");
                document.querySelector("#cim").classList.remove("cimScroll");
                document.querySelector("#cim").classList.add("cim");
                document.querySelector(".nav-link1").classList.add("nav-link");
                document.querySelector(".nav-link1").classList.remove("scroll-nav-link");
                document.querySelector(".nav-link2").classList.add("nav-link");
                document.querySelector(".nav-link2").classList.remove("scroll-nav-link");
                document.querySelector(".nav-link3").classList.add("nav-link");
                document.querySelector(".nav-link3").classList.remove("scroll-nav-link");
            }
        }