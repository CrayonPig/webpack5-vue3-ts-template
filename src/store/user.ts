import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      name: 'crayonPig',
      age: 25,
      sex: '男',
    };
  },
});