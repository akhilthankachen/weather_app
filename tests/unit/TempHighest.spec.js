import { shallowMount, mount } from "@vue/test-utils"
import TempHighest from "@/components/TempHighest"

const mockStore = {
    getters: {getHighestTemp: {temp: 1, time: "7:00 AM"}}
}

const wrapper = mount(TempHighest, {
    global: {
        mocks: {
            $store: mockStore
        }
    }
})

describe("TempHighest", ()=>{
    it("Check if #tempHigh exists", ()=>{
        expect(wrapper.find("#tempHigh").exists()).toBe(true)
    })
    it("Check if #tempHighTime exists", ()=>{
        expect(wrapper.find("#tempHighTime").exists()).toBe(true)
    })
    it("Check if #highIndicator exists", ()=>{
        expect(wrapper.find("#highIndicator").exists()).toBe(true)
    })
    it("Check if getters updating temp and time", ()=>{
        expect(wrapper.find("#tempHigh").text()).toBe(mockStore.getters.getHighestTemp.temp + "°C")
        expect(wrapper.find("#tempHighTime").text()).toBe("at "+mockStore.getters.getHighestTemp.time)
    })
})