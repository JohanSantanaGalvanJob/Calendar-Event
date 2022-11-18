import { useForm } from "react-hook-form";
import { useState } from "react";
import { IUser } from "../../types/userData";
import { createUser } from "../../Crud/UserMethods";

export const SignUpForm = (props: { updateEventTypeList: (User: IUser) => void, dataChanged: any }) => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [first_name, setFirstName] = useState<string>('')
    const [last_name, setLastName] = useState<string>('')
    const [date_birth, setDateBirth] = useState<Date>('')

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async () => {
        const EventTypeData: IUser = { email,password,first_name,last_name,date_birth }

        try {

            createUser(email,password,first_name,last_name,date_birth);

        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <>
          <Form onSubmit={handleSubmit(onSubmit)}>
    
            <Form.Group>
              <Form.Label>Content</Form.Label>
              <Form.Control
                {...register("name", { required: true })}
                type="text"
                name="name"
                onChange={e => setName(e.target.value)}
              />
              {errors?.content?.type === "required" && <p>This field is required</p>}
            </Form.Group><br />
    
            <Button variant="primary" type="submit">
              Submit
            </Button><hr />
          </Form>
        </>
      )

}