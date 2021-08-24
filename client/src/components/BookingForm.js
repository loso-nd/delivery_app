import React, { useState } from 'react';
import {Button, Input, FormField, Label} from "../styles";


//Form handles POST and adding the itme.
function BookingForm({ items, setItems }) {
  /*
  How to make this a controlled form:
  useState hooks to keep track of input values
  */
  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [time, setTime] = useState("")
  const [status, setStatus] = useState("")
  const [speciality, setSpeciality] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState(false);

  //let history = useHistory();

  function handleCategoryChange(event) {
    setTime(event.target.value);
    setStatus(event.target.value);
    setSpeciality(event.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const booking = {
      pickup,
      destination,
      time,
      status,
      speciality
    }
    // write out the approach in psuedocode first, then implement
    // send a POST request via fetch that includes headers & body)
    // body should contain form data that matches item_params parameters in ItemsController
    // parse the JSON response and set it to state (use spread and add it to the end of items)
    // add a redirect to the home page after it works
    const res = await fetch('http://localhost:3001/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ booking })
    }) 
    if (res.ok) {
      const newItem = await res.json()
      setItems([...items, newItem]) // items.concat(newItem)
    } else {
      const error = await res.json()
      setErrors(error.message)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormField>
            <Label htmlFor="pickup"> Pickup</Label>
            <Input
                type="text"
                placeholder="Pickup"
                value={pickup}
                name="pickup"  
                onChange={(e) => setPickup(e.target.value)} 
            ></Input>
        </FormField>
        <FormField>
            <Label htmlFor="destination">Destination</Label>
            <Input
                type="text"
                placeholder="Destination"
                value={destination}
                name="destination"  
                onChange={(e) => setDestination(e.target.value)} 
            ></Input>
        </FormField>
        <FormField>
            <Label htmlFor="time">Time</Label>
            <select           
              name="time"
              value={time}
              onChange={handleCategoryChange}>
              <option value="6:00">6:00 a.m</option>
              <option value="9:00">9:00 a.m</option>
              <option value="11:00">11:00 a.m</option>
              <option value="1:00">1:00 p.m</option>
              <option value="3:00">3:00 p.m</option>
              <option value="5:00">5:00 p.m</option>
              <option value="7:00">7:00 p.m</option>
            </select>
        </FormField>
        <FormField>
            <Label htmlFor="status">Ship Status</Label>
            <select 
              name="status"
              value={status}
              onChange={handleCategoryChange}>
              <option value=""></option>
              <option value="standard">Standard</option>
              <option value="3-day">5-Day</option>
              <option value="rush">Rush 3-day</option>
            </select>
        </FormField>
        <FormField>
            <Label htmlFor="">Speciality</Label>
            <select
              name="speciality"
              value={speciality}
              onChange={handleCategoryChange}>
              <option value=""></option>
              <option value="Catering">Catering</option>
              <option value="Automobile">Automobile</option>
              <option value="Plants">Plants</option>
              <option value="Fragile">Frgile Items</option>
              <option value="Cross Country">Cross Country</option>

            </select>
        </FormField>
        <FormField>
            <Button variant="outline" color="secondary" type="submit">
                {isLoading ? "Loading..." : "Book Now"}
            </Button>
        </FormField>
          {errors ? errors.map(error => <div key={error}>{error}</div>):null}
      </form>
    </>
  );
}

export default BookingForm;