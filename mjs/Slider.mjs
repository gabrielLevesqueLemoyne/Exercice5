export class Slider {
    constructor(elmMonSlider, config_slider){
        this.elmMonSlider = elmMonSlider;
        this.list_slide = config_slider.list_slide;
        console.log('slider')

    }

    creerSlider() {

        console.log(this.elmMonSlider.tagName)
        console.log(this.list_slide)
        let elmSlider = document.createElement('div')
        elmSlider.classList.add('slider')
        let elmSlides = document.createElement('div')
        elmSlides.classList.add('slides')
        let k=1
        for (let unSlide of this.list_slide){
            let elmSlide = document.createElement('div')
            let imgSlide = document.createElement('img')
            let textSlide = document.createElement('p')
            elmSlide.id = 'slides-' + k
            imgSlide.src = unSlide.img
            textSlide.innerHTML = unSlide.titre
            textSlide.className = 'textSlide'
            k++
            elmSlides.appendChild(elmSlide)
            elmSlide.appendChild(imgSlide)
            elmSlide.appendChild(textSlide)
        }
        elmSlider.appendChild(elmSlides)
        this.elmMonSlider.appendChild(elmSlider)

    }


}