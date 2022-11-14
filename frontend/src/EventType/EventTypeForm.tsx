import axios from "axios";
import { IEventType } from "../types/eventTypeData"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const EventTypeForm = (props: { updateEventTypeList: (EventType: IEventType) => void; }) => {
  const [name, setName] = useState<string>('')

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async () => {
    const EventTypeData : IEventType = {name}

    try {
      const response = await axios
        .post('http://localhost:3000/event_types', {EventType: EventTypeData})

        props.updateEventTypeList(response.data)
 
    } catch(error: any) {
      console.log(error)
    } 
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            {...register("name", {required: true})}
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