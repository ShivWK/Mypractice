"use strict"

        let obj = {
            name: "Shivendra",
            show() {
                console.log(this);
            }
        }

        const fn = obj.show;
        fn();

        setTimeout(obj.show, 0)