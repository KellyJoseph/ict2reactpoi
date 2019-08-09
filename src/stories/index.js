import React from "react";
import { storiesOf } from "@storybook/react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "../../src/components/header";
import Location from "../../src/components/locationItem";
import LocationList from "../../src/components/locationList";
import Photo from "../../src/components/photoItem";
import PhotoList from "../../src/components/photoList";
import DataStore from "../../src/datastore/stubAPI";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Button, Welcome } from "@storybook/react/demo";
import { MemoryRouter, Route } from "react-router";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("POI App/Header", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <Header />);

storiesOf("POI App/Photo", module).add("default", () => <Photo />);

storiesOf("POI App/PhotoList", module).add("default", () => <PhotoList />);

storiesOf("POI App/Location", module).add("default", () => <Location />);

storiesOf("POI App/Location List", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const locationSamples = DataStore.locations;
    return <LocationList contacts={locationSamples} />;
  });
