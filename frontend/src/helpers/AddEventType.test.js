
import { render, fireEvent } from '@testing-library/react';
import EventTypeService from '../Services/EventTypeService';
import { MemoryRouter } from 'react-router-dom';
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { wait } from '@testing-library/user-event/dist/utils';
import { debug } from 'console';
import AddEventType from '../pages/AddEventType/AddEventType';
jest.mock("../Services/UserService");
jest.mock("sweetalert2");
jest.mock("sweetalert2-react-content");

describe('<AddEventType />', () => {

    

    test("form makes an api call with proper params", async () => {
        // const getAllSpy = jest.spyOn(EventTypeService, 'getAll').mockImplementation(() => Promise.resolve({ok : true}));
        const Createmo = jest.spyOn(EventTypeService, 'create').mockImplementation(() => Promise.resolve({data: {id: 1, name: 'Croacia'}}));
        
        const { getByPlaceholderText, getByText } = render(
            <MemoryRouter>
                <AddEventType/>
            </MemoryRouter>
            );

            const loginButton = getByText('Createff')
            const passwordInput = getByPlaceholderText('Write your new Event Type');
            fireEvent.change(passwordInput,{'target' : { 'value' : 'dgdsgs'}})
            fireEvent.submit(loginButton);
            expect(Createmo).toHaveBeenCalledTimes(1);
            expect(Createmo).toHaveBeenCalledWith({"name": "Croacia"});
            await wait(() => null)
            // afterEach(() => {
            //     getAllSpy.mockRestore();
            //     Createmo.mockRestore();
            // });
        
    })
});