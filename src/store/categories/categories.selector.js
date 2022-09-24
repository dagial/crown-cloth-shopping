
export const categoriesSelector=(state)=>{
    console.log("selector fired")
    return state.categories.categories.reduce((acc,categories)=>{
        const {title,items}=categories;
        acc[title.toLowerCase()]=items;
        return acc
      },{})}