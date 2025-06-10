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


        const scriptURL = 'https://script.google.com/macros/s/AKfycbyD53Red142gANRRvdgqwUFIWj6TpDBB2dwiK_LPzg5BKAj6971afwR7PnaCmHWFOV7Zw/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById('msg')

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = 'Message Sent Successfully !'
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })