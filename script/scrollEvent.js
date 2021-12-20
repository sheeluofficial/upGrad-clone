window.onscroll = function () { myFunction() };

        var flotingBox = document.getElementById("flotingBox");
        var sticky = flotingBox.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                flotingBox.classList.add("sticky");
                flotingBox.classList.remove("relativePosition");
            } else {
                flotingBox.classList.remove("sticky");
                flotingBox.classList.add("relativePosition");
            }
        }