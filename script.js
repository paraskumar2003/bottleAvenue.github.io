    let pad = document.querySelector(".main-container");
    pad.addEventListener("touchstart", handleTouchStart);
    pad.addEventListener("touchend", handleTouchEnd);

    let startX, startY, endX, endY, moved;

    pad.addEventListener("mousedown", (e) => {
      e.preventDefault();
      moved = false;
      startX = e.clientX;
      startY = e.clientY;
    });
    pad.addEventListener("mousemove", (e) => {
      e.preventDefault();
      moved = true;
    });
    pad.addEventListener("mouseup", (e) => {
      e.preventDefault();
      endX = e.clientX;
      endY = e.clientY;
      if (startX && startY && moved) {
        if (endX - startX > endY - startY) {
          let heroText = document.querySelector(".content h1");
          let content = document.querySelector(".content");
          let bottle = document.querySelector(".bottle-img");
          let mainContainer = document.querySelector(".main-container");
          let bottle1 = document.querySelector(".bottle-1");
          let bottle2 = document.querySelector(".bottle-2");

          content.style.animation = `fadeup 0.5s linear`;
          content.style.animationIterationCount = `1`;
          setTimeout(() => {
            bottle.style.animation = `moveup 0.5s linear`;
            bottle.setAttribute("src", "./Images/bottle.png");
            bottle.style.animationIterationCount = `1`;
          }, 100);

          setTimeout(() => {
            content.style.display = `none`;
            bottle.style.top = `20%`;
          }, 350);

          setTimeout(() => {
            bottle.style.animation = `bounceup 0.5s ease`;
            // mainContainer.style.opacity = `0`;
            mainContainer.style.animation = `changetobg2 0.5s ease`;
            setTimeout(() => {
            bottle.setAttribute("src", "./Images/bottle-open.png");
              bottle.style.top = `40%`;
              mainContainer.style.background = `url('./Images/bg-img2.png') #D91567`;
              content.innerHTML = `<h1>Celebrate the World Cup with a Kombucha!</h1>`;
              content.style.animation = `none`;
              content.style.display = `flex`;
              content.style.position = `absolute`;
              content.style.top = `10%`;
              content.style.opacity = `1`;

              setTimeout(() => {
                content.innerHTML = `<h1>Get 20% off everytime your favorite team wins any WC knock-out matches!</h1>
            <div class="copy-container">
      <div class="code">PELE-10</div>
      <img src="./Images/copy.png" alt="copy" class="copy-code" />
    </div>
            `;
                bottle.style.top = `45%`;
                bottle.setAttribute("src", "./Images/bottle.png");
                bottle1.style.opacity = `1`;
                bottle2.style.opacity = `1`;
                setTimeout(() => {
                  let copy_btn = document.querySelector(".copy-code");
                  let code = document.querySelector(".code").textContent;
                  copy_btn.addEventListener("click", () => {
                    navigator.clipboard.writeText(code);
                  });
                });
              }, 800);
            }, 350);
          }, 1000);
        }
      }
    });

    function handleTouchStart(e) {
      e.preventDefault();
      let landingTouch = e.changedTouches[0];
      startX = landingTouch.pageX;
      startY = landingTouch.pageY;
    }

    function handleTouchEnd(e) {
      e.preventDefault();
      let landingTouch = e.changedTouches[0];
      endX = landingTouch.pageX;
      endY = landingTouch.pageY;
      if (endX - startX > endY - startY) {
        let heroText = document.querySelector(".content h1");
        let content = document.querySelector(".content");
        let bottle = document.querySelector(".bottle-img");
        let mainContainer = document.querySelector(".main-container");

        content.style.animation = `fadeup 0.5s linear`;
        content.style.animationIterationCount = `1`;
        setTimeout(() => {
          bottle.style.animation = `moveup 0.5s linear`;
          bottle.style.animationIterationCount = `1`;
        });

        setTimeout(() => {
          content.style.display = `none`;
          bottle.style.top = `20%`;
        }, 350);

        setTimeout(() => {
          bottle.style.animation = `bounceup 0.5s ease`;
          // mainContainer.style.opacity = `0`;
          mainContainer.style.animation = `changetobg2 0.5s ease`;
          setTimeout(() => {
            bottle.style.top = `40%`;
            mainContainer.style.background = `url('./Images/bg-img2.png') #D91567`;
            content.innerHTML = `<h1>Celebrate the World Cup with a Kombucha!</h1>`;
            content.style.animation = `none`;
            content.style.display = `flex`;
            content.style.position = `absolute`;
            content.style.top = `10%`;
            content.style.opacity = `1`;

            setTimeout(() => {
              content.innerHTML = `<h1>Get 20% off everytime your favorite team wins any WC knock-out matches!</h1>
            <div class="copy-container">
      <div class="code">PELE-10</div>
      <img src="./Images/copy.png" alt="copy" class="copy-code" />
    </div>
            `;
              bottle.style.top = `45%`;
              setTimeout(() => {
                let copy_btn = document.querySelector(".copy-code");
                let code = document.querySelector(".code").textContent;
                copy_btn.addEventListener("click", () => {
                  navigator.clipboard.writeText(code);
                });
              });
            }, 800);
          }, 350);
        }, 1000);
      }
    }