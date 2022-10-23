const MAX_DISPLAY_COUNT = 5
export default function SelectedLanguages({
    $target,
    initialState
}) {
    this.$element = document.createElement('div')
    this.$element.className = 'SelectedLanguage'
    this.state = initialState

    $target.appendChild(this.$element)

    this.setState = (nextState) => {
        this.state = nextState

        if (this.state.length > 5) {
            const startPosition = this.state.length - MAX_DISPLAY_COUNT
            console.log(startPosition, MAX_DISPLAY_COUNT + startPosition)
            this.state = this.state.slice(startPosition, MAX_DISPLAY_COUNT + startPosition)
        }
            
        
        console.log('SelectedLangugae setState', this.state)

        this.render()
    }

    this.render = () => {
        this.$element.innerHTML = `
            <ul>
            ${this.state.map((item) => `
                <li>${item}</li>
            `).join('')}
            </ul>
        `
    }

    this.render()
}