import { writable } from "svelte/store"

export const someCards = writable([])

const fetchSome = async (num) => {
    const url = `https://rws-cards-api.herokuapp.com/api/v1/cardsrandom?n=${num}`
    const res = await fetch(url)
    const data = await res.json
    const loadedCards = data.cards.map((data, index) => {
        return {
            id: index + 1,
            name: data.name,
            short: data.name_short,
            type: data.value,
            upright: data.meaning_up,
            reverse: data.meaning_rev,
            desc: data.desc,
            img: `../static/deck${data.name_short}.jpg`
        }
    })
    someCards.set(loadedCards)
}
fetchSome()