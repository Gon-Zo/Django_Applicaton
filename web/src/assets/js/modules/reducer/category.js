let SETCATEGORY = 'category/setData';

export const setCategory = (data) => ({type: SETCATEGORY});


let initData = {
   category : {},
   categorys : [],
}


let categoryReducer = (state = initData , action )=>{

   switch (action.type) {

      case SETCATEGORY :
         state.category = action.data;


   }

   return state
}
