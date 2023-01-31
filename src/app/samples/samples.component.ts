import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {

  flag = 1;

  constructor() { }

  ngOnInit(): void {
    this.scrollToTop();
    this.Resume_sample();
  }

  changeImage(img1, img2) {
    if (this.flag) {
      img1.style.zIndex = "0";
      img2.style.zIndex = "1";
      this.flag = 0
    }
    else {
      img1.style.zIndex = "1";
      img2.style.zIndex = "0";
      this.flag = 1;
    }
  }

  Resume_sample() {
    let list = document.querySelectorAll(".list");
    let itemBox = document.querySelectorAll(".itembox");
    let boxFancy = document.querySelectorAll(".fancybox");

    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("click", function () {
        for (let j = 0; j < list.length; j++) {
          list[j].classList.remove("active");
        }
        this.classList.add("active");

        let dataFilter = this.getAttribute("data-filter");

        for (let k = 0; k < itemBox.length; k++) {
          itemBox[k].classList.remove("active");
          itemBox[k].classList.add("hide");

          if (
            itemBox[k].getAttribute("data-item") == dataFilter ||
            dataFilter == "all"
          ) {
            itemBox[k].classList.remove("hide");
            itemBox[k].classList.add("active");
          }
        }
        for (let m = 0; m < boxFancy.length; m++) {
          boxFancy[m].classList.remove("active");
          this.Fancybox.bind("[data-fancybox].active", {
            groupAll: false
          });
          if (
            boxFancy[m].getAttribute("data-item") == dataFilter ||
            dataFilter == "all"
          ) {
            boxFancy[m].classList.add("active");
            this.Fancybox.bind("[data-fancybox].active", {
              groupAll: true
            });
          }
        }
      });
    }
  }
  scrollToTop()
  {
    window.scrollTo(0,0);
  }
}
