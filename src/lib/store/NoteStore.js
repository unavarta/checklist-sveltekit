import { v4 as uuidv4 } from "uuid";
//this creates unique IDs for our todos

import { writable } from "svelte/store"; 
// we can write as well as read from this store

import { browser } from "$app/environment"; 
// we use this to see if the code runs on the browser

const data2 = browser ? JSON.parse(window.localStorage.getItem("svelte-project-notes")) ?? [] : [];
//checks if the browser window is defined, if it is, it will get the data from the local storage, if not, it will return an empty array

export const notes = writable(data2);

// we subscribe to the todos store and we pass a function that will be called every time the todos store is updated
notes.subscribe((value) => {
  if (browser) {
    // we pass the value to the local storage but first we stringify it
    //so it is correctly formatted to be able to be stored in the local storage
    localStorage.setItem("svelte-project-notes", JSON.stringify(value));
  }
});

export const addNote = (text) => {
  notes.update((currentNotes) => {
    return [...currentNotes, { id: uuidv4(), text: ''}];
  });
};

export const deleteNote = (id) => {
  notes.update((currentNotes) => {
    return currentNotes.filter((note) => note.id !== id);
  });
};


export const editNote = (id, text) => {
    notes.update((currentNotes) => {
      return currentNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note, text
          };
        }
        return note;
      });
    });
  };

