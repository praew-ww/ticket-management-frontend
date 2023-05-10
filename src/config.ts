const apiURL = import.meta.env.VITE_API_ENDPOINT
export const apiEndpoint = {
    tickets: {
      tickets: `${apiURL}/ticket`, 
      update: `${apiURL}/update`,
      create: `${apiURL}/create`
    }
}