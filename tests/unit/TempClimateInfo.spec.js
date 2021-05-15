import { shallowMount, mount } from "@vue/test-utils"
import TempClimateInfo from "@/components/TempClimateInfo"

const mockStore = {
    getters: {getCurrentTemp: 23, getCurrentWeather: "mostly cloudy"}
}

const wrapper = mount(TempClimateInfo, {
    global: {
        mocks: {
            $store: mockStore
        }
    }
})

describe("Searchbar", () => {
    it("Check if an #temp exits", ()=>{
        // check whether #temp exits
        expect(wrapper.find('#temp').exists()).toBe(true)
    })

    it("Check if an #weather exits", ()=>{
        // check whether #temp exits
        expect(wrapper.find('#weather').exists()).toBe(true)
    })

    it("Check if an #temp renders temp from store", ()=>{
        // check whether #temp exits
        expect(wrapper.find('#temp').text()).toBe(mockStore.getters.getCurrentTemp + "°C")
    })

    it("Check if an #weather renders weather from store", ()=>{
        // check whether #temp exits
        expect(wrapper.find('#weather').text()).toBe(mockStore.getters.getCurrentWeather)
    })
})