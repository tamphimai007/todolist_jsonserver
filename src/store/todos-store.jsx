import { create } from "zustand";
import { toast } from "react-toastify";
import axios from "axios";
const API = "http://localhost:8000/todos";

const todosStore = (set,get) => ({
  todos: [],
  getData: async () => {
    try {
      // code
      const resp = await axios.get(API);
      set({ todos: resp.data});
    } catch (err) {
      //err
      console.log(err.message);
      toast.error(err.message);
    }
  },
   editTodo : async(id, data)=>{
    try{
        // code
        const resp = await axios.put(API+'/'+id, data)
        console.log(resp)
        get().getData()
        toast.success(`Edit ${resp.data.title} Success`)
    }catch(err){
        //err
        console.log(err.message)
        toast.error(err.message)
    }
  },
   handleAddTodo : async (form) => {
    console.log(form);
    try {
      //code
      const resp = await axios.post(API, form);
      toast.success(`Add ${resp.data.title} Success!!!`)
      get().getData()
    } catch (err) {
      //err
      console.log(err.message);
      toast.error(err.message);
    }
  },
   deleteTodos : async (id) => {
    try {
      // code
      const resp = await axios.delete(API + "/" + id);
      toast.success(`Delete ${resp.data.title} Success`);
      get().getData();
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  }
});
const useTodoStore = create(todosStore);
export default useTodoStore;
