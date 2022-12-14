import { fetchedLanguages } from "./api/api.js"
import SearchInput from "./components/SearchInput.js"
import SelectedLanguages from "./components/SelectedLanguages.js"
import Suggestion from "./components/Suggeston.js"

export default function App({ $target }) {
    this.state = {
        fetchedLanguages: [],
        selectedLanguages: []
    }

    this.setState = (nextState) => {
        // todo
        this.state = {
            ...this.state,
            ...nextState
        }
        suggestion.setState({
            selectedIndex: 0,
            items: this.state.fetchedLanguages
        })  
        selectedLanguages.setState(this.state.selectedLanguages)
    }

    const selectedLanguages = new SelectedLanguages({$target, initialState: []})

    const searchInput = new SearchInput({
        $target,
        initialState: '',
        onChange: async (keyword) => {
            console.log('onchange', keyword)
            if (keyword.length === 0) {
                this.setState({
                    fetchedLanguages: []
                })
            } else {
                const languages = await fetchedLanguages(keyword)
                this.setState({
                    fetchedLanguages: languages.slice(0,10).map(el => el.title)
                })
            }
        }
    })

    const suggestion = new Suggestion({
        $target,
        initialState: {
            cursor: 0,
            items: []
        },
        onSelect: language => {
            alert(language)

            const nextSelectedLanguages = [...this.state.selectedLanguages]
            
            const index = nextSelectedLanguages.findIndex((selectedLanguage) => selectedLanguage === language)

            if (index > -1) {
                nextSelectedLanguages.splice(index, 1) // index위치 언어 삭제
            }
            nextSelectedLanguages.push(language)

            this.setState({
                ...this.state,
                selectedLanguages: nextSelectedLanguages
            })
        }
    })
}

