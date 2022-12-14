export default function SearchInput({ $target, initialState, onChange}) {
    console.log("SearchInput")
    this.$element = document.createElement('form')
    this.$element.className = "SearchInput"
    this.state = initialState

    $target.appendChild(this.$element)

    this.render = () => {
        this.$element.innerHTML=`
        <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}" />
        `
    }
    this.render()

    // event handler
    this.$element.addEventListener('keyup', (e) => {
        const actionIgnoreKeys = ['Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowLight']
        if(!actionIgnoreKeys.includes(e.key)) {
            onChange(e.target.value)
        }
    })

    this.$element.addEventListener('submit', (e) => {
        e.preventDefault()
    })
}