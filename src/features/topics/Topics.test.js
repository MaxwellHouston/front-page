import { shallow } from "enzyme";
import { store } from "../../app/store";
import React from "react";
import { Provider } from "react-redux";
import { Topics } from './Topics';

describe('Topics Component', () => {

    let testStore;

    beforeEach(() => {
        testStore = store;
    })

    const TopicsWrapper = () => {
        return (
            <Provider store={testStore}>
                <Topics />
            </Provider>
        )
    }

    it('Renders the title', () => {
        const wrapper = shallow(<TopicsWrapper />);
        const title = wrapper.find('h2');
        expect(title).to.have.lengthOf(1);
    })
    
})