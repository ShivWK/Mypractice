        global.mine = "Shivendra";
        // console.log(window.mine);

        console.log(global.mine);

        global.mineValue = {
            name : "Shivendra"
        }

        console.log(mineValue.name);
        // console.log(window.mineValue.name);
        console.log(globalThis.mineValue.name)