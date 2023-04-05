import { v4 as uuidv4 } from "uuid";
//this creates unique IDs for our todos

import { writable } from "svelte/store"; 
// we can write as well as read from this store

import { browser } from "$app/environment"; 
// we use this to see if the code runs on the browser

const data = browser ? JSON.parse(window.localStorage.getItem("svelte-project-todo")) ?? [] : [];
//checks if the browser window is defined, if it is, it will get the data from the local storage, if not, it will return an empty array

export const todos = writable(data);

// we subscribe to the todos store and we pass a function that will be called every time the todos store is updated
todos.subscribe((value) => {
  if (browser) {
    // we pass the value to the local storage but first we stringify it
    //so it is correctly formatted to be able to be stored in the local storage
    localStorage.setItem("svelte-project-todo", JSON.stringify(value));
  }
});

export const addTodo = (text) => {
  todos.update((currentTodos) => {
    return [...currentTodos, { id: uuidv4(), text: '', complete: false }];
  });
};

export const deleteTodo = (id) => {
  todos.update((currentTodos) => {
    return currentTodos.filter((todo) => todo.id !== id);
  });
};

export const toggleTodo = (id) => {
  todos.update((currentTodos) => {
    return currentTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
  });
};

export const editTodo = (id, text) => {
    todos.update((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo, text
          };
        }
        return todo;
      });
    });
  };

