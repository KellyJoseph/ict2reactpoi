import React from "react";
import { storiesOf } from "@storybook/react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "../../src/components/header";
import Location from "../../src/components/locationItem";
import LocationList from "../../src/components/locationList";
import LocationForm from "../components/LocationForm";
import Photo from "../../src/components/photoItem";
import PhotoList from "../../src/components/photoList";
import PhotoForm from "../components/photoForm";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Button, Welcome } from "@storybook/react/demo";
import { MemoryRouter, Route } from "react-router";

const sampleUser = {
  _id: "5d547a1dd5f125001703a640",
  firstName: "Homer",
  lastName: "Simpson",
  email: "homer@simpson.com",
  password: "$2a$10$uqnPlgyVjBEOtcgMhn/WRO3FwW4T9gX36tTB4RqpGeB/LkCR3YQuO"
};

const users = [sampleUser, sampleUser, sampleUser];

const sampleLocation = {
  _id: "5d547a1dd5f125001703a644",
  name: "Bull Island",
  description: "Not very pretty",
  author: "5d547a1dd5f125001703a642",
  region: "East",
  latitude: "9875",
  longitude: "1234"
};

const locations = [sampleLocation, sampleLocation, sampleLocation];

const samplePhoto = {
  _id: "5d547a1ed5f125001703a647",
  title: "Bull",
  url:
    "http://res.cloudinary.com/dxdletsbp/image/upload/v1551853670/tctdudzuhwwtkfexzvlv.webp",
  public_id: "tctdudzuhwwtkfexzvlv",
  location: "Bull Island"
};

const photos = [samplePhoto, samplePhoto, samplePhoto];

storiesOf("POI App/Header", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <Header />);

storiesOf("POI App/Photo", module).add("default", () => (
  <Photo photo={samplePhoto} deletePhoto={action("clicked")} />
));

storiesOf("POI App/PhotoList", module).add("default", () => (
  <PhotoList photos={photos} deletePhoto={action("delete button pressed")} />
));

storiesOf("POI App/PhotoForm", module).add("default", () => (
  <PhotoForm addPhoto={action("add photo button pressed")} />
));

storiesOf("POI App/Location", module).add("default", () => (
  <Location
    location={sampleLocation}
    deletLocation={action("delete button pressed")}
  />
));

storiesOf("POI App/LocationForm", module).add("default", () => (
  <LocationForm addLocation={action("add Location button pressed")} />
));

storiesOf("POI App/Location List", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    return (
      <LocationList
        locations={locations}
        deleteLocation={action("delete button pressed")}
      />
    );
  });
