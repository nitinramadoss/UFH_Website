import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

/*
Installation (from https://www.npmjs.com/package/@ericz1803/react-google-calendar)
1. npm install --save react react-dom @emotion/react
2. npm install --save @ericz1803/react-google-calendar
*/


const GoogleCalendar = () => {
  const API_KEY = "AIzaSyBZDcALU31upapq3CnhnP1CSxsovPDlFks";

  //replace calendar id with one you want to test
  let calendars = [
    { calendarId: "ikchrim4ffqjqlhl72fmfkv9s8@group.calendar.google.com" }
  ];

  let styles = {
    //you can use object styles
    calendar: {
      borderWidth: "3px" //make outer edge of calendar thicker
    },

    //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
    today: css`
      /* highlight today by making the text red and giving it a red border */
      color: red;
      border: 1px solid red;
    `
  };

  return (
      <div
        style={{
          width: "90%",
          paddingTop: "50px",
          paddingBottom: "50px",
          margin: "auto",
          maxWidth: "1200px"
        }}
      >
        <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
      </div>
  );
}

export default GoogleCalendar;
