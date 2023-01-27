import { LogIn } from '../pages/LogIn/LogIn';
import { render, fireEvent } from '@testing-library/react';
import UserService from "../Services/UserService"
import { MemoryRouter } from 'react-router-dom';
import swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { wait } from '@testing-library/user-event/dist/utils';
import { debug } from 'console';
jest.mock("../Services/UserService");
jest.mock("sweetalert2");
jest.mock("sweetalert2-react-content");

describe('<LogIn />', () => {

    test("render component", () => {
        const { getByPlaceholderText, getByText } = render(
            <MemoryRouter>
                <LogIn/>
            </MemoryRouter>
            );

            const loginButton = getByText('Press to Log In')
            expect(loginButton).toBeInTheDocument();

            const emailInput = getByPlaceholderText('Write your email');
            expect(emailInput).toBeInTheDocument();

            const passwordInput = getByPlaceholderText('Write your password');
            expect(passwordInput).toBeInTheDocument();
        
    })

    // test("form makes an api call with proper params", async () => {
    //     const getAllSpy = jest.spyOn(UserService, 'getAll').mockImplementation(() => Promise.resolve({ok : true}));
        
    //     const { getByPlaceholderText, getByText } = render(
    //         <MemoryRouter>
    //             <LogIn/>
    //         </MemoryRouter>
    //         );

    //         const loginButton = getByText('Press to Log In')
    //         const emailInput = getByPlaceholderText('Write your email')
    //         const passwordInput = getByPlaceholderText('Write your password');
    //         fireEvent.change(emailInput,{'target' : { 'value' : 'administrator@gmail.com'}})
    //         fireEvent.change(passwordInput,{'target' : { 'value' : 'Yuho54zx1'}})
    //         fireEvent.click(loginButton);
    //         debug(loginButton);
    //         expect(getAllSpy).toHaveBeenCalledTimes(1);
    //         expect(getAllSpy).toHaveBeenCalledWith('administrator@gmail.com',"Yuho54zx1");
    //         await wait(() => null)
    //         afterEach(() => {
    //             getAllSpy.mockRestore();
    //         });
        
    // })
});