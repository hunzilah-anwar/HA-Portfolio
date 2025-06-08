        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        let navIcon = document.getElementsByClassName("nav-icon")
        let navBar = document.getElementsByClassName("nav-links")
        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link")
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link")
            document.getElementById(tabname).classList.add("active-tab")
        }
        
        var sidemenu = document.getElementById("sideMenu");

        function openMenu(){
            sidemenu.style.right = '0';
        }
        function closeMenu(){
            sidemenu.style.right = '-200px'
        }