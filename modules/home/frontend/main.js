import $ from "jquery"

class SlideShow {
  $container
  $navItems
  $sliderItem
  currentIndex
  itemCount

  constructor() {
    this.$container = $('.container')
    this.$navItems = this.$container.find('.nav-item')
    this.$sliderItem = this.$container.find('.slider-item')
    this.currentIndex = 0
    this.itemCount = this.$sliderItem.length
  }

  cycleItems() {
    let $item = this.$sliderItem.eq(this.currentIndex)
    this.$sliderItem.hide()
    $item.show()
  }

  startCycle () {
    this.currentIndex += 1
    if (this.currentIndex > this.itemCount - 1) {
      this.currentIndex = 0
    }
    this.cycleItems()
  }

  activate() {
    let autoSlide = setInterval(()=>this.startCycle.apply(this), 3000)

    $('.next').click(() => {
      this.currentIndex += 1
      if (this.currentIndex > this.itemCount - 1) {
        this.currentIndex = 0
      }
      this.cycleItems()
    })

    $('.prev').click(() => {
      this.currentIndex -= 1
      if (this.currentIndex < 0) {
        this.currentIndex = this.itemCount - 1
      }
      this.cycleItems()
    })

    $('.next, .prev').mouseover(() => {
      clearInterval(autoSlide)
    }).mouseout(() => {
      autoSlide = setInterval(()=>this.startCycle.apply(this), 3000)
    })
  }
}

let slideShow = new SlideShow()

slideShow.activate()
