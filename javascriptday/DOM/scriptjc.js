// let colors = ['red', 'black', 'green']
      // // let box = document.getElementsByClassName('.box')
      // let size = colors.length

      // colors.forEach((e)=>{
      //     let box = document.getElementsByClassName('.box')
      //     Math.floor(Math.random()*size)
      //     e.style.colors = colors[box]
      // })

      // const col = {
      //   1: "red",
      //   2: "green",
      //   3: "yellow",
      //   4: "violet",
      //   5: "purple",
      //   6: "blue",
      // };

      // function random() {
      //   let arr = document.getElementsByClassName("box");
      //   for (const key in col) {
      //     arr[key].style.backgroundColor = col[`${Math.floor(Math.random() * key) + 1}`];
      //   }

      // }
      // setInterval(random, 1000);

      box = document.querySelectorAll(".box");
      for (let i = 0; i < box.length; i++) {
        cur_box = box[i];
        rand_bg = '#'+ Math.floor(Math.random() * 1000000 + 1);
        cur_box.style.backgroundColor = rand_bg;
        // cur_box.style.color = rand_bg
      }