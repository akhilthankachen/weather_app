import { shallowMount, mount } from "@vue/test-utils"
import TempLowest from "@/components/TempLowest"

const mockStore = {
    getters: {getLowestTemp: {temp: 1, time: "7:00 AM"}}
}

const wrapper = mount(TempLowest, {
    global: {
        mocks: {
            $store: mockStore
        }
    }
})

describe("TempLowest", ()=>{
    it("Check if #tempLow exists", ()=>{
        expect(wrapper.find("#tempLow").exists()).toBe(true)
    })
    it("Check if #tempLowTime exists", ()=>{
        expect(wrapper.find("#tempLowTime").exists()).toBe(true)
    })
    it("Check if #lowIndicator exists", ()=>{
        expect(wrapper.find("#lowIndicator").exists()).toBe(true)
    })
    it("Check if getters updating temp and time", ()=>{
        expect(wrapper.find("#tempLow").text()).toBe(mockStore.getters.getLowestTemp.temp + "°C")
        expect(wrapper.find("#tempLowTime").text()).toBe("at "+mockStore.getters.getLowestTemp.time)
    })
})