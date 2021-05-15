import { shallowMount, mount } from "@vue/test-utils"
import Vuex from 'vuex'
import Searchbar from "@/components/Searchbar"

const mockStore = {
    state: {location: 'hello'},
    dispatch: jest.fn(),
    commit: jest.fn(),
    getters: {getSearchText: "hello"}
}
const wrapper = mount(Searchbar, {
    global: {
        mocks: {
            $store: mockStore
        }
    }

})

describe("Searchbar", () => {

    it("Check if an input box exists with id search_input", ()=>{
        // check weather an input box exists with id search
        expect(wrapper.find('input').attributes().id).toBe('search_input')
        // ensure placeholder to be Location
        expect(wrapper.find('#search_input').attributes().placeholder).toBe("Location?")
    })

    it("Check if an button exists with id search_button", ()=>{
        // check weather an input box exists with id search
        expect(wrapper.find('button').attributes().id).toBe('search_button')
    })
    
    it("Search button click should invoke a method", ()=>{
        // trigger click 
        wrapper.find('#search_button').trigger('click')
        // check weather testInvoke called
        expect(mockStore.dispatch).toHaveBeenCalledTimes(1)
    })

    it("Input state bind", ()=>{   
        // input 
        const input = wrapper.find('#search_input')
        expect(input.element.value).toBe("hello")
        input.trigger('keydown', {
            key: 'a'
        })
        // check weather testInvoke called
        expect(mockStore.dispatch).toHaveBeenCalledTimes(1)
    })


})