export interface SearchController {
   getUser: (username: string) => void;
}

const searchController = (): SearchController => {
   const getUser = async (username: string) => {
      console.log(username);
   };
   return {
      getUser,
   };
};

export { searchController };
