import { ref } from 'vue';
import { defineStore } from 'pinia';


export const useCounterSetupStore = defineStore('counterSetup', () => {

    const count       = ref<number>(0);
    

    const incrementBy = ( value: number ) => {
        count.value += value;
        
    }

    const reset = ()=>{
        count.value=0;
    }

    return {
        // State properties
        count, 
        
        // Getters
     
        // Actions
        incrementBy,
        increment: () => incrementBy(1),
        reset,
    }
});