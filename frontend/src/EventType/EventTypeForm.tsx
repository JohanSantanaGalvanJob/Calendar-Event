import axios from "axios";
import { IEventType } from "../types/eventTypeData"
import { useForm } from "react-hook-form";
import { useState } from "react";
import {getOneEventType,getAllEventType,createEventType,updateEventType,deleteEventType} from '../Crud/EventTypeMethods';

export const EventTypeForm = (props: { updateEventTypeList: (EventType: IEventType) => void, dataChanged: any }) => {
  const [name, setName] = useState<string>('')

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async () => {
    const EventTypeData: IEventType = { name }

    try {

      createEventType(name);

    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input type="text" placeholder="Insert the name of Event Type here"></input>

        {/* <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            {...register("name", { required: true })}
            type="text"
            name="name"
            onChange={e => setName(e.target.value)}
          />
          {errors?.content?.type === "required" && <p>This field is required</p>}
        </Form.Group><br /> */}

        <button className="submit-button" type="submit">Submit</button>
      </form>
    </>
  )
}