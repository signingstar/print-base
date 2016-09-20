import $ from "jquery"
import { throttle, find } from "underscore"

export class NavigateSections {
  constructor($stickyElement, navSectionMap, scrollDelay = 10,  topOffset = 50) {
    this.$stickyElement = $stickyElement
    this.navSectionMap = navSectionMap
    this.scrollDelay = scrollDelay
    this.topOffset = topOffset
    this.elemSelected = false
  }

  stickyLeftNavigation() {
    let width = this.$stickyElement.width()
    let offsetTop = this.$stickyElement.offset().top
    let isFixed = false

    let stickyFunction = () => {
      let scrollTop: number, shouldBeFixed: boolean

      if (!isFixed) {
        offsetTop = this.$stickyElement.offset().top
      }

      scrollTop = $(window).scrollTop()
      shouldBeFixed = scrollTop > offsetTop - this.topOffset

      if (shouldBeFixed && !isFixed) {
        this.$stickyElement.trigger("stickElement", {width: width})
        isFixed = true
      } else if (!shouldBeFixed && isFixed) {
        this.$stickyElement.trigger("unstickElement")
        isFixed = false
      }
    }

    let throttled = throttle(stickyFunction, this.scrollDelay)
    $(window).on("scroll", throttled)
  }

  processNavSelection ($el, ev, pushState) {
    let _this = this
    if(ev) {
      ev.preventDefault()
    }

    _this.elemSelected = true

    _this.displayTargetSection($el, pushState, () => {
      _this.elemSelected = false
      _this.$stickyElement.find('li').removeClass('selected')
      $el.addClass('selected')
    })
  }

  displayTargetSection($el, pushState, callback) {
    const targetSectionName = this.navSectionMap[$el.attr('id')]
    const $targetSection = $(targetSectionName)

    if($targetSection.length === 0) {
      return
    }

    $('.sub-section').addClass('hide')
    $targetSection.removeClass('hide').addClass('show')

    if(pushState) {
      this.pushToHistory($el.attr('data-link'))
    }

    callback()
  }

  navigateTargetSection($target, callback) {
    let final = $target.offset().top - this.topOffset
    this.navigateTargetPosition(final, callback)
  }

  navigateTargetPosition(final, callback) {
    let initial = $(window).scrollTop()
    let difference = Math.abs(final - initial)
    let duration = difference / 10 + 100
    let tickInterval = 15
    let increment = Math.ceil(difference * tickInterval / duration)
    let current = initial

    let stepAnimator = () => {
      if(Math.abs(current - final) < increment) {
        current = final
      } else if(current < final) {
        current = current + increment
      } else {
        current = current - increment
      }

      window.scrollTo(0, current)

      if(current !== final) {
        setTimeout(() => stepAnimator.call(this), tickInterval)
      } else if(callback) {
        callback()
      }
    }

    stepAnimator.call(this)
  }


  setDefaultSelected(visibleElement) {
    let navId: string

    find(this.navSectionMap, (value, key)=> {
      if(value === `#${visibleElement}`) { navId = `#${key}`}
    })

    this.$stickyElement.find(navId).addClass('selected')
  }

  activate(visibleElement) {
    // this.setDefaultSelected(visibleElement)
    this.stickyLeftNavigation()

    // let _that = this
    // this.$stickyElement.find('li').on("click", function(ev: Event) {
    //   _that.processNavSelection($(this), ev, true)
    // })

    // let throttleUpdateNavSelection = throttle(this.updateNavSelection, this.scrollDelay)
    // $(window).on("resize scroll", throttleUpdateNavSelection)

    // history.pushState({url: location.href}, '', location.href)

    // window.onpopstate = (e) => {
    //   this.popFromHistory(e)
    // }
  }
}
