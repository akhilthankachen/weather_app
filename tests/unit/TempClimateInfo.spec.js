import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import TempClimateInfo from "@components/TempClimateInfo"

describe("TempClimateInfo", () => {
    it("Check if an input box exists with id search", ()=>{
        const wrapper = mount(TempClimateInfo)
        // check weather an input box exists with id search
        expect(wrapper.find("#search")).toBe(true)
    })
})